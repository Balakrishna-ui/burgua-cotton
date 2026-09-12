import { NextRequest } from 'next/server';
import { DataService } from '@/lib/data-service';
import { createSuccessResponse, createErrorResponse } from '@/lib/api-response';

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    if (!slug) {
      return createErrorResponse('VALIDATION_ERROR', 'Textile slug is required', 400);
    }

    const textile = await DataService.getTextileBySlug(slug);
    if (!textile) {
      return createErrorResponse('NOT_FOUND', 'Textile not found', 404);
    }

    return createSuccessResponse(textile);
  } catch (error) {
    console.error('API Error /api/textiles/[slug]:', error);
    return createErrorResponse('INTERNAL_ERROR', 'Failed to retrieve textile details', 500);
  }
}
