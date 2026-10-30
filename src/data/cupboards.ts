import { CupboardCategoryItem } from '../types';

export const CUPBOARD_CATEGORIES: CupboardCategoryItem[] = [
  {
    id: 'cherry',
    title: 'Cherry Cupboard Works',
    slug: 'cherry',
    route: '/cupboard-works/cherry',
    workCategory: 'cupboards-cherry',
    shortDesc: 'Rich, warm reddish-brown timber tones with fine grain patterns that add luxury warmth to bedrooms and storage spaces.',
    fullDesc: 'Cherry finish cupboards bring a refined warmth and depth of color to bedrooms and closets. Recognized for its smooth surface texture, warm amber-to-reddish undertones, and timeless visual appeal, cherry cabinetry complements modern and classical interiors alike.',
    characteristics: [
      'Distinctive warm reddish-brown natural undertones',
      'Smooth, satiny wood grain with fine uniform texture',
      'Pairs elegantly with soft gold and matte black hardware',
      'Available in modern flat-panel or traditional framed styles',
    ],
    recommendedFor: 'Master bedrooms, luxury walk-in wardrobes, executive storage units, and statement dining sideboards.',
  },
  {
    id: 'teak',
    title: 'Teak Wood Cupboard Works',
    slug: 'teak',
    route: '/cupboard-works/teak',
    workCategory: 'cupboards-teak',
    shortDesc: 'Renowned for exceptional natural strength, golden-brown grain, and heirloom-grade longevity that resists humidity.',
    fullDesc: 'Teak wood stands as the pinnacle of authentic timber cabinetry. Naturally rich in protective oils, teak delivers remarkable resistance against moisture, termites, and warp over decades. Crafted by experienced hands to showcase authentic natural wood grains.',
    characteristics: [
      'Authentic natural oil content providing moisture resistance',
      'Prominent straight to wavy golden-brown wood grain',
      'Exceptional structural strength and dimensional stability',
      'Can be oiled, varnished, or clear-coated to highlight natural grain',
    ],
    recommendedFor: 'Heirloom wardrobes, humid bedroom environments, premium living room vitrines, and custom solid wood cabinetry.',
  },
  {
    id: 'upvc',
    title: 'UPVC Cupboard Works',
    slug: 'upvc',
    route: '/cupboard-works/upvc',
    workCategory: 'cupboards-upvc',
    shortDesc: 'Zero-maintenance, termite-proof, and 100% moisture-resistant cupboards engineered for longevity and clean utility. PVC and UPVC cupboard price starts from ₹250 to ₹500.',
    fullDesc: 'UPVC cupboard systems represent the ideal fusion of durability, hygiene, and modern functional design. Engineered with high-strength unplasticized polymer profiles, UPVC cupboards are impervious to termites, water seepage, and rust, making them ideal for high-utility homes. PVC and UPVC cupboard price starts from ₹250 to ₹500.',
    characteristics: [
      'PVC and UPVC cupboard price starts from ₹250 to ₹500',
      '100% waterproof and termite proof construction',
      'Will not warp, rust, or corrode over time',
      'Extremely easy to clean with standard household detergents',
      'Available in smooth solid colors and woodgrain foil finishes',
    ],
    recommendedFor: 'Kitchen storage, utility rooms, coastal or high-moisture residences, rental properties, and children rooms.',
  },
];
