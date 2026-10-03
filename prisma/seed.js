const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Obsolete textile and journal article seed datasets removed during catalog retirement.
const VERIFIED_TEXTILES = [];

const VERIFIED_JOURNAL_ARTICLES = [];

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
