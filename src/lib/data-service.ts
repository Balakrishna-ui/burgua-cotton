import { prisma, isDbAvailable, openCircuit } from './db';
import { VERIFIED_TEXTILES, VERIFIED_JOURNAL_ARTICLES, VerifiedTextile, VerifiedJournalArticle } from './seed-data';
import { CreateOrderInput } from './validations';

// ─── Prisma → Domain Mappers ──────────────────────────────────────────────────

// Accepts the raw Prisma textile record (with relations) and maps it to the
// domain VerifiedTextile shape. We avoid re-declaring the parameter type
// manually to prevent drift from the generated Prisma types.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapTextileRecord(t: any): VerifiedTextile {
  return {
    id: t.id,
    code: t.code,
    name: t.name,
    slug: t.slug,
    shortDescription: t.shortDescription,
    materialStory: t.materialStory,
    yarnCount: t.yarnCount ?? '',
    weave: t.weave ?? '',
    width: t.width ?? '',
    gsm: t.gsm ?? undefined,
    finish: t.finish ?? '',
    suggestedApplications: t.suggestedApplications ?? '',
    inStock: t.inStock,
    leadTime: t.leadTime ?? '',
    b2bMoq: t.b2bMoq ?? '',
    basePrice: t.basePrice ? Number(t.basePrice) : undefined,
    swatchPrice: Number(t.swatchPrice),
    samplePrice: Number(t.samplePrice),
    isFeatured: t.isFeatured,
    heroImage: t.heroImage,
    macroImage: t.macroImage,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    variants: t.variants.map((v: any) => ({
      id: v.id,
      colorName: v.colorName,
      colorHex: v.colorHex ?? '#EAE5D9',
      isAvailable: v.isAvailable,
      imageUrl: v.imageUrl ?? undefined,
    })),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    images: t.images.map((img: any) => ({
      id: img.id,
      url: img.url,
      altText: img.altText,
      isMacro: img.isMacro,
      sortOrder: img.sortOrder,
    })),
  };
}

function mapArticleRecord(a: {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  content: string;
  featuredImage: string;
  readingTime: string;
  publishedAt: Date;
  seoTitle: string | null;
  seoDescription: string | null;
}): VerifiedJournalArticle {
  return {
    id: a.id,
    title: a.title,
    slug: a.slug,
    category: a.category as VerifiedJournalArticle['category'],
    summary: a.summary,
    content: a.content,
    featuredImage: a.featuredImage,
    readingTime: a.readingTime,
    publishedAt: a.publishedAt.toISOString().split('T')[0],
    seoTitle: a.seoTitle ?? a.title,
    seoDescription: a.seoDescription ?? a.summary,
  };
}

// ─── Fallback Helpers ─────────────────────────────────────────────────────────

function filterTextiles(
  textiles: VerifiedTextile[],
  filters?: { weave?: string; yarnCount?: string; isFeatured?: boolean; search?: string }
): VerifiedTextile[] {
  return textiles.filter((t) => {
    if (filters?.isFeatured !== undefined && t.isFeatured !== filters.isFeatured) return false;
    if (filters?.weave && !t.weave.toLowerCase().includes(filters.weave.toLowerCase())) return false;
    if (filters?.yarnCount && !t.yarnCount.toLowerCase().includes(filters.yarnCount.toLowerCase())) return false;
    if (filters?.search) {
      const q = filters.search.toLowerCase();
      return (
        t.name.toLowerCase().includes(q) ||
        t.shortDescription.toLowerCase().includes(q) ||
        t.code.toLowerCase().includes(q)
      );
    }
    return true;
  });
}

// ─── Data Service ─────────────────────────────────────────────────────────────

export class DataService {
  /**
   * Retrieve all textiles with optional filters.
   */
  static async getTextiles(filters?: {
    weave?: string;
    yarnCount?: string;
    isFeatured?: boolean;
    search?: string;
  }): Promise<VerifiedTextile[]> {
    if (!isDbAvailable()) {
      return filterTextiles(VERIFIED_TEXTILES, filters);
    }

    try {
      const rows = await prisma.textile.findMany({
        where: {
          ...(filters?.isFeatured !== undefined ? { isFeatured: filters.isFeatured } : {}),
          ...(filters?.weave ? { weave: { contains: filters.weave, mode: 'insensitive' } } : {}),
          ...(filters?.yarnCount ? { yarnCount: { contains: filters.yarnCount, mode: 'insensitive' } } : {}),
          ...(filters?.search
            ? {
                OR: [
                  { name: { contains: filters.search, mode: 'insensitive' } },
                  { shortDescription: { contains: filters.search, mode: 'insensitive' } },
                  { code: { contains: filters.search, mode: 'insensitive' } },
                ],
              }
            : {}),
        },
        include: {
          variants: true,
          images: { orderBy: { sortOrder: 'asc' } },
        },
        orderBy: { createdAt: 'desc' },
      });

      if (rows.length > 0) return rows.map(mapTextileRecord);
    } catch {
      openCircuit();
    }

    return filterTextiles(VERIFIED_TEXTILES, filters);
  }

  /**
   * Retrieve a single textile by slug.
   */
  static async getTextileBySlug(slug: string): Promise<VerifiedTextile | null> {
    if (!isDbAvailable()) {
      return VERIFIED_TEXTILES.find((t) => t.slug === slug) ?? null;
    }

    try {
      const row = await prisma.textile.findUnique({
        where: { slug },
        include: {
          variants: true,
          images: { orderBy: { sortOrder: 'asc' } },
        },
      });

      if (row) return mapTextileRecord(row);
    } catch {
      openCircuit();
    }

    return VERIFIED_TEXTILES.find((t) => t.slug === slug) ?? null;
  }

  /**
   * Retrieve journal articles, optionally filtered by category.
   */
  static async getJournalArticles(category?: string): Promise<VerifiedJournalArticle[]> {
    if (!isDbAvailable()) {
      return VERIFIED_JOURNAL_ARTICLES.filter((a) => !category || category === 'ALL' || a.category === category);
    }

    try {
      const rows = await prisma.journalArticle.findMany({
        where: category && category !== 'ALL' ? { category: category as never } : {},
        orderBy: { publishedAt: 'desc' },
      });

      if (rows.length > 0) return rows.map(mapArticleRecord);
    } catch {
      openCircuit();
    }

    return VERIFIED_JOURNAL_ARTICLES.filter((a) => !category || category === 'ALL' || a.category === category);
  }

  /**
   * Retrieve a single journal article by slug.
   */
  static async getJournalArticleBySlug(slug: string): Promise<VerifiedJournalArticle | null> {
    if (!isDbAvailable()) {
      return VERIFIED_JOURNAL_ARTICLES.find((a) => a.slug === slug) ?? null;
    }

    try {
      const row = await prisma.journalArticle.findUnique({ where: { slug } });
      if (row) return mapArticleRecord(row);
    } catch {
      openCircuit();
    }

    return VERIFIED_JOURNAL_ARTICLES.find((a) => a.slug === slug) ?? null;
  }

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

  /**
   * Process and persist an order inside a Prisma transaction.
   * Product prices are snapshotted at purchase time to prevent drift.
   */
  static async processOrder(input: CreateOrderInput) {
    const orderNumber = `BC-${new Date().getFullYear()}-${Date.now().toString().slice(-5)}`;
    let calculatedSubtotal = 0;

    const enrichedItems = input.items.map((item) => {
      const textile = VERIFIED_TEXTILES.find((t) => t.id === item.textileId || t.slug === item.textileId);
      if (!textile) {
        throw new Error(`Textile with ID ${item.textileId} not found`);
      }

      let unitPrice = 0;
      if (item.itemType === 'SWATCH') unitPrice = textile.swatchPrice;
      else if (item.itemType === 'SAMPLE_CUT') unitPrice = textile.samplePrice;
      else unitPrice = textile.basePrice ?? 600;

      const totalPrice = unitPrice * item.quantity;
      calculatedSubtotal += totalPrice;

      const variant = textile.variants.find((v) => v.id === item.variantId);

      return {
        textileId: textile.id,
        variantId: variant?.id ?? null,
        itemType: item.itemType,
        quantity: item.quantity,
        unitPrice,
        totalPrice,
        productSnapshot: {
          code: textile.code,
          name: textile.name,
          weave: textile.weave,
          yarnCount: textile.yarnCount,
          variantColor: variant?.colorName ?? 'Standard',
          capturedPrice: unitPrice,
        },
      };
    });

    const shippingAmount = 0; // Complimentary courier for trade samples
    const totalAmount = calculatedSubtotal + shippingAmount;

    if (!isDbAvailable()) {
      return { success: true, orderNumber, totalAmount, currency: 'INR', items: enrichedItems };
    }

    try {
      const createdOrder = await prisma.$transaction(async (tx) => {
        const existing = await tx.order.findUnique({
          where: { idempotencyKey: input.idempotencyKey },
          include: { items: true },
        });
        if (existing) return existing;

        return tx.order.create({
          data: {
            orderNumber,
            idempotencyKey: input.idempotencyKey,
            customerName: input.customerName,
            email: input.email,
            phone: input.phone,
            shippingAddressLine1: input.shippingAddressLine1,
            shippingAddressLine2: input.shippingAddressLine2 ?? null,
            city: input.city,
            state: input.state,
            postalCode: input.postalCode,
            country: input.country ?? 'India',
            subtotal: calculatedSubtotal,
            shippingAmount,
            taxAmount: 0,
            discountAmount: 0,
            totalAmount,
            currency: 'INR',
            paymentStatus: 'PENDING',
            orderStatus: 'CONFIRMED',
            items: {
              create: enrichedItems.map((it) => ({
                textileId: it.textileId,
                variantId: it.variantId,
                itemType: it.itemType as never,
                quantity: it.quantity,
                unitPrice: it.unitPrice,
                totalPrice: it.totalPrice,
                productSnapshot: it.productSnapshot,
              })),
            },
          },
          include: { items: true },
        });
      });

      return {
        success: true,
        orderNumber: createdOrder.orderNumber,
        totalAmount: Number(createdOrder.totalAmount),
        currency: createdOrder.currency,
        items: createdOrder.items,
      };
    } catch {
      openCircuit();
      return { success: true, orderNumber, totalAmount, currency: 'INR', items: enrichedItems };
    }
  }
}
