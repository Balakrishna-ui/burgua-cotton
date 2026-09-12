import { NextRequest } from 'next/server';
import { B2BEnquirySchema } from '@/lib/validations';
import { DataService } from '@/lib/data-service';
import { createSuccessResponse, createErrorResponse } from '@/lib/api-response';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers);
    const rateLimit = await checkRateLimit(`b2b-post:${ip}`, { maxRequests: 5, windowMs: 60000 });
    if (!rateLimit.allowed) {
      return createErrorResponse('RATE_LIMITED', 'Too many enquiry submissions. Please wait a minute before submitting again.', 429);
    }

    const body = await request.json().catch(() => ({}));
    const parseResult = B2BEnquirySchema.safeParse(body);

    if (!parseResult.success) {
      return createErrorResponse(
        'VALIDATION_ERROR',
        'Invalid enquiry data submitted',
        400,
        parseResult.error.flatten().fieldErrors
      );
    }

    const data = parseResult.data;

    // Check Honeypot
    if (data.website_hp && data.website_hp.length > 0) {
      return createErrorResponse('VALIDATION_ERROR', 'Submission rejected', 400);
    }

    const result = await DataService.createB2BEnquiry(data);
    return createSuccessResponse(result, 201);
  } catch (error) {
    console.error('API Error /api/b2b:', error);
    return createErrorResponse('INTERNAL_ERROR', 'An error occurred while saving your B2B enquiry. Please try again.', 500);
  }
}
