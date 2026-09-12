import { describe, it, expect } from 'vitest';
import { DataService } from '../lib/data-service';

describe('DataService Business Logic & Price Snapshots', () => {
  it('retrieves all verified textiles without fake statistics', async () => {
    const textiles = await DataService.getTextiles();
    expect(textiles.length).toBeGreaterThan(0);
    
    // Verify first textile properties
    const first = textiles[0];
    expect(first.code).toBeDefined();
    expect(first.name).toBeDefined();
    expect(first.materialStory).toContain('Kapas');
    expect(first.yarnCount).toContain('27-30s');
    expect(first.variants.length).toBeGreaterThan(0);
  });

  it('filters textiles by weave structure', async () => {
    const twills = await DataService.getTextiles({ weave: 'Twill' });
    expect(twills.every((t) => t.weave.toLowerCase().includes('twill'))).toBe(true);
  });

  it('processes swatch order and creates purchase-time product snapshot', async () => {
    const orderInput = {
      idempotencyKey: `idemp-test-${Date.now()}`,
      customerName: 'Sanjay Gupta',
      email: 'sanjay@gupta.com',
      phone: '+91 9123456780',
      shippingAddressLine1: 'Banjara Hills',
      city: 'Hyderabad',
      state: 'Telangana',
      postalCode: '500034',
      country: 'India',
      items: [
        {
          textileId: 'tex-001',
          variantId: 'var-001-1',
          itemType: 'SWATCH' as const,
          quantity: 3,
        },
      ],
    };

    const orderResult = await DataService.processOrder(orderInput);
    expect(orderResult.success).toBe(true);
    expect(orderResult.orderNumber).toContain('BC-');
    expect(orderResult.totalAmount).toBe(450); // 3 * 150
    expect(orderResult.items).toBeDefined();
    if (orderResult.items && orderResult.items[0]) {
      const snapshot = orderResult.items[0].productSnapshot as { capturedPrice: number };
      expect(snapshot.capturedPrice).toBe(150);
    }
  });

  it('retrieves textile by slug and returns null when not found', async () => {
    const valid = await DataService.getTextileBySlug('kapas-aur-kora-plain-weave');
    expect(valid).not.toBeNull();
    expect(valid?.slug).toBe('kapas-aur-kora-plain-weave');

    const notFound = await DataService.getTextileBySlug('non-existent-fabric-slug');
    expect(notFound).toBeNull();
  });

  it('retrieves journal articles and filters by category', async () => {
    const all = await DataService.getJournalArticles();
    expect(all.length).toBeGreaterThan(0);

    const filtered = await DataService.getJournalArticles('PROCESS');
    expect(filtered.every((a) => a.category === 'PROCESS')).toBe(true);

    const emptyFilter = await DataService.getJournalArticles('NON_EXISTENT_CATEGORY');
    expect(emptyFilter.length).toBe(0);
  });
});
