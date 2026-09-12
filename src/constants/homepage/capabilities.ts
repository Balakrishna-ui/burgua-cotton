/**
 * Capabilities profile items shown in Section 08 of the homepage.
 */
export interface CapabilityItem {
  num: string;
  title: string;
  desc: string;
}

export const CAPABILITIES: CapabilityItem[] = [
  {
    num: '01',
    title: 'Cotton',
    desc: 'Selective sourcing of Indian staple cotton in Telangana. Carded gently to maintain cuticle wax and moisture resilience without industrial compression.',
  },
  {
    num: '02',
    title: 'Yarn',
    desc: 'Specialisation in 27–30 count unbaled cotton yarn spun in decentralised micro-spinning units, offering natural elasticity and slub texture.',
  },
  {
    num: '03',
    title: 'Weaving',
    desc: 'Handloom pit-loom weaving across plain weave, twills, double-cloths, and jamdani structural accents by generational weaver families.',
  },
  {
    num: '04',
    title: 'Fabric Development',
    desc: 'Translating designer briefs and architectural specifications into custom densities, textures, widths (up to 48 inches), and weights.',
  },
  {
    num: '05',
    title: 'Finishing',
    desc: 'Loom-state Kora finishes, soft water washing, and natural plant fermentation vat dyeing using alizarin madder root and desi indigo.',
  },
  {
    num: '06',
    title: 'Quality Assurance',
    desc: 'Batch-by-batch physical inspection for warp-weft alignment, dimensional stability, colorfastness testing, and tensile integrity.',
  },
  {
    num: '07',
    title: 'Bespoke Development',
    desc: 'Flexible minimum order quantities (MOQs from 50m) enabling fashion labels and bespoke projects to prototype and scale.',
  },
];
