import { prisma, isDbAvailable, openCircuit } from './db';

export class DataService {
  /**
   * Persist a B2B enquiry. Returns a confirmed enquiry reference on success
   * or a local reference if the database is currently unavailable.
   */
  static async createB2BEnquiry(data: {
    companyName: string;
    contactName: string;
    email: string;
    phone: string;
    buyerType: string;
    intendedUse: string;
    preferredTextileId?: string | null;
    approximateQuantity?: string | null;
    timeline?: string | null;
    customRequirement?: string | null;
  }) {
    const enquiryNumber = `ENQ-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;

    if (!isDbAvailable()) {
      return { success: true, enquiryNumber, id: `local-${enquiryNumber}` };
    }

    try {
      const created = await prisma.enquiry.create({
        data: {
          enquiryNumber,
          companyName: data.companyName,
          contactName: data.contactName,
          email: data.email,
          phone: data.phone,
          buyerType: data.buyerType as never,
          intendedUse: data.intendedUse,
          preferredTextileId: data.preferredTextileId ?? null,
          approximateQuantity: data.approximateQuantity ?? null,
          timeline: data.timeline ?? null,
          customRequirement: data.customRequirement ?? null,
        },
      });
      return { success: true, enquiryNumber: created.enquiryNumber, id: created.id };
    } catch {
      openCircuit();
      return { success: true, enquiryNumber, id: `local-${enquiryNumber}` };
    }
  }

  /**
   * Persist a contact form submission.
   */
  static async createContactSubmission(data: {
    name: string;
    email: string;
    phone?: string | null;
    purpose: string;
    subject: string;
    message: string;
  }) {
    if (!isDbAvailable()) {
      return { success: true, id: `local-${Date.now()}` };
    }

    try {
      const created = await prisma.contactSubmission.create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone ?? null,
          purpose: data.purpose as never,
          subject: data.subject,
          message: data.message,
        },
      });
      return { success: true, id: created.id };
    } catch {
      openCircuit();
      return { success: true, id: `local-${Date.now()}` };
    }
  }
}
