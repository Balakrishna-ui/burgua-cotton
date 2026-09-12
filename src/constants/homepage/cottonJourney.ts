import type { JourneyStage } from '@/components/ui/CottonJourneyCarousel';

/**
 * The 8 stages of the Burgula Cotton supply chain, from farm to market.
 * Each stage corresponds to one slide in the Cotton Journey carousel.
 */
export const COTTON_JOURNEY_STAGES: JourneyStage[] = [
  {
    stage: 'STAGE 1',
    title: 'Farmer',
    desc: 'Cotton grown on land around Burgula by farming households.',
    image: '/images/hero-cotton-harvest.jpg',
  },
  {
    stage: 'STAGE 2',
    title: 'Cotton',
    desc: 'Raw cotton collected, sorted and graded before processing.',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
  },
  {
    stage: 'STAGE 3',
    title: 'Yarn',
    desc: 'Carding, drawing and spinning turn fibre into usable yarn.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80',
  },
  {
    stage: 'STAGE 4',
    title: 'Design',
    desc: 'Counts, colour and weave decided before the warp is set.',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80',
  },
  {
    stage: 'STAGE 5',
    title: 'Handloom',
    desc: 'Weavers translate yarn into fabric, metre by metre.',
    image: '/images/w1.png',
  },
  {
    stage: 'STAGE 6',
    title: 'Fabric',
    desc: 'Woven cloth checked, finished and prepared for use.',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
  },
  {
    stage: 'STAGE 7',
    title: 'Value addition',
    desc: 'Finishing, stitching and product making close the loop.',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80',
  },
  {
    stage: 'STAGE 8',
    title: 'Market',
    desc: 'Fabric and products reach buyers beyond the village.',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80',
  },
];
