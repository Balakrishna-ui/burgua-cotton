import { NextRequest } from 'next/server';
import { ContactSubmissionSchema } from '@/lib/validations';
import { DataService } from '@/lib/data-service';
import { createSuccessResponse, createErrorResponse } from '@/lib/api-response';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers);
    const rateLimit = await checkRateLimit(`contact-post:${ip}`, { maxRequests: 5, windowMs: 60000 });
    if (!rateLimit.allowed) {
      return createErrorResponse('RATE_LIMITED', 'Too many contact requests. Please wait a minute.', 429);
    }

    const body = await request.json().catch(() => ({}));
    const parseResult = ContactSubmissionSchema.safeParse(body);

    if (!parseResult.success) {
      return createErrorResponse(
        'VALIDATION_ERROR',
        'Invalid contact form submission',
        400,
        parseResult.error.flatten().fieldErrors
      );
    }

    const data = parseResult.data;

    // Check Honeypot
    if (data.website_hp && data.website_hp.length > 0) {
      return createErrorResponse('VALIDATION_ERROR', 'Submission rejected', 400);
    }

    const result = await DataService.createContactSubmission(data);
    return createSuccessResponse(result, 201);
  } catch (error) {
    console.error('API Error /api/contact:', error);
    return createErrorResponse('INTERNAL_ERROR', 'Failed to process contact submission', 500);
  }
}
