import { NextRequest } from 'next/server';
import { DataService } from '@/lib/data-service';
import { createSuccessResponse, createErrorResponse } from '@/lib/api-response';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { TextilesQuerySchema } from '@/lib/validations';

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers);
    const rateLimit = await checkRateLimit(`textiles-get:${ip}`, { maxRequests: 60, windowMs: 60000 });
    if (!rateLimit.allowed) {
      return createErrorResponse('RATE_LIMITED', 'Too many requests. Please try again in a moment.', 429);
    }

    const { searchParams } = new URL(request.url);
    const queryInput = {
      weave: searchParams.get('weave') || undefined,
      yarnCount: searchParams.get('yarnCount') || undefined,
      isFeatured: searchParams.get('isFeatured') || undefined,
      search: searchParams.get('search') || undefined,
    };

    const parseResult = TextilesQuerySchema.safeParse(queryInput);
    if (!parseResult.success) {
      return createErrorResponse('VALIDATION_ERROR', 'Invalid query parameters', 400);
    }

    const { weave, yarnCount, isFeatured, search } = parseResult.data;
    const isFeaturedBool = isFeatured === 'true' ? true : isFeatured === 'false' ? false : undefined;

    const textiles = await DataService.getTextiles({
      weave,
      yarnCount,
      isFeatured: isFeaturedBool,
      search,
    });
    return createSuccessResponse(textiles);
  } catch (error) {
    console.error('API Error /api/textiles:', error);
    return createErrorResponse('INTERNAL_ERROR', 'Failed to retrieve textiles', 500);
  }
}
