import { z } from 'zod';

export const B2BEnquirySchema = z.object({
  companyName: z.string().min(2, 'Company or Studio name must be at least 2 characters').max(120),
  contactName: z.string().min(2, 'Contact person name is required').max(100),
  email: z.string().email('Please enter a valid business email address'),
  phone: z.string().min(8, 'Phone number must be at least 8 digits').max(20),
  buyerType: z.enum([
    'DESIGNER',
    'FASHION_LABEL',
    'MANUFACTURER',
    'ARCHITECT',
    'HOSPITALITY',
    'RETAILER',
    'PROFESSIONAL_BUYER',
    'OTHER',
  ]),
  intendedUse: z.string().min(3, 'Please describe your intended application').max(500),
  preferredTextileId: z.string().optional().nullable(),
  approximateQuantity: z.string().max(100).optional().nullable(),
  timeline: z.string().max(100).optional().nullable(),
  customRequirement: z.string().max(2000).optional().nullable(),
  // Honeypot field for spam prevention - must be empty
  website_hp: z.string().max(0, 'Spam detected').optional(),
});

export type B2BEnquiryInput = z.infer<typeof B2BEnquirySchema>;

export const ContactSubmissionSchema = z.object({
  name: z.string().min(2, 'Name is required').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().max(20).optional().nullable(),
  purpose: z.enum([
    'FABRIC_ENQUIRY',
    'B2B_BULK',
    'FABRIC_DEVELOPMENT',
    'COLLABORATION',
    'GENERAL',
  ]),
  subject: z.string().min(3, 'Subject is required').max(150),
  message: z.string().min(10, 'Message must be at least 10 characters').max(3000),
  // Honeypot field
  website_hp: z.string().max(0, 'Spam detected').optional(),
});

export type ContactSubmissionInput = z.infer<typeof ContactSubmissionSchema>;

export const OrderItemInputSchema = z.object({
  textileId: z.string().min(1, 'Textile ID is required'),
  variantId: z.string().optional().nullable(),
  itemType: z.enum(['SWATCH', 'SAMPLE_CUT', 'FABRIC_METER']),
  quantity: z.number().int().positive('Quantity must be at least 1').max(50, 'Max quantity for sample requests is 50'),
});

export const CreateOrderSchema = z.object({
  idempotencyKey: z.string().min(8, 'Valid idempotency token is required'),
  customerName: z.string().min(2, 'Full name is required').max(100),
  email: z.string().email('Please provide a valid email address'),
  phone: z.string().min(8, 'Phone number is required').max(20),
  shippingAddressLine1: z.string().min(5, 'Address line 1 is required').max(200),
  shippingAddressLine2: z.string().max(200).optional().nullable(),
  city: z.string().min(2, 'City is required').max(100),
  state: z.string().min(2, 'State is required').max(100),
  postalCode: z.string().min(4, 'Valid postal code is required').max(20),
  country: z.string().default('India'),
  items: z.array(OrderItemInputSchema).min(1, 'At least one item must be in the order'),
  // Honeypot field
  website_hp: z.string().max(0, 'Spam detected').optional(),
});

export type CreateOrderInput = z.infer<typeof CreateOrderSchema>;

export const SearchQuerySchema = z.object({
  q: z.string().min(1, 'Search query must not be empty').max(100),
  category: z.enum(['all', 'textiles', 'journal']).default('all'),
});

export const TextilesQuerySchema = z.object({
  weave: z.string().max(80).optional(),
  yarnCount: z.string().max(50).optional(),
  isFeatured: z.enum(['true', 'false']).optional(),
  search: z.string().max(100).optional(),
});

export const JournalQuerySchema = z.object({
  category: z
    .string()
    .max(50)
    .regex(/^[a-zA-Z0-9_-]*$/, 'Invalid category format')
    .optional(),
});
