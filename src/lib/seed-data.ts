export interface VerifiedTextile {
  id: string;
  code: string;
  name: string;
  slug: string;
  shortDescription: string;
  materialStory: string;
  yarnCount: string;
  weave: string;
  width: string;
  gsm?: string;
  finish: string;
  suggestedApplications: string;
  inStock: boolean;
  leadTime: string;
  b2bMoq: string;
  basePrice?: number;
  swatchPrice: number;
  samplePrice: number;
  isFeatured: boolean;
  heroImage: string;
  macroImage: string;
  variants: {
    id: string;
    colorName: string;
    colorHex: string;
    isAvailable: boolean;
    imageUrl?: string;
  }[];
  images: {
    id: string;
    url: string;
    altText: string;
    isMacro: boolean;
    sortOrder: number;
  }[];
}

export interface VerifiedJournalArticle {
  id: string;
  title: string;
  slug: string;
  category: 'MATERIAL' | 'PEOPLE' | 'PLACE' | 'PROCESS' | 'RESEARCH' | 'CONTEMPORARY';
  summary: string;
  content: string;
  featuredImage: string;
  readingTime: string;
  publishedAt: string;
  seoTitle: string;
  seoDescription: string;
}

export const VERIFIED_TEXTILES: VerifiedTextile[] = [
  {
    id: 'tex-001',
    code: 'BC-KK-2801',
    name: 'Kapas aur Kora Plain Weave',
    slug: 'kapas-aur-kora-plain-weave',
    shortDescription: 'Unbleached, loom-state handloom cloth woven from 28s handspun unbaled desi cotton yarn.',
    materialStory: 'Rooted in the philosophy of Kapas se Kapda Tak, Ek Gaon Mein, this textile is woven from unbaled, decentralised cotton yarn spun in Telangana. Retaining the natural pectin and softness of raw cotton, the cloth breathes with an authentic, unprocessed handfeel that matures and softens with every wash.',
    yarnCount: '27-30s Handspun Unbaled Cotton',
    weave: 'Plain Weave (Loom State)',
    width: '44 inches (112 cm)',
    gsm: '120 GSM',
    finish: 'Kora (Unbleached / Loom-State Raw)',
    suggestedApplications: 'Apparel, shirting, relaxed tunics, artisanal home textiles, bespoke linings',
    inStock: true,
    leadTime: '3-4 weeks for small batches',
    b2bMoq: '50 meters',
    basePrice: 580.00,
    swatchPrice: 150.00,
    samplePrice: 650.00,
    isFeatured: true,
    heroImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80',
    macroImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
    variants: [
      { id: 'var-001-1', colorName: 'Kora Natural (Unbleached)', colorHex: '#EAE5D9', isAvailable: true },
      { id: 'var-001-2', colorName: 'Washed Ecru', colorHex: '#F2EFE9', isAvailable: true }
    ],
    images: [
      { id: 'img-001-1', url: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80', altText: 'Kapas aur Kora fabric drape', isMacro: false, sortOrder: 1 },
      { id: 'img-001-2', url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80', altText: 'Macro texture of 28s handspun plain weave', isMacro: true, sortOrder: 2 }
    ]
  },
  {
    id: 'tex-002',
    code: 'BC-IND-3002',
    name: 'Telangana Natural Indigo Handloom',
    slug: 'telangana-natural-indigo-handloom',
    shortDescription: 'Decentralised handspun cotton yarn dyed with natural fermented indigo leaf extracts before pit-loom weaving.',
    materialStory: 'Dyed in traditional fermentation indigo vats by experienced artisan dyers in Telangana, this textile features subtle shade depth and tactile yarn variations characteristic of 28-30s count unbaled cotton.',
    yarnCount: '28-30s Handspun Cotton',
    weave: 'Balanced Plain Weave',
    width: '44 inches (112 cm)',
    gsm: '125 GSM',
    finish: 'Natural Indigo Vat Dyed & Washed',
    suggestedApplications: 'Contemporary shirting, overlays, lightweight jackets, curated accessories',
    inStock: true,
    leadTime: '4-5 weeks for batch production',
    b2bMoq: '60 meters',
    basePrice: 720.00,
    swatchPrice: 150.00,
    samplePrice: 780.00,
    isFeatured: true,
    heroImage: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80',
    macroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    variants: [
      { id: 'var-002-1', colorName: 'Deep Desi Indigo', colorHex: '#1E293B', isAvailable: true },
      { id: 'var-002-2', colorName: 'Sky Asmani Indigo', colorHex: '#64748B', isAvailable: true }
    ],
    images: [
      { id: 'img-002-1', url: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80', altText: 'Natural indigo handloom fabric fold', isMacro: false, sortOrder: 1 },
      { id: 'img-002-2', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80', altText: 'Macro weave of indigo yarn intersections', isMacro: true, sortOrder: 2 }
    ]
  },
  {
    id: 'tex-003',
    code: 'BC-MDR-2703',
    name: 'Madder Root Yarn-Dyed Twill',
    slug: 'madder-root-yarn-dyed-twill',
    shortDescription: 'Structured 2/2 twill handloom woven with natural alizarin madder root dyed yarn.',
    materialStory: 'Developed through yarn research at Burgula, this twill construction pairs natural madder root dyed warp with natural kora weft, providing supple diagonal drapability and rich earthy warmth.',
    yarnCount: '27s Handspun Unbaled Cotton',
    weave: '2/2 Twill Weave',
    width: '46 inches (117 cm)',
    gsm: '145 GSM',
    finish: 'Natural Madder Dyed & Loom Washed',
    suggestedApplications: 'Tailored trousers, lightweight outerwear, heavy dresses, structured drapery',
    inStock: true,
    leadTime: '4 weeks',
    b2bMoq: '50 meters',
    basePrice: 850.00,
    swatchPrice: 150.00,
    samplePrice: 900.00,
    isFeatured: true,
    heroImage: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80',
    macroImage: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80',
    variants: [
      { id: 'var-003-1', colorName: 'Madder Rust', colorHex: '#7C2D12', isAvailable: true },
      { id: 'var-003-2', colorName: 'Earthy Terracotta', colorHex: '#9A3412', isAvailable: true }
    ],
    images: [
      { id: 'img-003-1', url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80', altText: 'Madder root dyed twill textile', isMacro: false, sortOrder: 1 },
      { id: 'img-003-2', url: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80', altText: 'Macro twill diagonal ridge close up', isMacro: true, sortOrder: 2 }
    ]
  },
  {
    id: 'tex-004',
    code: 'BC-HMP-3004',
    name: 'Cotton-Hemp Natural Blend Weave',
    slug: 'cotton-hemp-natural-blend-weave',
    shortDescription: 'Experimental natural blend combining unbaled handspun cotton with indigenous bast hemp fibre.',
    materialStory: 'Part of Burgula Cotton’s research into natural fibre integration, this fabric pairs the softness and absorbency of 30s cotton with the tensile resilience, crisp texture, and thermal qualities of natural hemp.',
    yarnCount: '30s Cotton Warp x Bast Hemp Weft',
    weave: 'Textured Plain Weave',
    width: '45 inches (114 cm)',
    gsm: '160 GSM',
    finish: 'Semi-Bleached Kora Finish',
    suggestedApplications: 'Jackets, relaxed suiting, durable upholstery, interior textiles',
    inStock: true,
    leadTime: '5-6 weeks for bespoke runs',
    b2bMoq: '75 meters',
    basePrice: 980.00,
    swatchPrice: 150.00,
    samplePrice: 1050.00,
    isFeatured: false,
    heroImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
    macroImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80',
    variants: [
      { id: 'var-004-1', colorName: 'Natural Hemp Cream', colorHex: '#DDD5C7', isAvailable: true }
    ],
    images: [
      { id: 'img-004-1', url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80', altText: 'Cotton-Hemp blend cloth', isMacro: false, sortOrder: 1 }
    ]
  },
  {
    id: 'tex-005',
    code: 'BC-FIN-6005',
    name: 'Fine Handspun Malkha Cotton',
    slug: 'fine-handspun-malkha-cotton',
    shortDescription: 'Exceptionally breathable light plain weave woven from gentle decentralised spinning.',
    materialStory: 'Created to demonstrate the revival of finer yarn counts in village-scale decentralised spinning units, avoiding industrial baling pressure to preserve the delicate staple structure of Indian cotton.',
    yarnCount: '30-32s Fine Decentralised Yarn',
    weave: 'Air-Permeable Fine Plain Weave',
    width: '44 inches (112 cm)',
    gsm: '95 GSM',
    finish: 'Soft Hand Loom Wash',
    suggestedApplications: 'Summer tunics, fine shirting, lightweight scarves, heritage overlays',
    inStock: true,
    leadTime: '3-4 weeks',
    b2bMoq: '50 meters',
    basePrice: 680.00,
    swatchPrice: 150.00,
    samplePrice: 750.00,
    isFeatured: false,
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    macroImage: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80',
    variants: [
      { id: 'var-005-1', colorName: 'Parchment White', colorHex: '#FBF9F5', isAvailable: true },
      { id: 'var-005-2', colorName: 'Kora Beige', colorHex: '#E5DFD3', isAvailable: true }
    ],
    images: [
      { id: 'img-005-1', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80', altText: 'Fine handspun malkha fabric close up', isMacro: false, sortOrder: 1 }
    ]
  }
];

export const VERIFIED_JOURNAL_ARTICLES: VerifiedJournalArticle[] = [
  {
    id: 'art-001',
    title: 'Kapas aur Kora: Reviving a Village-Centred Yarn Tradition',
    slug: 'kapas-aur-kora-reviving-village-centred-yarn-tradition',
    category: 'RESEARCH',
    summary: 'An exploration of how decentralised yarn spinning units preserve the natural life of cotton fibre before it touches the handloom.',
    content: `Historically, the richness of Indian cotton textiles was deeply connected to local, decentralised yarn spinning. When industrial spinning mills mandated high-pressure baling for long-distance transport, the natural wax, pectin, and spring of the cotton staple were permanently altered.\n\nAt Burgula Cotton, the revival of 27–30 count unbaled cotton yarn re-establishes a direct, unhurried continuum from local farmer to spinner to pit-loom weaver. Operating within the philosophy of "Kapas se Kapda Tak, Ek Gaon Mein", yarn is processed in gentle, small-scale decentralised units in Telangana. The result is a textile with extraordinary breathability, dimensional depth, and an authentic living handfeel.`,
    featuredImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80',
    readingTime: '5 min read',
    publishedAt: '2026-02-15',
    seoTitle: 'Kapas aur Kora: Village-Centred Yarn Revival | Burgula Cotton',
    seoDescription: 'The story of 27-30s unbaled handspun cotton yarn revival in Telangana by Burgula Cotton.'
  },
  {
    id: 'art-002',
    title: 'Kapas se Kapda Tak, Ek Gaon Mein: The Philosophy of Place',
    slug: 'kapas-se-kapda-tak-philosophy-of-place',
    category: 'PLACE',
    summary: 'Why keeping the sequence of cotton processing within rural clusters transforms quality, relationship, and purpose.',
    content: `When cotton is grown, gin-carded, spun, and woven within contiguous village clusters, material intelligence stays with the makers. The weaver knows the farmer; the spinner understands the character of that season's harvest.\n\nEstablished in 2007, the Burgula Cotton Trust began with this foundational commitment: to demonstrate that handloom cotton is not merely a nostalgic craft, but a viable, highly sophisticated contemporary production system rooted in community dignity and material excellence.`,
    featuredImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
    readingTime: '4 min read',
    publishedAt: '2026-01-20',
    seoTitle: 'From Cotton to Cloth in One Village | Burgula Cotton',
    seoDescription: 'Exploring the village-centric textile philosophy of Burgula Cotton in Telangana.'
  },
  {
    id: 'art-003',
    title: 'Natural Fibre Blends: Integrating Hemp & Wild Silks with Handloom Cotton',
    slug: 'natural-fibre-blends-hemp-silk-handloom-cotton',
    category: 'PROCESS',
    summary: 'Technical notes on contemporary blending of bast fibres and unbaled cotton on traditional pit-looms.',
    content: `Handloom weaving possesses an agile versatility that high-speed industrial looms cannot replicate. At Burgula Cotton, our fabric development team explores the intersections of 28s handspun cotton with indigenous bast hemp and wild silks.\n\nThese experiments produce textiles with distinctive drape qualities: the structural crispness of bast fibres balanced by the comforting softness of unbaled cotton warp.`,
    featuredImage: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80',
    readingTime: '6 min read',
    publishedAt: '2025-11-10',
    seoTitle: 'Natural Fibre Blends: Cotton, Hemp & Silk | Burgula Cotton',
    seoDescription: 'Technical research on natural fibre integration in handloom cotton at Burgula Cotton.'
  }
];
