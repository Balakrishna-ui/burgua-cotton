import { NextRequest } from 'next/server';
import { CreateOrderSchema } from '@/lib/validations';
import { DataService } from '@/lib/data-service';
import { createSuccessResponse, createErrorResponse } from '@/lib/api-response';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers);
    const rateLimit = await checkRateLimit(`orders-post:${ip}`, { maxRequests: 5, windowMs: 60000 });
    if (!rateLimit.allowed) {
      return createErrorResponse('RATE_LIMITED', 'Too many checkout attempts. Please wait a minute.', 429);
    }

    const body = await request.json().catch(() => ({}));
    const parseResult = CreateOrderSchema.safeParse(body);

    if (!parseResult.success) {
      return createErrorResponse(
        'VALIDATION_ERROR',
        'Invalid order details',
        400,
        parseResult.error.flatten().fieldErrors
      );
    }

    const data = parseResult.data;

    // Check Honeypot
    if (data.website_hp && data.website_hp.length > 0) {
      return createErrorResponse('VALIDATION_ERROR', 'Submission rejected', 400);
    }

    const orderResult = await DataService.processOrder(data);
    return createSuccessResponse(orderResult, 201);
  } catch (error) {
    console.error('API Error /api/orders:', error);
    return createErrorResponse('INTERNAL_ERROR', 'Failed to complete order. Please review your cart and try again.', 500);
  }
}
