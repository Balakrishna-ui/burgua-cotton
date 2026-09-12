const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const VERIFIED_TEXTILES = [
  {
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
      { colorName: 'Kora Natural (Unbleached)', colorHex: '#EAE5D9', isAvailable: true },
      { colorName: 'Washed Ecru', colorHex: '#F2EFE9', isAvailable: true }
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80', altText: 'Kapas aur Kora fabric drape', isMacro: false, sortOrder: 1 },
      { url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80', altText: 'Macro texture of 28s handspun plain weave', isMacro: true, sortOrder: 2 }
    ]
  },
  {
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
    heroImage: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1200&q=80',
    macroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    variants: [
      { colorName: 'Deep Desi Indigo', colorHex: '#1E293B', isAvailable: true },
      { colorName: 'Sky Asmani Indigo', colorHex: '#64748B', isAvailable: true }
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1200&q=80', altText: 'Natural indigo handloom fabric fold', isMacro: false, sortOrder: 1 },
      { url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80', altText: 'Macro weave of indigo yarn intersections', isMacro: true, sortOrder: 2 }
    ]
  },
  {
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
      { colorName: 'Madder Rust', colorHex: '#7C2D12', isAvailable: true },
      { colorName: 'Earthy Terracotta', colorHex: '#9A3412', isAvailable: true }
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80', altText: 'Madder root dyed twill textile', isMacro: false, sortOrder: 1 },
      { url: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80', altText: 'Macro twill diagonal ridge close up', isMacro: true, sortOrder: 2 }
    ]
  }
];

const VERIFIED_JOURNAL_ARTICLES = [
  {
    title: 'Kapas aur Kora: Reviving a Village-Centred Yarn Tradition',
    slug: 'kapas-aur-kora-reviving-village-centred-yarn-tradition',
    category: 'RESEARCH',
    summary: 'An exploration of how decentralised yarn spinning units preserve the natural life of cotton fibre before it touches the handloom.',
    content: 'Historically, the richness of Indian cotton textiles was deeply connected to local, decentralised yarn spinning. When industrial spinning mills mandated high-pressure baling for long-distance transport, the natural wax, pectin, and spring of the cotton staple were permanently altered.\n\nAt Burgula Cotton, the revival of 27–30 count unbaled cotton yarn re-establishes a direct, unhurried continuum from local farmer to spinner to pit-loom weaver.',
    featuredImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80',
    readingTime: '5 min read',
    publishedAt: new Date('2026-02-15'),
    seoTitle: 'Kapas aur Kora: Village-Centred Yarn Revival | Burgula Cotton',
    seoDescription: 'The story of 27-30s unbaled handspun cotton yarn revival in Telangana by Burgula Cotton.'
  }
];

async function main() {
  console.log('Seeding PostgreSQL database with authentic Burgula Cotton records...');

  for (const t of VERIFIED_TEXTILES) {
    const { variants, images, ...textileData } = t;
    const textile = await prisma.textile.upsert({
      where: { code: t.code },
      update: {},
      create: textileData,
    });

    for (const v of variants) {
      await prisma.textileVariant.create({
        data: {
          ...v,
          textileId: textile.id,
        },
      });
    }

    for (const img of images) {
      await prisma.textileImage.create({
        data: {
          ...img,
          textileId: textile.id,
        },
      });
    }
  }

  for (const a of VERIFIED_JOURNAL_ARTICLES) {
    await prisma.journalArticle.upsert({
      where: { slug: a.slug },
      update: {},
      create: a,
    });
  }

  console.log('Seeding completed successfully.');
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
