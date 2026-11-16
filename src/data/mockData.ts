import { Product, BedroomLook, Review, JournalArticle } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'normandy-linen-duvet',
    name: 'Normandy Washed Linen Duvet Cover',
    subtitle: '170 GSM pure Normandy flax, pumice-washed for immediate lived-in drape',
    category: 'Duvet Covers',
    material: 'French Flax Linen',
    price: 28500,
    colors: [
      { name: 'Oatmeal Natural', hex: '#D8CBB8', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Chalk White', hex: '#FBF9F5', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Olive Leaf', hex: '#596451', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Terracotta Rust', hex: '#B74121', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Dusk Slate', hex: '#71818A', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Earthy Umber', hex: '#49372F', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85' }
    ],
    sizes: ['Full', 'Queen', 'King', 'Cal King'],
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'Woven exclusively from certified long-strand French flax grown along the coastal valleys of Normandy. Each cover undergoes a gentle volcanic stone wash in northern Portugal, yielding a soft, relaxed texture that breathes effortlessly in hot climates and insulates through winter nights.',
    weaveDetails: 'Plain weave, 170 GSM medium-weight linen with interior corner ties and hidden natural corozo-nut button closure.',
    threadCountOrWeight: '170 GSM French Flax',
    includes: ['1 Duvet cover with hidden button closure & 4 interior corner ties', 'Matching reusable linen storage pouch'],
    care: [
      'Gentle cold or warm machine wash (max 40°C / 104°F)',
      'Use mild, enzyme-free detergent; avoid fabric softeners',
      'Line dry in shade or tumble dry on low/delicate',
      'Embrace the natural casual wrinkles—no ironing needed'
    ],
    dimensions: {
      Twin: '68" x 86" (173cm x 218cm)',
      Full: '86" x 86" (218cm x 218cm)',
      Queen: '90" x 92" (229cm x 234cm)',
      King: '106" x 92" (269cm x 234cm)',
      'Cal King': '104" x 96" (264cm x 244cm)'
    },
    rating: 4.9,
    reviewsCount: 142,
    isBestseller: true,
    certification: 'OEKO-TEX® Standard 100 & European Flax® Certified'
  },
  {
    id: 'percale-core-sheet-set',
    name: 'Crisp Organic Cotton Percale Sheet Set',
    subtitle: '300-thread count matte finish long-staple cotton for cool sleepers',
    category: 'Sheets & Sets',
    material: 'Organic Cotton Percale',
    price: 21500,
    colors: [
      { name: 'Chalk White', hex: '#FBF9F5', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Oatmeal Natural', hex: '#D8CBB8', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Dusk Slate', hex: '#71818A', image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Olive Leaf', hex: '#596451', image: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1400&q=85' }
    ],
    sizes: ['Twin', 'Full', 'Queen', 'King', 'Cal King'],
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'The definitive cool, lightweight sheet with the crisp handfeel of high-end boutique hotel linen. Woven in a classic one-over, one-under percale weave using 100% GOTS-certified organic long-staple cotton. Naturally breathable and matte, designed for those who sleep warm.',
    weaveDetails: 'Traditional 1-over-1 percale weave, 300 single-ply thread count. Deep 17" mattress pocket with continuous 360-degree elastic.',
    threadCountOrWeight: '300 TC Single-Ply Organic Cotton',
    includes: [
      '1 Fitted Sheet (with 17" deep pocket & directional labels)',
      '1 Flat Sheet with 4" tailored hem',
      '2 Pillowcases with deep envelope enclosure'
    ],
    care: [
      'Machine wash cool with similar pale tones',
      'Tumble dry low and remove promptly while slightly damp for minimal creasing',
      'Cool iron if desired for that crisp hotel aesthetic'
    ],
    dimensions: {
      Twin: 'Fitted: 39" x 75" x 17" | Flat: 66" x 96"',
      Full: 'Fitted: 54" x 75" x 17" | Flat: 81" x 96"',
      Queen: 'Fitted: 60" x 80" x 17" | Flat: 92" x 104"',
      King: 'Fitted: 76" x 80" x 17" | Flat: 108" x 104"',
      'Cal King': 'Fitted: 72" x 84" x 17" | Flat: 108" x 108"'
    },
    rating: 4.8,
    reviewsCount: 98,
    isBestseller: true,
    certification: 'GOTS Certified Organic & Fair Trade Weaving'
  },
  {
    id: 'cloud-gauze-coverlet',
    name: '4-Ply Cloud Cotton Gauze Coverlet',
    subtitle: 'Air-spun four-layer muslin with pillowy loft and relaxed crinkle',
    category: 'Quilts & Comforters',
    material: 'Cloud Cotton Gauze',
    price: 24000,
    colors: [
      { name: 'Terracotta Rust', hex: '#B74121', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Oatmeal Natural', hex: '#D8CBB8', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Chalk White', hex: '#FBF9F5', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Dusk Slate', hex: '#71818A', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85' }
    ],
    sizes: ['Full', 'Queen', 'King'],
    images: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'Four delicate layers of breathable organic cotton woven together on specialized jacquard looms. Traps soft pockets of air for warmth without weight. Draped at the foot of your bed or pulled up on warm summer evenings as an effortless standalone layer.',
    weaveDetails: '4-layer woven gauze muslin with bound edges and textured waffle puckering.',
    threadCountOrWeight: '320 GSM 4-Ply Gauze',
    includes: ['1 Layered Gauze Bedspread / Coverlet'],
    care: [
      'Machine wash cold on gentle cycle',
      'Tumble dry low to enhance the airy crinkle texture',
      'Never bleach or dry clean'
    ],
    dimensions: {
      Twin: '70" x 90" (178cm x 229cm)',
      Full: '90" x 96" (229cm x 244cm)',
      Queen: '96" x 98" (244cm x 249cm)',
      King: '110" x 98" (279cm x 249cm)',
      'Cal King': '110" x 102" (279cm x 259cm)'
    },
    rating: 4.9,
    reviewsCount: 84,
    isNew: true,
    certification: 'OEKO-TEX® Made in Green'
  },
  {
    id: 'normandy-linen-fitted-sheet',
    name: 'Normandy Flax Linen Fitted Sheet',
    subtitle: 'Extra-deep 17" pocket with reinforced corners and French seams',
    category: 'Sheets & Sets',
    material: 'French Flax Linen',
    price: 14500,
    colors: [
      { name: 'Oatmeal Natural', hex: '#D8CBB8', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Chalk White', hex: '#FBF9F5', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Olive Leaf', hex: '#596451', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Terracotta Rust', hex: '#B74121', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1400&q=85' }
    ],
    sizes: ['Twin', 'Full', 'Queen', 'King', 'Cal King'],
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'The foundation of restful sleep. Tailored with generous 17" mattress depth and reinforced elastic around the entire perimeter to stay taut and secure throughout the night without slipping or bunching.',
    weaveDetails: '170 GSM pure European flax with heavy-duty enclosed 360-degree elastic band.',
    threadCountOrWeight: '170 GSM pure linen',
    includes: ['1 Deep-pocket fitted linen sheet with subtle "Top/Bottom" orientation labels'],
    care: [
      'Gentle cycle with warm or cold water',
      'Hang dry or tumble low',
      'Gets softer and more supple with every single wash'
    ],
    dimensions: {
      Twin: '39" x 75" x 17"',
      Full: '54" x 75" x 17"',
      Queen: '60" x 80" x 17"',
      King: '76" x 80" x 17"',
      'Cal King': '72" x 84" x 17"'
    },
    rating: 4.9,
    reviewsCount: 110,
    isBestseller: true,
    certification: 'European Flax® & Oeko-Tex Standard 100'
  },
  {
    id: 'heritage-linen-pillowcases',
    name: 'French Flax Pillowcase Pair',
    subtitle: 'Set of two with deep inside envelope closures and tailored borders',
    category: 'Pillowcases',
    material: 'French Flax Linen',
    price: 7200,
    colors: [
      { name: 'Oatmeal Natural', hex: '#D8CBB8', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Olive Leaf', hex: '#596451', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Terracotta Rust', hex: '#B74121', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Chalk White', hex: '#FBF9F5', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Dusk Slate', hex: '#71818A', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85' }
    ],
    sizes: ['Queen', 'King'],
    images: [
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'Rest your head against natural, hypoallergenic flax fibers that maintain a soothing, temperature-regulated microclimate. Designed with an interior back envelope closure that prevents the pillow insert from ever peeking out.',
    weaveDetails: 'French seam construction with 8" deep envelope back flap.',
    threadCountOrWeight: '170 GSM French Flax',
    includes: ['2 Pillowcases with envelope back closures'],
    care: ['Machine wash cool, tumble dry low or air dry for lived-in texture'],
    dimensions: {
      Twin: 'Standard: 20" x 30" (51cm x 76cm)',
      Full: 'Standard: 20" x 30" (51cm x 76cm)',
      Queen: 'Standard: 20" x 30" (51cm x 76cm)',
      King: 'King: 20" x 38" (51cm x 96cm)',
      'Cal King': 'King: 20" x 38" (51cm x 96cm)'
    },
    rating: 4.9,
    reviewsCount: 167,
    isBestseller: true,
    certification: 'European Flax® Certified'
  },
  {
    id: 'waffle-wool-linen-throw',
    name: 'Brushed Waffle Wool-Linen Throw',
    subtitle: '70% European linen, 30% soft merino wool with fringed eyelash ends',
    category: 'Blankets & Throws',
    material: 'Waffle Wool-Linen',
    price: 18500,
    colors: [
      { name: 'Earthy Umber', hex: '#49372F', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Oatmeal Natural', hex: '#D8CBB8', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Olive Leaf', hex: '#596451', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=85' }
    ],
    sizes: ['Queen', 'King'],
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'An architectural textural layer that balances the cooling structure of heavy flax with the buttery softness of non-mulesed merino wool. Woven on heritage looms in Guimarães, Portugal with delicate eyelash fringe hems.',
    weaveDetails: 'Deep 3D honeycomb waffle weave with 1.5" raw-feathered eyelash fringe.',
    threadCountOrWeight: '380 GSM Heavy Texture',
    includes: ['1 Textured Wool-Linen Bed Blanket / Throw'],
    care: ['Dry clean or hand wash cold with wool-friendly detergent, dry flat'],
    dimensions: {
      Twin: '50" x 70" (127cm x 178cm)',
      Full: '55" x 75" (140cm x 190cm)',
      Queen: '55" x 80" (140cm x 203cm)',
      King: '65" x 90" (165cm x 229cm)',
      'Cal King': '65" x 95" (165cm x 241cm)'
    },
    rating: 4.8,
    reviewsCount: 46,
    isNew: true,
    certification: 'Responsible Wool Standard (RWS) & Masters of Linen'
  },
  {
    id: 'sateen-luxe-duvet',
    name: 'Silk-Touch Sateen Duvet Cover',
    subtitle: '400-thread count lustrous long-staple Egyptian cotton with subtle sheen',
    category: 'Duvet Covers',
    material: 'Sateen Luxe',
    price: 26000,
    colors: [
      { name: 'Chalk White', hex: '#FBF9F5', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Oatmeal Natural', hex: '#D8CBB8', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Dusk Slate', hex: '#71818A', image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85' }
    ],
    sizes: ['Full', 'Queen', 'King', 'Cal King'],
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'For those who prefer a silky glide against their skin. Sateen weaves three threads over and one thread under, exposing more yarn surface to create a luminous, whisper-soft drape that feels like warm silk on cooler evenings.',
    weaveDetails: '4-over-1 satin weave, 400 single-ply yarn count with internal corner ties.',
    threadCountOrWeight: '400 TC Egyptian Cotton',
    includes: ['1 Sateen Duvet Cover with French button placket'],
    care: ['Gentle warm wash, tumble dry low, gentle steam iron if desired'],
    dimensions: {
      Twin: '68" x 86"',
      Full: '86" x 86"',
      Queen: '90" x 92"',
      King: '106" x 92"',
      'Cal King': '104" x 96"'
    },
    rating: 4.8,
    reviewsCount: 52,
    certification: 'OEKO-TEX Standard 100'
  },
  {
    id: 'box-stitched-chambray-quilt',
    name: 'Stitch-Quilted Linen Chambray Quilt',
    subtitle: 'Hand-guided box stitch with 100% recycled cotton fill',
    category: 'Quilts & Comforters',
    material: 'French Flax Linen',
    price: 31500,
    colors: [
      { name: 'Dusk Slate', hex: '#71818A', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Oatmeal Natural', hex: '#D8CBB8', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1400&q=85' },
      { name: 'Olive Leaf', hex: '#596451', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=85' }
    ],
    sizes: ['Queen', 'King'],
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'A substantial, heritage-inspired heirloom quilt. Pure washed linen on both faces encasing a breathable recycled cotton batting. The 4-inch box quilting prevents cold spots while giving the bed a grounded, architectural profile.',
    weaveDetails: 'Box-stitched linen with 1" self-fabric binding on all four sides.',
    threadCountOrWeight: '180 GSM Linen with 200 GSM Cotton Batt',
    includes: ['1 Box-Quilted All-Season Quilt'],
    care: ['Machine wash cold, tumble dry low or air dry flat in shade'],
    dimensions: {
      Twin: '70" x 90"',
      Full: '90" x 92"',
      Queen: '96" x 96"',
      King: '110" x 96"',
      'Cal King': '110" x 100"'
    },
    rating: 4.9,
    reviewsCount: 38,
    isNew: true,
    certification: 'OEKO-TEX Standard 100 & GRS Recycled Fill'
  }
];

export const BEDROOM_LOOKS: BedroomLook[] = [
  {
    id: 'look-morning-terracotta',
    title: 'The Sunkissed Atelier Look',
    roomName: 'Suite No. 04 — Mediterranean Arches & Warm Drapes',
    description: 'An evocative dialogue between washed terracotta linen, chalk white percale underpinnings, and deep umber accents. Styled in an arched sunlit courtyard bedroom.',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1600&q=85',
    palette: ['#B74121', '#FBF9F5', '#49372F', '#D8CBB8'],
    hotspots: [
      { productId: 'normandy-linen-duvet', label: 'Linen Duvet in Terracotta Rust', price: 28500, x: 52, y: 65 },
      { productId: 'percale-core-sheet-set', label: 'Crisp Percale Sheets in Chalk', price: 21500, x: 38, y: 48 },
      { productId: 'waffle-wool-linen-throw', label: 'Waffle Throw in Earthy Umber', price: 18500, x: 68, y: 78 }
    ]
  },
  {
    id: 'look-coastal-slate',
    title: 'The High-Tide Slate Bedroom',
    roomName: 'Suite No. 02 — Fog, Cedar & Stone Weaves',
    description: 'Grounded slate blue paired with pure raw oatmeal flax and natural oak textures. Crisp, quiet, and deeply restorative for deep sleepers.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=85',
    palette: ['#71818A', '#D8CBB8', '#FBF9F5', '#596451'],
    hotspots: [
      { productId: 'normandy-linen-duvet', label: 'Normandy Duvet in Dusk Slate', price: 28500, x: 50, y: 62 },
      { productId: 'normandy-linen-fitted-sheet', label: 'Fitted Linen in Oatmeal', price: 14500, x: 34, y: 55 },
      { productId: 'heritage-linen-pillowcases', label: 'Flax Pillowcases in Olive Leaf', price: 7200, x: 62, y: 42 }
    ]
  },
  {
    id: 'look-botanical-olive',
    title: 'The Forest Sanctuary Retreat',
    roomName: 'Suite No. 07 — Olive Weaves & Raw Linens',
    description: 'Deep botanical greens layered with tactile cream gauze and washed linen pillows. A peaceful refuge echoing quiet courtyard gardens.',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1600&q=85',
    palette: ['#596451', '#FBF9F5', '#D8CBB8', '#49372F'],
    hotspots: [
      { productId: 'normandy-linen-duvet', label: 'Linen Duvet in Olive Leaf', price: 28500, x: 45, y: 64 },
      { productId: 'cloud-gauze-coverlet', label: 'Cloud Gauze in Oatmeal', price: 24000, x: 60, y: 76 },
      { productId: 'heritage-linen-pillowcases', label: 'Pillowcase Pair in Chalk', price: 7200, x: 30, y: 44 }
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Ayesha Raza',
    location: 'Lahore, Pakistan',
    verified: true,
    rating: 5,
    title: 'Linen that truly transformed our master bedroom',
    text: 'I was hesitant to invest in pure imported linen, but after one wash and sleep, the difference is remarkable. It has that substantial, heavy drape yet remains cool during humid nights. The Oatmeal shade has such depth—woven with subtle warm flecks.',
    productName: 'Normandy Washed Linen Duvet Cover',
    colorPurchased: 'Oatmeal Natural',
    date: '2 weeks ago',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'rev-2',
    author: 'Zainab Qasim',
    location: 'Islamabad, Pakistan',
    verified: true,
    rating: 5,
    title: 'Like staying in an understated boutique hotel every single night',
    text: 'The crispness of the organic percale is extraordinary. If you sleep warm, you will never go back to synthetic blends or limp microfiber. It stays crisp, cool, and structured throughout the night without making loud crinkly noises.',
    productName: 'Crisp Organic Cotton Percale Sheet Set',
    colorPurchased: 'Chalk White',
    date: '1 month ago',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'rev-3',
    author: 'Hamza Farooq',
    location: 'Karachi, Pakistan',
    verified: true,
    rating: 5,
    title: 'Terracotta tone is breathtaking in evening lamp light',
    text: 'The color is subtle and earthy, like Mediterranean terracotta or dried roses. The 4-ply gauze coverlet adds the most wonderful tactile ripple at the end of the bed. Beautiful craftsmanship with very neat seam bindings.',
    productName: '4-Ply Cloud Cotton Gauze Coverlet',
    colorPurchased: 'Terracotta Rust',
    date: '2 months ago',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=400&q=80'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-layering-bed',
    title: 'The Art of Layering: Texture, Tone, and Quiet Balance',
    slug: 'the-art-of-layering',
    category: 'Styling Rituals',
    readTime: '4 min read',
    date: 'Autumn 2026',
    excerpt: 'How interior stylists build bedroom depth using three tactile textures instead of busy patterns: combining crisp percale foundations with stonewashed linen and waffle blankets.',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=85',
    content: [
      'A truly restful bed should feel like an invitation rather than a museum showcase. When we observe high-end interiors, the secret to effortless beauty is rarely excessive symmetry or decorative pillows—it is tonal layering and authentic textile friction.',
      'Begin with your base: crisp, breathable percale or stone-washed linen sheets that feel good against bare skin. Next, introduce an envelope of warmth with a washed linen duvet cover, folded back slightly to expose the contrasting sheet beneath.',
      'Finally, drape a textured throw—such as a 3D waffle weave or wool-linen blend—diagonally or folded across the lower third of the bed. This breaks rigid horizontal lines and creates the sensory feeling of stepping into a quiet sanctuary.'
    ]
  },
  {
    id: 'art-caring-for-linen',
    title: 'Caring for Pure French Flax: A Gentle, Lifelong Ritual',
    slug: 'caring-for-french-flax-linen',
    category: 'Material Care',
    readTime: '5 min read',
    date: 'Summer 2026',
    excerpt: 'Why linen gets softer with every single wash, the truth about detergents and fabric softeners, and why you should leave your iron in the cupboard.',
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=85',
    content: [
      'Natural flax fibers are hollow and naturally coated in pectin. Over time and with each laundering, this natural pectin softens, allowing the flax cellulose fibers to flex and develop their legendary buttery handfeel.',
      'The golden rule of linen care is simplicity: use gentle, plant-derived detergents without brightening agents or synthetic enzymes. Crucially, avoid commercial fabric softeners—they leave a synthetic film over the hollow fibers, reducing the flax’s natural breathability.',
      'Linen loves water and space to tumble. Wash on gentle with ample water, line dry in the shade or tumble dry on low heat until just slightly damp. Shake it out and let it settle on your bed: the organic drape and soft ripples are its signature hallmark.'
    ]
  },
  {
    id: 'art-percale-vs-sateen',
    title: 'Percale vs. Sateen: Which Weave Suits Your Sleep Temp?',
    slug: 'percale-vs-sateen-weave-guide',
    category: 'Fabric Science',
    readTime: '3 min read',
    date: 'Spring 2026',
    excerpt: 'Understanding the mechanics of the 1-over-1 percale weave versus the 3-over-1 sateen float, and how each interacts with body temperature regulation.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=85',
    content: [
      'While thread count is often marketed as the primary metric of cotton quality, the weave structure has ten times more impact on how a sheet feels and regulates heat.',
      'Percale uses a basket-weave crisscross (one yarn over, one yarn under). This creates microscopic gaps between fibers that allow body heat to disperse continuously—giving it that crisp, cool, matte hotel sheet feel.',
      'Sateen, in contrast, floats multiple threads across the surface before binding. This produces a silky, radiant surface with minimal friction that traps warm air, making it ideal for chillier seasons or sleepers who love a glossy, draped cocoon.'
    ]
  }
];

export const MATERIAL_SPECS = [
  {
    id: 'flax-linen',
    name: 'French Flax Linen',
    provenance: 'Normandy, France',
    weight: '170 GSM',
    weave: 'Plain Weave, Volcanic Stone-washed',
    feel: 'Supple, textured, lived-in, breathable',
    tempControl: 'Thermal regulating (cool in summer, insulating in winter)',
    durability: 'Extreme (gets softer with every wash for decades)',
    bestFor: 'Those who appreciate tactile texture and year-round breathability',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'cotton-percale',
    name: 'Organic Cotton Percale',
    provenance: 'Aegean Basin, GOTS Certified',
    weight: '130 GSM / 300 Thread Count',
    weave: '1-Over, 1-Under Classic Crisp Weave',
    feel: 'Crisp, lightweight, matte, airy',
    tempControl: 'Ultra-cooling, maximum airflow',
    durability: 'High (resists pilling and retains crisp structure)',
    bestFor: 'Hot sleepers and lovers of fresh, crisp luxury hotel sheets',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'cloud-gauze',
    name: '4-Ply Cloud Cotton Gauze',
    provenance: 'Denizli, Turkey',
    weight: '320 GSM',
    weave: 'Multi-layer Jacquard Gauze',
    feel: 'Pillowy, crinkled, cloud-like loft',
    tempControl: 'Light-to-medium warmth with air pockets',
    durability: 'Moderate to High (pre-washed for dimensional stability)',
    bestFor: 'Layering blankets, summer coverlets, cozy lounge moments',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'sateen-luxe',
    name: 'Heritage Cotton Sateen',
    provenance: 'Nile River Valley, Egypt',
    weight: '145 GSM / 400 Thread Count',
    weave: '4-Over, 1-Under Satin Weave',
    feel: 'Silky, luminous sheen, butter-smooth glide',
    tempControl: 'Cozy, insulating warmth',
    durability: 'High (long-staple fibers prevent fraying)',
    bestFor: 'Cooler seasons and sleepers who love silk-like drape against the skin',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=85'
  }
];
