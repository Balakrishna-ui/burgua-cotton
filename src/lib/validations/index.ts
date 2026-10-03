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
  message: z.string().min(1, 'Message is required').max(3000),
  // Honeypot field
  website_hp: z.string().max(0, 'Spam detected').optional(),
});

export type ContactSubmissionInput = z.infer<typeof ContactSubmissionSchema>;
