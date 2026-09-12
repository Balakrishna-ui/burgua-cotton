import { NextRequest } from 'next/server';
import { DataService } from '@/lib/data-service';
import { createSuccessResponse, createErrorResponse } from '@/lib/api-response';
import { checkRateLimit, getClientIp } from '@/lib/rate-limit';
import { JournalQuerySchema } from '@/lib/validations';

export async function GET(request: NextRequest) {
  try {
    const ip = getClientIp(request.headers);
    const rateLimit = await checkRateLimit(`journal-get:${ip}`, { maxRequests: 60, windowMs: 60000 });
    if (!rateLimit.allowed) {
      return createErrorResponse('RATE_LIMITED', 'Too many requests. Please try again in a moment.', 429);
    }

    const { searchParams } = new URL(request.url);
    const queryInput = {
      category: searchParams.get('category') || undefined,
    };

    const parseResult = JournalQuerySchema.safeParse(queryInput);
    if (!parseResult.success) {
      return createErrorResponse('VALIDATION_ERROR', 'Invalid category filter', 400);
    }

    const articles = await DataService.getJournalArticles(parseResult.data.category);
    return createSuccessResponse(articles);
  } catch (error) {
    console.error('API Error /api/journal:', error);
    return createErrorResponse('INTERNAL_ERROR', 'Failed to retrieve journal articles', 500);
  }
}
