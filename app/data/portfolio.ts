export type Category = 'character' | 'creature' | 'building';
export type MediaType = 'image' | 'video';

export interface PortfolioItem {
  id: string;
  title: string;
  category: Category;
  type: MediaType;
  /** Path relative to /public */
  src: string;
  /** Thumbnail — for videos use a related image */
  thumbnail: string;
  tags: string[];
  description: string;
}

export const portfolioItems: PortfolioItem[] = [
  // ── Characters ──────────────────────────────────────────────
  {
    id: 'wizard-turnaround',
    title: 'Stylized Wizard — Character Model',
    category: 'character',
    type: 'image',
    src: '/portfolio/magique-chapeu.jpg',
    thumbnail: '/portfolio/magique-chapeu.jpg',
    tags: ['Wizard', 'Stylized', 'Fantasy', 'Game-Ready'],
    description:
      'Full 3D character model of a stylized fantasy wizard — 4-angle turnaround sheet with clean cloth simulation, optimized topology and PBR textures.',
  },
  {
    id: 'wizard-scene',
    title: "Wizard's Study — Scene Render",
    category: 'character',
    type: 'image',
    src: '/portfolio/magique-chemine.jpg',
    thumbnail: '/portfolio/magique-chemine.jpg',
    tags: ['Scene', 'Wizard', 'Interior', 'Fantasy', 'Unreal Engine'],
    description:
      'Atmospheric in-engine scene render: the wizard character sitting by a fireplace in a medieval study filled with potions, spell books and candlelight.',
  },

  // ── Creatures ────────────────────────────────────────────────
  {
    id: 'tribal-guardian',
    title: 'Tribal Guardian — High-Poly Sculpt',
    category: 'creature',
    type: 'image',
    src: '/portfolio/monster-blue.jpg',
    thumbnail: '/portfolio/monster-blue.jpg',
    tags: ['Creature', 'ZBrush', 'Sculpt', 'Boss', 'High-Poly'],
    description:
      'ZBrush high-poly sculpt of a muscular humanoid deity-creature with massive blade-feather headdress and glowing gemstone. 3-angle turnaround.',
  },
  {
    id: 'frost-sovereign',
    title: 'Frost Sovereign — Concept 3D',
    category: 'creature',
    type: 'image',
    src: '/portfolio/monster-blanche.jpg',
    thumbnail: '/portfolio/monster-blanche.jpg',
    tags: ['Creature', 'Boss', 'Ice', 'Fantasy', 'Concept'],
    description:
      'Ethereal ice creature with flowing white mane, blue energy-crack markings and a serpentine tail — standing on a sea rock amid crashing waves.',
  },
  {
    id: 'portal-guardian',
    title: 'Portal Guardian — Real-Time Render',
    category: 'creature',
    type: 'image',
    src: '/portfolio/monster-collone.jpg',
    thumbnail: '/portfolio/monster-collone.jpg',
    tags: ['Creature', 'Unreal Engine', 'Real-Time', 'Game-Ready', 'Boss'],
    description:
      'Dark stone-bark humanoid standing at a swirling green portal between ancient moss-covered columns. Fully lit in-engine real-time render.',
  },
  {
    id: 'forest-spirit',
    title: 'Forest Spirit — Unreal Engine 5',
    category: 'creature',
    type: 'image',
    src: '/portfolio/forest-creator.jpg',
    thumbnail: '/portfolio/forest-creator.jpg',
    tags: ['Creature', 'Nature Spirit', 'UE5', 'Fantasy', 'Game-Ready'],
    description:
      'Bark and moss-covered humanoid nature spirit with antlers — rendered in Unreal Engine 5 in an overgrown ancient forest clearing with stone columns.',
  },
  {
    id: 'forest-spirit-2',
    title: 'Forest Spirit — Action Pose',
    category: 'creature',
    type: 'image',
    src: '/portfolio/forest-creator-2.jpg',
    thumbnail: '/portfolio/forest-creator-2.jpg',
    tags: ['Creature', 'Nature Spirit', 'UE5', 'Animation', 'Fantasy'],
    description:
      'Back-view action shot of the forest golem walking through a burning forest — dramatic environmental lighting and volumetric smoke effects.',
  },

  // ── Buildings ────────────────────────────────────────────────
  {
    id: 'ancient-temple-scene',
    title: 'Ancient Temple — Game Scene',
    category: 'building',
    type: 'image',
    src: '/portfolio/castle-ancien.jpg',
    thumbnail: '/portfolio/castle-ancien.jpg',
    tags: ['Environment', 'Temple', 'Ancient', 'UE5', 'Game Scene'],
    description:
      'Full game scene featuring overgrown Greek/Roman temple ruins with fire effects and a creature emerging — entirely real-time rendered in Unreal Engine.',
  },
  {
    id: 'ancient-stone-temple',
    title: 'Ancient Stone Temple — Marmoset',
    category: 'building',
    type: 'image',
    src: '/portfolio/maison-ansien.jpg',
    thumbnail: '/portfolio/maison-ansien.jpg',
    tags: ['Building', 'Temple', 'Ancient', 'Marmoset', 'PBR'],
    description:
      'Highly detailed ancient stone temple with carved stone reliefs, moss-covered surfaces and ritual flame bowls. Rendered in Marmoset Toolbag 3.',
  },
  {
    id: 'modern-building',
    title: 'Modern Residential Complex',
    category: 'building',
    type: 'image',
    src: '/portfolio/maison-moderne.jpg',
    thumbnail: '/portfolio/maison-moderne.jpg',
    tags: ['Building', 'Architectural Viz', 'Modern', 'Urban'],
    description:
      'Architectural visualization of a contemporary multi-storey residential and commercial building placed in an urban winter environment.',
  },
  {
    id: 'luxury-yacht',
    title: 'Luxury Mega-Yacht — 3D Model',
    category: 'building',
    type: 'image',
    src: '/portfolio/bateau.jpg',
    thumbnail: '/portfolio/bateau.jpg',
    tags: ['Building', 'Yacht', '3D Model', 'Architectural', 'Photorealistic'],
    description:
      'Photorealistic 3D model of a modern luxury mega-yacht with detailed deck layout and multi-tier superstructure — aerial view over realistic ocean.',
  },
  {
    id: 'desert-outpost',
    title: 'Desert Outpost — Game Environment',
    category: 'building',
    type: 'image',
    src: '/portfolio/vant-sable.jpg',
    thumbnail: '/portfolio/vant-sable.jpg',
    tags: ['Building', 'Environment', 'Post-Apocalyptic', 'Desert', 'Game-Ready'],
    description:
      'Rusted metal observation tower with solar panels and radar dish — a game-ready environment asset set in a vast post-apocalyptic desert.',
  },

  // ── Videos ───────────────────────────────────────────────────
  {
    id: 'wizard-animation',
    title: 'Wizard — Animation Reel',
    category: 'character',
    type: 'video',
    src: '/portfolio/magistian-fume.mp4',
    thumbnail: '/portfolio/magique-chapeu.jpg',
    tags: ['Animation', 'Wizard', 'Character', 'Smoke VFX'],
    description:
      'Animated wizard character with dynamic cloth simulation and smoke particle VFX — showcasing idle, movement and spell-casting cycles.',
  },
  {
    id: 'creature-animation',
    title: 'Creature — Animated Scene',
    category: 'creature',
    type: 'video',
    src: '/portfolio/monster-place.mp4',
    thumbnail: '/portfolio/monster-collone.jpg',
    tags: ['Animation', 'Creature', 'Portal', 'Real-Time'],
    description:
      'Fully animated creature sequence at the portal environment — demonstrating rigging, weight paint quality and real-time rendering in-engine.',
  },
  {
    id: 'temple-turntable',
    title: 'Ancient Temple — Turntable',
    category: 'building',
    type: 'video',
    src: '/portfolio/tbrender.mp4',
    thumbnail: '/portfolio/maison-ansien.jpg',
    tags: ['Building', 'Turntable', 'Marmoset', 'PBR', 'Temple'],
    description:
      '360° turntable render of the ancient stone temple asset in Marmoset Toolbag — full material and lighting showcase.',
  },
];

export const categories: { label: string; value: Category | 'all' }[] = [
  { label: 'All Work', value: 'all' },
  { label: 'Characters', value: 'character' },
  { label: 'Creatures', value: 'creature' },
  { label: 'Buildings', value: 'building' },
];
