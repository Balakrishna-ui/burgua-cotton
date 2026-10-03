import { prisma, isDbAvailable, openCircuit } from './db';

export type CreateB2BEnquiryResult =
  | { success: true; enquiryNumber: string; id: string }
  | { success: false; error: 'DATABASE_UNAVAILABLE' };

export type CreateContactSubmissionResult =
  | { success: true; id: string }
  | { success: false; error: 'DATABASE_UNAVAILABLE' };

export class DataService {
  /**
   * Persist a B2B enquiry to PostgreSQL. Returns confirmed enquiry metadata on success,
   * or a failure result if the database is unreachable or the write fails.
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
  }): Promise<CreateB2BEnquiryResult> {
    if (!isDbAvailable()) {
      return { success: false, error: 'DATABASE_UNAVAILABLE' };
    }

    const enquiryNumber = `ENQ-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;

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
    } catch (error) {
      console.error('[DataService.createB2BEnquiry] Database write failed:', error);
      openCircuit();
      return { success: false, error: 'DATABASE_UNAVAILABLE' };
    }
  }

  /**
   * Persist a contact form submission to PostgreSQL. Returns confirmed record ID on success,
   * or a failure result if the database is unreachable or the write fails.
   */
  static async createContactSubmission(data: {
    name: string;
    email: string;
    phone?: string | null;
    purpose: string;
    subject: string;
    message: string;
  }): Promise<CreateContactSubmissionResult> {
    if (!isDbAvailable()) {
      return { success: false, error: 'DATABASE_UNAVAILABLE' };
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
    } catch (error) {
      console.error('[DataService.createContactSubmission] Database write failed:', error);
      openCircuit();
      return { success: false, error: 'DATABASE_UNAVAILABLE' };
    }
  }
}
