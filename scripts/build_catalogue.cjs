const fs = require('fs');
const path = require('path');

const SCRATCH_DIR = 'C:/Users/Haroon/.gemini/antigravity/brain/e84136e9-c5a8-4d91-9b0e-cda03eab405e/scratch';

// 1. Swatches lookup map
const bathData = JSON.parse(fs.readFileSync(path.join(SCRATCH_DIR, 'route_en_products_bath.json'), 'utf8'));
const swatchesMap = {};
(bathData.colourSwatches || []).forEach(s => {
  if (s.name && s.svg_fill_colour) {
    swatchesMap[s.name.toLowerCase().trim()] = s.svg_fill_colour;
  }
});

const fallbackSwatches = {
  'white': '#ffffff',
  'warm white': '#f2ebdf',
  'winter white': '#fcfaf2',
  'cream': '#f0eee9',
  'cloud': '#D5D5D8',
  'cloud grey': '#c5c7cb',
  'neutral': '#dbcaac',
  'oatmeal': '#e9dfcf',
  'oatmeal marle': '#dfd5c6',
  'stone': '#beb7b0',
  'russet': '#7E212A',
  'olive': '#A39264',
  'hunter green': '#415141',
  'terracotta': '#c87b4b',
  'sage': '#a8b09f',
  'burgundy': '#603535',
  'charcoal': '#37383B',
  'biscuit': '#d8c5b0',
  'chocolate': '#4a3728',
  'pink': '#f2d5d5',
  'pink lotus': '#e8b8b8',
  'blue': '#7a9bb8',
  'bay blue': '#6d8ba6',
  'plum': '#5c2d4a',
  'sky': '#9ec1d9',
  'yellow': '#f5eac8',
  'pampas': '#dfd5c6',
  'beige': '#e3dac9',
  'brown': '#694c3d',
  'butter': '#fae8b2',
  'lilac': '#c8b6d6',
  'cherry': '#8a2b3b',
  'multi': '#d4a373',
  'red': '#a83232',
  'green': '#4d6849',
};

function extractSpecificColorName(handle, fallbackColor) {
  let cleaned = handle
    .replace('boucle-cotton-cushion-cover-', '')
    .replace('rib-cushion-cover-', '')
    .replace('wool-boucle-cushion-cover-', '')
    .replace('velvet-cushion-cover-', '')
    .replace('wool-cushion-cover-', '')
    .replace('tufted-cotton-cushion-cover-', '')
    .replace('cotton-jacquard-cushion-cover-', '')
    .replace('textured-cotton-cushion-cover-', '')
    .replace('linen-cushion-cover-', '')
    .replace('cotton-bath-sheet-', '')
    .replace('cotton-bath-mat-', '')
    .replace('cotton-towels-', '')
    .replace('silk-pillowcases-', '')
    .replace('silk-winnie-polka-dot-pillowcases', 'winnie-polka-dot')
    .replace('cloudknit-jersey-riley-pant-', '')
    .replace('cloudknit-jersey-riley-mini-short-', '')
    .replace('soft-woven-cotton-kit-pant-', '')
    .replace('double-brushed-flannelette-lennox-pant-', '')
    .replace('pointelle-scout-pant-', '')
    .replace('sleep-well-soothing-bed-spray', 'soothing-spray')
    .replace('sleep-well-magnesium-balm-50g', 'magnesium-balm')
    .replace('sleep-well-magnesium-bath-soak', 'bath-soak')
    .replace('sleep-well-calming-sleep-wash', 'sleep-wash')
    .replace('sleep-well-sunrise-candle', 'sunrise')
    .replace('sleep-well-sunset-candle', 'sunset')
    .replace('washed-cotton-blanket-', '')
    .replace('rory-washed-cotton-blanket-', '')
    .replace('flannelette-blanket-', '')
    .replace('wool-blanket-', '')
    .replace('bed-sheets-', '')
    .replace('washed-cotton-bed-sheets-', '')
    .replace('organic-cotton-bed-sheets-', '')
    .replace('striped-bed-sheets-', '')
    .replace('linen-bed-sheets-', '');

  if (cleaned && cleaned !== handle) {
    return cleaned.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }
  return fallbackColor ? fallbackColor.charAt(0).toUpperCase() + fallbackColor.slice(1) : 'Natural';
}

function resolveHex(name) {
  if (!name) return '#f2ebdf';
  const clean = name.toLowerCase().trim();
  if (swatchesMap[clean]) return swatchesMap[clean];
  if (fallbackSwatches[clean]) return fallbackSwatches[clean];
  for (const [k, v] of Object.entries(swatchesMap)) {
    if (clean.includes(k) || k.includes(clean)) return v;
  }
  for (const [k, v] of Object.entries(fallbackSwatches)) {
    if (clean.includes(k) || k.includes(clean)) return v;
  }
  return '#dbcaac';
}

function cleanImgUrl(url) {
  if (!url) return '';
  if (typeof url !== 'string') return url.url || '';
  return url;
}

// 2. Load existing 55 products from mockData.ts
const existingMockContent = fs.readFileSync('src/data/mockData.ts', 'utf8');
const match = existingMockContent.match(/export const PRODUCTS: Product\[\] = (\[[\s\S]*?\]);\n\nexport const BEDROOM_LOOKS/);
if (!match) {
  console.error('Failed to extract existing PRODUCTS from mockData.ts');
  process.exit(1);
}
const existingProducts = JSON.parse(match[1]);
console.log('Loaded base 55 products from mockData.ts');

const baseBeddingProducts = existingProducts.slice(0, 55);
const expandedProducts = [...baseBeddingProducts];
const imageManifest = {};

// Record existing base products into imageManifest
baseBeddingProducts.forEach(p => {
  imageManifest[p.id] = {
    title: p.name,
    collection: p.material,
    productType: p.category,
    color: p.colors[0]?.name || 'Natural',
    images: p.images.map((img, idx) => ({
      src: img,
      remoteUrl: img.startsWith('http') ? img : `https://cdn.shopify.com/s/files/1/1463/0170/files/${path.basename(img)}`,
      alt: `${p.name} - View ${idx + 1}`,
      role: idx === 0 ? 'hero' : 'gallery',
      position: idx + 1,
      colorOrPrint: p.colors[0]?.name || null
    }))
  };
});

// Helper: PKR price calculator from AUD
function toPKR(audPrice, multiplier = 180, roundTo = 500) {
  const pkr = Math.round((audPrice * multiplier) / roundTo) * roundTo;
  return Math.max(roundTo, pkr);
}

// 3. Process Quilts & Pillows (20 products)
const qpData = JSON.parse(fs.readFileSync(path.join(SCRATCH_DIR, 'route_en_products_quilts-pillows.json'), 'utf8'));
const qpRawList = [];
(qpData.ucCollections || []).forEach(c => {
  (c.products || []).forEach(p => {
    if (!qpRawList.find(x => x.handle === p.handle)) qpRawList.push(p);
  });
});

console.log('Found QP raw products:', qpRawList.length);

qpRawList.forEach(p => {
  if (expandedProducts.find(x => x.id === p.handle)) return;

  const isProtector = p.handle.includes('protector') || p.handle.includes('topper');
  const isCot = p.handle.includes('cot');
  const isPillow = p.handle.includes('pillow') || p.handle.includes('insert');
  
  let category = 'Quilts & Pillows';
  if (isProtector) category = 'Protectors & Toppers';
  else if (isCot) category = 'Kids & Baby';

  let material = 'Wonder Wool';
  if (p.range === 'low-down') material = 'Low Down Recycled';
  else if (p.range === 'cloud-corn') material = 'Cloud Corn Plant-Based';
  else if (p.range === 'cool-mode') material = 'Microfibre';
  else if (p.range === 'bed-basics') material = 'Eden Cotton';

  const baseAud = p.price?.value || 120;
  const basePkr = toPKR(baseAud);

  let sizes = ['Double', 'Queen', 'King', 'Super King'];
  let variantPrices = {
    'Double': basePkr - 2500,
    'Queen': basePkr,
    'King': basePkr + 3500,
    'Super King': basePkr + 6500
  };

  if (isPillow) {
    if (p.handle.includes('body')) {
      sizes = ['Body (48x150cm)'];
      variantPrices = { 'Body (48x150cm)': basePkr };
    } else if (p.handle.includes('european')) {
      sizes = ['European (65x65cm)'];
      variantPrices = { 'European (65x65cm)': basePkr };
    } else {
      sizes = ['Standard (48x73cm)', 'European (65x65cm)'];
      variantPrices = {
        'Standard (48x73cm)': basePkr,
        'European (65x65cm)': basePkr + 2000
      };
    }
  } else if (isCot) {
    sizes = ['Cot'];
    variantPrices = { 'Cot': basePkr };
  } else if (isProtector && !p.handle.includes('pillow')) {
    sizes = ['Single', 'King Single', 'Double', 'Queen', 'King', 'Super King'];
    variantPrices = {
      'Single': basePkr - 3000,
      'King Single': basePkr - 1500,
      'Double': basePkr - 1000,
      'Queen': basePkr,
      'King': basePkr + 2500,
      'Super King': basePkr + 5000
    };
  }

  const imgs = (p.images || []).map(i => cleanImgUrl(i)).filter(Boolean);
  if (imgs.length === 0) return;

  const colorName = isProtector || isPillow ? 'Crisp White' : 'Natural White';
  const colorHex = '#ffffff';

  const productObj = {
    id: p.handle,
    name: p.name || p.handle.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    subtitle: `${material} · MORFE Signature Collection`,
    category,
    material,
    price: basePkr,
    salePrice: Math.round(basePkr * 1.3),
    variantPrices,
    minPrice: Math.min(...Object.values(variantPrices)),
    maxPrice: Math.max(...Object.values(variantPrices)),
    colors: [
      {
        name: colorName,
        hex: colorHex,
        image: imgs[0],
        gallery: imgs
      }
    ],
    sizes,
    images: imgs,
    description: `Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced ${material.toLowerCase()} to deliver breathable loft and cloud-like support night after night.`,
    weaveDetails: isProtector ? 'Diamond quilted cotton casing with elasticated skirt' : 'Box-stitch quilted baffling with double-needle piped seams',
    threadCountOrWeight: p.range === 'wonder-wool' ? '350 GSM Pure Australian Wool' : (p.range === 'low-down' ? '600FP Recycled Down & Feather' : '300 GSM Plant-Based Corn Fibre'),
    includes: [p.name || 'Protector / Quilt Unit'],
    care: [
      'Gentle machine wash or professional dry clean',
      'Air flat in natural shade to maintain natural loft',
      'Fluff regularly to maintain breathability'
    ],
    dimensions: {
      'Queen': '210cm x 210cm',
      'King': '245cm x 210cm',
      'Standard': '48cm x 73cm'
    },
    rating: Number((4.7 + (Math.random() * 0.3)).toFixed(1)),
    reviewsCount: Math.floor(40 + Math.random() * 110),
    isNew: p.range === 'cool-mode',
    isBestseller: p.range === 'low-down' || p.range === 'wonder-wool',
    department: 'Quilts & Pillows',
    handle: p.handle
  };

  expandedProducts.push(productObj);

  imageManifest[p.handle] = {
    title: productObj.name,
    collection: productObj.material,
    productType: productObj.category,
    color: colorName,
    images: imgs.map((img, idx) => ({
      src: img,
      remoteUrl: img,
      alt: `${productObj.name} - View ${idx + 1}`,
      role: idx === 0 ? 'hero' : 'gallery',
      position: idx + 1,
      colorOrPrint: colorName
    }))
  };
});

console.log('Total products after QP:', expandedProducts.length);

// 4. Process Cushions & Covers (31 products)
const cushionsData = JSON.parse(fs.readFileSync(path.join(SCRATCH_DIR, 'route_en_products_cushions.json'), 'utf8'));
const cRawList = [];
(cushionsData.ucCollections || []).forEach(c => {
  (c.products || []).forEach(p => {
    if (!cRawList.find(x => x.handle === p.handle)) cRawList.push(p);
  });
});

cRawList.forEach(p => {
  if (expandedProducts.find(x => x.id === p.handle)) return;

  const imgs = (p.images || []).map(i => cleanImgUrl(i)).filter(Boolean);
  if (imgs.length === 0) return;

  let material = 'Bouclé Cotton';
  if (p.handle.includes('rib')) material = 'Darcy Corduroy';
  else if (p.handle.includes('velvet')) material = 'Velvet';
  else if (p.handle.includes('wool')) material = 'Wonder Wool';
  else if (p.handle.includes('linen')) material = 'Eve Linen';

  let size = '50x50';
  if (p.name && p.name.includes('65x40')) size = '65x40';
  else if (p.name && p.name.includes('Round')) size = 'Round (40cm)';
  else if (p.name && p.name.includes('Bolster')) size = 'Bolster (20x60cm)';

  const baseAud = p.price?.value || 48;
  const basePkr = toPKR(baseAud, 170, 250);

  const colorName = extractSpecificColorName(p.handle, p.colour);
  const colorHex = resolveHex(colorName);

  const productObj = {
    id: p.handle,
    name: p.name || `Homebody - ${colorName} Cushion Cover`,
    subtitle: `${material} · MORFE Living Collection`,
    category: 'Cushions',
    material,
    price: basePkr,
    salePrice: Math.round(basePkr * 1.25),
    variantPrices: {
      [size]: basePkr,
      'With Feather Insert': basePkr + 3500
    },
    minPrice: basePkr,
    maxPrice: basePkr + 3500,
    colors: [
      {
        name: colorName,
        hex: colorHex,
        image: imgs[0],
        gallery: imgs
      }
    ],
    sizes: [size, 'With Feather Insert'],
    images: imgs,
    description: `Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium ${material.toLowerCase()} with concealed zipper closures.`,
    weaveDetails: 'Heavyweight textured tactile weave with concealed zip fastening',
    threadCountOrWeight: '450 GSM Heavyweight Texture',
    includes: ['1x Cushion Cover (optional feather insert available)'],
    care: [
      'Cold gentle machine wash inside out',
      'Line dry flat in shade',
      'Do not bleach or tumble dry'
    ],
    dimensions: {
      [size]: size.includes('x') ? size + ' cm' : size
    },
    rating: Number((4.8 + (Math.random() * 0.2)).toFixed(1)),
    reviewsCount: Math.floor(18 + Math.random() * 55),
    isNew: p.handle.includes('boucle') || p.handle.includes('velvet'),
    isBestseller: p.handle.includes('pampas') || p.handle.includes('chocolate'),
    department: 'Cushions',
    handle: p.handle
  };

  expandedProducts.push(productObj);

  imageManifest[p.handle] = {
    title: productObj.name,
    collection: productObj.material,
    productType: 'Cushions',
    color: colorName,
    images: imgs.map((img, idx) => ({
      src: img,
      remoteUrl: img,
      alt: `${productObj.name} - View ${idx + 1}`,
      role: idx === 0 ? 'hero' : 'gallery',
      position: idx + 1,
      colorOrPrint: colorName
    }))
  };
});

console.log('Total products after Cushions:', expandedProducts.length);

// 5. Process Blankets (15 products from Bed Builder)
const bbData = JSON.parse(fs.readFileSync(path.join(SCRATCH_DIR, 'route_en_bed-builder.json'), 'utf8'));
const blankets = (bbData.products || []).filter(p => p.productType === 'Blanket');

blankets.forEach(b => {
  if (expandedProducts.find(x => x.id === b.handle)) return;

  const img = b.featuredImage?.url || b.variants?.[0]?.imageUrl;
  if (!img) return;

  let material = 'Rory Washed Cotton';
  if (b.handle.includes('flannelette')) material = 'Frankie Flannelette';
  else if (b.handle.includes('wool')) material = 'Wonder Wool';

  const baseAud = b.price || 110;
  const basePkr = toPKR(baseAud, 175, 500);

  const colorParts = b.handle.replace('washed-cotton-blanket-', '').replace('rory-washed-cotton-blanket-', '').replace('flannelette-blanket-', '').replace('wool-blanket-', '').split('-');
  const colorName = colorParts.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const colorHex = resolveHex(colorParts.join(' '));

  const productObj = {
    id: b.handle,
    name: b.title || `Rory Washed Cotton - ${colorName} Blanket`,
    subtitle: `${material} · MORFE Living Collection`,
    category: 'Blankets & Bed Covers',
    material,
    price: basePkr,
    salePrice: Math.round(basePkr * 1.3),
    variantPrices: {
      'Throw (130x180cm)': basePkr - 3000,
      'Bed Blanket (240x240cm)': basePkr
    },
    minPrice: basePkr - 3000,
    maxPrice: basePkr,
    colors: [
      {
        name: colorName,
        hex: colorHex,
        image: img,
        gallery: [img]
      }
    ],
    sizes: ['Throw (130x180cm)', 'Bed Blanket (240x240cm)'],
    images: [img],
    description: `Generously sized and stone-washed for immediate relaxed drape. The perfect transitional layer for year-round comfort across Queen and King beds.`,
    weaveDetails: 'Breathable waffle jacquard with self-fringed tailored borders',
    threadCountOrWeight: '380 GSM Pre-Washed Cotton Waffle',
    includes: ['1x Tailored Bed Blanket'],
    care: [
      'Machine wash cold on gentle cycle',
      'Tumble dry low or air dry in shade',
      'Warm iron if desired'
    ],
    dimensions: {
      'Bed Blanket': '240cm x 240cm',
      'Throw': '130cm x 180cm'
    },
    rating: Number((4.7 + (Math.random() * 0.3)).toFixed(1)),
    reviewsCount: Math.floor(25 + Math.random() * 60),
    isNew: b.handle.includes('peaches') || b.handle.includes('sage'),
    isBestseller: b.handle.includes('oatmeal') || b.handle.includes('midnight'),
    department: 'Blankets',
    handle: b.handle
  };

  expandedProducts.push(productObj);

  imageManifest[b.handle] = {
    title: productObj.name,
    collection: productObj.material,
    productType: 'Blankets & Bed Covers',
    color: colorName,
    images: [
      {
        src: img,
        remoteUrl: img,
        alt: `${productObj.name} - Hero View`,
        role: 'hero',
        position: 1,
        colorOrPrint: colorName
      }
    ]
  };
});

console.log('Total products after Blankets:', expandedProducts.length);

// 6. Process Bath, Sleepwear, Wellness (23 products)
const bswProducts = JSON.parse(fs.readFileSync(path.join(SCRATCH_DIR, 'bath_sleepwear_wellness_products.json'), 'utf8'));

bswProducts.forEach(p => {
  if (expandedProducts.find(x => x.id === p.handle)) return;

  const imgs = (p.images || []).map(i => cleanImgUrl(i)).filter(Boolean);
  if (imgs.length === 0) return;

  const baseAud = p.price?.value || 45;
  const basePkr = toPKR(baseAud, 180, 250);

  let category = 'Bath & Towels';
  let material = 'Tommy 600 GSM Cotton';
  let sizes = ['Bath Sheet (90x165cm)'];
  let variantPrices = { 'Bath Sheet (90x165cm)': basePkr };

  const isSleepwear = p.productType === 'Pant' || p.productType === 'Mini Short';
  const isWellness = p.handle.includes('sleep-well') || p.productType === 'Bed Spray' || p.productType === 'Magnesium Balm' || p.productType === 'Magnesium Soak' || p.productType === 'Sleep Wash' || p.productType === 'Candle';
  const isSilk = p.handle.includes('silk');

  if (isSleepwear) {
    category = 'Sleepwear';
    material = p.handle.includes('flannelette') ? 'Frankie Flannelette' : 'Cloudknit Jersey';
    sizes = ['XS', 'S', 'M', 'L', 'XL'];
    variantPrices = {
      'XS': basePkr,
      'S': basePkr,
      'M': basePkr,
      'L': basePkr,
      'XL': basePkr
    };
  } else if (isWellness) {
    category = 'Wellness';
    material = 'Mulberry Silk';
    if (p.handle.includes('balm')) sizes = ['50g'];
    else if (p.handle.includes('soak')) sizes = ['500g Jar'];
    else if (p.handle.includes('wash')) sizes = ['250ml Bottle'];
    else if (p.handle.includes('spray')) sizes = ['100ml Mist'];
    else if (p.handle.includes('candle')) sizes = ['300g Soy Wax'];
    else sizes = ['Standard'];
    variantPrices = { [sizes[0]]: basePkr };
  } else if (isSilk) {
    category = 'Wellness';
    material = 'Mulberry Silk';
    sizes = ['Standard (48x73cm)', 'King (50x90cm)'];
    variantPrices = {
      'Standard (48x73cm)': basePkr,
      'King (50x90cm)': basePkr + 2500
    };
  } else {
    // Bath
    category = 'Bath & Towels';
    material = 'Tommy 600 GSM Cotton';
    if (p.productType === 'Bundle_Towels') {
      sizes = ['4-Piece Set', '6-Piece Luxury Suite'];
      variantPrices = {
        '4-Piece Set': basePkr,
        '6-Piece Luxury Suite': basePkr + 6000
      };
    } else if (p.productType === 'Bath Mat') {
      sizes = ['Bath Mat (50x80cm)'];
      variantPrices = { 'Bath Mat (50x80cm)': basePkr };
    } else {
      sizes = ['Bath Sheet (90x165cm)'];
      variantPrices = { 'Bath Sheet (90x165cm)': basePkr };
    }
  }

  const colorName = extractSpecificColorName(p.handle, p.colour);
  const colorHex = resolveHex(colorName);

  const titleName = p.name || p.handle.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const productObj = {
    id: p.handle,
    name: titleName,
    subtitle: `${material} · MORFE Rituals Collection`,
    category,
    material,
    price: basePkr,
    salePrice: Math.round(basePkr * 1.25),
    variantPrices,
    minPrice: Math.min(...Object.values(variantPrices)),
    maxPrice: Math.max(...Object.values(variantPrices)),
    colors: [
      {
        name: colorName,
        hex: colorHex,
        image: imgs[0],
        gallery: imgs
      }
    ],
    sizes,
    images: imgs,
    description: `Crafted for restorative evenings and tranquil mornings. Made from the purest ${material.toLowerCase()} to elevate your daily sanctuary.`,
    weaveDetails: isSleepwear ? 'Ultra-fine rib-knit stretch jersey' : (category === 'Bath & Towels' ? '600 GSM zero-twist combed Turkish cotton' : '100% Pure Grade 6A 22-Momme Mulberry Silk'),
    threadCountOrWeight: isSleepwear ? '220 GSM Breathable Modal Jersey' : (category === 'Bath & Towels' ? '600 GSM Combed Cotton' : '22 Momme Silk'),
    includes: [titleName],
    care: [
      'Machine wash gentle with like colours',
      'Air dry flat away from direct sunlight',
      'Store in a cool dry place'
    ],
    dimensions: {
      [sizes[0]]: sizes[0]
    },
    rating: Number((4.8 + (Math.random() * 0.2)).toFixed(1)),
    reviewsCount: Math.floor(30 + Math.random() * 85),
    isNew: p.handle.includes('spray') || p.handle.includes('riley'),
    isBestseller: p.handle.includes('bath-sheet') || p.handle.includes('silk'),
    department: category,
    handle: p.handle
  };

  expandedProducts.push(productObj);

  imageManifest[p.handle] = {
    title: productObj.name,
    collection: productObj.material,
    productType: category,
    color: colorName,
    images: imgs.map((img, idx) => ({
      src: img,
      remoteUrl: img,
      alt: `${productObj.name} - View ${idx + 1}`,
      role: idx === 0 ? 'hero' : 'gallery',
      position: idx + 1,
      colorOrPrint: colorName
    }))
  };
});

console.log('Total products after Bath, Sleepwear, Wellness:', expandedProducts.length);

// 7. Process Kids & Baby (15 products from Bed Builder)
const kidsProducts = (bbData.products || []).filter(p => 
  p.productType && (
    p.productType.includes('Cot') || 
    p.productType.includes('Baby') || 
    p.productType.includes('Bassinet')
  )
).slice(0, 15);

kidsProducts.forEach(k => {
  if (expandedProducts.find(x => x.id === k.handle)) return;

  const img = k.featuredImage?.url || k.variants?.[0]?.imageUrl;
  if (!img) return;

  const baseAud = k.variants?.[0]?.price || 44;
  const basePkr = toPKR(baseAud, 160, 250);

  const isBassinet = k.productType.includes('Bassinet');
  const isQuilt = k.productType.includes('Quilt');
  const size = isBassinet ? 'Bassinet (40x80cm)' : (isQuilt ? 'Cot Quilt (100x120cm)' : 'Cot (77x132cm)');

  const colorParts = k.handle.replace('washed-cotton-', '').replace('cot-washed-cotton-', '').replace('bassinet-washed-cotton-', '').split('-');
  const colorName = colorParts.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const colorHex = resolveHex(colorParts.join(' '));

  const productObj = {
    id: k.handle,
    name: k.title || `Leo Washed Cotton - ${colorName} Cot Sheet`,
    subtitle: `Leo Washed Cotton · MORFE Petite Collection`,
    category: 'Kids & Baby',
    material: 'Leo Washed Cotton',
    price: basePkr,
    salePrice: Math.round(basePkr * 1.25),
    variantPrices: {
      [size]: basePkr
    },
    minPrice: basePkr,
    maxPrice: basePkr,
    colors: [
      {
        name: colorName,
        hex: colorHex,
        image: img,
        gallery: [img]
      }
    ],
    sizes: [size],
    images: [img],
    description: `OEKO-TEX® certified 100% organic washed cotton tailored especially for nursery mattresses. Ultra-gentle on delicate skin with all-around elastic for a safe, secure fit.`,
    weaveDetails: 'Pre-washed percale weave with reinforced elastic border',
    threadCountOrWeight: '300 Thread Count Organic Cotton',
    includes: [k.title || '1x Nursery Fitted Sheet'],
    care: [
      'Machine wash warm with mild baby-safe detergent',
      'Tumble dry gentle',
      'Safe for sensitive newborn skin'
    ],
    dimensions: {
      [size]: size
    },
    rating: Number((4.9 + (Math.random() * 0.1)).toFixed(1)),
    reviewsCount: Math.floor(15 + Math.random() * 40),
    isNew: k.handle.includes('buddy') || k.handle.includes('lala'),
    isBestseller: k.handle.includes('henley') || k.handle.includes('gingham'),
    department: 'Kids & Baby',
    handle: k.handle
  };

  expandedProducts.push(productObj);

  imageManifest[k.handle] = {
    title: productObj.name,
    collection: productObj.material,
    productType: 'Kids & Baby',
    color: colorName,
    images: [
      {
        src: img,
        remoteUrl: img,
        alt: `${productObj.name} - View 1`,
        role: 'hero',
        position: 1,
        colorOrPrint: colorName
      }
    ]
  };
});

console.log('Total products after Kids & Baby:', expandedProducts.length);

// 8. Process Bedding Sets & Bundles (10 products from homepage)
const homeData = JSON.parse(fs.readFileSync(path.join(SCRATCH_DIR, 'homepage_next_data.json'), 'utf8'));
const homeCollections = homeData.props?.pageProps?.ucCollections || [];
const bundleProducts = [];
homeCollections.forEach(c => {
  (c.products || []).forEach(p => {
    if (p.type === 'bundle' && p.handle.includes('bed-sheets') && !bundleProducts.find(x => x.handle === p.handle)) {
      bundleProducts.push(p);
    }
  });
});

bundleProducts.slice(0, 10).forEach(b => {
  if (expandedProducts.find(x => x.id === b.handle)) return;

  const imgs = (b.images || []).map(i => cleanImgUrl(i)).filter(Boolean);
  if (imgs.length === 0) return;

  let material = 'Eden Cotton';
  if (b.handle.includes('washed-cotton') || b.handle.includes('striped')) material = 'Leo Washed Cotton';
  else if (b.handle.includes('organic')) material = 'Jude Organic Cotton';
  else if (b.handle.includes('linen')) material = 'Eve Linen';

  const baseAud = b.price?.value || 52;
  const basePkr = toPKR(baseAud, 350, 1000); // Bundles are full suites

  const rawColor = b.handle.split('-').slice(-2).join(' ');
  const colorName = rawColor.charAt(0).toUpperCase() + rawColor.slice(1);
  const colorHex = resolveHex(rawColor);

  const productObj = {
    id: b.handle,
    name: b.name || `${material} - ${colorName} Bed Sheets Set`,
    subtitle: `${material} · MORFE Complete Suite`,
    category: 'Bed Sheets & Sets',
    material,
    price: basePkr,
    salePrice: Math.round(basePkr * 1.3),
    variantPrices: {
      'Double': basePkr - 4000,
      'Queen': basePkr,
      'King': basePkr + 4000,
      'Super King': basePkr + 8000
    },
    minPrice: basePkr - 4000,
    maxPrice: basePkr + 8000,
    colors: [
      {
        name: colorName,
        hex: colorHex,
        image: imgs[0],
        gallery: imgs
      }
    ],
    sizes: ['Double', 'Queen', 'King', 'Super King'],
    images: imgs,
    description: `The complete coordinated sleep suite. Includes 1x fitted sheet with our signature 55cm deep elastic wall, 1x tailored flat sheet, and 2x matching envelope pillowcases.`,
    weaveDetails: 'Smooth buttery sateen / washed percale weave pre-softened with natural enzymes',
    threadCountOrWeight: '400 Thread Count Long-Staple Cotton',
    includes: [
      '1x 55cm Deep Wall Fitted Sheet',
      '1x Tailored Double-Hem Flat Sheet',
      '2x Envelope Standard Pillowcases'
    ],
    care: [
      'Warm machine wash with gentle liquid detergent',
      'Line dry or tumble dry low',
      'Do not dry clean'
    ],
    dimensions: {
      'Queen': 'Fitted: 152x203+55cm | Flat: 245x265cm | Pillowcases: 48x73cm',
      'King': 'Fitted: 180x203+55cm | Flat: 275x265cm | Pillowcases: 48x73cm'
    },
    rating: Number((4.8 + (Math.random() * 0.2)).toFixed(1)),
    reviewsCount: Math.floor(45 + Math.random() * 120),
    isNew: b.handle.includes('winnie') || b.handle.includes('rue'),
    isBestseller: true,
    department: 'Bed Sheets & Sets',
    handle: b.handle
  };

  expandedProducts.push(productObj);

  imageManifest[b.handle] = {
    title: productObj.name,
    collection: productObj.material,
    productType: 'Bed Sheets & Sets',
    color: colorName,
    images: imgs.map((img, idx) => ({
      src: img,
      remoteUrl: img,
      alt: `${productObj.name} - View ${idx + 1}`,
      role: idx === 0 ? 'hero' : 'gallery',
      position: idx + 1,
      colorOrPrint: colorName
    }))
  };
});

console.log('FINAL Total expanded products:', expandedProducts.length);

// Summary by category
const summary = {};
expandedProducts.forEach(p => {
  summary[p.category] = (summary[p.category] || 0) + 1;
});
console.log('FINAL Category breakdown:', summary);

// Write outputs
fs.writeFileSync('src/data/imageManifest.json', JSON.stringify(imageManifest, null, 2));
console.log('Saved src/data/imageManifest.json with entries:', Object.keys(imageManifest).length);

// Update mockData.ts
const updatedMockDataContent = existingMockContent.replace(
  /export const PRODUCTS: Product\[\] = \[[\s\S]*?\];\n\nexport const BEDROOM_LOOKS/,
  `export const PRODUCTS: Product[] = ${JSON.stringify(expandedProducts, null, 2)};\n\nexport const BEDROOM_LOOKS`
);
fs.writeFileSync('src/data/mockData.ts', updatedMockDataContent);
console.log('Successfully updated src/data/mockData.ts with', expandedProducts.length, 'products');

// Update products.ts with complete CatalogProduct[]
const catalogProducts = expandedProducts.map(p => ({
  id: p.id,
  handle: p.handle || p.id,
  title: p.name,
  collectionName: p.material,
  productType: p.category,
  colorOrPrint: p.colors[0]?.name || 'Standard',
  colorGroup: p.colors[0]?.name || 'Neutral',
  fabric: p.material,
  description: p.description,
  features: p.includes || [],
  materialDetails: [p.weaveDetails, p.threadCountOrWeight],
  careInstructions: p.care || [],
  sourceProductUrl: `https://sheetsociety.com/en/products/${p.handle || p.id}`,
  sourceRegion: 'en (PKR demo)',
  sourceCheckedAt: '2026-11-20T19:00:00.000Z',
  sourceCurrency: 'PKR',
  sourcePriceFrom: p.price,
  sourceCompareAtPrice: p.salePrice || null,
  demoPricePKR: p.price,
  demoCompareAtPricePKR: p.salePrice || null,
  images: p.images.map((img, i) => ({
    src: img,
    remoteUrl: img,
    alt: `${p.name} - View ${i + 1}`,
    role: i === 0 ? 'hero' : 'gallery',
    position: i + 1,
    colorOrPrint: p.colors[0]?.name || null
  })),
  options: [
    { name: 'Size', values: p.sizes },
    { name: 'Color', values: p.colors.map(c => c.name) }
  ],
  variants: p.sizes.map((s, idx) => ({
    id: `${p.id}-${s.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    sourceVariantId: null,
    title: s,
    sku: `MORFE-${p.id.slice(0, 10).toUpperCase()}-${idx + 1}`,
    size: s,
    colorOrPrint: p.colors[0]?.name || null,
    sourcePrice: (p.variantPrices && p.variantPrices[s]) || p.price,
    sourceCompareAtPrice: p.salePrice || null,
    demoPricePKR: (p.variantPrices && p.variantPrices[s]) || p.price,
    availability: 'available'
  })),
  rating: p.rating,
  reviewsCount: p.reviewsCount
}));

const productsTsContent = `// CANONICAL MORFE EXPANDED CATALOGUE
// Source: https://sheetsociety.com/en
// Regional Storefront: en (PKR client demonstration)
// Generated: 2026-11-20

export interface ProductImage {
  src: string;
  remoteUrl: string;
  alt: string;
  role: 'hero' | 'gallery' | 'detail' | 'swatch' | 'feature';
  position: number;
  colorOrPrint: string | null;
}

export interface ProductVariant {
  id: string;
  sourceVariantId: string | null;
  title: string;
  sku: string | null;
  size: string | null;
  colorOrPrint: string | null;
  sourcePrice: number | null;
  sourceCompareAtPrice: number | null;
  demoPricePKR: number;
  availability: 'available' | 'unavailable' | 'unknown';
}

export interface CatalogProduct {
  id: string;
  handle: string;
  title: string;
  collectionName: string;
  productType: string;
  colorOrPrint: string;
  colorGroup: string;
  fabric: string;
  description: string;
  features: string[];
  materialDetails: string[];
  careInstructions: string[];
  sourceProductUrl: string;
  sourceRegion: string;
  sourceCheckedAt: string;
  sourceCurrency: string;
  sourcePriceFrom: number;
  sourceCompareAtPrice: number | null;
  demoPricePKR: number;
  demoCompareAtPricePKR: number | null;
  images: ProductImage[];
  options: any[];
  variants: ProductVariant[];
  rating: number;
  reviewsCount: number;
}

export const SHEET_SOCIETY_PRODUCTS: CatalogProduct[] = ${JSON.stringify(catalogProducts, null, 2)};

export default SHEET_SOCIETY_PRODUCTS;
`;

fs.writeFileSync('src/data/products.ts', productsTsContent);
console.log('Successfully updated src/data/products.ts with', catalogProducts.length, 'CatalogProduct records');

