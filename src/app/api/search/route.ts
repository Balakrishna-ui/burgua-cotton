import { NextRequest } from 'next/server';
import { DataService } from '@/lib/data-service';
import { SearchQuerySchema } from '@/lib/validations';
import { createSuccessResponse, createErrorResponse } from '@/lib/api-response';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q') || '';
    const category = searchParams.get('category') || 'all';

    const parseResult = SearchQuerySchema.safeParse({ q, category });
    if (!parseResult.success) {
      return createErrorResponse('VALIDATION_ERROR', 'Search term must be at least 1 character', 400);
    }

    const shouldFetchTextiles = category !== 'journal';
    const shouldFetchJournal = category !== 'textiles';

    const [textiles, journalArticles] = await Promise.all([
      shouldFetchTextiles ? DataService.getTextiles({ search: q }) : Promise.resolve([]),
      shouldFetchJournal ? DataService.getJournalArticles() : Promise.resolve([]),
    ]);

    const filteredArticles = shouldFetchJournal
      ? journalArticles.filter(
          (a) =>
            a.title.toLowerCase().includes(q.toLowerCase()) ||
            a.summary.toLowerCase().includes(q.toLowerCase()) ||
            a.content.toLowerCase().includes(q.toLowerCase())
        )
      : [];

    return createSuccessResponse({
      query: q,
      textiles,
      journalArticles: filteredArticles,
      totalCount: textiles.length + filteredArticles.length,
    });
  } catch (error) {
    console.error('API Error /api/search:', error);
    return createErrorResponse('INTERNAL_ERROR', 'Search failed', 500);
  }
}
