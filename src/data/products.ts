// CANONICAL MORFE EXPANDED CATALOGUE
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

export const SHEET_SOCIETY_PRODUCTS: CatalogProduct[] = [
  {
    "id": "corduroy-quilt-cover-russet",
    "handle": "corduroy-quilt-cover-russet",
    "title": "Darcy Corduroy - Russet Quilt Cover",
    "collectionName": "Darcy Corduroy",
    "productType": "Quilt Covers",
    "colorOrPrint": "Russet",
    "colorGroup": "Russet",
    "fabric": "Darcy Corduroy",
    "description": "Invisible zipper for quick and easy changes. Arrives prewashed so you can hop straight into bed..",
    "features": [
      "Invisible zipper for quick and easy changes",
      "Arrives prewashed so you can hop straight into bed."
    ],
    "materialDetails": [
      "Thick 100% cotton fabric with plush velvety ribs.. Corduroy on topside and Eden Cotton on underside.. Soft and snuggly like your favourite corduroy pants.. Natural, breathable and hypoallergenic.. OEKO-TEX Certified: no harsh chemicals or dyes.",
      "cotton"
    ],
    "careInstructions": [
      "Wash Darcy Corduroy with a small amount of detergent, on a cold, gentle setting. Remember to turn it inside out.",
      "Give a good shake after washing, then dry on the line, in the shade. Avoid direct sunlight.",
      "Creases aren't common, but if they show, a cool iron should smooth them out.",
      "Make sure your sheets are completely dry before folding and storing. Don't store in plastic."
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/corduroy-quilt-cover-russet",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 22500,
    "sourceCompareAtPrice": 32500,
    "demoPricePKR": 22500,
    "demoCompareAtPricePKR": 32500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-russet-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-russet-01.jpg",
        "alt": "Darcy Corduroy - Russet Quilt Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Russet"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-russet-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-russet-02.jpg",
        "alt": "Darcy Corduroy - Russet Quilt Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Russet"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Russet",
          "Hunter-green",
          "Olive",
          "Terracotta"
        ]
      }
    ],
    "variants": [
      {
        "id": "corduroy-quilt-cover-russet-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-CORDUROY-Q-1",
        "size": "Double",
        "colorOrPrint": "Russet",
        "sourcePrice": 22500,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 22500,
        "availability": "available"
      },
      {
        "id": "corduroy-quilt-cover-russet-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-CORDUROY-Q-2",
        "size": "Queen",
        "colorOrPrint": "Russet",
        "sourcePrice": 25000,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 25000,
        "availability": "available"
      },
      {
        "id": "corduroy-quilt-cover-russet-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-CORDUROY-Q-3",
        "size": "King",
        "colorOrPrint": "Russet",
        "sourcePrice": 27500,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 27500,
        "availability": "available"
      },
      {
        "id": "corduroy-quilt-cover-russet-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-CORDUROY-Q-4",
        "size": "Super King",
        "colorOrPrint": "Russet",
        "sourcePrice": 30000,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 30000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 101
  },
  {
    "id": "corduroy-quilt-cover-hunter-green",
    "handle": "corduroy-quilt-cover-hunter-green",
    "title": "Darcy Corduroy - Hunter Green Quilt Cover",
    "collectionName": "Darcy Corduroy",
    "productType": "Quilt Covers",
    "colorOrPrint": "Hunter-green",
    "colorGroup": "Hunter-green",
    "fabric": "Darcy Corduroy",
    "description": "Invisible zipper for quick and easy changes. Arrives prewashed so you can hop straight into bed..",
    "features": [
      "Invisible zipper for quick and easy changes",
      "Arrives prewashed so you can hop straight into bed."
    ],
    "materialDetails": [
      "Thick 100% cotton fabric with plush velvety ribs.. Corduroy on topside and Eden Cotton on underside.. Soft and snuggly like your favourite corduroy pants.. Natural, breathable and hypoallergenic.. OEKO-TEX Certified: no harsh chemicals or dyes.",
      "corduroy, cotton"
    ],
    "careInstructions": [
      "Wash Darcy Corduroy with a small amount of detergent, on a cold, gentle setting. Remember to turn it inside out.",
      "Give a good shake after washing, then dry on the line, in the shade. Avoid direct sunlight.",
      "Creases aren't common, but if they show, a cool iron should smooth them out.",
      "Make sure your sheets are completely dry before folding and storing. Don't store in plastic."
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/corduroy-quilt-cover-hunter-green",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 26000,
    "sourceCompareAtPrice": 32500,
    "demoPricePKR": 26000,
    "demoCompareAtPricePKR": 32500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-hunter-green-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-hunter-green-01.jpg",
        "alt": "Darcy Corduroy - Hunter Green Quilt Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Hunter-green"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-hunter-green-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-hunter-green-02.jpg",
        "alt": "Darcy Corduroy - Hunter Green Quilt Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Hunter-green"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-hunter-green-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-hunter-green-03.jpg",
        "alt": "Darcy Corduroy - Hunter Green Quilt Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Hunter-green"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Hunter-green",
          "Russet",
          "Olive",
          "Terracotta"
        ]
      }
    ],
    "variants": [
      {
        "id": "corduroy-quilt-cover-hunter-green-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-CORDUROY-Q-1",
        "size": "Double",
        "colorOrPrint": "Hunter-green",
        "sourcePrice": 26000,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 26000,
        "availability": "available"
      },
      {
        "id": "corduroy-quilt-cover-hunter-green-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-CORDUROY-Q-2",
        "size": "Queen",
        "colorOrPrint": "Hunter-green",
        "sourcePrice": 29000,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 29000,
        "availability": "available"
      },
      {
        "id": "corduroy-quilt-cover-hunter-green-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-CORDUROY-Q-3",
        "size": "King",
        "colorOrPrint": "Hunter-green",
        "sourcePrice": 31500,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 31500,
        "availability": "available"
      },
      {
        "id": "corduroy-quilt-cover-hunter-green-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-CORDUROY-Q-4",
        "size": "Super King",
        "colorOrPrint": "Hunter-green",
        "sourcePrice": 34500,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 34500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 78
  },
  {
    "id": "corduroy-quilt-cover-olive",
    "handle": "corduroy-quilt-cover-olive",
    "title": "Darcy Corduroy - Olive Solid Quilt Cover",
    "collectionName": "Darcy Corduroy",
    "productType": "Quilt Covers",
    "colorOrPrint": "Olive",
    "colorGroup": "Olive",
    "fabric": "Darcy Corduroy",
    "description": "Invisible zipper for quick and easy changes. Arrives prewashed so you can hop straight into bed..",
    "features": [
      "Invisible zipper for quick and easy changes",
      "Arrives prewashed so you can hop straight into bed."
    ],
    "materialDetails": [
      "Thick 100% cotton fabric with plush velvety ribs.. Corduroy on topside and Eden Cotton on underside.. Soft and snuggly like your favourite corduroy pants.. Natural, breathable and hypoallergenic.. OEKO-TEX Certified: no harsh chemicals or dyes.",
      "corduroy, cotton"
    ],
    "careInstructions": [
      "Wash Darcy Corduroy with a small amount of detergent, on a cold, gentle setting. Remember to turn it inside out.",
      "Give a good shake after washing, then dry on the line, in the shade. Avoid direct sunlight.",
      "Creases aren't common, but if they show, a cool iron should smooth them out.",
      "Make sure your sheets are completely dry before folding and storing. Don't store in plastic."
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/corduroy-quilt-cover-olive",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 26000,
    "sourceCompareAtPrice": 32500,
    "demoPricePKR": 26000,
    "demoCompareAtPricePKR": 32500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-olive-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-olive-01.jpg",
        "alt": "Darcy Corduroy - Olive Solid Quilt Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Olive"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-olive-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-olive-02.jpg",
        "alt": "Darcy Corduroy - Olive Solid Quilt Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Olive"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Olive",
          "Russet",
          "Hunter-green",
          "Terracotta"
        ]
      }
    ],
    "variants": [
      {
        "id": "corduroy-quilt-cover-olive-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-CORDUROY-Q-1",
        "size": "Double",
        "colorOrPrint": "Olive",
        "sourcePrice": 26000,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 26000,
        "availability": "available"
      },
      {
        "id": "corduroy-quilt-cover-olive-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-CORDUROY-Q-2",
        "size": "Queen",
        "colorOrPrint": "Olive",
        "sourcePrice": 29000,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 29000,
        "availability": "available"
      },
      {
        "id": "corduroy-quilt-cover-olive-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-CORDUROY-Q-3",
        "size": "King",
        "colorOrPrint": "Olive",
        "sourcePrice": 31500,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 31500,
        "availability": "available"
      },
      {
        "id": "corduroy-quilt-cover-olive-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-CORDUROY-Q-4",
        "size": "Super King",
        "colorOrPrint": "Olive",
        "sourcePrice": 34500,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 34500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 94
  },
  {
    "id": "corduroy-quilt-cover-terracotta",
    "handle": "corduroy-quilt-cover-terracotta",
    "title": "Darcy Corduroy - Terracotta Quilt Cover",
    "collectionName": "Darcy Corduroy",
    "productType": "Quilt Covers",
    "colorOrPrint": "Terracotta",
    "colorGroup": "Terracotta",
    "fabric": "Darcy Corduroy",
    "description": "Darcy Corduroy crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "corduroy, cotton"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/corduroy-quilt-cover-terracotta",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 17500,
    "sourceCompareAtPrice": 29000,
    "demoPricePKR": 17500,
    "demoCompareAtPricePKR": 29000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-terracotta-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-terracotta-01.jpg",
        "alt": "Darcy Corduroy - Terracotta Quilt Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Terracotta"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-terracotta-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-terracotta-02.jpg",
        "alt": "Darcy Corduroy - Terracotta Quilt Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Terracotta"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-terracotta-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/corduroy-quilt-cover-terracotta-03.jpg",
        "alt": "Darcy Corduroy - Terracotta Quilt Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Terracotta"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Terracotta",
          "Russet",
          "Hunter-green",
          "Olive"
        ]
      }
    ],
    "variants": [
      {
        "id": "corduroy-quilt-cover-terracotta-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-CORDUROY-Q-1",
        "size": "Single",
        "colorOrPrint": "Terracotta",
        "sourcePrice": 17500,
        "sourceCompareAtPrice": 29000,
        "demoPricePKR": 17500,
        "availability": "available"
      },
      {
        "id": "corduroy-quilt-cover-terracotta-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-CORDUROY-Q-2",
        "size": "Double",
        "colorOrPrint": "Terracotta",
        "sourcePrice": 19500,
        "sourceCompareAtPrice": 29000,
        "demoPricePKR": 19500,
        "availability": "available"
      },
      {
        "id": "corduroy-quilt-cover-terracotta-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-CORDUROY-Q-3",
        "size": "Queen",
        "colorOrPrint": "Terracotta",
        "sourcePrice": 21500,
        "sourceCompareAtPrice": 29000,
        "demoPricePKR": 21500,
        "availability": "available"
      },
      {
        "id": "corduroy-quilt-cover-terracotta-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-CORDUROY-Q-4",
        "size": "King",
        "colorOrPrint": "Terracotta",
        "sourcePrice": 24000,
        "sourceCompareAtPrice": 29000,
        "demoPricePKR": 24000,
        "availability": "available"
      },
      {
        "id": "corduroy-quilt-cover-terracotta-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-CORDUROY-Q-5",
        "size": "Super King",
        "colorOrPrint": "Terracotta",
        "sourcePrice": 26000,
        "sourceCompareAtPrice": 29000,
        "demoPricePKR": 26000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 64
  },
  {
    "id": "linen-quilt-cover-cloud",
    "handle": "linen-quilt-cover-cloud",
    "title": "Eve Linen - Cloud Quilt Cover",
    "collectionName": "Eve Linen",
    "productType": "Quilt Covers",
    "colorOrPrint": "Cloud",
    "colorGroup": "Cloud",
    "fabric": "Eve Linen",
    "description": "Eve Linen crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "linen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-quilt-cover-cloud",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 33000,
    "sourceCompareAtPrice": 41500,
    "demoPricePKR": 33000,
    "demoCompareAtPricePKR": 41500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-cloud-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-cloud-01.jpg",
        "alt": "Eve Linen - Cloud Quilt Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Cloud"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-cloud-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-cloud-02.jpg",
        "alt": "Eve Linen - Cloud Quilt Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Cloud"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-cloud-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-cloud-03.jpg",
        "alt": "Eve Linen - Cloud Quilt Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Cloud"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Cloud",
          "White",
          "Warm-white",
          "Sage",
          "Oatmeal",
          "Chocolate"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-quilt-cover-cloud-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-LINEN-QUIL-1",
        "size": "Double",
        "colorOrPrint": "Cloud",
        "sourcePrice": 33000,
        "sourceCompareAtPrice": 41500,
        "demoPricePKR": 33000,
        "availability": "available"
      },
      {
        "id": "linen-quilt-cover-cloud-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-LINEN-QUIL-2",
        "size": "Queen",
        "colorOrPrint": "Cloud",
        "sourcePrice": 36000,
        "sourceCompareAtPrice": 41500,
        "demoPricePKR": 36000,
        "availability": "available"
      },
      {
        "id": "linen-quilt-cover-cloud-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-LINEN-QUIL-3",
        "size": "King",
        "colorOrPrint": "Cloud",
        "sourcePrice": 39000,
        "sourceCompareAtPrice": 41500,
        "demoPricePKR": 39000,
        "availability": "available"
      },
      {
        "id": "linen-quilt-cover-cloud-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-LINEN-QUIL-4",
        "size": "Super King",
        "colorOrPrint": "Cloud",
        "sourcePrice": 42000,
        "sourceCompareAtPrice": 41500,
        "demoPricePKR": 42000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 73
  },
  {
    "id": "linen-quilt-cover-white",
    "handle": "linen-quilt-cover-white",
    "title": "Eve Linen - White Quilt Cover",
    "collectionName": "Eve Linen",
    "productType": "Quilt Covers",
    "colorOrPrint": "White",
    "colorGroup": "White",
    "fabric": "Eve Linen",
    "description": "Eve Linen crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "linen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-quilt-cover-white",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 31500,
    "sourceCompareAtPrice": 39500,
    "demoPricePKR": 31500,
    "demoCompareAtPricePKR": 39500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-white-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-white-01.jpg",
        "alt": "Eve Linen - White Quilt Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "White"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-white-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-white-02.jpg",
        "alt": "Eve Linen - White Quilt Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "White"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-white-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-white-03.jpg",
        "alt": "Eve Linen - White Quilt Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "White",
          "Cloud",
          "Warm-white",
          "Sage",
          "Oatmeal",
          "Chocolate"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-quilt-cover-white-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-LINEN-QUIL-1",
        "size": "Single",
        "colorOrPrint": "White",
        "sourcePrice": 31500,
        "sourceCompareAtPrice": 39500,
        "demoPricePKR": 31500,
        "availability": "available"
      },
      {
        "id": "linen-quilt-cover-white-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-LINEN-QUIL-2",
        "size": "Double",
        "colorOrPrint": "White",
        "sourcePrice": 33000,
        "sourceCompareAtPrice": 39500,
        "demoPricePKR": 33000,
        "availability": "available"
      },
      {
        "id": "linen-quilt-cover-white-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-LINEN-QUIL-3",
        "size": "Queen",
        "colorOrPrint": "White",
        "sourcePrice": 36000,
        "sourceCompareAtPrice": 39500,
        "demoPricePKR": 36000,
        "availability": "available"
      },
      {
        "id": "linen-quilt-cover-white-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-LINEN-QUIL-4",
        "size": "King",
        "colorOrPrint": "White",
        "sourcePrice": 39000,
        "sourceCompareAtPrice": 39500,
        "demoPricePKR": 39000,
        "availability": "available"
      },
      {
        "id": "linen-quilt-cover-white-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-LINEN-QUIL-5",
        "size": "Super King",
        "colorOrPrint": "White",
        "sourcePrice": 42000,
        "sourceCompareAtPrice": 39500,
        "demoPricePKR": 42000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 73
  },
  {
    "id": "linen-quilt-cover-warm-white",
    "handle": "linen-quilt-cover-warm-white",
    "title": "Eve Linen - Warm White Quilt Cover",
    "collectionName": "Eve Linen",
    "productType": "Quilt Covers",
    "colorOrPrint": "Warm-white",
    "colorGroup": "Warm-white",
    "fabric": "Eve Linen",
    "description": "Eve Linen crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "linen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-quilt-cover-warm-white",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 24000,
    "sourceCompareAtPrice": 39500,
    "demoPricePKR": 24000,
    "demoCompareAtPricePKR": 39500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-warm-white-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-warm-white-01.jpg",
        "alt": "Eve Linen - Warm White Quilt Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Warm-white"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-warm-white-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-warm-white-02.jpg",
        "alt": "Eve Linen - Warm White Quilt Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Warm-white"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-warm-white-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-warm-white-03.jpg",
        "alt": "Eve Linen - Warm White Quilt Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Warm-white"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Warm-white",
          "Cloud",
          "White",
          "Sage",
          "Oatmeal",
          "Chocolate"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-quilt-cover-warm-white-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-LINEN-QUIL-1",
        "size": "Single",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 24000,
        "sourceCompareAtPrice": 39500,
        "demoPricePKR": 24000,
        "availability": "available"
      },
      {
        "id": "linen-quilt-cover-warm-white-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-LINEN-QUIL-2",
        "size": "Double",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 25000,
        "sourceCompareAtPrice": 39500,
        "demoPricePKR": 25000,
        "availability": "available"
      },
      {
        "id": "linen-quilt-cover-warm-white-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-LINEN-QUIL-3",
        "size": "Queen",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 27000,
        "sourceCompareAtPrice": 39500,
        "demoPricePKR": 27000,
        "availability": "available"
      },
      {
        "id": "linen-quilt-cover-warm-white-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-LINEN-QUIL-4",
        "size": "King",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 29000,
        "sourceCompareAtPrice": 39500,
        "demoPricePKR": 29000,
        "availability": "available"
      },
      {
        "id": "linen-quilt-cover-warm-white-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-LINEN-QUIL-5",
        "size": "Super King",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 31500,
        "sourceCompareAtPrice": 39500,
        "demoPricePKR": 31500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 43
  },
  {
    "id": "linen-quilt-cover-sage",
    "handle": "linen-quilt-cover-sage",
    "title": "Eve Linen - Sage Quilt Cover",
    "collectionName": "Eve Linen",
    "productType": "Quilt Covers",
    "colorOrPrint": "Sage",
    "colorGroup": "Sage",
    "fabric": "Eve Linen",
    "description": "Eve Linen crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "linen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-quilt-cover-sage",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 31500,
    "sourceCompareAtPrice": 39500,
    "demoPricePKR": 31500,
    "demoCompareAtPricePKR": 39500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-sage-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-sage-01.jpg",
        "alt": "Eve Linen - Sage Quilt Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Sage"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-sage-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-sage-02.jpg",
        "alt": "Eve Linen - Sage Quilt Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Sage"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-sage-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-sage-03.jpg",
        "alt": "Eve Linen - Sage Quilt Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Sage"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Sage",
          "Cloud",
          "White",
          "Warm-white",
          "Oatmeal",
          "Chocolate"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-quilt-cover-sage-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-LINEN-QUIL-1",
        "size": "Single",
        "colorOrPrint": "Sage",
        "sourcePrice": 31500,
        "sourceCompareAtPrice": 39500,
        "demoPricePKR": 31500,
        "availability": "available"
      },
      {
        "id": "linen-quilt-cover-sage-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-LINEN-QUIL-2",
        "size": "Double",
        "colorOrPrint": "Sage",
        "sourcePrice": 33000,
        "sourceCompareAtPrice": 39500,
        "demoPricePKR": 33000,
        "availability": "available"
      },
      {
        "id": "linen-quilt-cover-sage-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-LINEN-QUIL-3",
        "size": "Queen",
        "colorOrPrint": "Sage",
        "sourcePrice": 36000,
        "sourceCompareAtPrice": 39500,
        "demoPricePKR": 36000,
        "availability": "available"
      },
      {
        "id": "linen-quilt-cover-sage-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-LINEN-QUIL-4",
        "size": "King",
        "colorOrPrint": "Sage",
        "sourcePrice": 39000,
        "sourceCompareAtPrice": 39500,
        "demoPricePKR": 39000,
        "availability": "available"
      },
      {
        "id": "linen-quilt-cover-sage-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-LINEN-QUIL-5",
        "size": "Super King",
        "colorOrPrint": "Sage",
        "sourcePrice": 42000,
        "sourceCompareAtPrice": 39500,
        "demoPricePKR": 42000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 66
  },
  {
    "id": "chambray-linen-quilt-cover-oatmeal",
    "handle": "chambray-linen-quilt-cover-oatmeal",
    "title": "Eve Linen - Oatmeal Quilt Cover",
    "collectionName": "Eve Linen",
    "productType": "Quilt Covers",
    "colorOrPrint": "Oatmeal",
    "colorGroup": "Oatmeal",
    "fabric": "Eve Linen",
    "description": "Eve Linen crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "linen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/chambray-linen-quilt-cover-oatmeal",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 31500,
    "sourceCompareAtPrice": 39500,
    "demoPricePKR": 31500,
    "demoCompareAtPricePKR": 39500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/chambray-linen-quilt-cover-oatmeal-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/chambray-linen-quilt-cover-oatmeal-01.jpg",
        "alt": "Eve Linen - Oatmeal Quilt Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Oatmeal"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/chambray-linen-quilt-cover-oatmeal-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/chambray-linen-quilt-cover-oatmeal-02.jpg",
        "alt": "Eve Linen - Oatmeal Quilt Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Oatmeal"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/chambray-linen-quilt-cover-oatmeal-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/chambray-linen-quilt-cover-oatmeal-03.jpg",
        "alt": "Eve Linen - Oatmeal Quilt Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Oatmeal"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Oatmeal",
          "Cloud",
          "White",
          "Warm-white",
          "Sage",
          "Chocolate"
        ]
      }
    ],
    "variants": [
      {
        "id": "chambray-linen-quilt-cover-oatmeal-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-CHAMBRAY-L-1",
        "size": "Single",
        "colorOrPrint": "Oatmeal",
        "sourcePrice": 31500,
        "sourceCompareAtPrice": 39500,
        "demoPricePKR": 31500,
        "availability": "available"
      },
      {
        "id": "chambray-linen-quilt-cover-oatmeal-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-CHAMBRAY-L-2",
        "size": "Double",
        "colorOrPrint": "Oatmeal",
        "sourcePrice": 33000,
        "sourceCompareAtPrice": 39500,
        "demoPricePKR": 33000,
        "availability": "available"
      },
      {
        "id": "chambray-linen-quilt-cover-oatmeal-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-CHAMBRAY-L-3",
        "size": "Queen",
        "colorOrPrint": "Oatmeal",
        "sourcePrice": 36000,
        "sourceCompareAtPrice": 39500,
        "demoPricePKR": 36000,
        "availability": "available"
      },
      {
        "id": "chambray-linen-quilt-cover-oatmeal-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-CHAMBRAY-L-4",
        "size": "King",
        "colorOrPrint": "Oatmeal",
        "sourcePrice": 39000,
        "sourceCompareAtPrice": 39500,
        "demoPricePKR": 39000,
        "availability": "available"
      },
      {
        "id": "chambray-linen-quilt-cover-oatmeal-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-CHAMBRAY-L-5",
        "size": "Super King",
        "colorOrPrint": "Oatmeal",
        "sourcePrice": 42000,
        "sourceCompareAtPrice": 39500,
        "demoPricePKR": 42000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 85
  },
  {
    "id": "linen-quilt-cover-chocolate",
    "handle": "linen-quilt-cover-chocolate",
    "title": "Eve Linen - Chocolate Quilt Cover",
    "collectionName": "Eve Linen",
    "productType": "Quilt Covers",
    "colorOrPrint": "Chocolate",
    "colorGroup": "Chocolate",
    "fabric": "Eve Linen",
    "description": "Eve Linen crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "linen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-quilt-cover-chocolate",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 33000,
    "sourceCompareAtPrice": 41500,
    "demoPricePKR": 33000,
    "demoCompareAtPricePKR": 41500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-chocolate-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-chocolate-01.jpg",
        "alt": "Eve Linen - Chocolate Quilt Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Chocolate"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-chocolate-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-chocolate-02.jpg",
        "alt": "Eve Linen - Chocolate Quilt Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Chocolate"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-chocolate-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/linen-quilt-cover-chocolate-03.jpg",
        "alt": "Eve Linen - Chocolate Quilt Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Chocolate"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Chocolate",
          "Cloud",
          "White",
          "Warm-white",
          "Sage",
          "Oatmeal"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-quilt-cover-chocolate-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-LINEN-QUIL-1",
        "size": "Double",
        "colorOrPrint": "Chocolate",
        "sourcePrice": 33000,
        "sourceCompareAtPrice": 41500,
        "demoPricePKR": 33000,
        "availability": "available"
      },
      {
        "id": "linen-quilt-cover-chocolate-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-LINEN-QUIL-2",
        "size": "Queen",
        "colorOrPrint": "Chocolate",
        "sourcePrice": 36000,
        "sourceCompareAtPrice": 41500,
        "demoPricePKR": 36000,
        "availability": "available"
      },
      {
        "id": "linen-quilt-cover-chocolate-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-LINEN-QUIL-3",
        "size": "King",
        "colorOrPrint": "Chocolate",
        "sourcePrice": 39000,
        "sourceCompareAtPrice": 41500,
        "demoPricePKR": 39000,
        "availability": "available"
      },
      {
        "id": "linen-quilt-cover-chocolate-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-LINEN-QUIL-4",
        "size": "Super King",
        "colorOrPrint": "Chocolate",
        "sourcePrice": 42000,
        "sourceCompareAtPrice": 41500,
        "demoPricePKR": 42000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 101
  },
  {
    "id": "quilt-cover-alex-stripe",
    "handle": "quilt-cover-alex-stripe",
    "title": "Eden Cotton - Alex Stripe Quilt Cover",
    "collectionName": "Eden Cotton",
    "productType": "Quilt Covers",
    "colorOrPrint": "Alex-stripe",
    "colorGroup": "Alex-stripe",
    "fabric": "Eden Cotton",
    "description": "Eden Cotton crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "cotton"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/quilt-cover-alex-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 21500,
    "sourceCompareAtPrice": 27000,
    "demoPricePKR": 21500,
    "demoCompareAtPricePKR": 27000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/quilt-cover-alex-stripe-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/quilt-cover-alex-stripe-01.jpg",
        "alt": "Eden Cotton - Alex Stripe Quilt Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Alex-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/quilt-cover-alex-stripe-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/quilt-cover-alex-stripe-02.jpg",
        "alt": "Eden Cotton - Alex Stripe Quilt Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Alex-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/quilt-cover-alex-stripe-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/quilt-cover-alex-stripe-03.jpg",
        "alt": "Eden Cotton - Alex Stripe Quilt Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Alex-stripe"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Alex-stripe"
        ]
      }
    ],
    "variants": [
      {
        "id": "quilt-cover-alex-stripe-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-QUILT-COVE-1",
        "size": "Single",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 21500,
        "sourceCompareAtPrice": 27000,
        "demoPricePKR": 21500,
        "availability": "available"
      },
      {
        "id": "quilt-cover-alex-stripe-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-QUILT-COVE-2",
        "size": "Double",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 23000,
        "sourceCompareAtPrice": 27000,
        "demoPricePKR": 23000,
        "availability": "available"
      },
      {
        "id": "quilt-cover-alex-stripe-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-QUILT-COVE-3",
        "size": "Queen",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 26000,
        "sourceCompareAtPrice": 27000,
        "demoPricePKR": 26000,
        "availability": "available"
      },
      {
        "id": "quilt-cover-alex-stripe-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-QUILT-COVE-4",
        "size": "King",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 29000,
        "sourceCompareAtPrice": 27000,
        "demoPricePKR": 29000,
        "availability": "available"
      },
      {
        "id": "quilt-cover-alex-stripe-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-QUILT-COVE-5",
        "size": "Super King",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 31500,
        "sourceCompareAtPrice": 27000,
        "demoPricePKR": 31500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 73
  },
  {
    "id": "organic-cotton-quilt-cover-russet",
    "handle": "organic-cotton-quilt-cover-russet",
    "title": "Jude Organic Cotton - Russet Quilt Cover",
    "collectionName": "Jude Organic Cotton",
    "productType": "Quilt Covers",
    "colorOrPrint": "Russet",
    "colorGroup": "Russet",
    "fabric": "Jude Organic Cotton",
    "description": "Jude Organic Cotton crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "cotton, jersey"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/organic-cotton-quilt-cover-russet",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 19500,
    "sourceCompareAtPrice": 28000,
    "demoPricePKR": 19500,
    "demoCompareAtPricePKR": 28000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/organic-cotton-quilt-cover-russet-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/organic-cotton-quilt-cover-russet-01.jpg",
        "alt": "Jude Organic Cotton - Russet Quilt Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Russet"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/organic-cotton-quilt-cover-russet-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/organic-cotton-quilt-cover-russet-02.jpg",
        "alt": "Jude Organic Cotton - Russet Quilt Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Russet"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/organic-cotton-quilt-cover-russet-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/organic-cotton-quilt-cover-russet-03.jpg",
        "alt": "Jude Organic Cotton - Russet Quilt Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Russet"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Russet",
          "Bay-blue"
        ]
      }
    ],
    "variants": [
      {
        "id": "organic-cotton-quilt-cover-russet-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-ORGANIC-CO-1",
        "size": "Double",
        "colorOrPrint": "Russet",
        "sourcePrice": 19500,
        "sourceCompareAtPrice": 28000,
        "demoPricePKR": 19500,
        "availability": "available"
      },
      {
        "id": "organic-cotton-quilt-cover-russet-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-ORGANIC-CO-2",
        "size": "Queen",
        "colorOrPrint": "Russet",
        "sourcePrice": 22000,
        "sourceCompareAtPrice": 28000,
        "demoPricePKR": 22000,
        "availability": "available"
      },
      {
        "id": "organic-cotton-quilt-cover-russet-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-ORGANIC-CO-3",
        "size": "King",
        "colorOrPrint": "Russet",
        "sourcePrice": 24500,
        "sourceCompareAtPrice": 28000,
        "demoPricePKR": 24500,
        "availability": "available"
      },
      {
        "id": "organic-cotton-quilt-cover-russet-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-ORGANIC-CO-4",
        "size": "Super King",
        "colorOrPrint": "Russet",
        "sourcePrice": 27000,
        "sourceCompareAtPrice": 28000,
        "demoPricePKR": 27000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 78
  },
  {
    "id": "organic-cotton-quilt-cover-bay-blue",
    "handle": "organic-cotton-quilt-cover-bay-blue",
    "title": "Jude Organic Cotton - Bay Blue Quilt Cover",
    "collectionName": "Jude Organic Cotton",
    "productType": "Quilt Covers",
    "colorOrPrint": "Bay-blue",
    "colorGroup": "Bay-blue",
    "fabric": "Jude Organic Cotton",
    "description": "Jude Organic Cotton crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "cotton, organic-cotton"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/organic-cotton-quilt-cover-bay-blue",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 18500,
    "sourceCompareAtPrice": 26000,
    "demoPricePKR": 18500,
    "demoCompareAtPricePKR": 26000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/organic-cotton-quilt-cover-bay-blue-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/organic-cotton-quilt-cover-bay-blue-01.jpg",
        "alt": "Jude Organic Cotton - Bay Blue Quilt Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Bay-blue"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/organic-cotton-quilt-cover-bay-blue-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/organic-cotton-quilt-cover-bay-blue-02.jpg",
        "alt": "Jude Organic Cotton - Bay Blue Quilt Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Bay-blue"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/organic-cotton-quilt-cover-bay-blue-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/organic-cotton-quilt-cover-bay-blue-03.jpg",
        "alt": "Jude Organic Cotton - Bay Blue Quilt Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Bay-blue"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Bay-blue",
          "Russet"
        ]
      }
    ],
    "variants": [
      {
        "id": "organic-cotton-quilt-cover-bay-blue-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-ORGANIC-CO-1",
        "size": "Single",
        "colorOrPrint": "Bay-blue",
        "sourcePrice": 18500,
        "sourceCompareAtPrice": 26000,
        "demoPricePKR": 18500,
        "availability": "available"
      },
      {
        "id": "organic-cotton-quilt-cover-bay-blue-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-ORGANIC-CO-2",
        "size": "Double",
        "colorOrPrint": "Bay-blue",
        "sourcePrice": 19500,
        "sourceCompareAtPrice": 26000,
        "demoPricePKR": 19500,
        "availability": "available"
      },
      {
        "id": "organic-cotton-quilt-cover-bay-blue-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-ORGANIC-CO-3",
        "size": "Queen",
        "colorOrPrint": "Bay-blue",
        "sourcePrice": 22000,
        "sourceCompareAtPrice": 26000,
        "demoPricePKR": 22000,
        "availability": "available"
      },
      {
        "id": "organic-cotton-quilt-cover-bay-blue-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-ORGANIC-CO-4",
        "size": "King",
        "colorOrPrint": "Bay-blue",
        "sourcePrice": 24500,
        "sourceCompareAtPrice": 26000,
        "demoPricePKR": 24500,
        "availability": "available"
      },
      {
        "id": "organic-cotton-quilt-cover-bay-blue-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-ORGANIC-CO-5",
        "size": "Super King",
        "colorOrPrint": "Bay-blue",
        "sourcePrice": 27000,
        "sourceCompareAtPrice": 26000,
        "demoPricePKR": 27000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 92
  },
  {
    "id": "flannelette-quilt-cover-blythe-stripe",
    "handle": "flannelette-quilt-cover-blythe-stripe",
    "title": "Frankie Flannelette - Blythe Stripe Quilt Cover",
    "collectionName": "Frankie Flannelette",
    "productType": "Quilt Covers",
    "colorOrPrint": "Blythe-stripe",
    "colorGroup": "Blythe-stripe",
    "fabric": "Frankie Flannelette",
    "description": "Frankie Flannelette crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "flannelette"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/flannelette-quilt-cover-blythe-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 10000,
    "sourceCompareAtPrice": 20000,
    "demoPricePKR": 10000,
    "demoCompareAtPricePKR": 20000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/flannelette-quilt-cover-blythe-stripe-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/flannelette-quilt-cover-blythe-stripe-01.jpg",
        "alt": "Frankie Flannelette - Blythe Stripe Quilt Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Blythe-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/flannelette-quilt-cover-blythe-stripe-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/flannelette-quilt-cover-blythe-stripe-02.jpg",
        "alt": "Frankie Flannelette - Blythe Stripe Quilt Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Blythe-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/flannelette-quilt-cover-blythe-stripe-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/flannelette-quilt-cover-blythe-stripe-03.jpg",
        "alt": "Frankie Flannelette - Blythe Stripe Quilt Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Blythe-stripe"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blythe-stripe"
        ]
      }
    ],
    "variants": [
      {
        "id": "flannelette-quilt-cover-blythe-stripe-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-FLANNELETT-1",
        "size": "Single",
        "colorOrPrint": "Blythe-stripe",
        "sourcePrice": 10000,
        "sourceCompareAtPrice": 20000,
        "demoPricePKR": 10000,
        "availability": "available"
      },
      {
        "id": "flannelette-quilt-cover-blythe-stripe-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-FLANNELETT-2",
        "size": "Double",
        "colorOrPrint": "Blythe-stripe",
        "sourcePrice": 11000,
        "sourceCompareAtPrice": 20000,
        "demoPricePKR": 11000,
        "availability": "available"
      },
      {
        "id": "flannelette-quilt-cover-blythe-stripe-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-FLANNELETT-3",
        "size": "Queen",
        "colorOrPrint": "Blythe-stripe",
        "sourcePrice": 12500,
        "sourceCompareAtPrice": 20000,
        "demoPricePKR": 12500,
        "availability": "available"
      },
      {
        "id": "flannelette-quilt-cover-blythe-stripe-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-FLANNELETT-4",
        "size": "King",
        "colorOrPrint": "Blythe-stripe",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 20000,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "flannelette-quilt-cover-blythe-stripe-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-FLANNELETT-5",
        "size": "Super King",
        "colorOrPrint": "Blythe-stripe",
        "sourcePrice": 16000,
        "sourceCompareAtPrice": 20000,
        "demoPricePKR": 16000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 106
  },
  {
    "id": "ruched-cotton-quilt-cover-white",
    "handle": "ruched-cotton-quilt-cover-white",
    "title": "Sofia Ruched Cotton - White Quilt Cover",
    "collectionName": "Sofia Ruched Cotton",
    "productType": "Quilt Covers",
    "colorOrPrint": "White",
    "colorGroup": "White",
    "fabric": "Sofia Ruched Cotton",
    "description": "Sofia Ruched Cotton crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "cotton, ruched-cotton, washed-cotton"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/ruched-cotton-quilt-cover-white",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 23000,
    "sourceCompareAtPrice": 29000,
    "demoPricePKR": 23000,
    "demoCompareAtPricePKR": 29000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/ruched-cotton-quilt-cover-white-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/ruched-cotton-quilt-cover-white-01.jpg",
        "alt": "Sofia Ruched Cotton - White Quilt Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "White"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/ruched-cotton-quilt-cover-white-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/ruched-cotton-quilt-cover-white-02.jpg",
        "alt": "Sofia Ruched Cotton - White Quilt Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "White"
      },
      {
        "src": "/assets/sheetsociety-catalog/quilt-covers/ruched-cotton-quilt-cover-white-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/quilt-covers/ruched-cotton-quilt-cover-white-03.jpg",
        "alt": "Sofia Ruched Cotton - White Quilt Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "White"
        ]
      }
    ],
    "variants": [
      {
        "id": "ruched-cotton-quilt-cover-white-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-RUCHED-COT-1",
        "size": "Single",
        "colorOrPrint": "White",
        "sourcePrice": 23000,
        "sourceCompareAtPrice": 29000,
        "demoPricePKR": 23000,
        "availability": "available"
      },
      {
        "id": "ruched-cotton-quilt-cover-white-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-RUCHED-COT-2",
        "size": "Double",
        "colorOrPrint": "White",
        "sourcePrice": 26000,
        "sourceCompareAtPrice": 29000,
        "demoPricePKR": 26000,
        "availability": "available"
      },
      {
        "id": "ruched-cotton-quilt-cover-white-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-RUCHED-COT-3",
        "size": "Queen",
        "colorOrPrint": "White",
        "sourcePrice": 29000,
        "sourceCompareAtPrice": 29000,
        "demoPricePKR": 29000,
        "availability": "available"
      },
      {
        "id": "ruched-cotton-quilt-cover-white-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-RUCHED-COT-4",
        "size": "King",
        "colorOrPrint": "White",
        "sourcePrice": 31500,
        "sourceCompareAtPrice": 29000,
        "demoPricePKR": 31500,
        "availability": "available"
      },
      {
        "id": "ruched-cotton-quilt-cover-white-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-RUCHED-COT-5",
        "size": "Super King",
        "colorOrPrint": "White",
        "sourcePrice": 34500,
        "sourceCompareAtPrice": 29000,
        "demoPricePKR": 34500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 64
  },
  {
    "id": "linen-fitted-sheet-cloud",
    "handle": "linen-fitted-sheet-cloud",
    "title": "Eve Linen - Cloud Fitted Sheet",
    "collectionName": "Eve Linen",
    "productType": "Fitted Sheets",
    "colorOrPrint": "Cloud",
    "colorGroup": "Cloud",
    "fabric": "Eve Linen",
    "description": "Eve Linen crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "linen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-fitted-sheet-cloud",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 23000,
    "sourceCompareAtPrice": 29000,
    "demoPricePKR": 23000,
    "demoCompareAtPricePKR": 29000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-cloud-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-cloud-01.jpg",
        "alt": "Eve Linen - Cloud Fitted Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Cloud"
      },
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-cloud-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-cloud-02.jpg",
        "alt": "Eve Linen - Cloud Fitted Sheet - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Cloud"
      },
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-cloud-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-cloud-03.jpg",
        "alt": "Eve Linen - Cloud Fitted Sheet - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Cloud"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Cloud",
          "Warm-white",
          "Marshmallow",
          "White"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-fitted-sheet-cloud-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-LINEN-FITT-1",
        "size": "Double",
        "colorOrPrint": "Cloud",
        "sourcePrice": 23000,
        "sourceCompareAtPrice": 29000,
        "demoPricePKR": 23000,
        "availability": "available"
      },
      {
        "id": "linen-fitted-sheet-cloud-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-LINEN-FITT-2",
        "size": "Queen",
        "colorOrPrint": "Cloud",
        "sourcePrice": 26000,
        "sourceCompareAtPrice": 29000,
        "demoPricePKR": 26000,
        "availability": "available"
      },
      {
        "id": "linen-fitted-sheet-cloud-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-LINEN-FITT-3",
        "size": "King",
        "colorOrPrint": "Cloud",
        "sourcePrice": 27500,
        "sourceCompareAtPrice": 29000,
        "demoPricePKR": 27500,
        "availability": "available"
      },
      {
        "id": "linen-fitted-sheet-cloud-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-LINEN-FITT-4",
        "size": "Super King",
        "colorOrPrint": "Cloud",
        "sourcePrice": 30000,
        "sourceCompareAtPrice": 29000,
        "demoPricePKR": 30000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 80
  },
  {
    "id": "linen-fitted-sheet-warm-white",
    "handle": "linen-fitted-sheet-warm-white",
    "title": "Eve Linen - Warm White Fitted Sheet",
    "collectionName": "Eve Linen",
    "productType": "Fitted Sheets",
    "colorOrPrint": "Warm-white",
    "colorGroup": "Warm-white",
    "fabric": "Eve Linen",
    "description": "Eve Linen crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "linen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-fitted-sheet-warm-white",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 15000,
    "sourceCompareAtPrice": 25000,
    "demoPricePKR": 15000,
    "demoCompareAtPricePKR": 25000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-warm-white-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-warm-white-01.jpg",
        "alt": "Eve Linen - Warm White Fitted Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Warm-white"
      },
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-warm-white-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-warm-white-02.jpg",
        "alt": "Eve Linen - Warm White Fitted Sheet - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Warm-white"
      },
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-warm-white-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-warm-white-03.jpg",
        "alt": "Eve Linen - Warm White Fitted Sheet - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Warm-white"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "King Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Warm-white",
          "Cloud",
          "Marshmallow",
          "White"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-fitted-sheet-warm-white-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-LINEN-FITT-1",
        "size": "Single",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 15000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 15000,
        "availability": "available"
      },
      {
        "id": "linen-fitted-sheet-warm-white-king-single",
        "sourceVariantId": null,
        "title": "King Single",
        "sku": "MORFE-LINEN-FITT-2",
        "size": "King Single",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 16000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 16000,
        "availability": "available"
      },
      {
        "id": "linen-fitted-sheet-warm-white-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-LINEN-FITT-3",
        "size": "Double",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 17500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 17500,
        "availability": "available"
      },
      {
        "id": "linen-fitted-sheet-warm-white-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-LINEN-FITT-4",
        "size": "Queen",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 19500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 19500,
        "availability": "available"
      },
      {
        "id": "linen-fitted-sheet-warm-white-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-LINEN-FITT-5",
        "size": "King",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 20500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 20500,
        "availability": "available"
      },
      {
        "id": "linen-fitted-sheet-warm-white-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-LINEN-FITT-6",
        "size": "Super King",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 22500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 22500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 50
  },
  {
    "id": "linen-fitted-sheet-marshmallow",
    "handle": "linen-fitted-sheet-marshmallow",
    "title": "Eve Linen - Marshmallow Fitted Sheet",
    "collectionName": "Eve Linen",
    "productType": "Fitted Sheets",
    "colorOrPrint": "Marshmallow",
    "colorGroup": "Marshmallow",
    "fabric": "Eve Linen",
    "description": "Eve Linen crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "linen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-fitted-sheet-marshmallow",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 17500,
    "sourceCompareAtPrice": 25000,
    "demoPricePKR": 17500,
    "demoCompareAtPricePKR": 25000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-marshmallow-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-marshmallow-01.jpg",
        "alt": "Eve Linen - Marshmallow Fitted Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Marshmallow"
      },
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-marshmallow-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-marshmallow-02.jpg",
        "alt": "Eve Linen - Marshmallow Fitted Sheet - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Marshmallow"
      },
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-marshmallow-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-marshmallow-03.jpg",
        "alt": "Eve Linen - Marshmallow Fitted Sheet - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Marshmallow"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "King Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Marshmallow",
          "Cloud",
          "Warm-white",
          "White"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-fitted-sheet-marshmallow-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-LINEN-FITT-1",
        "size": "Single",
        "colorOrPrint": "Marshmallow",
        "sourcePrice": 17500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 17500,
        "availability": "available"
      },
      {
        "id": "linen-fitted-sheet-marshmallow-king-single",
        "sourceVariantId": null,
        "title": "King Single",
        "sku": "MORFE-LINEN-FITT-2",
        "size": "King Single",
        "colorOrPrint": "Marshmallow",
        "sourcePrice": 19000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 19000,
        "availability": "available"
      },
      {
        "id": "linen-fitted-sheet-marshmallow-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-LINEN-FITT-3",
        "size": "Double",
        "colorOrPrint": "Marshmallow",
        "sourcePrice": 20000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 20000,
        "availability": "available"
      },
      {
        "id": "linen-fitted-sheet-marshmallow-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-LINEN-FITT-4",
        "size": "Queen",
        "colorOrPrint": "Marshmallow",
        "sourcePrice": 22500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 22500,
        "availability": "available"
      },
      {
        "id": "linen-fitted-sheet-marshmallow-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-LINEN-FITT-5",
        "size": "King",
        "colorOrPrint": "Marshmallow",
        "sourcePrice": 24000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 24000,
        "availability": "available"
      },
      {
        "id": "linen-fitted-sheet-marshmallow-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-LINEN-FITT-6",
        "size": "Super King",
        "colorOrPrint": "Marshmallow",
        "sourcePrice": 26500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 26500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 57
  },
  {
    "id": "linen-fitted-sheet-white",
    "handle": "linen-fitted-sheet-white",
    "title": "Eve Linen - White Fitted Sheet",
    "collectionName": "Eve Linen",
    "productType": "Fitted Sheets",
    "colorOrPrint": "White",
    "colorGroup": "White",
    "fabric": "Eve Linen",
    "description": "Eve Linen crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "linen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-fitted-sheet-white",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 20000,
    "sourceCompareAtPrice": 25000,
    "demoPricePKR": 20000,
    "demoCompareAtPricePKR": 25000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-white-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-white-01.jpg",
        "alt": "Eve Linen - White Fitted Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "White"
      },
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-white-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-white-02.jpg",
        "alt": "Eve Linen - White Fitted Sheet - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "White"
      },
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-white-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/linen-fitted-sheet-white-03.jpg",
        "alt": "Eve Linen - White Fitted Sheet - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "Long Single",
          "King Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "White",
          "Cloud",
          "Warm-white",
          "Marshmallow"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-fitted-sheet-white-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-LINEN-FITT-1",
        "size": "Single",
        "colorOrPrint": "White",
        "sourcePrice": 20000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 20000,
        "availability": "available"
      },
      {
        "id": "linen-fitted-sheet-white-long-single",
        "sourceVariantId": null,
        "title": "Long Single",
        "sku": "MORFE-LINEN-FITT-2",
        "size": "Long Single",
        "colorOrPrint": "White",
        "sourcePrice": 21500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 21500,
        "availability": "available"
      },
      {
        "id": "linen-fitted-sheet-white-king-single",
        "sourceVariantId": null,
        "title": "King Single",
        "sku": "MORFE-LINEN-FITT-3",
        "size": "King Single",
        "colorOrPrint": "White",
        "sourcePrice": 21500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 21500,
        "availability": "available"
      },
      {
        "id": "linen-fitted-sheet-white-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-LINEN-FITT-4",
        "size": "Double",
        "colorOrPrint": "White",
        "sourcePrice": 23000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 23000,
        "availability": "available"
      },
      {
        "id": "linen-fitted-sheet-white-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-LINEN-FITT-5",
        "size": "Queen",
        "colorOrPrint": "White",
        "sourcePrice": 26000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 26000,
        "availability": "available"
      },
      {
        "id": "linen-fitted-sheet-white-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-LINEN-FITT-6",
        "size": "King",
        "colorOrPrint": "White",
        "sourcePrice": 27500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 27500,
        "availability": "available"
      },
      {
        "id": "linen-fitted-sheet-white-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-LINEN-FITT-7",
        "size": "Super King",
        "colorOrPrint": "White",
        "sourcePrice": 30000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 30000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 80
  },
  {
    "id": "organic-cotton-fitted-sheet-russet",
    "handle": "organic-cotton-fitted-sheet-russet",
    "title": "Jude Organic Cotton - Russet Fitted Sheet",
    "collectionName": "Jude Organic Cotton",
    "productType": "Fitted Sheets",
    "colorOrPrint": "Russet",
    "colorGroup": "Russet",
    "fabric": "Jude Organic Cotton",
    "description": "Jude Organic Cotton crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "cotton, jersey"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/organic-cotton-fitted-sheet-russet",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 10500,
    "sourceCompareAtPrice": 15500,
    "demoPricePKR": 10500,
    "demoCompareAtPricePKR": 15500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/organic-cotton-fitted-sheet-russet-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/organic-cotton-fitted-sheet-russet-01.jpg",
        "alt": "Jude Organic Cotton - Russet Fitted Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Russet"
      },
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/organic-cotton-fitted-sheet-russet-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/organic-cotton-fitted-sheet-russet-02.jpg",
        "alt": "Jude Organic Cotton - Russet Fitted Sheet - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Russet"
      },
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/organic-cotton-fitted-sheet-russet-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/organic-cotton-fitted-sheet-russet-03.jpg",
        "alt": "Jude Organic Cotton - Russet Fitted Sheet - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Russet"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Russet",
          "White"
        ]
      }
    ],
    "variants": [
      {
        "id": "organic-cotton-fitted-sheet-russet-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-ORGANIC-CO-1",
        "size": "Double",
        "colorOrPrint": "Russet",
        "sourcePrice": 10500,
        "sourceCompareAtPrice": 15500,
        "demoPricePKR": 10500,
        "availability": "available"
      },
      {
        "id": "organic-cotton-fitted-sheet-russet-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-ORGANIC-CO-2",
        "size": "Queen",
        "colorOrPrint": "Russet",
        "sourcePrice": 12000,
        "sourceCompareAtPrice": 15500,
        "demoPricePKR": 12000,
        "availability": "available"
      },
      {
        "id": "organic-cotton-fitted-sheet-russet-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-ORGANIC-CO-3",
        "size": "King",
        "colorOrPrint": "Russet",
        "sourcePrice": 13000,
        "sourceCompareAtPrice": 15500,
        "demoPricePKR": 13000,
        "availability": "available"
      },
      {
        "id": "organic-cotton-fitted-sheet-russet-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-ORGANIC-CO-4",
        "size": "Super King",
        "colorOrPrint": "Russet",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 15500,
        "demoPricePKR": 14500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 85
  },
  {
    "id": "organic-cotton-fitted-sheet-white",
    "handle": "organic-cotton-fitted-sheet-white",
    "title": "Jude Organic Cotton - White Fitted Sheet",
    "collectionName": "Jude Organic Cotton",
    "productType": "Fitted Sheets",
    "colorOrPrint": "White",
    "colorGroup": "White",
    "fabric": "Jude Organic Cotton",
    "description": "Jude Organic Cotton crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "cotton, organic-cotton"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/organic-cotton-fitted-sheet-white",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 10000,
    "sourceCompareAtPrice": 12500,
    "demoPricePKR": 10000,
    "demoCompareAtPricePKR": 12500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/organic-cotton-fitted-sheet-white-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/organic-cotton-fitted-sheet-white-01.jpg",
        "alt": "Jude Organic Cotton - White Fitted Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "White"
      },
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/organic-cotton-fitted-sheet-white-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/organic-cotton-fitted-sheet-white-02.jpg",
        "alt": "Jude Organic Cotton - White Fitted Sheet - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "White"
      },
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/organic-cotton-fitted-sheet-white-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/organic-cotton-fitted-sheet-white-03.jpg",
        "alt": "Jude Organic Cotton - White Fitted Sheet - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "King Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "White",
          "Russet"
        ]
      }
    ],
    "variants": [
      {
        "id": "organic-cotton-fitted-sheet-white-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-ORGANIC-CO-1",
        "size": "Single",
        "colorOrPrint": "White",
        "sourcePrice": 10000,
        "sourceCompareAtPrice": 12500,
        "demoPricePKR": 10000,
        "availability": "available"
      },
      {
        "id": "organic-cotton-fitted-sheet-white-king-single",
        "sourceVariantId": null,
        "title": "King Single",
        "sku": "MORFE-ORGANIC-CO-2",
        "size": "King Single",
        "colorOrPrint": "White",
        "sourcePrice": 11500,
        "sourceCompareAtPrice": 12500,
        "demoPricePKR": 11500,
        "availability": "available"
      },
      {
        "id": "organic-cotton-fitted-sheet-white-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-ORGANIC-CO-3",
        "size": "Double",
        "colorOrPrint": "White",
        "sourcePrice": 12000,
        "sourceCompareAtPrice": 12500,
        "demoPricePKR": 12000,
        "availability": "available"
      },
      {
        "id": "organic-cotton-fitted-sheet-white-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-ORGANIC-CO-4",
        "size": "Queen",
        "colorOrPrint": "White",
        "sourcePrice": 13500,
        "sourceCompareAtPrice": 12500,
        "demoPricePKR": 13500,
        "availability": "available"
      },
      {
        "id": "organic-cotton-fitted-sheet-white-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-ORGANIC-CO-5",
        "size": "King",
        "colorOrPrint": "White",
        "sourcePrice": 15000,
        "sourceCompareAtPrice": 12500,
        "demoPricePKR": 15000,
        "availability": "available"
      },
      {
        "id": "organic-cotton-fitted-sheet-white-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-ORGANIC-CO-6",
        "size": "Super King",
        "colorOrPrint": "White",
        "sourcePrice": 16500,
        "sourceCompareAtPrice": 12500,
        "demoPricePKR": 16500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 78
  },
  {
    "id": "fitted-sheet-alex-stripe",
    "handle": "fitted-sheet-alex-stripe",
    "title": "Eden Cotton - Alex Stripe Fitted Sheet",
    "collectionName": "Eden Cotton",
    "productType": "Fitted Sheets",
    "colorOrPrint": "Alex-stripe",
    "colorGroup": "Alex-stripe",
    "fabric": "Eden Cotton",
    "description": "Eden Cotton crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "cotton"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/fitted-sheet-alex-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 11000,
    "sourceCompareAtPrice": 13500,
    "demoPricePKR": 11000,
    "demoCompareAtPricePKR": 13500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/fitted-sheet-alex-stripe-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/fitted-sheet-alex-stripe-01.jpg",
        "alt": "Eden Cotton - Alex Stripe Fitted Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Alex-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/fitted-sheet-alex-stripe-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/fitted-sheet-alex-stripe-02.jpg",
        "alt": "Eden Cotton - Alex Stripe Fitted Sheet - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Alex-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/fitted-sheet-alex-stripe-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/fitted-sheet-alex-stripe-03.jpg",
        "alt": "Eden Cotton - Alex Stripe Fitted Sheet - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Alex-stripe"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "King Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Alex-stripe"
        ]
      }
    ],
    "variants": [
      {
        "id": "fitted-sheet-alex-stripe-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-FITTED-SHE-1",
        "size": "Single",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 11000,
        "sourceCompareAtPrice": 13500,
        "demoPricePKR": 11000,
        "availability": "available"
      },
      {
        "id": "fitted-sheet-alex-stripe-king-single",
        "sourceVariantId": null,
        "title": "King Single",
        "sku": "MORFE-FITTED-SHE-2",
        "size": "King Single",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 12000,
        "sourceCompareAtPrice": 13500,
        "demoPricePKR": 12000,
        "availability": "available"
      },
      {
        "id": "fitted-sheet-alex-stripe-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-FITTED-SHE-3",
        "size": "Double",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 13000,
        "sourceCompareAtPrice": 13500,
        "demoPricePKR": 13000,
        "availability": "available"
      },
      {
        "id": "fitted-sheet-alex-stripe-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-FITTED-SHE-4",
        "size": "Queen",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 13500,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "fitted-sheet-alex-stripe-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-FITTED-SHE-5",
        "size": "King",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 16000,
        "sourceCompareAtPrice": 13500,
        "demoPricePKR": 16000,
        "availability": "available"
      },
      {
        "id": "fitted-sheet-alex-stripe-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-FITTED-SHE-6",
        "size": "Super King",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 17500,
        "sourceCompareAtPrice": 13500,
        "demoPricePKR": 17500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 80
  },
  {
    "id": "flannelette-fitted-sheet-blythe-stripe",
    "handle": "flannelette-fitted-sheet-blythe-stripe",
    "title": "Frankie Flannelette - Blythe Stripe Fitted Sheet",
    "collectionName": "Frankie Flannelette",
    "productType": "Fitted Sheets",
    "colorOrPrint": "Blythe-stripe",
    "colorGroup": "Blythe-stripe",
    "fabric": "Frankie Flannelette",
    "description": "Frankie Flannelette crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "flannelette"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/flannelette-fitted-sheet-blythe-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 4500,
    "sourceCompareAtPrice": 9000,
    "demoPricePKR": 4500,
    "demoCompareAtPricePKR": 9000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/flannelette-fitted-sheet-blythe-stripe-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/flannelette-fitted-sheet-blythe-stripe-01.jpg",
        "alt": "Frankie Flannelette - Blythe Stripe Fitted Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Blythe-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/flannelette-fitted-sheet-blythe-stripe-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/flannelette-fitted-sheet-blythe-stripe-02.jpg",
        "alt": "Frankie Flannelette - Blythe Stripe Fitted Sheet - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Blythe-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/fitted-sheets/flannelette-fitted-sheet-blythe-stripe-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/fitted-sheets/flannelette-fitted-sheet-blythe-stripe-03.jpg",
        "alt": "Frankie Flannelette - Blythe Stripe Fitted Sheet - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Blythe-stripe"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "King Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blythe-stripe"
        ]
      }
    ],
    "variants": [
      {
        "id": "flannelette-fitted-sheet-blythe-stripe-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-FLANNELETT-1",
        "size": "Single",
        "colorOrPrint": "Blythe-stripe",
        "sourcePrice": 4500,
        "sourceCompareAtPrice": 9000,
        "demoPricePKR": 4500,
        "availability": "available"
      },
      {
        "id": "flannelette-fitted-sheet-blythe-stripe-king-single",
        "sourceVariantId": null,
        "title": "King Single",
        "sku": "MORFE-FLANNELETT-2",
        "size": "King Single",
        "colorOrPrint": "Blythe-stripe",
        "sourcePrice": 5500,
        "sourceCompareAtPrice": 9000,
        "demoPricePKR": 5500,
        "availability": "available"
      },
      {
        "id": "flannelette-fitted-sheet-blythe-stripe-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-FLANNELETT-3",
        "size": "Double",
        "colorOrPrint": "Blythe-stripe",
        "sourcePrice": 6000,
        "sourceCompareAtPrice": 9000,
        "demoPricePKR": 6000,
        "availability": "available"
      },
      {
        "id": "flannelette-fitted-sheet-blythe-stripe-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-FLANNELETT-4",
        "size": "Queen",
        "colorOrPrint": "Blythe-stripe",
        "sourcePrice": 7000,
        "sourceCompareAtPrice": 9000,
        "demoPricePKR": 7000,
        "availability": "available"
      },
      {
        "id": "flannelette-fitted-sheet-blythe-stripe-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-FLANNELETT-5",
        "size": "King",
        "colorOrPrint": "Blythe-stripe",
        "sourcePrice": 7500,
        "sourceCompareAtPrice": 9000,
        "demoPricePKR": 7500,
        "availability": "available"
      },
      {
        "id": "flannelette-fitted-sheet-blythe-stripe-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-FLANNELETT-6",
        "size": "Super King",
        "colorOrPrint": "Blythe-stripe",
        "sourcePrice": 8500,
        "sourceCompareAtPrice": 9000,
        "demoPricePKR": 8500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 48
  },
  {
    "id": "linen-flat-sheet-cloud",
    "handle": "linen-flat-sheet-cloud",
    "title": "Eve Linen - Cloud Flat Sheet",
    "collectionName": "Eve Linen",
    "productType": "Flat Sheets",
    "colorOrPrint": "Cloud",
    "colorGroup": "Cloud",
    "fabric": "Eve Linen",
    "description": "Eve Linen crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "linen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-flat-sheet-cloud",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 23000,
    "sourceCompareAtPrice": 29000,
    "demoPricePKR": 23000,
    "demoCompareAtPricePKR": 29000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-cloud-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-cloud-01.jpg",
        "alt": "Eve Linen - Cloud Flat Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Cloud"
      },
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-cloud-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-cloud-02.jpg",
        "alt": "Eve Linen - Cloud Flat Sheet - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Cloud"
      },
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-cloud-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-cloud-03.jpg",
        "alt": "Eve Linen - Cloud Flat Sheet - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Cloud"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Cloud",
          "Warm-white",
          "Marshmallow",
          "White"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-flat-sheet-cloud-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-LINEN-FLAT-1",
        "size": "Double",
        "colorOrPrint": "Cloud",
        "sourcePrice": 23000,
        "sourceCompareAtPrice": 29000,
        "demoPricePKR": 23000,
        "availability": "available"
      },
      {
        "id": "linen-flat-sheet-cloud-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-LINEN-FLAT-2",
        "size": "Queen",
        "colorOrPrint": "Cloud",
        "sourcePrice": 26000,
        "sourceCompareAtPrice": 29000,
        "demoPricePKR": 26000,
        "availability": "available"
      },
      {
        "id": "linen-flat-sheet-cloud-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-LINEN-FLAT-3",
        "size": "King",
        "colorOrPrint": "Cloud",
        "sourcePrice": 27500,
        "sourceCompareAtPrice": 29000,
        "demoPricePKR": 27500,
        "availability": "available"
      },
      {
        "id": "linen-flat-sheet-cloud-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-LINEN-FLAT-4",
        "size": "Super King",
        "colorOrPrint": "Cloud",
        "sourcePrice": 30000,
        "sourceCompareAtPrice": 29000,
        "demoPricePKR": 30000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 66
  },
  {
    "id": "linen-flat-sheet-warm-white",
    "handle": "linen-flat-sheet-warm-white",
    "title": "Eve Linen - Warm White Flat Sheet",
    "collectionName": "Eve Linen",
    "productType": "Flat Sheets",
    "colorOrPrint": "Warm-white",
    "colorGroup": "Warm-white",
    "fabric": "Eve Linen",
    "description": "Eve Linen crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "linen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-flat-sheet-warm-white",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 15000,
    "sourceCompareAtPrice": 25000,
    "demoPricePKR": 15000,
    "demoCompareAtPricePKR": 25000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-warm-white-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-warm-white-01.jpg",
        "alt": "Eve Linen - Warm White Flat Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Warm-white"
      },
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-warm-white-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-warm-white-02.jpg",
        "alt": "Eve Linen - Warm White Flat Sheet - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Warm-white"
      },
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-warm-white-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-warm-white-03.jpg",
        "alt": "Eve Linen - Warm White Flat Sheet - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Warm-white"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "King Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Warm-white",
          "Cloud",
          "Marshmallow",
          "White"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-flat-sheet-warm-white-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-LINEN-FLAT-1",
        "size": "Single",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 15000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 15000,
        "availability": "available"
      },
      {
        "id": "linen-flat-sheet-warm-white-king-single",
        "sourceVariantId": null,
        "title": "King Single",
        "sku": "MORFE-LINEN-FLAT-2",
        "size": "King Single",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 16000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 16000,
        "availability": "available"
      },
      {
        "id": "linen-flat-sheet-warm-white-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-LINEN-FLAT-3",
        "size": "Double",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 17500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 17500,
        "availability": "available"
      },
      {
        "id": "linen-flat-sheet-warm-white-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-LINEN-FLAT-4",
        "size": "Queen",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 19500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 19500,
        "availability": "available"
      },
      {
        "id": "linen-flat-sheet-warm-white-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-LINEN-FLAT-5",
        "size": "King",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 20500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 20500,
        "availability": "available"
      },
      {
        "id": "linen-flat-sheet-warm-white-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-LINEN-FLAT-6",
        "size": "Super King",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 22500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 22500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 101
  },
  {
    "id": "linen-flat-sheet-marshmallow",
    "handle": "linen-flat-sheet-marshmallow",
    "title": "Eve Linen - Marshmallow Flat Sheet",
    "collectionName": "Eve Linen",
    "productType": "Flat Sheets",
    "colorOrPrint": "Marshmallow",
    "colorGroup": "Marshmallow",
    "fabric": "Eve Linen",
    "description": "Eve Linen crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "linen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-flat-sheet-marshmallow",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 17500,
    "sourceCompareAtPrice": 25000,
    "demoPricePKR": 17500,
    "demoCompareAtPricePKR": 25000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-marshmallow-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-marshmallow-01.jpg",
        "alt": "Eve Linen - Marshmallow Flat Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Marshmallow"
      },
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-marshmallow-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-marshmallow-02.jpg",
        "alt": "Eve Linen - Marshmallow Flat Sheet - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Marshmallow"
      },
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-marshmallow-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-marshmallow-03.jpg",
        "alt": "Eve Linen - Marshmallow Flat Sheet - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Marshmallow"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "King Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Marshmallow",
          "Cloud",
          "Warm-white",
          "White"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-flat-sheet-marshmallow-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-LINEN-FLAT-1",
        "size": "Single",
        "colorOrPrint": "Marshmallow",
        "sourcePrice": 17500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 17500,
        "availability": "available"
      },
      {
        "id": "linen-flat-sheet-marshmallow-king-single",
        "sourceVariantId": null,
        "title": "King Single",
        "sku": "MORFE-LINEN-FLAT-2",
        "size": "King Single",
        "colorOrPrint": "Marshmallow",
        "sourcePrice": 19000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 19000,
        "availability": "available"
      },
      {
        "id": "linen-flat-sheet-marshmallow-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-LINEN-FLAT-3",
        "size": "Double",
        "colorOrPrint": "Marshmallow",
        "sourcePrice": 20000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 20000,
        "availability": "available"
      },
      {
        "id": "linen-flat-sheet-marshmallow-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-LINEN-FLAT-4",
        "size": "Queen",
        "colorOrPrint": "Marshmallow",
        "sourcePrice": 22500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 22500,
        "availability": "available"
      },
      {
        "id": "linen-flat-sheet-marshmallow-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-LINEN-FLAT-5",
        "size": "King",
        "colorOrPrint": "Marshmallow",
        "sourcePrice": 24000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 24000,
        "availability": "available"
      },
      {
        "id": "linen-flat-sheet-marshmallow-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-LINEN-FLAT-6",
        "size": "Super King",
        "colorOrPrint": "Marshmallow",
        "sourcePrice": 26500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 26500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 43
  },
  {
    "id": "linen-flat-sheet-white",
    "handle": "linen-flat-sheet-white",
    "title": "Eve Linen - White Flat Sheet",
    "collectionName": "Eve Linen",
    "productType": "Flat Sheets",
    "colorOrPrint": "White",
    "colorGroup": "White",
    "fabric": "Eve Linen",
    "description": "Eve Linen crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "linen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-flat-sheet-white",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 20000,
    "sourceCompareAtPrice": 25000,
    "demoPricePKR": 20000,
    "demoCompareAtPricePKR": 25000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-white-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-white-01.jpg",
        "alt": "Eve Linen - White Flat Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "White"
      },
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-white-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-white-02.jpg",
        "alt": "Eve Linen - White Flat Sheet - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "White"
      },
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-white-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/linen-flat-sheet-white-03.jpg",
        "alt": "Eve Linen - White Flat Sheet - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "King Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "White",
          "Cloud",
          "Warm-white",
          "Marshmallow"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-flat-sheet-white-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-LINEN-FLAT-1",
        "size": "Single",
        "colorOrPrint": "White",
        "sourcePrice": 20000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 20000,
        "availability": "available"
      },
      {
        "id": "linen-flat-sheet-white-king-single",
        "sourceVariantId": null,
        "title": "King Single",
        "sku": "MORFE-LINEN-FLAT-2",
        "size": "King Single",
        "colorOrPrint": "White",
        "sourcePrice": 21500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 21500,
        "availability": "available"
      },
      {
        "id": "linen-flat-sheet-white-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-LINEN-FLAT-3",
        "size": "Double",
        "colorOrPrint": "White",
        "sourcePrice": 23000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 23000,
        "availability": "available"
      },
      {
        "id": "linen-flat-sheet-white-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-LINEN-FLAT-4",
        "size": "Queen",
        "colorOrPrint": "White",
        "sourcePrice": 26000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 26000,
        "availability": "available"
      },
      {
        "id": "linen-flat-sheet-white-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-LINEN-FLAT-5",
        "size": "King",
        "colorOrPrint": "White",
        "sourcePrice": 27500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 27500,
        "availability": "available"
      },
      {
        "id": "linen-flat-sheet-white-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-LINEN-FLAT-6",
        "size": "Super King",
        "colorOrPrint": "White",
        "sourcePrice": 30000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 30000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 66
  },
  {
    "id": "organic-cotton-flat-sheet-russet",
    "handle": "organic-cotton-flat-sheet-russet",
    "title": "Jude Organic Cotton - Russet Flat Sheet",
    "collectionName": "Jude Organic Cotton",
    "productType": "Flat Sheets",
    "colorOrPrint": "Russet",
    "colorGroup": "Russet",
    "fabric": "Jude Organic Cotton",
    "description": "Jude Organic Cotton crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "cotton, jersey"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/organic-cotton-flat-sheet-russet",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 10500,
    "sourceCompareAtPrice": 15500,
    "demoPricePKR": 10500,
    "demoCompareAtPricePKR": 15500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/organic-cotton-flat-sheet-russet-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/organic-cotton-flat-sheet-russet-01.jpg",
        "alt": "Jude Organic Cotton - Russet Flat Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Russet"
      },
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/organic-cotton-flat-sheet-russet-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/organic-cotton-flat-sheet-russet-02.jpg",
        "alt": "Jude Organic Cotton - Russet Flat Sheet - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Russet"
      },
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/organic-cotton-flat-sheet-russet-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/organic-cotton-flat-sheet-russet-03.jpg",
        "alt": "Jude Organic Cotton - Russet Flat Sheet - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Russet"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Russet",
          "White"
        ]
      }
    ],
    "variants": [
      {
        "id": "organic-cotton-flat-sheet-russet-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-ORGANIC-CO-1",
        "size": "Double",
        "colorOrPrint": "Russet",
        "sourcePrice": 10500,
        "sourceCompareAtPrice": 15500,
        "demoPricePKR": 10500,
        "availability": "available"
      },
      {
        "id": "organic-cotton-flat-sheet-russet-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-ORGANIC-CO-2",
        "size": "Queen",
        "colorOrPrint": "Russet",
        "sourcePrice": 12000,
        "sourceCompareAtPrice": 15500,
        "demoPricePKR": 12000,
        "availability": "available"
      },
      {
        "id": "organic-cotton-flat-sheet-russet-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-ORGANIC-CO-3",
        "size": "King",
        "colorOrPrint": "Russet",
        "sourcePrice": 13000,
        "sourceCompareAtPrice": 15500,
        "demoPricePKR": 13000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 71
  },
  {
    "id": "organic-cotton-flat-sheet-white",
    "handle": "organic-cotton-flat-sheet-white",
    "title": "Jude Organic Cotton - White Flat Sheet",
    "collectionName": "Jude Organic Cotton",
    "productType": "Flat Sheets",
    "colorOrPrint": "White",
    "colorGroup": "White",
    "fabric": "Jude Organic Cotton",
    "description": "Jude Organic Cotton crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "cotton, organic-cotton"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/organic-cotton-flat-sheet-white",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 10000,
    "sourceCompareAtPrice": 12500,
    "demoPricePKR": 10000,
    "demoCompareAtPricePKR": 12500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/organic-cotton-flat-sheet-white-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/organic-cotton-flat-sheet-white-01.jpg",
        "alt": "Jude Organic Cotton - White Flat Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "White"
      },
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/organic-cotton-flat-sheet-white-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/organic-cotton-flat-sheet-white-02.jpg",
        "alt": "Jude Organic Cotton - White Flat Sheet - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "White"
      },
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/organic-cotton-flat-sheet-white-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/organic-cotton-flat-sheet-white-03.jpg",
        "alt": "Jude Organic Cotton - White Flat Sheet - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "King Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "White",
          "Russet"
        ]
      }
    ],
    "variants": [
      {
        "id": "organic-cotton-flat-sheet-white-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-ORGANIC-CO-1",
        "size": "Single",
        "colorOrPrint": "White",
        "sourcePrice": 10000,
        "sourceCompareAtPrice": 12500,
        "demoPricePKR": 10000,
        "availability": "available"
      },
      {
        "id": "organic-cotton-flat-sheet-white-king-single",
        "sourceVariantId": null,
        "title": "King Single",
        "sku": "MORFE-ORGANIC-CO-2",
        "size": "King Single",
        "colorOrPrint": "White",
        "sourcePrice": 11500,
        "sourceCompareAtPrice": 12500,
        "demoPricePKR": 11500,
        "availability": "available"
      },
      {
        "id": "organic-cotton-flat-sheet-white-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-ORGANIC-CO-3",
        "size": "Double",
        "colorOrPrint": "White",
        "sourcePrice": 12000,
        "sourceCompareAtPrice": 12500,
        "demoPricePKR": 12000,
        "availability": "available"
      },
      {
        "id": "organic-cotton-flat-sheet-white-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-ORGANIC-CO-4",
        "size": "Queen",
        "colorOrPrint": "White",
        "sourcePrice": 13500,
        "sourceCompareAtPrice": 12500,
        "demoPricePKR": 13500,
        "availability": "available"
      },
      {
        "id": "organic-cotton-flat-sheet-white-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-ORGANIC-CO-5",
        "size": "King",
        "colorOrPrint": "White",
        "sourcePrice": 15000,
        "sourceCompareAtPrice": 12500,
        "demoPricePKR": 15000,
        "availability": "available"
      },
      {
        "id": "organic-cotton-flat-sheet-white-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-ORGANIC-CO-6",
        "size": "Super King",
        "colorOrPrint": "White",
        "sourcePrice": 16500,
        "sourceCompareAtPrice": 12500,
        "demoPricePKR": 16500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 64
  },
  {
    "id": "flat-sheet-alex-stripe",
    "handle": "flat-sheet-alex-stripe",
    "title": "Eden Cotton - Alex Stripe Flat Sheet",
    "collectionName": "Eden Cotton",
    "productType": "Flat Sheets",
    "colorOrPrint": "Alex-stripe",
    "colorGroup": "Alex-stripe",
    "fabric": "Eden Cotton",
    "description": "Eden Cotton crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "cotton"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/flat-sheet-alex-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 11000,
    "sourceCompareAtPrice": 13500,
    "demoPricePKR": 11000,
    "demoCompareAtPricePKR": 13500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/flat-sheet-alex-stripe-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/flat-sheet-alex-stripe-01.jpg",
        "alt": "Eden Cotton - Alex Stripe Flat Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Alex-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/flat-sheet-alex-stripe-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/flat-sheet-alex-stripe-02.jpg",
        "alt": "Eden Cotton - Alex Stripe Flat Sheet - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Alex-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/flat-sheet-alex-stripe-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/flat-sheet-alex-stripe-03.jpg",
        "alt": "Eden Cotton - Alex Stripe Flat Sheet - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Alex-stripe"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "King Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Alex-stripe"
        ]
      }
    ],
    "variants": [
      {
        "id": "flat-sheet-alex-stripe-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-FLAT-SHEET-1",
        "size": "Single",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 11000,
        "sourceCompareAtPrice": 13500,
        "demoPricePKR": 11000,
        "availability": "available"
      },
      {
        "id": "flat-sheet-alex-stripe-king-single",
        "sourceVariantId": null,
        "title": "King Single",
        "sku": "MORFE-FLAT-SHEET-2",
        "size": "King Single",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 12000,
        "sourceCompareAtPrice": 13500,
        "demoPricePKR": 12000,
        "availability": "available"
      },
      {
        "id": "flat-sheet-alex-stripe-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-FLAT-SHEET-3",
        "size": "Double",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 13000,
        "sourceCompareAtPrice": 13500,
        "demoPricePKR": 13000,
        "availability": "available"
      },
      {
        "id": "flat-sheet-alex-stripe-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-FLAT-SHEET-4",
        "size": "Queen",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 13500,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "flat-sheet-alex-stripe-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-FLAT-SHEET-5",
        "size": "King",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 16000,
        "sourceCompareAtPrice": 13500,
        "demoPricePKR": 16000,
        "availability": "available"
      },
      {
        "id": "flat-sheet-alex-stripe-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-FLAT-SHEET-6",
        "size": "Super King",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 17500,
        "sourceCompareAtPrice": 13500,
        "demoPricePKR": 17500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 66
  },
  {
    "id": "flannelette-flat-sheet-blythe-stripe",
    "handle": "flannelette-flat-sheet-blythe-stripe",
    "title": "Frankie Flannelette - Blythe Stripe Flat Sheet",
    "collectionName": "Frankie Flannelette",
    "productType": "Flat Sheets",
    "colorOrPrint": "Blythe-stripe",
    "colorGroup": "Blythe-stripe",
    "fabric": "Frankie Flannelette",
    "description": "Frankie Flannelette crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "flannelette"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/flannelette-flat-sheet-blythe-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 4500,
    "sourceCompareAtPrice": 9000,
    "demoPricePKR": 4500,
    "demoCompareAtPricePKR": 9000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/flannelette-flat-sheet-blythe-stripe-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/flannelette-flat-sheet-blythe-stripe-01.jpg",
        "alt": "Frankie Flannelette - Blythe Stripe Flat Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Blythe-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/flannelette-flat-sheet-blythe-stripe-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/flannelette-flat-sheet-blythe-stripe-02.jpg",
        "alt": "Frankie Flannelette - Blythe Stripe Flat Sheet - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Blythe-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/flat-sheets/flannelette-flat-sheet-blythe-stripe-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/flat-sheets/flannelette-flat-sheet-blythe-stripe-03.jpg",
        "alt": "Frankie Flannelette - Blythe Stripe Flat Sheet - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Blythe-stripe"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "King Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blythe-stripe"
        ]
      }
    ],
    "variants": [
      {
        "id": "flannelette-flat-sheet-blythe-stripe-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-FLANNELETT-1",
        "size": "Single",
        "colorOrPrint": "Blythe-stripe",
        "sourcePrice": 4500,
        "sourceCompareAtPrice": 9000,
        "demoPricePKR": 4500,
        "availability": "available"
      },
      {
        "id": "flannelette-flat-sheet-blythe-stripe-king-single",
        "sourceVariantId": null,
        "title": "King Single",
        "sku": "MORFE-FLANNELETT-2",
        "size": "King Single",
        "colorOrPrint": "Blythe-stripe",
        "sourcePrice": 5500,
        "sourceCompareAtPrice": 9000,
        "demoPricePKR": 5500,
        "availability": "available"
      },
      {
        "id": "flannelette-flat-sheet-blythe-stripe-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-FLANNELETT-3",
        "size": "Double",
        "colorOrPrint": "Blythe-stripe",
        "sourcePrice": 6000,
        "sourceCompareAtPrice": 9000,
        "demoPricePKR": 6000,
        "availability": "available"
      },
      {
        "id": "flannelette-flat-sheet-blythe-stripe-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-FLANNELETT-4",
        "size": "Queen",
        "colorOrPrint": "Blythe-stripe",
        "sourcePrice": 7000,
        "sourceCompareAtPrice": 9000,
        "demoPricePKR": 7000,
        "availability": "available"
      },
      {
        "id": "flannelette-flat-sheet-blythe-stripe-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-FLANNELETT-5",
        "size": "King",
        "colorOrPrint": "Blythe-stripe",
        "sourcePrice": 7500,
        "sourceCompareAtPrice": 9000,
        "demoPricePKR": 7500,
        "availability": "available"
      },
      {
        "id": "flannelette-flat-sheet-blythe-stripe-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-FLANNELETT-6",
        "size": "Super King",
        "colorOrPrint": "Blythe-stripe",
        "sourcePrice": 8500,
        "sourceCompareAtPrice": 9000,
        "demoPricePKR": 8500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 99
  },
  {
    "id": "corduroy-pillowcases-russet",
    "handle": "corduroy-pillowcases-russet",
    "title": "Darcy Corduroy - Russet Pillowcases",
    "collectionName": "Darcy Corduroy",
    "productType": "Pillowcases",
    "colorOrPrint": "Russet",
    "colorGroup": "Russet",
    "fabric": "Darcy Corduroy",
    "description": "Deep pillow flap to keep your pillow tucked in tight, all night long.. Arrives prewashed so you can hop straight into bed..",
    "features": [
      "Deep pillow flap to keep your pillow tucked in tight, all night long.",
      "Arrives prewashed so you can hop straight into bed."
    ],
    "materialDetails": [
      "Thick 100% cotton fabric with plush velvety ribs.. Soft and snuggly like your favourite corduroy pants.. Natural, breathable and hypoallergenic.. OEKO-TEX Certified: no harsh chemicals or dyes.",
      "cotton"
    ],
    "careInstructions": [
      "Wash Darcy Corduroy with a small amount of detergent, on a cold, gentle setting. Remember to turn it inside out.",
      "Give a good shake after washing, then dry on the line, in the shade. Avoid direct sunlight.",
      "Creases aren't common, but if they show, a cool iron should smooth them out.",
      "Make sure your sheets are completely dry before folding and storing. Don't store in plastic."
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/corduroy-pillowcases-russet",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 7500,
    "sourceCompareAtPrice": 11000,
    "demoPricePKR": 7500,
    "demoCompareAtPricePKR": 11000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/corduroy-pillowcases-russet-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/corduroy-pillowcases-russet-01.jpg",
        "alt": "Darcy Corduroy - Russet Pillowcases - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Russet"
      },
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/corduroy-pillowcases-russet-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/corduroy-pillowcases-russet-02.jpg",
        "alt": "Darcy Corduroy - Russet Pillowcases - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Russet"
      },
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/corduroy-pillowcases-russet-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/corduroy-pillowcases-russet-03.jpg",
        "alt": "Darcy Corduroy - Russet Pillowcases - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Russet"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Standard Size",
          "King Size"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Russet",
          "Hunter-green"
        ]
      }
    ],
    "variants": [
      {
        "id": "corduroy-pillowcases-russet-standard-size",
        "sourceVariantId": null,
        "title": "Standard Size",
        "sku": "MORFE-CORDUROY-P-1",
        "size": "Standard Size",
        "colorOrPrint": "Russet",
        "sourcePrice": 7500,
        "sourceCompareAtPrice": 11000,
        "demoPricePKR": 7500,
        "availability": "available"
      },
      {
        "id": "corduroy-pillowcases-russet-king-size",
        "sourceVariantId": null,
        "title": "King Size",
        "sku": "MORFE-CORDUROY-P-2",
        "size": "King Size",
        "colorOrPrint": "Russet",
        "sourcePrice": 9000,
        "sourceCompareAtPrice": 11000,
        "demoPricePKR": 9000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 101
  },
  {
    "id": "corduroy-european-pillowcase-russet",
    "handle": "corduroy-european-pillowcase-russet",
    "title": "Darcy Corduroy - Russet European Pillowcase",
    "collectionName": "Darcy Corduroy",
    "productType": "Pillowcases",
    "colorOrPrint": "Russet",
    "colorGroup": "Russet",
    "fabric": "Darcy Corduroy",
    "description": "Deep pillow flap to keep your pillow tucked in tight, all night long.. Arrives prewashed so you can hop straight into bed..",
    "features": [
      "Deep pillow flap to keep your pillow tucked in tight, all night long.",
      "Arrives prewashed so you can hop straight into bed."
    ],
    "materialDetails": [
      "Thick 100% cotton fabric with plush velvety ribs.. Soft and snuggly like your favourite corduroy pants.. Natural, breathable and hypoallergenic.. OEKO-TEX Certified: no harsh chemicals or dyes.",
      "cotton"
    ],
    "careInstructions": [
      "Wash Darcy Corduroy with a small amount of detergent, on a cold, gentle setting. Remember to turn it inside out.",
      "Give a good shake after washing, then dry on the line, in the shade. Avoid direct sunlight.",
      "Creases aren't common, but if they show, a cool iron should smooth them out.",
      "Make sure your sheets are completely dry before folding and storing. Don't store in plastic."
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/corduroy-european-pillowcase-russet",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 7500,
    "sourceCompareAtPrice": 11000,
    "demoPricePKR": 7500,
    "demoCompareAtPricePKR": 11000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/corduroy-european-pillowcase-russet-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/corduroy-european-pillowcase-russet-01.jpg",
        "alt": "Darcy Corduroy - Russet European Pillowcase - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Russet"
      },
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/corduroy-european-pillowcase-russet-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/corduroy-european-pillowcase-russet-02.jpg",
        "alt": "Darcy Corduroy - Russet European Pillowcase - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Russet"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Default Title"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Russet",
          "Hunter-green"
        ]
      }
    ],
    "variants": [
      {
        "id": "corduroy-european-pillowcase-russet-default-title",
        "sourceVariantId": null,
        "title": "Default Title",
        "sku": "MORFE-CORDUROY-E-1",
        "size": "Default Title",
        "colorOrPrint": "Russet",
        "sourcePrice": 7500,
        "sourceCompareAtPrice": 11000,
        "demoPricePKR": 7500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 92
  },
  {
    "id": "corduroy-pillowcases-hunter-green",
    "handle": "corduroy-pillowcases-hunter-green",
    "title": "Darcy Corduroy - Hunter Green Pillowcases",
    "collectionName": "Darcy Corduroy",
    "productType": "Pillowcases",
    "colorOrPrint": "Hunter-green",
    "colorGroup": "Hunter-green",
    "fabric": "Darcy Corduroy",
    "description": "Deep pillow flap to keep your pillow tucked in tight, all night long.. Arrives prewashed so you can hop straight into bed..",
    "features": [
      "Deep pillow flap to keep your pillow tucked in tight, all night long.",
      "Arrives prewashed so you can hop straight into bed."
    ],
    "materialDetails": [
      "Thick 100% cotton fabric with plush velvety ribs.. Soft and snuggly like your favourite corduroy pants.. Natural, breathable and hypoallergenic.. OEKO-TEX Certified: no harsh chemicals or dyes.",
      "corduroy, cotton"
    ],
    "careInstructions": [
      "Wash Darcy Corduroy with a small amount of detergent, on a cold, gentle setting. Remember to turn it inside out.",
      "Give a good shake after washing, then dry on the line, in the shade. Avoid direct sunlight.",
      "Creases aren't common, but if they show, a cool iron should smooth them out.",
      "Make sure your sheets are completely dry before folding and storing. Don't store in plastic."
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/corduroy-pillowcases-hunter-green",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8500,
    "sourceCompareAtPrice": 11000,
    "demoPricePKR": 8500,
    "demoCompareAtPricePKR": 11000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/corduroy-pillowcases-hunter-green-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/corduroy-pillowcases-hunter-green-01.jpg",
        "alt": "Darcy Corduroy - Hunter Green Pillowcases - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Hunter-green"
      },
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/corduroy-pillowcases-hunter-green-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/corduroy-pillowcases-hunter-green-02.jpg",
        "alt": "Darcy Corduroy - Hunter Green Pillowcases - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Hunter-green"
      },
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/corduroy-pillowcases-hunter-green-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/corduroy-pillowcases-hunter-green-03.jpg",
        "alt": "Darcy Corduroy - Hunter Green Pillowcases - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Hunter-green"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Standard Size",
          "King Size"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Hunter-green",
          "Russet",
          "Russet"
        ]
      }
    ],
    "variants": [
      {
        "id": "corduroy-pillowcases-hunter-green-standard-size",
        "sourceVariantId": null,
        "title": "Standard Size",
        "sku": "MORFE-CORDUROY-P-1",
        "size": "Standard Size",
        "colorOrPrint": "Hunter-green",
        "sourcePrice": 8500,
        "sourceCompareAtPrice": 11000,
        "demoPricePKR": 8500,
        "availability": "available"
      },
      {
        "id": "corduroy-pillowcases-hunter-green-king-size",
        "sourceVariantId": null,
        "title": "King Size",
        "sku": "MORFE-CORDUROY-P-2",
        "size": "King Size",
        "colorOrPrint": "Hunter-green",
        "sourcePrice": 10000,
        "sourceCompareAtPrice": 11000,
        "demoPricePKR": 10000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 78
  },
  {
    "id": "linen-pillowcases-cloud",
    "handle": "linen-pillowcases-cloud",
    "title": "Eve Linen - Cloud Pillowcases",
    "collectionName": "Eve Linen",
    "productType": "Pillowcases",
    "colorOrPrint": "Cloud",
    "colorGroup": "Cloud",
    "fabric": "Eve Linen",
    "description": "Eve Linen crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "linen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-pillowcases-cloud",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 11500,
    "sourceCompareAtPrice": 14500,
    "demoPricePKR": 11500,
    "demoCompareAtPricePKR": 14500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/linen-pillowcases-cloud-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/linen-pillowcases-cloud-01.jpg",
        "alt": "Eve Linen - Cloud Pillowcases - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Cloud"
      },
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/linen-pillowcases-cloud-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/linen-pillowcases-cloud-02.jpg",
        "alt": "Eve Linen - Cloud Pillowcases - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Cloud"
      },
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/linen-pillowcases-cloud-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/linen-pillowcases-cloud-03.jpg",
        "alt": "Eve Linen - Cloud Pillowcases - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Cloud"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Standard Size",
          "King Size"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Cloud",
          "Warm-white"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-pillowcases-cloud-standard-size",
        "sourceVariantId": null,
        "title": "Standard Size",
        "sku": "MORFE-LINEN-PILL-1",
        "size": "Standard Size",
        "colorOrPrint": "Cloud",
        "sourcePrice": 11500,
        "sourceCompareAtPrice": 14500,
        "demoPricePKR": 11500,
        "availability": "available"
      },
      {
        "id": "linen-pillowcases-cloud-king-size",
        "sourceVariantId": null,
        "title": "King Size",
        "sku": "MORFE-LINEN-PILL-2",
        "size": "King Size",
        "colorOrPrint": "Cloud",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 14500,
        "demoPricePKR": 14500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 73
  },
  {
    "id": "linen-european-pillowcase-cloud",
    "handle": "linen-european-pillowcase-cloud",
    "title": "Eve Linen - Cloud European Pillowcase",
    "collectionName": "Eve Linen",
    "productType": "Pillowcases",
    "colorOrPrint": "Cloud",
    "colorGroup": "Cloud",
    "fabric": "Eve Linen",
    "description": "Eve Linen crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "linen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-european-pillowcase-cloud",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8500,
    "sourceCompareAtPrice": 11000,
    "demoPricePKR": 8500,
    "demoCompareAtPricePKR": 11000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/linen-european-pillowcase-cloud-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/linen-european-pillowcase-cloud-01.jpg",
        "alt": "Eve Linen - Cloud European Pillowcase - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Cloud"
      },
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/linen-european-pillowcase-cloud-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/linen-european-pillowcase-cloud-02.jpg",
        "alt": "Eve Linen - Cloud European Pillowcase - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Cloud"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Default Title"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Cloud",
          "Warm-white"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-european-pillowcase-cloud-default-title",
        "sourceVariantId": null,
        "title": "Default Title",
        "sku": "MORFE-LINEN-EURO-1",
        "size": "Default Title",
        "colorOrPrint": "Cloud",
        "sourcePrice": 8500,
        "sourceCompareAtPrice": 11000,
        "demoPricePKR": 8500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 64
  },
  {
    "id": "linen-pillowcases-warm-white",
    "handle": "linen-pillowcases-warm-white",
    "title": "Eve Linen - Warm White Pillowcases",
    "collectionName": "Eve Linen",
    "productType": "Pillowcases",
    "colorOrPrint": "Warm-white",
    "colorGroup": "Warm-white",
    "fabric": "Eve Linen",
    "description": "Eve Linen crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "linen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-pillowcases-warm-white",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8500,
    "sourceCompareAtPrice": 14500,
    "demoPricePKR": 8500,
    "demoCompareAtPricePKR": 14500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/linen-pillowcases-warm-white-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/linen-pillowcases-warm-white-01.jpg",
        "alt": "Eve Linen - Warm White Pillowcases - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Warm-white"
      },
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/linen-pillowcases-warm-white-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/linen-pillowcases-warm-white-02.jpg",
        "alt": "Eve Linen - Warm White Pillowcases - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Warm-white"
      },
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/linen-pillowcases-warm-white-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/linen-pillowcases-warm-white-03.jpg",
        "alt": "Eve Linen - Warm White Pillowcases - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Warm-white"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Standard Size",
          "King Size"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Warm-white",
          "Cloud",
          "Cloud"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-pillowcases-warm-white-standard-size",
        "sourceVariantId": null,
        "title": "Standard Size",
        "sku": "MORFE-LINEN-PILL-1",
        "size": "Standard Size",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 8500,
        "sourceCompareAtPrice": 14500,
        "demoPricePKR": 8500,
        "availability": "available"
      },
      {
        "id": "linen-pillowcases-warm-white-king-size",
        "sourceVariantId": null,
        "title": "King Size",
        "sku": "MORFE-LINEN-PILL-2",
        "size": "King Size",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 11000,
        "sourceCompareAtPrice": 14500,
        "demoPricePKR": 11000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 43
  },
  {
    "id": "pillowcases-alex-stripe",
    "handle": "pillowcases-alex-stripe",
    "title": "Eden Cotton - Alex Stripe Pillowcases",
    "collectionName": "Eden Cotton",
    "productType": "Pillowcases",
    "colorOrPrint": "Alex-stripe",
    "colorGroup": "Alex-stripe",
    "fabric": "Eden Cotton",
    "description": "Eden Cotton crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "cotton"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/pillowcases-alex-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8500,
    "sourceCompareAtPrice": 11000,
    "demoPricePKR": 8500,
    "demoCompareAtPricePKR": 11000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/pillowcases-alex-stripe-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/pillowcases-alex-stripe-01.jpg",
        "alt": "Eden Cotton - Alex Stripe Pillowcases - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Alex-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/pillowcases-alex-stripe-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/pillowcases-alex-stripe-02.jpg",
        "alt": "Eden Cotton - Alex Stripe Pillowcases - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Alex-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/pillowcases-alex-stripe-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/pillowcases-alex-stripe-03.jpg",
        "alt": "Eden Cotton - Alex Stripe Pillowcases - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Alex-stripe"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Standard Size",
          "King Size"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Alex-stripe"
        ]
      }
    ],
    "variants": [
      {
        "id": "pillowcases-alex-stripe-standard-size",
        "sourceVariantId": null,
        "title": "Standard Size",
        "sku": "MORFE-PILLOWCASE-1",
        "size": "Standard Size",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 8500,
        "sourceCompareAtPrice": 11000,
        "demoPricePKR": 8500,
        "availability": "available"
      },
      {
        "id": "pillowcases-alex-stripe-king-size",
        "sourceVariantId": null,
        "title": "King Size",
        "sku": "MORFE-PILLOWCASE-2",
        "size": "King Size",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 10000,
        "sourceCompareAtPrice": 11000,
        "demoPricePKR": 10000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 73
  },
  {
    "id": "european-pillowcase-alex-stripe",
    "handle": "european-pillowcase-alex-stripe",
    "title": "Eden Cotton - Alex Stripe European Pillowcase",
    "collectionName": "Eden Cotton",
    "productType": "Pillowcases",
    "colorOrPrint": "Alex-stripe",
    "colorGroup": "Alex-stripe",
    "fabric": "Eden Cotton",
    "description": "Eden Cotton crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "cotton"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/european-pillowcase-alex-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 7000,
    "sourceCompareAtPrice": 9000,
    "demoPricePKR": 7000,
    "demoCompareAtPricePKR": 9000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/european-pillowcase-alex-stripe-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/european-pillowcase-alex-stripe-01.jpg",
        "alt": "Eden Cotton - Alex Stripe European Pillowcase - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Alex-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/european-pillowcase-alex-stripe-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/european-pillowcase-alex-stripe-02.jpg",
        "alt": "Eden Cotton - Alex Stripe European Pillowcase - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Alex-stripe"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Default Title"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Alex-stripe"
        ]
      }
    ],
    "variants": [
      {
        "id": "european-pillowcase-alex-stripe-default-title",
        "sourceVariantId": null,
        "title": "Default Title",
        "sku": "MORFE-EUROPEAN-P-1",
        "size": "Default Title",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 7000,
        "sourceCompareAtPrice": 9000,
        "demoPricePKR": 7000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 64
  },
  {
    "id": "organic-cotton-pillowcases-russet",
    "handle": "organic-cotton-pillowcases-russet",
    "title": "Jude Organic Cotton - Russet Pillowcases",
    "collectionName": "Jude Organic Cotton",
    "productType": "Pillowcases",
    "colorOrPrint": "Russet",
    "colorGroup": "Russet",
    "fabric": "Jude Organic Cotton",
    "description": "Jude Organic Cotton crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "cotton, jersey"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/organic-cotton-pillowcases-russet",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 7000,
    "sourceCompareAtPrice": 10000,
    "demoPricePKR": 7000,
    "demoCompareAtPricePKR": 10000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/organic-cotton-pillowcases-russet-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/organic-cotton-pillowcases-russet-01.jpg",
        "alt": "Jude Organic Cotton - Russet Pillowcases - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Russet"
      },
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/organic-cotton-pillowcases-russet-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/organic-cotton-pillowcases-russet-02.jpg",
        "alt": "Jude Organic Cotton - Russet Pillowcases - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Russet"
      },
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/organic-cotton-pillowcases-russet-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/organic-cotton-pillowcases-russet-03.jpg",
        "alt": "Jude Organic Cotton - Russet Pillowcases - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Russet"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Standard Size",
          "King Size"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Russet"
        ]
      }
    ],
    "variants": [
      {
        "id": "organic-cotton-pillowcases-russet-standard-size",
        "sourceVariantId": null,
        "title": "Standard Size",
        "sku": "MORFE-ORGANIC-CO-1",
        "size": "Standard Size",
        "colorOrPrint": "Russet",
        "sourcePrice": 7000,
        "sourceCompareAtPrice": 10000,
        "demoPricePKR": 7000,
        "availability": "available"
      },
      {
        "id": "organic-cotton-pillowcases-russet-king-size",
        "sourceVariantId": null,
        "title": "King Size",
        "sku": "MORFE-ORGANIC-CO-2",
        "size": "King Size",
        "colorOrPrint": "Russet",
        "sourcePrice": 8000,
        "sourceCompareAtPrice": 10000,
        "demoPricePKR": 8000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 78
  },
  {
    "id": "flannelette-pillowcases-blythe-stripe",
    "handle": "flannelette-pillowcases-blythe-stripe",
    "title": "Frankie Flannelette - Blythe Stripe Pillowcases",
    "collectionName": "Frankie Flannelette",
    "productType": "Pillowcases",
    "colorOrPrint": "Blythe-stripe",
    "colorGroup": "Blythe-stripe",
    "fabric": "Frankie Flannelette",
    "description": "Frankie Flannelette crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "flannelette"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/flannelette-pillowcases-blythe-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 2500,
    "sourceCompareAtPrice": 5500,
    "demoPricePKR": 2500,
    "demoCompareAtPricePKR": 5500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/flannelette-pillowcases-blythe-stripe-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/flannelette-pillowcases-blythe-stripe-01.jpg",
        "alt": "Frankie Flannelette - Blythe Stripe Pillowcases - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Blythe-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/pillowcases/flannelette-pillowcases-blythe-stripe-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/pillowcases/flannelette-pillowcases-blythe-stripe-02.jpg",
        "alt": "Frankie Flannelette - Blythe Stripe Pillowcases - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Blythe-stripe"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Standard Size",
          "King Size"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blythe-stripe"
        ]
      }
    ],
    "variants": [
      {
        "id": "flannelette-pillowcases-blythe-stripe-standard-size",
        "sourceVariantId": null,
        "title": "Standard Size",
        "sku": "MORFE-FLANNELETT-1",
        "size": "Standard Size",
        "colorOrPrint": "Blythe-stripe",
        "sourcePrice": 4000,
        "sourceCompareAtPrice": 5500,
        "demoPricePKR": 4000,
        "availability": "available"
      },
      {
        "id": "flannelette-pillowcases-blythe-stripe-king-size",
        "sourceVariantId": null,
        "title": "King Size",
        "sku": "MORFE-FLANNELETT-2",
        "size": "King Size",
        "colorOrPrint": "Blythe-stripe",
        "sourcePrice": 5000,
        "sourceCompareAtPrice": 5500,
        "demoPricePKR": 5000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 106
  },
  {
    "id": "linen-bedding-cloud",
    "handle": "linen-bedding-cloud",
    "title": "Eve Linen - Cloud",
    "collectionName": "Eve Linen",
    "productType": "Bed Sheets & Sets",
    "colorOrPrint": "Cloud",
    "colorGroup": "Cloud",
    "fabric": "Eve Linen",
    "description": "Eve Linen crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "linen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-bedding-cloud",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 23000,
    "sourceCompareAtPrice": 29000,
    "demoPricePKR": 23000,
    "demoCompareAtPricePKR": 29000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/linen-bedding-cloud-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/linen-bedding-cloud-01.jpg",
        "alt": "Eve Linen - Cloud - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Cloud"
      },
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/linen-bedding-cloud-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/linen-bedding-cloud-02.jpg",
        "alt": "Eve Linen - Cloud - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Cloud"
      },
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/linen-bedding-cloud-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/linen-bedding-cloud-03.jpg",
        "alt": "Eve Linen - Cloud - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Cloud"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Default Title"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Cloud",
          "Warm-white",
          "Oatmeal"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-bedding-cloud-default-title",
        "sourceVariantId": null,
        "title": "Default Title",
        "sku": "MORFE-LINEN-BEDD-1",
        "size": "Default Title",
        "colorOrPrint": "Cloud",
        "sourcePrice": 23000,
        "sourceCompareAtPrice": 29000,
        "demoPricePKR": 23000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 45
  },
  {
    "id": "linen-bedding-warm-white",
    "handle": "linen-bedding-warm-white",
    "title": "Eve Linen - Warm White",
    "collectionName": "Eve Linen",
    "productType": "Bed Sheets & Sets",
    "colorOrPrint": "Warm-white",
    "colorGroup": "Warm-white",
    "fabric": "Eve Linen",
    "description": "Eve Linen crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "linen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-bedding-warm-white",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 12000,
    "sourceCompareAtPrice": 20000,
    "demoPricePKR": 12000,
    "demoCompareAtPricePKR": 20000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/linen-bedding-warm-white-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/linen-bedding-warm-white-01.jpg",
        "alt": "Eve Linen - Warm White - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Warm-white"
      },
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/linen-bedding-warm-white-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/linen-bedding-warm-white-02.jpg",
        "alt": "Eve Linen - Warm White - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Warm-white"
      },
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/linen-bedding-warm-white-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/linen-bedding-warm-white-03.jpg",
        "alt": "Eve Linen - Warm White - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Warm-white"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Default Title"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Warm-white",
          "Cloud",
          "Oatmeal"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-bedding-warm-white-default-title",
        "sourceVariantId": null,
        "title": "Default Title",
        "sku": "MORFE-LINEN-BEDD-1",
        "size": "Default Title",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 12000,
        "sourceCompareAtPrice": 20000,
        "demoPricePKR": 12000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 80
  },
  {
    "id": "chambray-linen-bedding-oatmeal",
    "handle": "chambray-linen-bedding-oatmeal",
    "title": "Eve Linen - Oatmeal",
    "collectionName": "Eve Linen",
    "productType": "Bed Sheets & Sets",
    "colorOrPrint": "Oatmeal",
    "colorGroup": "Oatmeal",
    "fabric": "Eve Linen",
    "description": "Eve Linen crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "linen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/chambray-linen-bedding-oatmeal",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 23000,
    "sourceCompareAtPrice": 29000,
    "demoPricePKR": 23000,
    "demoCompareAtPricePKR": 29000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/chambray-linen-bedding-oatmeal-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/chambray-linen-bedding-oatmeal-01.jpg",
        "alt": "Eve Linen - Oatmeal - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Oatmeal"
      },
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/chambray-linen-bedding-oatmeal-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/chambray-linen-bedding-oatmeal-02.jpg",
        "alt": "Eve Linen - Oatmeal - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Oatmeal"
      },
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/chambray-linen-bedding-oatmeal-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/chambray-linen-bedding-oatmeal-03.jpg",
        "alt": "Eve Linen - Oatmeal - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Oatmeal"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Default Title"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Oatmeal",
          "Cloud",
          "Warm-white"
        ]
      }
    ],
    "variants": [
      {
        "id": "chambray-linen-bedding-oatmeal-default-title",
        "sourceVariantId": null,
        "title": "Default Title",
        "sku": "MORFE-CHAMBRAY-L-1",
        "size": "Default Title",
        "colorOrPrint": "Oatmeal",
        "sourcePrice": 23000,
        "sourceCompareAtPrice": 29000,
        "demoPricePKR": 23000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 57
  },
  {
    "id": "corduroy-bedding-russet",
    "handle": "corduroy-bedding-russet",
    "title": "Darcy Corduroy - Russet",
    "collectionName": "Darcy Corduroy",
    "productType": "Bed Sheets & Sets",
    "colorOrPrint": "Russet",
    "colorGroup": "Russet",
    "fabric": "Darcy Corduroy",
    "description": "Invisible zipper for quick and easy changes. Deep pillow flap to keep your pillow tucked in tight, all night long.. Arrives prewashed so you can hop straight into bed..",
    "features": [
      "Invisible zipper for quick and easy changes",
      "Deep pillow flap to keep your pillow tucked in tight, all night long.",
      "Arrives prewashed so you can hop straight into bed."
    ],
    "materialDetails": [
      "Thick 100% cotton fabric with plush velvety ribs.. Corduroy on topside and Eden Cotton on underside.. Soft and snuggly like your favourite corduroy pants.. Natural, breathable and hypoallergenic.. OEKO-TEX Certified: no harsh chemicals or dyes.",
      "cotton"
    ],
    "careInstructions": [
      "Wash Darcy Corduroy with a small amount of detergent, on a cold, gentle setting. Remember to turn it inside out.",
      "Give a good shake after washing, then dry on the line, in the shade. Avoid direct sunlight.",
      "Creases aren't common, but if they show, a cool iron should smooth them out.",
      "Make sure your sheets are completely dry before folding and storing. Don't store in plastic."
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/corduroy-bedding-russet",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 32500,
    "sourceCompareAtPrice": null,
    "demoPricePKR": 32500,
    "demoCompareAtPricePKR": null,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/corduroy-bedding-russet-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/corduroy-bedding-russet-01.jpg",
        "alt": "Darcy Corduroy - Russet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Russet"
      },
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/corduroy-bedding-russet-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/corduroy-bedding-russet-02.jpg",
        "alt": "Darcy Corduroy - Russet - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Russet"
      },
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/corduroy-bedding-russet-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/corduroy-bedding-russet-03.jpg",
        "alt": "Darcy Corduroy - Russet - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Russet"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Default Title"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Russet"
        ]
      }
    ],
    "variants": [
      {
        "id": "corduroy-bedding-russet-default-title",
        "sourceVariantId": null,
        "title": "Default Title",
        "sku": "MORFE-CORDUROY-B-1",
        "size": "Default Title",
        "colorOrPrint": "Russet",
        "sourcePrice": 32500,
        "sourceCompareAtPrice": null,
        "demoPricePKR": 32500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 73
  },
  {
    "id": "bed-sheets-alex-stripe",
    "handle": "bed-sheets-alex-stripe",
    "title": "Eden Cotton - Alex Stripe Bed Sheets",
    "collectionName": "Eden Cotton",
    "productType": "Bed Sheets & Sets",
    "colorOrPrint": "Alex-stripe",
    "colorGroup": "Alex-stripe",
    "fabric": "Eden Cotton",
    "description": "Eden Cotton crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "cotton, cotton-sateen"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/bed-sheets-alex-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 11000,
    "sourceCompareAtPrice": 13500,
    "demoPricePKR": 11000,
    "demoCompareAtPricePKR": 13500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/bed-sheets-alex-stripe-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/bed-sheets-alex-stripe-01.jpg",
        "alt": "Eden Cotton - Alex Stripe Bed Sheets - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Alex-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/bed-sheets-alex-stripe-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/bed-sheets-alex-stripe-02.jpg",
        "alt": "Eden Cotton - Alex Stripe Bed Sheets - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Alex-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/bed-sheets-alex-stripe-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/bed-sheets-alex-stripe-03.jpg",
        "alt": "Eden Cotton - Alex Stripe Bed Sheets - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Alex-stripe"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Default Title"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Alex-stripe"
        ]
      }
    ],
    "variants": [
      {
        "id": "bed-sheets-alex-stripe-default-title",
        "sourceVariantId": null,
        "title": "Default Title",
        "sku": "MORFE-BED-SHEETS-1",
        "size": "Default Title",
        "colorOrPrint": "Alex-stripe",
        "sourcePrice": 11000,
        "sourceCompareAtPrice": 13500,
        "demoPricePKR": 11000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 66
  },
  {
    "id": "washed-cotton-bed-sheets-midnight-rodeo-stripe",
    "handle": "washed-cotton-bed-sheets-midnight-rodeo-stripe",
    "title": "Leo Washed Cotton - Midnight Rodeo Bed Sheets",
    "collectionName": "Leo Washed Cotton",
    "productType": "Bed Sheets & Sets",
    "colorOrPrint": "Midnight-rodeo",
    "colorGroup": "Midnight-rodeo",
    "fabric": "Leo Washed Cotton",
    "description": "Leo Washed Cotton crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "cotton, washed-cotton"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/washed-cotton-bed-sheets-midnight-rodeo-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 10000,
    "sourceCompareAtPrice": 12500,
    "demoPricePKR": 10000,
    "demoCompareAtPricePKR": 12500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/washed-cotton-bed-sheets-midnight-rodeo-stripe-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/washed-cotton-bed-sheets-midnight-rodeo-stripe-01.jpg",
        "alt": "Leo Washed Cotton - Midnight Rodeo Bed Sheets - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Midnight-rodeo"
      },
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/washed-cotton-bed-sheets-midnight-rodeo-stripe-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/washed-cotton-bed-sheets-midnight-rodeo-stripe-02.jpg",
        "alt": "Leo Washed Cotton - Midnight Rodeo Bed Sheets - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Midnight-rodeo"
      },
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/washed-cotton-bed-sheets-midnight-rodeo-stripe-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/washed-cotton-bed-sheets-midnight-rodeo-stripe-03.jpg",
        "alt": "Leo Washed Cotton - Midnight Rodeo Bed Sheets - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Midnight-rodeo"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Default Title"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Midnight-rodeo",
          "Henley-gingham"
        ]
      }
    ],
    "variants": [
      {
        "id": "washed-cotton-bed-sheets-midnight-rodeo-stripe-default-title",
        "sourceVariantId": null,
        "title": "Default Title",
        "sku": "MORFE-WASHED-COT-1",
        "size": "Default Title",
        "colorOrPrint": "Midnight-rodeo",
        "sourcePrice": 10000,
        "sourceCompareAtPrice": 12500,
        "demoPricePKR": 10000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 104
  },
  {
    "id": "organic-cotton-bed-sheets-russet",
    "handle": "organic-cotton-bed-sheets-russet",
    "title": "Jude Organic Cotton - Russet Bed Sheets",
    "collectionName": "Jude Organic Cotton",
    "productType": "Bed Sheets & Sets",
    "colorOrPrint": "Russet",
    "colorGroup": "Russet",
    "fabric": "Jude Organic Cotton",
    "description": "Jude Organic Cotton crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "cotton, organic-cotton"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/organic-cotton-bed-sheets-russet",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 10500,
    "sourceCompareAtPrice": 15500,
    "demoPricePKR": 10500,
    "demoCompareAtPricePKR": 15500,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/organic-cotton-bed-sheets-russet-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/organic-cotton-bed-sheets-russet-01.jpg",
        "alt": "Jude Organic Cotton - Russet Bed Sheets - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Russet"
      },
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/organic-cotton-bed-sheets-russet-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/organic-cotton-bed-sheets-russet-02.jpg",
        "alt": "Jude Organic Cotton - Russet Bed Sheets - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Russet"
      },
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/organic-cotton-bed-sheets-russet-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/organic-cotton-bed-sheets-russet-03.jpg",
        "alt": "Jude Organic Cotton - Russet Bed Sheets - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Russet"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Default Title"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Russet"
        ]
      }
    ],
    "variants": [
      {
        "id": "organic-cotton-bed-sheets-russet-default-title",
        "sourceVariantId": null,
        "title": "Default Title",
        "sku": "MORFE-ORGANIC-CO-1",
        "size": "Default Title",
        "colorOrPrint": "Russet",
        "sourcePrice": 10500,
        "sourceCompareAtPrice": 15500,
        "demoPricePKR": 10500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 71
  },
  {
    "id": "washed-cotton-bedding-henley-gingham",
    "handle": "washed-cotton-bedding-henley-gingham",
    "title": "Leo Washed Cotton - Henley Gingham",
    "collectionName": "Leo Washed Cotton",
    "productType": "Bed Sheets & Sets",
    "colorOrPrint": "Henley-gingham",
    "colorGroup": "Henley-gingham",
    "fabric": "Leo Washed Cotton",
    "description": "Leo Washed Cotton crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "cotton, washed-cotton"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/washed-cotton-bedding-henley-gingham",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8500,
    "sourceCompareAtPrice": 11000,
    "demoPricePKR": 8500,
    "demoCompareAtPricePKR": 11000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/washed-cotton-bedding-henley-gingham-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/washed-cotton-bedding-henley-gingham-01.jpg",
        "alt": "Leo Washed Cotton - Henley Gingham - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Henley-gingham"
      },
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/washed-cotton-bedding-henley-gingham-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/washed-cotton-bedding-henley-gingham-02.jpg",
        "alt": "Leo Washed Cotton - Henley Gingham - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Henley-gingham"
      },
      {
        "src": "/assets/sheetsociety-catalog/bed-sheets/washed-cotton-bedding-henley-gingham-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/bed-sheets/washed-cotton-bedding-henley-gingham-03.jpg",
        "alt": "Leo Washed Cotton - Henley Gingham - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Henley-gingham"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Default Title"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Henley-gingham",
          "Midnight-rodeo"
        ]
      }
    ],
    "variants": [
      {
        "id": "washed-cotton-bedding-henley-gingham-default-title",
        "sourceVariantId": null,
        "title": "Default Title",
        "sku": "MORFE-WASHED-COT-1",
        "size": "Default Title",
        "colorOrPrint": "Henley-gingham",
        "sourcePrice": 8500,
        "sourceCompareAtPrice": 11000,
        "demoPricePKR": 8500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 99
  },
  {
    "id": "rory-washed-cotton-blanket-millie",
    "handle": "rory-washed-cotton-blanket-millie",
    "title": "Rory Washed Cotton - Millie Blanket",
    "collectionName": "Leo Washed Cotton",
    "productType": "Blankets & Bed Covers",
    "colorOrPrint": "Millie",
    "colorGroup": "Millie",
    "fabric": "Leo Washed Cotton",
    "description": "100% natural and renewable.. Quilted for extra warmth.. Subtle square-stitched detail.. Open textured weave for a relaxed look..",
    "features": [
      "100% natural and renewable.",
      "Quilted for extra warmth.",
      "Subtle square-stitched detail.",
      "Open textured weave for a relaxed look."
    ],
    "materialDetails": [
      "100% natural cotton.. Breathable, durable, and super soft.. OEKO-TEX Standard 100 Certified.. Pre-washed and ready to use.",
      "washed-cotton"
    ],
    "careInstructions": [
      "Air regularly to help retain freshness.",
      "Wash on a gentle, cool setting with similar colours.",
      "Line dry in the shade only.",
      "Do not tumble dry or iron.",
      "Make sure your blanket is dry before folding."
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/rory-washed-cotton-blanket-millie",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 21500,
    "sourceCompareAtPrice": 27000,
    "demoPricePKR": 21500,
    "demoCompareAtPricePKR": 27000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/other-bedding/rory-washed-cotton-blanket-millie-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/other-bedding/rory-washed-cotton-blanket-millie-01.jpg",
        "alt": "Rory Washed Cotton - Millie Blanket - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Millie"
      },
      {
        "src": "/assets/sheetsociety-catalog/other-bedding/rory-washed-cotton-blanket-millie-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/other-bedding/rory-washed-cotton-blanket-millie-02.jpg",
        "alt": "Rory Washed Cotton - Millie Blanket - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Millie"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Small",
          "Medium",
          "Large",
          "Extra Large"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Millie",
          "Mahogany"
        ]
      }
    ],
    "variants": [
      {
        "id": "rory-washed-cotton-blanket-millie-small",
        "sourceVariantId": null,
        "title": "Small",
        "sku": "MORFE-RORY-WASHE-1",
        "size": "Small",
        "colorOrPrint": "Millie",
        "sourcePrice": 21500,
        "sourceCompareAtPrice": 27000,
        "demoPricePKR": 21500,
        "availability": "available"
      },
      {
        "id": "rory-washed-cotton-blanket-millie-medium",
        "sourceVariantId": null,
        "title": "Medium",
        "sku": "MORFE-RORY-WASHE-2",
        "size": "Medium",
        "colorOrPrint": "Millie",
        "sourcePrice": 29000,
        "sourceCompareAtPrice": 27000,
        "demoPricePKR": 29000,
        "availability": "available"
      },
      {
        "id": "rory-washed-cotton-blanket-millie-large",
        "sourceVariantId": null,
        "title": "Large",
        "sku": "MORFE-RORY-WASHE-3",
        "size": "Large",
        "colorOrPrint": "Millie",
        "sourcePrice": 36000,
        "sourceCompareAtPrice": 27000,
        "demoPricePKR": 36000,
        "availability": "available"
      },
      {
        "id": "rory-washed-cotton-blanket-millie-extra-large",
        "sourceVariantId": null,
        "title": "Extra Large",
        "sku": "MORFE-RORY-WASHE-4",
        "size": "Extra Large",
        "colorOrPrint": "Millie",
        "sourcePrice": 40500,
        "sourceCompareAtPrice": 27000,
        "demoPricePKR": 40500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 78
  },
  {
    "id": "rory-washed-cotton-bed-cover-millie",
    "handle": "rory-washed-cotton-bed-cover-millie",
    "title": "Rory Washed Cotton - Millie Bed Cover",
    "collectionName": "Leo Washed Cotton",
    "productType": "Blankets & Bed Covers",
    "colorOrPrint": "Millie",
    "colorGroup": "Millie",
    "fabric": "Leo Washed Cotton",
    "description": "100% natural and renewable.. Quilted for extra warmth.. Subtle square-stitched detail.. Open textured weave for a relaxed look..",
    "features": [
      "100% natural and renewable.",
      "Quilted for extra warmth.",
      "Subtle square-stitched detail.",
      "Open textured weave for a relaxed look."
    ],
    "materialDetails": [
      "100% natural cotton.. Breathable, durable, and super soft.. OEKO-TEX Standard 100 Certified.. Pre-washed and ready to use.",
      "washed-cotton"
    ],
    "careInstructions": [
      "Air regularly to help retain freshness.",
      "Wash on a gentle, cool setting with similar colours.",
      "Line dry in the shade only.",
      "Do not tumble dry or iron.",
      "Make sure your bed cover is dry before folding."
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/rory-washed-cotton-bed-cover-millie",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 21500,
    "sourceCompareAtPrice": 27000,
    "demoPricePKR": 21500,
    "demoCompareAtPricePKR": 27000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/other-bedding/rory-washed-cotton-bed-cover-millie-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/other-bedding/rory-washed-cotton-bed-cover-millie-01.jpg",
        "alt": "Rory Washed Cotton - Millie Bed Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Millie"
      },
      {
        "src": "/assets/sheetsociety-catalog/other-bedding/rory-washed-cotton-bed-cover-millie-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/other-bedding/rory-washed-cotton-bed-cover-millie-02.jpg",
        "alt": "Rory Washed Cotton - Millie Bed Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Millie"
      },
      {
        "src": "/assets/sheetsociety-catalog/other-bedding/rory-washed-cotton-bed-cover-millie-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/other-bedding/rory-washed-cotton-bed-cover-millie-03.jpg",
        "alt": "Rory Washed Cotton - Millie Bed Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Millie"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "Double",
          "Queen",
          "King/Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Millie",
          "Mahogany"
        ]
      }
    ],
    "variants": [
      {
        "id": "rory-washed-cotton-bed-cover-millie-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-RORY-WASHE-1",
        "size": "Single",
        "colorOrPrint": "Millie",
        "sourcePrice": 21500,
        "sourceCompareAtPrice": 27000,
        "demoPricePKR": 21500,
        "availability": "available"
      },
      {
        "id": "rory-washed-cotton-bed-cover-millie-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-RORY-WASHE-2",
        "size": "Double",
        "colorOrPrint": "Millie",
        "sourcePrice": 29000,
        "sourceCompareAtPrice": 27000,
        "demoPricePKR": 29000,
        "availability": "available"
      },
      {
        "id": "rory-washed-cotton-bed-cover-millie-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-RORY-WASHE-3",
        "size": "Queen",
        "colorOrPrint": "Millie",
        "sourcePrice": 36000,
        "sourceCompareAtPrice": 27000,
        "demoPricePKR": 36000,
        "availability": "available"
      },
      {
        "id": "rory-washed-cotton-bed-cover-millie-king-super-king",
        "sourceVariantId": null,
        "title": "King/Super King",
        "sku": "MORFE-RORY-WASHE-4",
        "size": "King/Super King",
        "colorOrPrint": "Millie",
        "sourcePrice": 40500,
        "sourceCompareAtPrice": 27000,
        "demoPricePKR": 40500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 92
  },
  {
    "id": "rory-washed-cotton-bed-cover-mahogany",
    "handle": "rory-washed-cotton-bed-cover-mahogany",
    "title": "Rory Washed Cotton - Mahogany Bed Cover",
    "collectionName": "Leo Washed Cotton",
    "productType": "Blankets & Bed Covers",
    "colorOrPrint": "Mahogany",
    "colorGroup": "Mahogany",
    "fabric": "Leo Washed Cotton",
    "description": "100% natural and renewable.. Softly draped skirt detail.. Open textured weave for a relaxed look..",
    "features": [
      "100% natural and renewable.",
      "Softly draped skirt detail.",
      "Open textured weave for a relaxed look."
    ],
    "materialDetails": [
      "100% natural cotton.. Breathable, durable, and super soft.. OEKO-TEX Standard 100 Certified.. Pre-washed and ready to use.",
      "washed-cotton"
    ],
    "careInstructions": [
      "Air regularly to help retain freshness.",
      "Wash on a gentle, cool setting with similar colours.",
      "Line dry in the shade only.",
      "Do not tumble dry or iron.",
      "Make sure your bed cover is dry before folding."
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/rory-washed-cotton-bed-cover-mahogany",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 31500,
    "sourceCompareAtPrice": 45000,
    "demoPricePKR": 31500,
    "demoCompareAtPricePKR": 45000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/other-bedding/rory-washed-cotton-bed-cover-mahogany-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/other-bedding/rory-washed-cotton-bed-cover-mahogany-01.jpg",
        "alt": "Rory Washed Cotton - Mahogany Bed Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Mahogany"
      },
      {
        "src": "/assets/sheetsociety-catalog/other-bedding/rory-washed-cotton-bed-cover-mahogany-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/other-bedding/rory-washed-cotton-bed-cover-mahogany-02.jpg",
        "alt": "Rory Washed Cotton - Mahogany Bed Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Mahogany"
      },
      {
        "src": "/assets/sheetsociety-catalog/other-bedding/rory-washed-cotton-bed-cover-mahogany-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/other-bedding/rory-washed-cotton-bed-cover-mahogany-03.jpg",
        "alt": "Rory Washed Cotton - Mahogany Bed Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Mahogany"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Mahogany",
          "Millie",
          "Millie"
        ]
      }
    ],
    "variants": [
      {
        "id": "rory-washed-cotton-bed-cover-mahogany-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-RORY-WASHE-1",
        "size": "Queen",
        "colorOrPrint": "Mahogany",
        "sourcePrice": 31500,
        "sourceCompareAtPrice": 45000,
        "demoPricePKR": 31500,
        "availability": "available"
      },
      {
        "id": "rory-washed-cotton-bed-cover-mahogany-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-RORY-WASHE-2",
        "size": "King",
        "colorOrPrint": "Mahogany",
        "sourcePrice": 35500,
        "sourceCompareAtPrice": 45000,
        "demoPricePKR": 35500,
        "availability": "available"
      },
      {
        "id": "rory-washed-cotton-bed-cover-mahogany-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-RORY-WASHE-3",
        "size": "Super King",
        "colorOrPrint": "Mahogany",
        "sourcePrice": 39000,
        "sourceCompareAtPrice": 45000,
        "demoPricePKR": 39000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 106
  },
  {
    "id": "flannelette-bed-cover-jimmy-stripe",
    "handle": "flannelette-bed-cover-jimmy-stripe",
    "title": "Frankie Flannelette - Jimmy Stripe Bed Cover",
    "collectionName": "Frankie Flannelette",
    "productType": "Blankets & Bed Covers",
    "colorOrPrint": "Jimmy-stripe",
    "colorGroup": "Jimmy-stripe",
    "fabric": "Frankie Flannelette",
    "description": "Frankie Flannelette crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "cotton"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/flannelette-bed-cover-jimmy-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 12500,
    "sourceCompareAtPrice": 25000,
    "demoPricePKR": 12500,
    "demoCompareAtPricePKR": 25000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/other-bedding/flannelette-bed-cover-jimmy-stripe-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/other-bedding/flannelette-bed-cover-jimmy-stripe-01.jpg",
        "alt": "Frankie Flannelette - Jimmy Stripe Bed Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Jimmy-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/other-bedding/flannelette-bed-cover-jimmy-stripe-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/other-bedding/flannelette-bed-cover-jimmy-stripe-02.jpg",
        "alt": "Frankie Flannelette - Jimmy Stripe Bed Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Jimmy-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/other-bedding/flannelette-bed-cover-jimmy-stripe-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/other-bedding/flannelette-bed-cover-jimmy-stripe-03.jpg",
        "alt": "Frankie Flannelette - Jimmy Stripe Bed Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Jimmy-stripe"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single/King Single",
          "Double/Queen",
          "King/Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Jimmy-stripe",
          "Marlo"
        ]
      }
    ],
    "variants": [
      {
        "id": "flannelette-bed-cover-jimmy-stripe-single-king-single",
        "sourceVariantId": null,
        "title": "Single/King Single",
        "sku": "MORFE-FLANNELETT-1",
        "size": "Single/King Single",
        "colorOrPrint": "Jimmy-stripe",
        "sourcePrice": 12500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 12500,
        "availability": "available"
      },
      {
        "id": "flannelette-bed-cover-jimmy-stripe-double-queen",
        "sourceVariantId": null,
        "title": "Double/Queen",
        "sku": "MORFE-FLANNELETT-2",
        "size": "Double/Queen",
        "colorOrPrint": "Jimmy-stripe",
        "sourcePrice": 16000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 16000,
        "availability": "available"
      },
      {
        "id": "flannelette-bed-cover-jimmy-stripe-king-super-king",
        "sourceVariantId": null,
        "title": "King/Super King",
        "sku": "MORFE-FLANNELETT-3",
        "size": "King/Super King",
        "colorOrPrint": "Jimmy-stripe",
        "sourcePrice": 21500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 21500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 85
  },
  {
    "id": "flannelette-blanket-jimmy-stripe",
    "handle": "flannelette-blanket-jimmy-stripe",
    "title": "Frankie Flannelette - Jimmy Stripe Blanket",
    "collectionName": "Frankie Flannelette",
    "productType": "Blankets & Bed Covers",
    "colorOrPrint": "Jimmy-stripe",
    "colorGroup": "Jimmy-stripe",
    "fabric": "Frankie Flannelette",
    "description": "Frankie Flannelette crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "cotton, flannelette"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/flannelette-blanket-jimmy-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 12500,
    "sourceCompareAtPrice": 25000,
    "demoPricePKR": 12500,
    "demoCompareAtPricePKR": 25000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/other-bedding/flannelette-blanket-jimmy-stripe-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/other-bedding/flannelette-blanket-jimmy-stripe-01.jpg",
        "alt": "Frankie Flannelette - Jimmy Stripe Blanket - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Jimmy-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/other-bedding/flannelette-blanket-jimmy-stripe-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/other-bedding/flannelette-blanket-jimmy-stripe-02.jpg",
        "alt": "Frankie Flannelette - Jimmy Stripe Blanket - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Jimmy-stripe"
      },
      {
        "src": "/assets/sheetsociety-catalog/other-bedding/flannelette-blanket-jimmy-stripe-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/other-bedding/flannelette-blanket-jimmy-stripe-03.jpg",
        "alt": "Frankie Flannelette - Jimmy Stripe Blanket - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Jimmy-stripe"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Small",
          "Medium - Large",
          "Large - Extra Large"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Jimmy-stripe",
          "Marlo"
        ]
      }
    ],
    "variants": [
      {
        "id": "flannelette-blanket-jimmy-stripe-small",
        "sourceVariantId": null,
        "title": "Small",
        "sku": "MORFE-FLANNELETT-1",
        "size": "Small",
        "colorOrPrint": "Jimmy-stripe",
        "sourcePrice": 12500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 12500,
        "availability": "available"
      },
      {
        "id": "flannelette-blanket-jimmy-stripe-medium---large",
        "sourceVariantId": null,
        "title": "Medium - Large",
        "sku": "MORFE-FLANNELETT-2",
        "size": "Medium - Large",
        "colorOrPrint": "Jimmy-stripe",
        "sourcePrice": 16000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 16000,
        "availability": "available"
      },
      {
        "id": "flannelette-blanket-jimmy-stripe-large---extra-large",
        "sourceVariantId": null,
        "title": "Large - Extra Large",
        "sku": "MORFE-FLANNELETT-3",
        "size": "Large - Extra Large",
        "colorOrPrint": "Jimmy-stripe",
        "sourcePrice": 21500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 21500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 71
  },
  {
    "id": "flannelette-blanket-marlo-print",
    "handle": "flannelette-blanket-marlo-print",
    "title": "Frankie Flannelette - Marlo Blanket",
    "collectionName": "Frankie Flannelette",
    "productType": "Blankets & Bed Covers",
    "colorOrPrint": "Marlo",
    "colorGroup": "Marlo",
    "fabric": "Frankie Flannelette",
    "description": "Frankie Flannelette crafted with exceptional texture and drape.",
    "features": [
      "100% premium natural fibres",
      "Pre-washed for instant softness",
      "OEKO-TEX® Standard 100 certified"
    ],
    "materialDetails": [
      "Premium natural weave. Breathable and hypoallergenic. Naturally thermoregulating",
      "cotton, flannelette"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry in shade",
      "Warm iron if needed"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/flannelette-blanket-marlo-print",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 12500,
    "sourceCompareAtPrice": 25000,
    "demoPricePKR": 12500,
    "demoCompareAtPricePKR": 25000,
    "images": [
      {
        "src": "/assets/sheetsociety-catalog/other-bedding/flannelette-blanket-marlo-print-01.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/other-bedding/flannelette-blanket-marlo-print-01.jpg",
        "alt": "Frankie Flannelette - Marlo Blanket - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Marlo"
      },
      {
        "src": "/assets/sheetsociety-catalog/other-bedding/flannelette-blanket-marlo-print-02.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/other-bedding/flannelette-blanket-marlo-print-02.jpg",
        "alt": "Frankie Flannelette - Marlo Blanket - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Marlo"
      },
      {
        "src": "/assets/sheetsociety-catalog/other-bedding/flannelette-blanket-marlo-print-03.jpg",
        "remoteUrl": "/assets/sheetsociety-catalog/other-bedding/flannelette-blanket-marlo-print-03.jpg",
        "alt": "Frankie Flannelette - Marlo Blanket - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Marlo"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Small",
          "Medium/Large",
          "Large/Extra Large"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Marlo",
          "Jimmy-stripe",
          "Jimmy-stripe"
        ]
      }
    ],
    "variants": [
      {
        "id": "flannelette-blanket-marlo-print-small",
        "sourceVariantId": null,
        "title": "Small",
        "sku": "MORFE-FLANNELETT-1",
        "size": "Small",
        "colorOrPrint": "Marlo",
        "sourcePrice": 12500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 12500,
        "availability": "available"
      },
      {
        "id": "flannelette-blanket-marlo-print-medium-large",
        "sourceVariantId": null,
        "title": "Medium/Large",
        "sku": "MORFE-FLANNELETT-2",
        "size": "Medium/Large",
        "colorOrPrint": "Marlo",
        "sourcePrice": 16000,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 16000,
        "availability": "available"
      },
      {
        "id": "flannelette-blanket-marlo-print-large-extra-large",
        "sourceVariantId": null,
        "title": "Large/Extra Large",
        "sku": "MORFE-FLANNELETT-3",
        "size": "Large/Extra Large",
        "colorOrPrint": "Marlo",
        "sourcePrice": 21500,
        "sourceCompareAtPrice": 25000,
        "demoPricePKR": 21500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 64
  },
  {
    "id": "quilt-light-weight",
    "handle": "quilt-light-weight",
    "title": "Low Down™ - Light Weight Quilt",
    "collectionName": "Low Down Recycled",
    "productType": "Quilts & Pillows",
    "colorOrPrint": "Natural White",
    "colorGroup": "Natural White",
    "fabric": "Low Down Recycled",
    "description": "Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced low down recycled to deliver breathable loft and cloud-like support night after night.",
    "features": [
      "Low Down™ - Light Weight Quilt"
    ],
    "materialDetails": [
      "Box-stitch quilted baffling with double-needle piped seams",
      "600FP Recycled Down & Feather"
    ],
    "careInstructions": [
      "Gentle machine wash or professional dry clean",
      "Air flat in natural shade to maintain natural loft",
      "Fluff regularly to maintain breathability"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/quilt-light-weight",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 44000,
    "sourceCompareAtPrice": 57200,
    "demoPricePKR": 44000,
    "demoCompareAtPricePKR": 57200,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_LIGHT-WEIGHT_01.jpg?v=1679274238",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_LIGHT-WEIGHT_01.jpg?v=1679274238",
        "alt": "Low Down™ - Light Weight Quilt - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_LIGHT-WEIGHT_02.jpg?v=1721701651",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_LIGHT-WEIGHT_02.jpg?v=1721701651",
        "alt": "Low Down™ - Light Weight Quilt - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_LIGHT-WEIGHT_03.jpg?v=1721701651",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_LIGHT-WEIGHT_03.jpg?v=1721701651",
        "alt": "Low Down™ - Light Weight Quilt - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_LIGHT-WEIGHT_09_d914d491-3ce9-462e-b0c0-deb634818192.jpg?v=1721701651",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_LIGHT-WEIGHT_09_d914d491-3ce9-462e-b0c0-deb634818192.jpg?v=1721701651",
        "alt": "Low Down™ - Light Weight Quilt - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_LIGHT-WEIGHT_05.jpg?v=1721701651",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_LIGHT-WEIGHT_05.jpg?v=1721701651",
        "alt": "Low Down™ - Light Weight Quilt - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_LIGHT-WEIGHT_08.jpg?v=1721701651",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_LIGHT-WEIGHT_08.jpg?v=1721701651",
        "alt": "Low Down™ - Light Weight Quilt - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Natural White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Natural White"
        ]
      }
    ],
    "variants": [
      {
        "id": "quilt-light-weight-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-QUILT-LIGH-1",
        "size": "Double",
        "colorOrPrint": "Natural White",
        "sourcePrice": 41500,
        "sourceCompareAtPrice": 57200,
        "demoPricePKR": 41500,
        "availability": "available"
      },
      {
        "id": "quilt-light-weight-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-QUILT-LIGH-2",
        "size": "Queen",
        "colorOrPrint": "Natural White",
        "sourcePrice": 44000,
        "sourceCompareAtPrice": 57200,
        "demoPricePKR": 44000,
        "availability": "available"
      },
      {
        "id": "quilt-light-weight-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-QUILT-LIGH-3",
        "size": "King",
        "colorOrPrint": "Natural White",
        "sourcePrice": 47500,
        "sourceCompareAtPrice": 57200,
        "demoPricePKR": 47500,
        "availability": "available"
      },
      {
        "id": "quilt-light-weight-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-QUILT-LIGH-4",
        "size": "Super King",
        "colorOrPrint": "Natural White",
        "sourcePrice": 50500,
        "sourceCompareAtPrice": 57200,
        "demoPricePKR": 50500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 72
  },
  {
    "id": "quilt-medium-weight",
    "handle": "quilt-medium-weight",
    "title": "Low Down™ - Medium Weight Quilt",
    "collectionName": "Low Down Recycled",
    "productType": "Quilts & Pillows",
    "colorOrPrint": "Natural White",
    "colorGroup": "Natural White",
    "fabric": "Low Down Recycled",
    "description": "Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced low down recycled to deliver breathable loft and cloud-like support night after night.",
    "features": [
      "Low Down™ - Medium Weight Quilt"
    ],
    "materialDetails": [
      "Box-stitch quilted baffling with double-needle piped seams",
      "600FP Recycled Down & Feather"
    ],
    "careInstructions": [
      "Gentle machine wash or professional dry clean",
      "Air flat in natural shade to maintain natural loft",
      "Fluff regularly to maintain breathability"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/quilt-medium-weight",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 50500,
    "sourceCompareAtPrice": 65650,
    "demoPricePKR": 50500,
    "demoCompareAtPricePKR": 65650,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_MID-WEIGHT_01.jpg?v=1764648714",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_MID-WEIGHT_01.jpg?v=1764648714",
        "alt": "Low Down™ - Medium Weight Quilt - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_MID-WEIGHT_02.jpg?v=1764648714",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_MID-WEIGHT_02.jpg?v=1764648714",
        "alt": "Low Down™ - Medium Weight Quilt - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_MID-WEIGHT_03.jpg?v=1764648714",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_MID-WEIGHT_03.jpg?v=1764648714",
        "alt": "Low Down™ - Medium Weight Quilt - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_MID-WEIGHT_09.jpg?v=1764648714",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_MID-WEIGHT_09.jpg?v=1764648714",
        "alt": "Low Down™ - Medium Weight Quilt - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_MID-WEIGHT_10.jpg?v=1764648714",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_MID-WEIGHT_10.jpg?v=1764648714",
        "alt": "Low Down™ - Medium Weight Quilt - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_MID-WEIGHT_08.jpg?v=1764648714",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_QUILT_MID-WEIGHT_08.jpg?v=1764648714",
        "alt": "Low Down™ - Medium Weight Quilt - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Natural White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Natural White"
        ]
      }
    ],
    "variants": [
      {
        "id": "quilt-medium-weight-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-QUILT-MEDI-1",
        "size": "Double",
        "colorOrPrint": "Natural White",
        "sourcePrice": 48000,
        "sourceCompareAtPrice": 65650,
        "demoPricePKR": 48000,
        "availability": "available"
      },
      {
        "id": "quilt-medium-weight-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-QUILT-MEDI-2",
        "size": "Queen",
        "colorOrPrint": "Natural White",
        "sourcePrice": 50500,
        "sourceCompareAtPrice": 65650,
        "demoPricePKR": 50500,
        "availability": "available"
      },
      {
        "id": "quilt-medium-weight-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-QUILT-MEDI-3",
        "size": "King",
        "colorOrPrint": "Natural White",
        "sourcePrice": 54000,
        "sourceCompareAtPrice": 65650,
        "demoPricePKR": 54000,
        "availability": "available"
      },
      {
        "id": "quilt-medium-weight-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-QUILT-MEDI-4",
        "size": "Super King",
        "colorOrPrint": "Natural White",
        "sourcePrice": 57000,
        "sourceCompareAtPrice": 65650,
        "demoPricePKR": 57000,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 79
  },
  {
    "id": "pillow-low-soft",
    "handle": "pillow-low-soft",
    "title": "Low Down™ - Low & Soft Pillow",
    "collectionName": "Low Down Recycled",
    "productType": "Quilts & Pillows",
    "colorOrPrint": "Crisp White",
    "colorGroup": "Crisp White",
    "fabric": "Low Down Recycled",
    "description": "Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced low down recycled to deliver breathable loft and cloud-like support night after night.",
    "features": [
      "Low Down™ - Low & Soft Pillow"
    ],
    "materialDetails": [
      "Box-stitch quilted baffling with double-needle piped seams",
      "600FP Recycled Down & Feather"
    ],
    "careInstructions": [
      "Gentle machine wash or professional dry clean",
      "Air flat in natural shade to maintain natural loft",
      "Fluff regularly to maintain breathability"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/pillow-low-soft",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 25000,
    "sourceCompareAtPrice": 32500,
    "demoPricePKR": 25000,
    "demoCompareAtPricePKR": 32500,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PILLOW_LOW-SOFT_02.jpg?v=1679274361",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PILLOW_LOW-SOFT_02.jpg?v=1679274361",
        "alt": "Low Down™ - Low & Soft Pillow - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PILLOW_LOW-SOFT_01.jpg?v=1679277787",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PILLOW_LOW-SOFT_01.jpg?v=1679277787",
        "alt": "Low Down™ - Low & Soft Pillow - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PILLOW_LOW-SOFT_03.jpg?v=1679277787",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PILLOW_LOW-SOFT_03.jpg?v=1679277787",
        "alt": "Low Down™ - Low & Soft Pillow - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PILLOW_LOW-SOFT_04.jpg?v=1679277787",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PILLOW_LOW-SOFT_04.jpg?v=1679277787",
        "alt": "Low Down™ - Low & Soft Pillow - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/01_BED_BASICS.jpg?v=1679277787",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/01_BED_BASICS.jpg?v=1679277787",
        "alt": "Low Down™ - Low & Soft Pillow - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PILLOW_DETAILS_01.jpg?v=1679277787",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PILLOW_DETAILS_01.jpg?v=1679277787",
        "alt": "Low Down™ - Low & Soft Pillow - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PACKAGING_1d3135db-b91d-4715-8700-e32a1f3c0e79.jpg?v=1679377639",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PACKAGING_1d3135db-b91d-4715-8700-e32a1f3c0e79.jpg?v=1679377639",
        "alt": "Low Down™ - Low & Soft Pillow - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Crisp White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Standard (48x73cm)",
          "European (65x65cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Crisp White"
        ]
      }
    ],
    "variants": [
      {
        "id": "pillow-low-soft-standard--48x73cm-",
        "sourceVariantId": null,
        "title": "Standard (48x73cm)",
        "sku": "MORFE-PILLOW-LOW-1",
        "size": "Standard (48x73cm)",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 25000,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 25000,
        "availability": "available"
      },
      {
        "id": "pillow-low-soft-european--65x65cm-",
        "sourceVariantId": null,
        "title": "European (65x65cm)",
        "sku": "MORFE-PILLOW-LOW-2",
        "size": "European (65x65cm)",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 27000,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 27000,
        "availability": "available"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 109
  },
  {
    "id": "pillow-medium-firm",
    "handle": "pillow-medium-firm",
    "title": "Low Down™ - Medium & Firm Pillow",
    "collectionName": "Low Down Recycled",
    "productType": "Quilts & Pillows",
    "colorOrPrint": "Crisp White",
    "colorGroup": "Crisp White",
    "fabric": "Low Down Recycled",
    "description": "Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced low down recycled to deliver breathable loft and cloud-like support night after night.",
    "features": [
      "Low Down™ - Medium & Firm Pillow"
    ],
    "materialDetails": [
      "Box-stitch quilted baffling with double-needle piped seams",
      "600FP Recycled Down & Feather"
    ],
    "careInstructions": [
      "Gentle machine wash or professional dry clean",
      "Air flat in natural shade to maintain natural loft",
      "Fluff regularly to maintain breathability"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/pillow-medium-firm",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 30000,
    "sourceCompareAtPrice": 39000,
    "demoPricePKR": 30000,
    "demoCompareAtPricePKR": 39000,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PILLOW_HIGH-FIRM_02.jpg?v=1679277819",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PILLOW_HIGH-FIRM_02.jpg?v=1679277819",
        "alt": "Low Down™ - Medium & Firm Pillow - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PILLOW_HIGH-FIRM_01.jpg?v=1679277819",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PILLOW_HIGH-FIRM_01.jpg?v=1679277819",
        "alt": "Low Down™ - Medium & Firm Pillow - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PILLOW_HIGH-FIRM_03.jpg?v=1679277819",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PILLOW_HIGH-FIRM_03.jpg?v=1679277819",
        "alt": "Low Down™ - Medium & Firm Pillow - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PILLOW_HIGH-FIRM_04.jpg?v=1679277819",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PILLOW_HIGH-FIRM_04.jpg?v=1679277819",
        "alt": "Low Down™ - Medium & Firm Pillow - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/01_BED_BASICS_cd52fd68-60b8-47fa-ba39-985926f2dc7f.jpg?v=1679277819",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/01_BED_BASICS_cd52fd68-60b8-47fa-ba39-985926f2dc7f.jpg?v=1679277819",
        "alt": "Low Down™ - Medium & Firm Pillow - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PILLOW_HIGH-FIRM_05.jpg?v=1679277819",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PILLOW_HIGH-FIRM_05.jpg?v=1679277819",
        "alt": "Low Down™ - Medium & Firm Pillow - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PACKAGING.jpg?v=1679377627",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/LOWDOWN_PACKAGING.jpg?v=1679377627",
        "alt": "Low Down™ - Medium & Firm Pillow - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Crisp White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Standard (48x73cm)",
          "European (65x65cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Crisp White"
        ]
      }
    ],
    "variants": [
      {
        "id": "pillow-medium-firm-standard--48x73cm-",
        "sourceVariantId": null,
        "title": "Standard (48x73cm)",
        "sku": "MORFE-PILLOW-MED-1",
        "size": "Standard (48x73cm)",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 30000,
        "sourceCompareAtPrice": 39000,
        "demoPricePKR": 30000,
        "availability": "available"
      },
      {
        "id": "pillow-medium-firm-european--65x65cm-",
        "sourceVariantId": null,
        "title": "European (65x65cm)",
        "sku": "MORFE-PILLOW-MED-2",
        "size": "European (65x65cm)",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 32000,
        "sourceCompareAtPrice": 39000,
        "demoPricePKR": 32000,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 146
  },
  {
    "id": "corn-quilt-light-weight",
    "handle": "corn-quilt-light-weight",
    "title": "Cloud Corn - Light Weight Quilt",
    "collectionName": "Cloud Corn Plant-Based",
    "productType": "Quilts & Pillows",
    "colorOrPrint": "Natural White",
    "colorGroup": "Natural White",
    "fabric": "Cloud Corn Plant-Based",
    "description": "Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced cloud corn plant-based to deliver breathable loft and cloud-like support night after night.",
    "features": [
      "Cloud Corn - Light Weight Quilt"
    ],
    "materialDetails": [
      "Box-stitch quilted baffling with double-needle piped seams",
      "300 GSM Plant-Based Corn Fibre"
    ],
    "careInstructions": [
      "Gentle machine wash or professional dry clean",
      "Air flat in natural shade to maintain natural loft",
      "Fluff regularly to maintain breathability"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/corn-quilt-light-weight",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 24500,
    "sourceCompareAtPrice": 31850,
    "demoPricePKR": 24500,
    "demoCompareAtPricePKR": 31850,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_LIGHT_QUILT_1.jpg?v=1764648724",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_LIGHT_QUILT_1.jpg?v=1764648724",
        "alt": "Cloud Corn - Light Weight Quilt - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_LIGHT_SET.jpg?v=1764648724",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_LIGHT_SET.jpg?v=1764648724",
        "alt": "Cloud Corn - Light Weight Quilt - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/03_QUILT_BUNDLE_7999f8aa-32ff-4d95-956b-7b6383937ba4.jpg?v=1764648724",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/03_QUILT_BUNDLE_7999f8aa-32ff-4d95-956b-7b6383937ba4.jpg?v=1764648724",
        "alt": "Cloud Corn - Light Weight Quilt - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_QUILT_BOTTON_1_42c8afb9-c38c-46fb-a514-500f8731b1a4.jpg?v=1764648724",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_QUILT_BOTTON_1_42c8afb9-c38c-46fb-a514-500f8731b1a4.jpg?v=1764648724",
        "alt": "Cloud Corn - Light Weight Quilt - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_QUILT_BOTTON_2_5173680f-5921-4230-b6a8-1480576d6bb0.jpg?v=1764648724",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_QUILT_BOTTON_2_5173680f-5921-4230-b6a8-1480576d6bb0.jpg?v=1764648724",
        "alt": "Cloud Corn - Light Weight Quilt - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_QUILT_BUNDLE_SET_SWATCH_2_06c44e22-361b-40ff-a3a5-f8b7f0e73545.jpg?v=1764648724",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_QUILT_BUNDLE_SET_SWATCH_2_06c44e22-361b-40ff-a3a5-f8b7f0e73545.jpg?v=1764648724",
        "alt": "Cloud Corn - Light Weight Quilt - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_QUILT_LABEL_13c18635-4bb9-4844-b5dd-218cb28716ec.jpg?v=1764648724",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_QUILT_LABEL_13c18635-4bb9-4844-b5dd-218cb28716ec.jpg?v=1764648724",
        "alt": "Cloud Corn - Light Weight Quilt - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_LIGHT_QUILT_2.jpg?v=1764648724",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_LIGHT_QUILT_2.jpg?v=1764648724",
        "alt": "Cloud Corn - Light Weight Quilt - View 8",
        "role": "gallery",
        "position": 8,
        "colorOrPrint": "Natural White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Natural White"
        ]
      }
    ],
    "variants": [
      {
        "id": "corn-quilt-light-weight-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-CORN-QUILT-1",
        "size": "Double",
        "colorOrPrint": "Natural White",
        "sourcePrice": 22000,
        "sourceCompareAtPrice": 31850,
        "demoPricePKR": 22000,
        "availability": "available"
      },
      {
        "id": "corn-quilt-light-weight-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-CORN-QUILT-2",
        "size": "Queen",
        "colorOrPrint": "Natural White",
        "sourcePrice": 24500,
        "sourceCompareAtPrice": 31850,
        "demoPricePKR": 24500,
        "availability": "available"
      },
      {
        "id": "corn-quilt-light-weight-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-CORN-QUILT-3",
        "size": "King",
        "colorOrPrint": "Natural White",
        "sourcePrice": 28000,
        "sourceCompareAtPrice": 31850,
        "demoPricePKR": 28000,
        "availability": "available"
      },
      {
        "id": "corn-quilt-light-weight-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-CORN-QUILT-4",
        "size": "Super King",
        "colorOrPrint": "Natural White",
        "sourcePrice": 31000,
        "sourceCompareAtPrice": 31850,
        "demoPricePKR": 31000,
        "availability": "available"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 60
  },
  {
    "id": "corn-quilt-medium-weight",
    "handle": "corn-quilt-medium-weight",
    "title": "Cloud Corn - Medium Weight Quilt",
    "collectionName": "Cloud Corn Plant-Based",
    "productType": "Quilts & Pillows",
    "colorOrPrint": "Natural White",
    "colorGroup": "Natural White",
    "fabric": "Cloud Corn Plant-Based",
    "description": "Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced cloud corn plant-based to deliver breathable loft and cloud-like support night after night.",
    "features": [
      "Cloud Corn - Medium Weight Quilt"
    ],
    "materialDetails": [
      "Box-stitch quilted baffling with double-needle piped seams",
      "300 GSM Plant-Based Corn Fibre"
    ],
    "careInstructions": [
      "Gentle machine wash or professional dry clean",
      "Air flat in natural shade to maintain natural loft",
      "Fluff regularly to maintain breathability"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/corn-quilt-medium-weight",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 31500,
    "sourceCompareAtPrice": 40950,
    "demoPricePKR": 31500,
    "demoCompareAtPricePKR": 40950,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_MEDIUM_QUILT_1.jpg?v=1691377929",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_MEDIUM_QUILT_1.jpg?v=1691377929",
        "alt": "Cloud Corn - Medium Weight Quilt - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_MEDIUM_SET.jpg?v=1691991460",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_MEDIUM_SET.jpg?v=1691991460",
        "alt": "Cloud Corn - Medium Weight Quilt - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/03_QUILT_BUNDLE_e37b68da-e316-45ba-a36e-3359498168f6.jpg?v=1721699371",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/03_QUILT_BUNDLE_e37b68da-e316-45ba-a36e-3359498168f6.jpg?v=1721699371",
        "alt": "Cloud Corn - Medium Weight Quilt - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_QUILT_BOTTON_1_d0171de3-63a4-44b9-a2a3-7fc95b3e62e6.jpg?v=1721699371",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_QUILT_BOTTON_1_d0171de3-63a4-44b9-a2a3-7fc95b3e62e6.jpg?v=1721699371",
        "alt": "Cloud Corn - Medium Weight Quilt - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_QUILT_BOTTON_2_40ae69c3-0e5b-49be-ab78-406673b8e116.jpg?v=1721699371",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_QUILT_BOTTON_2_40ae69c3-0e5b-49be-ab78-406673b8e116.jpg?v=1721699371",
        "alt": "Cloud Corn - Medium Weight Quilt - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_QUILT_BUNDLE_SET_SWATCH_2_3d9d1185-c412-44fc-92a8-eba1b03aa019.jpg?v=1721699371",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_QUILT_BUNDLE_SET_SWATCH_2_3d9d1185-c412-44fc-92a8-eba1b03aa019.jpg?v=1721699371",
        "alt": "Cloud Corn - Medium Weight Quilt - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_QUILT_LABEL_89e0896c-ca32-41f9-9047-1275f2547ac0.jpg?v=1721699371",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_QUILT_LABEL_89e0896c-ca32-41f9-9047-1275f2547ac0.jpg?v=1721699371",
        "alt": "Cloud Corn - Medium Weight Quilt - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_MEDIUM_QUILT_2.jpg?v=1721699371",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_MEDIUM_QUILT_2.jpg?v=1721699371",
        "alt": "Cloud Corn - Medium Weight Quilt - View 8",
        "role": "gallery",
        "position": 8,
        "colorOrPrint": "Natural White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Natural White"
        ]
      }
    ],
    "variants": [
      {
        "id": "corn-quilt-medium-weight-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-CORN-QUILT-1",
        "size": "Double",
        "colorOrPrint": "Natural White",
        "sourcePrice": 29000,
        "sourceCompareAtPrice": 40950,
        "demoPricePKR": 29000,
        "availability": "available"
      },
      {
        "id": "corn-quilt-medium-weight-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-CORN-QUILT-2",
        "size": "Queen",
        "colorOrPrint": "Natural White",
        "sourcePrice": 31500,
        "sourceCompareAtPrice": 40950,
        "demoPricePKR": 31500,
        "availability": "available"
      },
      {
        "id": "corn-quilt-medium-weight-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-CORN-QUILT-3",
        "size": "King",
        "colorOrPrint": "Natural White",
        "sourcePrice": 35000,
        "sourceCompareAtPrice": 40950,
        "demoPricePKR": 35000,
        "availability": "available"
      },
      {
        "id": "corn-quilt-medium-weight-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-CORN-QUILT-4",
        "size": "Super King",
        "colorOrPrint": "Natural White",
        "sourcePrice": 38000,
        "sourceCompareAtPrice": 40950,
        "demoPricePKR": 38000,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 47
  },
  {
    "id": "corn-pillow-low-soft",
    "handle": "corn-pillow-low-soft",
    "title": "Cloud Corn - Low & Soft Pillow",
    "collectionName": "Cloud Corn Plant-Based",
    "productType": "Quilts & Pillows",
    "colorOrPrint": "Crisp White",
    "colorGroup": "Crisp White",
    "fabric": "Cloud Corn Plant-Based",
    "description": "Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced cloud corn plant-based to deliver breathable loft and cloud-like support night after night.",
    "features": [
      "Cloud Corn - Low & Soft Pillow"
    ],
    "materialDetails": [
      "Box-stitch quilted baffling with double-needle piped seams",
      "300 GSM Plant-Based Corn Fibre"
    ],
    "careInstructions": [
      "Gentle machine wash or professional dry clean",
      "Air flat in natural shade to maintain natural loft",
      "Fluff regularly to maintain breathability"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/corn-pillow-low-soft",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 14500,
    "sourceCompareAtPrice": 18850,
    "demoPricePKR": 14500,
    "demoCompareAtPricePKR": 18850,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_LOW_SOFT_PILLOW_1.jpg?v=1691378358",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_LOW_SOFT_PILLOW_1.jpg?v=1691378358",
        "alt": "Cloud Corn - Low & Soft Pillow - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_LIGHT_FIRM_PILLOW_4.jpg?v=1691378358",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_LIGHT_FIRM_PILLOW_4.jpg?v=1691378358",
        "alt": "Cloud Corn - Low & Soft Pillow - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_LOW_SOFT_PILLOW_3.jpg?v=1691378358",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_LOW_SOFT_PILLOW_3.jpg?v=1691378358",
        "alt": "Cloud Corn - Low & Soft Pillow - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_LOW_SOFT_PILLOW_2.jpg?v=1691378358",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_LOW_SOFT_PILLOW_2.jpg?v=1691378358",
        "alt": "Cloud Corn - Low & Soft Pillow - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Crisp White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Standard (48x73cm)",
          "European (65x65cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Crisp White"
        ]
      }
    ],
    "variants": [
      {
        "id": "corn-pillow-low-soft-standard--48x73cm-",
        "sourceVariantId": null,
        "title": "Standard (48x73cm)",
        "sku": "MORFE-CORN-PILLO-1",
        "size": "Standard (48x73cm)",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18850,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "corn-pillow-low-soft-european--65x65cm-",
        "sourceVariantId": null,
        "title": "European (65x65cm)",
        "sku": "MORFE-CORN-PILLO-2",
        "size": "European (65x65cm)",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 16500,
        "sourceCompareAtPrice": 18850,
        "demoPricePKR": 16500,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 118
  },
  {
    "id": "corn-pillow-medium-firm",
    "handle": "corn-pillow-medium-firm",
    "title": "Cloud Corn - Medium & Firm Pillow",
    "collectionName": "Cloud Corn Plant-Based",
    "productType": "Quilts & Pillows",
    "colorOrPrint": "Crisp White",
    "colorGroup": "Crisp White",
    "fabric": "Cloud Corn Plant-Based",
    "description": "Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced cloud corn plant-based to deliver breathable loft and cloud-like support night after night.",
    "features": [
      "Cloud Corn - Medium & Firm Pillow"
    ],
    "materialDetails": [
      "Box-stitch quilted baffling with double-needle piped seams",
      "300 GSM Plant-Based Corn Fibre"
    ],
    "careInstructions": [
      "Gentle machine wash or professional dry clean",
      "Air flat in natural shade to maintain natural loft",
      "Fluff regularly to maintain breathability"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/corn-pillow-medium-firm",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 17500,
    "sourceCompareAtPrice": 22750,
    "demoPricePKR": 17500,
    "demoCompareAtPricePKR": 22750,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_MEDIUM_FIRM_PILLOW_1.jpg?v=1691378054",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_MEDIUM_FIRM_PILLOW_1.jpg?v=1691378054",
        "alt": "Cloud Corn - Medium & Firm Pillow - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_MEDIUM_FIRM_PILLOW_4.jpg?v=1691378407",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_MEDIUM_FIRM_PILLOW_4.jpg?v=1691378407",
        "alt": "Cloud Corn - Medium & Firm Pillow - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_MEDIUM_FIRM_PILLOW_3.jpg?v=1691378407",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_MEDIUM_FIRM_PILLOW_3.jpg?v=1691378407",
        "alt": "Cloud Corn - Medium & Firm Pillow - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_MEDIUM_FIRM_PILLOW_2.jpg?v=1691378407",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CLOUD_CORN_MEDIUM_FIRM_PILLOW_2.jpg?v=1691378407",
        "alt": "Cloud Corn - Medium & Firm Pillow - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Crisp White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Standard (48x73cm)",
          "European (65x65cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Crisp White"
        ]
      }
    ],
    "variants": [
      {
        "id": "corn-pillow-medium-firm-standard--48x73cm-",
        "sourceVariantId": null,
        "title": "Standard (48x73cm)",
        "sku": "MORFE-CORN-PILLO-1",
        "size": "Standard (48x73cm)",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 17500,
        "sourceCompareAtPrice": 22750,
        "demoPricePKR": 17500,
        "availability": "available"
      },
      {
        "id": "corn-pillow-medium-firm-european--65x65cm-",
        "sourceVariantId": null,
        "title": "European (65x65cm)",
        "sku": "MORFE-CORN-PILLO-2",
        "size": "European (65x65cm)",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 19500,
        "sourceCompareAtPrice": 22750,
        "demoPricePKR": 19500,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 93
  },
  {
    "id": "wool-quilt-medium-weight",
    "handle": "wool-quilt-medium-weight",
    "title": "Wonder Wool - Medium Weight Quilt",
    "collectionName": "Wonder Wool",
    "productType": "Quilts & Pillows",
    "colorOrPrint": "Natural White",
    "colorGroup": "Natural White",
    "fabric": "Wonder Wool",
    "description": "Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced wonder wool to deliver breathable loft and cloud-like support night after night.",
    "features": [
      "Wonder Wool - Medium Weight Quilt"
    ],
    "materialDetails": [
      "Box-stitch quilted baffling with double-needle piped seams",
      "350 GSM Pure Australian Wool"
    ],
    "careInstructions": [
      "Gentle machine wash or professional dry clean",
      "Air flat in natural shade to maintain natural loft",
      "Fluff regularly to maintain breathability"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/wool-quilt-medium-weight",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 31500,
    "sourceCompareAtPrice": 40950,
    "demoPricePKR": 31500,
    "demoCompareAtPricePKR": 40950,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Medium_Weight_Quilt_Wonder_Wool_Folded.jpg?v=1713782094",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Medium_Weight_Quilt_Wonder_Wool_Folded.jpg?v=1713782094",
        "alt": "Wonder Wool - Medium Weight Quilt - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Medium_Weight_Quilt_Wonder_Wool_On_Bed.jpg?v=1721698604",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Medium_Weight_Quilt_Wonder_Wool_On_Bed.jpg?v=1721698604",
        "alt": "Wonder Wool - Medium Weight Quilt - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/03_QUILT_BUNDLE_2f70a254-450a-459d-80b8-ebc0834e2221.jpg?v=1721698452",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/03_QUILT_BUNDLE_2f70a254-450a-459d-80b8-ebc0834e2221.jpg?v=1721698452",
        "alt": "Wonder Wool - Medium Weight Quilt - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Quilt_Wonder_Wool_Clip_Detail_02_7953415f-f108-4d7c-ba28-67638e87d426.jpg?v=1721698452",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Quilt_Wonder_Wool_Clip_Detail_02_7953415f-f108-4d7c-ba28-67638e87d426.jpg?v=1721698452",
        "alt": "Wonder Wool - Medium Weight Quilt - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Quilt_Wonder_Wool_Clip_Texture_01_4e1b82b5-b74e-4dfc-ac2b-7719f10e5b16.jpg?v=1721698452",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Quilt_Wonder_Wool_Clip_Texture_01_4e1b82b5-b74e-4dfc-ac2b-7719f10e5b16.jpg?v=1721698452",
        "alt": "Wonder Wool - Medium Weight Quilt - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Quilt_Wonder_Wool_Clip_Label_Detail_1a123bcf-1f62-46e6-aa47-e603d931e4bf.jpg?v=1721698452",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Quilt_Wonder_Wool_Clip_Label_Detail_1a123bcf-1f62-46e6-aa47-e603d931e4bf.jpg?v=1721698452",
        "alt": "Wonder Wool - Medium Weight Quilt - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Natural White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Natural White"
        ]
      }
    ],
    "variants": [
      {
        "id": "wool-quilt-medium-weight-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-WOOL-QUILT-1",
        "size": "Double",
        "colorOrPrint": "Natural White",
        "sourcePrice": 29000,
        "sourceCompareAtPrice": 40950,
        "demoPricePKR": 29000,
        "availability": "available"
      },
      {
        "id": "wool-quilt-medium-weight-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-WOOL-QUILT-2",
        "size": "Queen",
        "colorOrPrint": "Natural White",
        "sourcePrice": 31500,
        "sourceCompareAtPrice": 40950,
        "demoPricePKR": 31500,
        "availability": "available"
      },
      {
        "id": "wool-quilt-medium-weight-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-WOOL-QUILT-3",
        "size": "King",
        "colorOrPrint": "Natural White",
        "sourcePrice": 35000,
        "sourceCompareAtPrice": 40950,
        "demoPricePKR": 35000,
        "availability": "available"
      },
      {
        "id": "wool-quilt-medium-weight-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-WOOL-QUILT-4",
        "size": "Super King",
        "colorOrPrint": "Natural White",
        "sourcePrice": 38000,
        "sourceCompareAtPrice": 40950,
        "demoPricePKR": 38000,
        "availability": "available"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 127
  },
  {
    "id": "wool-quilt-light-weight",
    "handle": "wool-quilt-light-weight",
    "title": "Wonder Wool - Light Weight Quilt",
    "collectionName": "Wonder Wool",
    "productType": "Quilts & Pillows",
    "colorOrPrint": "Natural White",
    "colorGroup": "Natural White",
    "fabric": "Wonder Wool",
    "description": "Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced wonder wool to deliver breathable loft and cloud-like support night after night.",
    "features": [
      "Wonder Wool - Light Weight Quilt"
    ],
    "materialDetails": [
      "Box-stitch quilted baffling with double-needle piped seams",
      "350 GSM Pure Australian Wool"
    ],
    "careInstructions": [
      "Gentle machine wash or professional dry clean",
      "Air flat in natural shade to maintain natural loft",
      "Fluff regularly to maintain breathability"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/wool-quilt-light-weight",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 25000,
    "sourceCompareAtPrice": 32500,
    "demoPricePKR": 25000,
    "demoCompareAtPricePKR": 32500,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Light_Weight_Quilt_Wonder_Wool_Folded.jpg?v=1764648721",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Light_Weight_Quilt_Wonder_Wool_Folded.jpg?v=1764648721",
        "alt": "Wonder Wool - Light Weight Quilt - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Wonder_Wool_Quilt_Bundle_On_Bed_02_279a5531-5675-4c6a-b861-af031d4ffd31.jpg?v=1764648721",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Wonder_Wool_Quilt_Bundle_On_Bed_02_279a5531-5675-4c6a-b861-af031d4ffd31.jpg?v=1764648721",
        "alt": "Wonder Wool - Light Weight Quilt - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/03_QUILT_BUNDLE_9359c918-a912-433f-a2cf-8ace6ed5d422.jpg?v=1764648721",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/03_QUILT_BUNDLE_9359c918-a912-433f-a2cf-8ace6ed5d422.jpg?v=1764648721",
        "alt": "Wonder Wool - Light Weight Quilt - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Quilt_Wonder_Wool_Clip_Detail_02_e284b1c2-1c1d-45e0-90c0-8d59aa5af0ca.jpg?v=1764648721",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Quilt_Wonder_Wool_Clip_Detail_02_e284b1c2-1c1d-45e0-90c0-8d59aa5af0ca.jpg?v=1764648721",
        "alt": "Wonder Wool - Light Weight Quilt - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Quilt_Wonder_Wool_Clip_Texture_01_320bce08-8cc2-4ff9-9f14-5570a5c3e979.jpg?v=1764648721",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Quilt_Wonder_Wool_Clip_Texture_01_320bce08-8cc2-4ff9-9f14-5570a5c3e979.jpg?v=1764648721",
        "alt": "Wonder Wool - Light Weight Quilt - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Quilt_Wonder_Wool_Clip_Label_Detail_256a63dc-a863-45d1-a4b6-c79c6a390965.jpg?v=1764648721",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Quilt_Wonder_Wool_Clip_Label_Detail_256a63dc-a863-45d1-a4b6-c79c6a390965.jpg?v=1764648721",
        "alt": "Wonder Wool - Light Weight Quilt - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Natural White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Natural White"
        ]
      }
    ],
    "variants": [
      {
        "id": "wool-quilt-light-weight-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-WOOL-QUILT-1",
        "size": "Double",
        "colorOrPrint": "Natural White",
        "sourcePrice": 22500,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 22500,
        "availability": "available"
      },
      {
        "id": "wool-quilt-light-weight-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-WOOL-QUILT-2",
        "size": "Queen",
        "colorOrPrint": "Natural White",
        "sourcePrice": 25000,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 25000,
        "availability": "available"
      },
      {
        "id": "wool-quilt-light-weight-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-WOOL-QUILT-3",
        "size": "King",
        "colorOrPrint": "Natural White",
        "sourcePrice": 28500,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 28500,
        "availability": "available"
      },
      {
        "id": "wool-quilt-light-weight-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-WOOL-QUILT-4",
        "size": "Super King",
        "colorOrPrint": "Natural White",
        "sourcePrice": 31500,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 31500,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 131
  },
  {
    "id": "wool-cot-quilt",
    "handle": "wool-cot-quilt",
    "title": "Wonder Wool - Cot Quilt",
    "collectionName": "Wonder Wool",
    "productType": "Kids & Baby",
    "colorOrPrint": "Natural White",
    "colorGroup": "Natural White",
    "fabric": "Wonder Wool",
    "description": "Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced wonder wool to deliver breathable loft and cloud-like support night after night.",
    "features": [
      "Wonder Wool - Cot Quilt"
    ],
    "materialDetails": [
      "Box-stitch quilted baffling with double-needle piped seams",
      "350 GSM Pure Australian Wool"
    ],
    "careInstructions": [
      "Gentle machine wash or professional dry clean",
      "Air flat in natural shade to maintain natural loft",
      "Fluff regularly to maintain breathability"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/wool-cot-quilt",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 12500,
    "sourceCompareAtPrice": 16250,
    "demoPricePKR": 12500,
    "demoCompareAtPricePKR": 16250,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cot_Wonder_Wool_Quilt_Folded_01.jpg?v=1713778922",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cot_Wonder_Wool_Quilt_Folded_01.jpg?v=1713778922",
        "alt": "Wonder Wool - Cot Quilt - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cot_Wonder_Wool_Quilt_In_Cot_01.jpg?v=1713778922",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cot_Wonder_Wool_Quilt_In_Cot_01.jpg?v=1713778922",
        "alt": "Wonder Wool - Cot Quilt - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Natural White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cot_Wonder_Wool_Quilt_Cot_Detail.jpg?v=1713778922",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cot_Wonder_Wool_Quilt_Cot_Detail.jpg?v=1713778922",
        "alt": "Wonder Wool - Cot Quilt - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Natural White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Cot"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Natural White"
        ]
      }
    ],
    "variants": [
      {
        "id": "wool-cot-quilt-cot",
        "sourceVariantId": null,
        "title": "Cot",
        "sku": "MORFE-WOOL-COT-Q-1",
        "size": "Cot",
        "colorOrPrint": "Natural White",
        "sourcePrice": 12500,
        "sourceCompareAtPrice": 16250,
        "demoPricePKR": 12500,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 132
  },
  {
    "id": "mattress-protector",
    "handle": "mattress-protector",
    "title": "Bed Basics - Mattress Protector",
    "collectionName": "Eden Cotton",
    "productType": "Protectors & Toppers",
    "colorOrPrint": "Crisp White",
    "colorGroup": "Crisp White",
    "fabric": "Eden Cotton",
    "description": "Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced eden cotton to deliver breathable loft and cloud-like support night after night.",
    "features": [
      "Bed Basics - Mattress Protector"
    ],
    "materialDetails": [
      "Diamond quilted cotton casing with elasticated skirt",
      "300 GSM Plant-Based Corn Fibre"
    ],
    "careInstructions": [
      "Gentle machine wash or professional dry clean",
      "Air flat in natural shade to maintain natural loft",
      "Fluff regularly to maintain breathability"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/mattress-protector",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 13000,
    "sourceCompareAtPrice": 16900,
    "demoPricePKR": 13000,
    "demoCompareAtPricePKR": 16900,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/Mattress_Protector_1.jpg?v=1671752607",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/Mattress_Protector_1.jpg?v=1671752607",
        "alt": "Bed Basics - Mattress Protector - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/Mattress_Protector_3.jpg?v=1673311493",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/Mattress_Protector_3.jpg?v=1673311493",
        "alt": "Bed Basics - Mattress Protector - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/Mattress_Protector_4.jpg?v=1673311493",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/Mattress_Protector_4.jpg?v=1673311493",
        "alt": "Bed Basics - Mattress Protector - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/SS221130L_5407.jpg?v=1673311493",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/SS221130L_5407.jpg?v=1673311493",
        "alt": "Bed Basics - Mattress Protector - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/Mattress_Protector_2.jpg?v=1673311493",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/Mattress_Protector_2.jpg?v=1673311493",
        "alt": "Bed Basics - Mattress Protector - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Kids_Mattress_Protector.jpg?v=1692166515",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Kids_Mattress_Protector.jpg?v=1692166515",
        "alt": "Bed Basics - Mattress Protector - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/SS221130L_5292.jpg?v=1692166515",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/SS221130L_5292.jpg?v=1692166515",
        "alt": "Bed Basics - Mattress Protector - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Crisp White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "King Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Crisp White"
        ]
      }
    ],
    "variants": [
      {
        "id": "mattress-protector-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-MATTRESS-P-1",
        "size": "Single",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 10000,
        "sourceCompareAtPrice": 16900,
        "demoPricePKR": 10000,
        "availability": "available"
      },
      {
        "id": "mattress-protector-king-single",
        "sourceVariantId": null,
        "title": "King Single",
        "sku": "MORFE-MATTRESS-P-2",
        "size": "King Single",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 11500,
        "sourceCompareAtPrice": 16900,
        "demoPricePKR": 11500,
        "availability": "available"
      },
      {
        "id": "mattress-protector-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-MATTRESS-P-3",
        "size": "Double",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 12000,
        "sourceCompareAtPrice": 16900,
        "demoPricePKR": 12000,
        "availability": "available"
      },
      {
        "id": "mattress-protector-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-MATTRESS-P-4",
        "size": "Queen",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 13000,
        "sourceCompareAtPrice": 16900,
        "demoPricePKR": 13000,
        "availability": "available"
      },
      {
        "id": "mattress-protector-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-MATTRESS-P-5",
        "size": "King",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 15500,
        "sourceCompareAtPrice": 16900,
        "demoPricePKR": 15500,
        "availability": "available"
      },
      {
        "id": "mattress-protector-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-MATTRESS-P-6",
        "size": "Super King",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 18000,
        "sourceCompareAtPrice": 16900,
        "demoPricePKR": 18000,
        "availability": "available"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 51
  },
  {
    "id": "waterproof-mattress-protector",
    "handle": "waterproof-mattress-protector",
    "title": "Bed Basics - Waterproof Mattress Protector",
    "collectionName": "Eden Cotton",
    "productType": "Protectors & Toppers",
    "colorOrPrint": "Crisp White",
    "colorGroup": "Crisp White",
    "fabric": "Eden Cotton",
    "description": "Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced eden cotton to deliver breathable loft and cloud-like support night after night.",
    "features": [
      "Bed Basics - Waterproof Mattress Protector"
    ],
    "materialDetails": [
      "Diamond quilted cotton casing with elasticated skirt",
      "300 GSM Plant-Based Corn Fibre"
    ],
    "careInstructions": [
      "Gentle machine wash or professional dry clean",
      "Air flat in natural shade to maintain natural loft",
      "Fluff regularly to maintain breathability"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/waterproof-mattress-protector",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 14500,
    "sourceCompareAtPrice": 18850,
    "demoPricePKR": 14500,
    "demoCompareAtPricePKR": 18850,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Bed_Basics_Waterproof_Mattress_Protector_LEAD.jpg?v=1767070835",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Bed_Basics_Waterproof_Mattress_Protector_LEAD.jpg?v=1767070835",
        "alt": "Bed Basics - Waterproof Mattress Protector - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/SS230421L_1808.jpg?v=1767070835",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/SS230421L_1808.jpg?v=1767070835",
        "alt": "Bed Basics - Waterproof Mattress Protector - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Protector_3_1b4059ac-f661-44a7-a577-f6edb6772e20.jpg?v=1767070835",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Protector_3_1b4059ac-f661-44a7-a577-f6edb6772e20.jpg?v=1767070835",
        "alt": "Bed Basics - Waterproof Mattress Protector - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Protector_4_ff2ddd25-0f1a-4146-ae66-d2bd91f0b5dd.jpg?v=1767070835",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Protector_4_ff2ddd25-0f1a-4146-ae66-d2bd91f0b5dd.jpg?v=1767070835",
        "alt": "Bed Basics - Waterproof Mattress Protector - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/SS230421L_1797.jpg?v=1767070835",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/SS230421L_1797.jpg?v=1767070835",
        "alt": "Bed Basics - Waterproof Mattress Protector - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Kids_Mattress_Protector_waterproof_1.jpg?v=1767070835",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Kids_Mattress_Protector_waterproof_1.jpg?v=1767070835",
        "alt": "Bed Basics - Waterproof Mattress Protector - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cot_Waterproof_Matress_Protector.jpg?v=1767070835",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cot_Waterproof_Matress_Protector.jpg?v=1767070835",
        "alt": "Bed Basics - Waterproof Mattress Protector - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Kids_Mattress_Protector_waterproof_2.jpg?v=1767070835",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Kids_Mattress_Protector_waterproof_2.jpg?v=1767070835",
        "alt": "Bed Basics - Waterproof Mattress Protector - View 8",
        "role": "gallery",
        "position": 8,
        "colorOrPrint": "Crisp White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "King Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Crisp White"
        ]
      }
    ],
    "variants": [
      {
        "id": "waterproof-mattress-protector-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-WATERPROOF-1",
        "size": "Single",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 11500,
        "sourceCompareAtPrice": 18850,
        "demoPricePKR": 11500,
        "availability": "available"
      },
      {
        "id": "waterproof-mattress-protector-king-single",
        "sourceVariantId": null,
        "title": "King Single",
        "sku": "MORFE-WATERPROOF-2",
        "size": "King Single",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 13000,
        "sourceCompareAtPrice": 18850,
        "demoPricePKR": 13000,
        "availability": "available"
      },
      {
        "id": "waterproof-mattress-protector-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-WATERPROOF-3",
        "size": "Double",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 13500,
        "sourceCompareAtPrice": 18850,
        "demoPricePKR": 13500,
        "availability": "available"
      },
      {
        "id": "waterproof-mattress-protector-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-WATERPROOF-4",
        "size": "Queen",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18850,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "waterproof-mattress-protector-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-WATERPROOF-5",
        "size": "King",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 17000,
        "sourceCompareAtPrice": 18850,
        "demoPricePKR": 17000,
        "availability": "available"
      },
      {
        "id": "waterproof-mattress-protector-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-WATERPROOF-6",
        "size": "Super King",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 19500,
        "sourceCompareAtPrice": 18850,
        "demoPricePKR": 19500,
        "availability": "available"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 44
  },
  {
    "id": "cool-mode-mattress-protector",
    "handle": "cool-mode-mattress-protector",
    "title": "Cool Mode - Mattress Protector",
    "collectionName": "Microfibre",
    "productType": "Protectors & Toppers",
    "colorOrPrint": "Crisp White",
    "colorGroup": "Crisp White",
    "fabric": "Microfibre",
    "description": "Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced microfibre to deliver breathable loft and cloud-like support night after night.",
    "features": [
      "Cool Mode - Mattress Protector"
    ],
    "materialDetails": [
      "Diamond quilted cotton casing with elasticated skirt",
      "300 GSM Plant-Based Corn Fibre"
    ],
    "careInstructions": [
      "Gentle machine wash or professional dry clean",
      "Air flat in natural shade to maintain natural loft",
      "Fluff regularly to maintain breathability"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cool-mode-mattress-protector",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 16500,
    "sourceCompareAtPrice": 21450,
    "demoPricePKR": 16500,
    "demoCompareAtPricePKR": 21450,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cool_Mode_Mattress_Protector_LEAD.jpg?v=1767069931",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cool_Mode_Mattress_Protector_LEAD.jpg?v=1767069931",
        "alt": "Cool Mode - Mattress Protector - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cool_Mode_Mattress_Protector_Detail.jpg?v=1767069933",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cool_Mode_Mattress_Protector_Detail.jpg?v=1767069933",
        "alt": "Cool Mode - Mattress Protector - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cool_Mode_Mattress_Protector_Elastic.jpg?v=1767070048",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cool_Mode_Mattress_Protector_Elastic.jpg?v=1767070048",
        "alt": "Cool Mode - Mattress Protector - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Crisp White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "King Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Crisp White"
        ]
      }
    ],
    "variants": [
      {
        "id": "cool-mode-mattress-protector-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-COOL-MODE--1",
        "size": "Single",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 13500,
        "sourceCompareAtPrice": 21450,
        "demoPricePKR": 13500,
        "availability": "available"
      },
      {
        "id": "cool-mode-mattress-protector-king-single",
        "sourceVariantId": null,
        "title": "King Single",
        "sku": "MORFE-COOL-MODE--2",
        "size": "King Single",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 15000,
        "sourceCompareAtPrice": 21450,
        "demoPricePKR": 15000,
        "availability": "available"
      },
      {
        "id": "cool-mode-mattress-protector-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-COOL-MODE--3",
        "size": "Double",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 15500,
        "sourceCompareAtPrice": 21450,
        "demoPricePKR": 15500,
        "availability": "available"
      },
      {
        "id": "cool-mode-mattress-protector-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-COOL-MODE--4",
        "size": "Queen",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 16500,
        "sourceCompareAtPrice": 21450,
        "demoPricePKR": 16500,
        "availability": "available"
      },
      {
        "id": "cool-mode-mattress-protector-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-COOL-MODE--5",
        "size": "King",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 19000,
        "sourceCompareAtPrice": 21450,
        "demoPricePKR": 19000,
        "availability": "available"
      },
      {
        "id": "cool-mode-mattress-protector-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-COOL-MODE--6",
        "size": "Super King",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 21500,
        "sourceCompareAtPrice": 21450,
        "demoPricePKR": 21500,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 64
  },
  {
    "id": "pillow-protector",
    "handle": "pillow-protector",
    "title": "Bed Basics - Pillow Protector",
    "collectionName": "Eden Cotton",
    "productType": "Protectors & Toppers",
    "colorOrPrint": "Crisp White",
    "colorGroup": "Crisp White",
    "fabric": "Eden Cotton",
    "description": "Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced eden cotton to deliver breathable loft and cloud-like support night after night.",
    "features": [
      "Bed Basics - Pillow Protector"
    ],
    "materialDetails": [
      "Diamond quilted cotton casing with elasticated skirt",
      "300 GSM Plant-Based Corn Fibre"
    ],
    "careInstructions": [
      "Gentle machine wash or professional dry clean",
      "Air flat in natural shade to maintain natural loft",
      "Fluff regularly to maintain breathability"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/pillow-protector",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 6000,
    "sourceCompareAtPrice": 7800,
    "demoPricePKR": 6000,
    "demoCompareAtPricePKR": 7800,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/Pillow_Protector_8.jpg?v=1671752706",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/Pillow_Protector_8.jpg?v=1671752706",
        "alt": "Bed Basics - Pillow Protector - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/Pillow_Protector_4.jpg?v=1673243675",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/Pillow_Protector_4.jpg?v=1673243675",
        "alt": "Bed Basics - Pillow Protector - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/Pillow_Protector_6.jpg?v=1673243675",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/Pillow_Protector_6.jpg?v=1673243675",
        "alt": "Bed Basics - Pillow Protector - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/Pillow_Protector_3.jpg?v=1673243675",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/Pillow_Protector_3.jpg?v=1673243675",
        "alt": "Bed Basics - Pillow Protector - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/SS221130L_5407_e16bc9e0-fec5-4a89-83e9-c5a7f3456c21.jpg?v=1673243675",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/SS221130L_5407_e16bc9e0-fec5-4a89-83e9-c5a7f3456c21.jpg?v=1673243675",
        "alt": "Bed Basics - Pillow Protector - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/Mattress_Protector_2_9a13b5b5-5c39-4d58-aaa6-b0e9f7b998a9.jpg?v=1673243675",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/Mattress_Protector_2_9a13b5b5-5c39-4d58-aaa6-b0e9f7b998a9.jpg?v=1673243675",
        "alt": "Bed Basics - Pillow Protector - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/Pillow_Protector_7.jpg?v=1673243675",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/Pillow_Protector_7.jpg?v=1673243675",
        "alt": "Bed Basics - Pillow Protector - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Crisp White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Standard (48x73cm)",
          "European (65x65cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Crisp White"
        ]
      }
    ],
    "variants": [
      {
        "id": "pillow-protector-standard--48x73cm-",
        "sourceVariantId": null,
        "title": "Standard (48x73cm)",
        "sku": "MORFE-PILLOW-PRO-1",
        "size": "Standard (48x73cm)",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 6000,
        "sourceCompareAtPrice": 7800,
        "demoPricePKR": 6000,
        "availability": "available"
      },
      {
        "id": "pillow-protector-european--65x65cm-",
        "sourceVariantId": null,
        "title": "European (65x65cm)",
        "sku": "MORFE-PILLOW-PRO-2",
        "size": "European (65x65cm)",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 8000,
        "sourceCompareAtPrice": 7800,
        "demoPricePKR": 8000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 63
  },
  {
    "id": "cool-mode-pillow-protector",
    "handle": "cool-mode-pillow-protector",
    "title": "Cool Mode - Pillow Protector",
    "collectionName": "Microfibre",
    "productType": "Protectors & Toppers",
    "colorOrPrint": "Crisp White",
    "colorGroup": "Crisp White",
    "fabric": "Microfibre",
    "description": "Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced microfibre to deliver breathable loft and cloud-like support night after night.",
    "features": [
      "Cool Mode - Pillow Protector"
    ],
    "materialDetails": [
      "Diamond quilted cotton casing with elasticated skirt",
      "300 GSM Plant-Based Corn Fibre"
    ],
    "careInstructions": [
      "Gentle machine wash or professional dry clean",
      "Air flat in natural shade to maintain natural loft",
      "Fluff regularly to maintain breathability"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cool-mode-pillow-protector",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 6500,
    "sourceCompareAtPrice": 8450,
    "demoPricePKR": 6500,
    "demoCompareAtPricePKR": 8450,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cool_Mode_Pillow_Protector_LEAD_4e14cda7-63fa-402a-9309-ab577f4094a7.jpg?v=1767070176",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cool_Mode_Pillow_Protector_LEAD_4e14cda7-63fa-402a-9309-ab577f4094a7.jpg?v=1767070176",
        "alt": "Cool Mode - Pillow Protector - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cool_Mode_Pillow_Protector_Styled_cc77faaf-9153-47e3-9429-4eb47e7d054f.jpg?v=1767070176",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cool_Mode_Pillow_Protector_Styled_cc77faaf-9153-47e3-9429-4eb47e7d054f.jpg?v=1767070176",
        "alt": "Cool Mode - Pillow Protector - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cool_Mode_Pillow_Protector_Zipper_a5492749-5fca-47ea-b568-3f6c3e5b0d15.jpg?v=1767070176",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cool_Mode_Pillow_Protector_Zipper_a5492749-5fca-47ea-b568-3f6c3e5b0d15.jpg?v=1767070176",
        "alt": "Cool Mode - Pillow Protector - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Crisp White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Standard (48x73cm)",
          "European (65x65cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Crisp White"
        ]
      }
    ],
    "variants": [
      {
        "id": "cool-mode-pillow-protector-standard--48x73cm-",
        "sourceVariantId": null,
        "title": "Standard (48x73cm)",
        "sku": "MORFE-COOL-MODE--1",
        "size": "Standard (48x73cm)",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 6500,
        "sourceCompareAtPrice": 8450,
        "demoPricePKR": 6500,
        "availability": "available"
      },
      {
        "id": "cool-mode-pillow-protector-european--65x65cm-",
        "sourceVariantId": null,
        "title": "European (65x65cm)",
        "sku": "MORFE-COOL-MODE--2",
        "size": "European (65x65cm)",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 8500,
        "sourceCompareAtPrice": 8450,
        "demoPricePKR": 8500,
        "availability": "available"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 56
  },
  {
    "id": "wool-mattress-topper",
    "handle": "wool-mattress-topper",
    "title": "Wonder Wool - Mattress Topper",
    "collectionName": "Wonder Wool",
    "productType": "Protectors & Toppers",
    "colorOrPrint": "Crisp White",
    "colorGroup": "Crisp White",
    "fabric": "Wonder Wool",
    "description": "Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced wonder wool to deliver breathable loft and cloud-like support night after night.",
    "features": [
      "Wonder Wool - Mattress Topper"
    ],
    "materialDetails": [
      "Diamond quilted cotton casing with elasticated skirt",
      "350 GSM Pure Australian Wool"
    ],
    "careInstructions": [
      "Gentle machine wash or professional dry clean",
      "Air flat in natural shade to maintain natural loft",
      "Fluff regularly to maintain breathability"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/wool-mattress-topper",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 50500,
    "sourceCompareAtPrice": 65650,
    "demoPricePKR": 50500,
    "demoCompareAtPricePKR": 65650,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool_GIF_01.jpg?v=1714447949",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool_GIF_01.jpg?v=1714447949",
        "alt": "Wonder Wool - Mattress Topper - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool_Detail_01.jpg?v=1714524423",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool_Detail_01.jpg?v=1714524423",
        "alt": "Wonder Wool - Mattress Topper - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool_GIF_04.jpg?v=1738133584",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool_GIF_04.jpg?v=1738133584",
        "alt": "Wonder Wool - Mattress Topper - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool_Cotton_Padding_Detail_01.jpg?v=1738133584",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool_Cotton_Padding_Detail_01.jpg?v=1738133584",
        "alt": "Wonder Wool - Mattress Topper - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool_Depth.jpg?v=1714524423",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool_Depth.jpg?v=1714524423",
        "alt": "Wonder Wool - Mattress Topper - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool.jpg?v=1714524423",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool.jpg?v=1714524423",
        "alt": "Wonder Wool - Mattress Topper - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool_GIF_02.jpg?v=1714524423",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool_GIF_02.jpg?v=1714524423",
        "alt": "Wonder Wool - Mattress Topper - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool_GIF_03.jpg?v=1714524423",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool_GIF_03.jpg?v=1714524423",
        "alt": "Wonder Wool - Mattress Topper - View 8",
        "role": "gallery",
        "position": 8,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool_Elastic.jpg?v=1714524423",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool_Elastic.jpg?v=1714524423",
        "alt": "Wonder Wool - Mattress Topper - View 9",
        "role": "gallery",
        "position": 9,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool_Wool_Detail_02.jpg?v=1738133584",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool_Wool_Detail_02.jpg?v=1738133584",
        "alt": "Wonder Wool - Mattress Topper - View 10",
        "role": "gallery",
        "position": 10,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool_Wool_In_Hands.jpg?v=1738133584",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Topper_Wonder_Wool_Wool_In_Hands.jpg?v=1738133584",
        "alt": "Wonder Wool - Mattress Topper - View 11",
        "role": "gallery",
        "position": 11,
        "colorOrPrint": "Crisp White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Single",
          "King Single",
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Crisp White"
        ]
      }
    ],
    "variants": [
      {
        "id": "wool-mattress-topper-single",
        "sourceVariantId": null,
        "title": "Single",
        "sku": "MORFE-WOOL-MATTR-1",
        "size": "Single",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 47500,
        "sourceCompareAtPrice": 65650,
        "demoPricePKR": 47500,
        "availability": "available"
      },
      {
        "id": "wool-mattress-topper-king-single",
        "sourceVariantId": null,
        "title": "King Single",
        "sku": "MORFE-WOOL-MATTR-2",
        "size": "King Single",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 49000,
        "sourceCompareAtPrice": 65650,
        "demoPricePKR": 49000,
        "availability": "available"
      },
      {
        "id": "wool-mattress-topper-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-WOOL-MATTR-3",
        "size": "Double",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 49500,
        "sourceCompareAtPrice": 65650,
        "demoPricePKR": 49500,
        "availability": "available"
      },
      {
        "id": "wool-mattress-topper-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-WOOL-MATTR-4",
        "size": "Queen",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 50500,
        "sourceCompareAtPrice": 65650,
        "demoPricePKR": 50500,
        "availability": "available"
      },
      {
        "id": "wool-mattress-topper-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-WOOL-MATTR-5",
        "size": "King",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 53000,
        "sourceCompareAtPrice": 65650,
        "demoPricePKR": 53000,
        "availability": "available"
      },
      {
        "id": "wool-mattress-topper-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-WOOL-MATTR-6",
        "size": "Super King",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 55500,
        "sourceCompareAtPrice": 65650,
        "demoPricePKR": 55500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 104
  },
  {
    "id": "feather-european-insert",
    "handle": "feather-european-insert",
    "title": "Full Feather - European Pillow",
    "collectionName": "Wonder Wool",
    "productType": "Quilts & Pillows",
    "colorOrPrint": "Crisp White",
    "colorGroup": "Crisp White",
    "fabric": "Wonder Wool",
    "description": "Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced wonder wool to deliver breathable loft and cloud-like support night after night.",
    "features": [
      "Full Feather - European Pillow"
    ],
    "materialDetails": [
      "Box-stitch quilted baffling with double-needle piped seams",
      "300 GSM Plant-Based Corn Fibre"
    ],
    "careInstructions": [
      "Gentle machine wash or professional dry clean",
      "Air flat in natural shade to maintain natural loft",
      "Fluff regularly to maintain breathability"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/feather-european-insert",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 11500,
    "sourceCompareAtPrice": 14950,
    "demoPricePKR": 11500,
    "demoCompareAtPricePKR": 14950,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Euro_Insert.jpg?v=1715643553",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Euro_Insert.jpg?v=1715643553",
        "alt": "Full Feather - European Pillow - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Crisp White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "European (65x65cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Crisp White"
        ]
      }
    ],
    "variants": [
      {
        "id": "feather-european-insert-european--65x65cm-",
        "sourceVariantId": null,
        "title": "European (65x65cm)",
        "sku": "MORFE-FEATHER-EU-1",
        "size": "European (65x65cm)",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 11500,
        "sourceCompareAtPrice": 14950,
        "demoPricePKR": 11500,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 142
  },
  {
    "id": "feather-body-pillow-insert",
    "handle": "feather-body-pillow-insert",
    "title": "Full Feather - Body Pillow",
    "collectionName": "Wonder Wool",
    "productType": "Quilts & Pillows",
    "colorOrPrint": "Crisp White",
    "colorGroup": "Crisp White",
    "fabric": "Wonder Wool",
    "description": "Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced wonder wool to deliver breathable loft and cloud-like support night after night.",
    "features": [
      "Full Feather - Body Pillow"
    ],
    "materialDetails": [
      "Box-stitch quilted baffling with double-needle piped seams",
      "300 GSM Plant-Based Corn Fibre"
    ],
    "careInstructions": [
      "Gentle machine wash or professional dry clean",
      "Air flat in natural shade to maintain natural loft",
      "Fluff regularly to maintain breathability"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/feather-body-pillow-insert",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 20000,
    "sourceCompareAtPrice": 26000,
    "demoPricePKR": 20000,
    "demoCompareAtPricePKR": 26000,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Body_Pillow_Insert.jpg?v=1715643478",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Body_Pillow_Insert.jpg?v=1715643478",
        "alt": "Full Feather - Body Pillow - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Body_Pillow_Campaign_01_da803035-4a8d-4153-b854-28c671d621d1.jpg?v=1715821645",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Body_Pillow_Campaign_01_da803035-4a8d-4153-b854-28c671d621d1.jpg?v=1715821645",
        "alt": "Full Feather - Body Pillow - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Body_Pillow_Campaign_03_a4324a16-5003-4661-b97c-aebdb4054ba1.jpg?v=1715821645",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Body_Pillow_Campaign_03_a4324a16-5003-4661-b97c-aebdb4054ba1.jpg?v=1715821645",
        "alt": "Full Feather - Body Pillow - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Body_Pillow_Campaign_02_1f36034c-f80a-41c0-90c7-92a75135f5bb.jpg?v=1715821645",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Body_Pillow_Campaign_02_1f36034c-f80a-41c0-90c7-92a75135f5bb.jpg?v=1715821645",
        "alt": "Full Feather - Body Pillow - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Pillow_Insert_Group_04.jpg?v=1715821645",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Pillow_Insert_Group_04.jpg?v=1715821645",
        "alt": "Full Feather - Body Pillow - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Crisp White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Body (48x150cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Crisp White"
        ]
      }
    ],
    "variants": [
      {
        "id": "feather-body-pillow-insert-body--48x150cm-",
        "sourceVariantId": null,
        "title": "Body (48x150cm)",
        "sku": "MORFE-FEATHER-BO-1",
        "size": "Body (48x150cm)",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 20000,
        "sourceCompareAtPrice": 26000,
        "demoPricePKR": 20000,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 124
  },
  {
    "id": "body-pillow-protector",
    "handle": "body-pillow-protector",
    "title": "Bed Basics - Body Pillow Protector",
    "collectionName": "Eden Cotton",
    "productType": "Protectors & Toppers",
    "colorOrPrint": "Crisp White",
    "colorGroup": "Crisp White",
    "fabric": "Eden Cotton",
    "description": "Expertly engineered for supreme comfort and thermal balance. Handcrafted with sustainably sourced eden cotton to deliver breathable loft and cloud-like support night after night.",
    "features": [
      "Bed Basics - Body Pillow Protector"
    ],
    "materialDetails": [
      "Diamond quilted cotton casing with elasticated skirt",
      "300 GSM Plant-Based Corn Fibre"
    ],
    "careInstructions": [
      "Gentle machine wash or professional dry clean",
      "Air flat in natural shade to maintain natural loft",
      "Fluff regularly to maintain breathability"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/body-pillow-protector",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 10000,
    "sourceCompareAtPrice": 13000,
    "demoPricePKR": 10000,
    "demoCompareAtPricePKR": 13000,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Pillowcase_Protector_Body_pillow.jpg?v=1744167356",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Pillowcase_Protector_Body_pillow.jpg?v=1744167356",
        "alt": "Bed Basics - Body Pillow Protector - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Pillowcase_Protector_Body_pillow_Zipper.jpg?v=1744167378",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Pillowcase_Protector_Body_pillow_Zipper.jpg?v=1744167378",
        "alt": "Bed Basics - Body Pillow Protector - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Pillowcase_Protector_Body_pillow_Styled.jpg?v=1744167240",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Pillowcase_Protector_Body_pillow_Styled.jpg?v=1744167240",
        "alt": "Bed Basics - Body Pillow Protector - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Protector_2.jpg?v=1744167228",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mattress_Protector_2.jpg?v=1744167228",
        "alt": "Bed Basics - Body Pillow Protector - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Pillow_Protector_3.jpg?v=1744167228",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Pillow_Protector_3.jpg?v=1744167228",
        "alt": "Bed Basics - Body Pillow Protector - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Pillow_Protector_5.jpg?v=1744167228",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Pillow_Protector_5.jpg?v=1744167228",
        "alt": "Bed Basics - Body Pillow Protector - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Crisp White"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/SS221130L_5407.jpg?v=1744167231",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/SS221130L_5407.jpg?v=1744167231",
        "alt": "Bed Basics - Body Pillow Protector - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Crisp White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Body (48x150cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Crisp White"
        ]
      }
    ],
    "variants": [
      {
        "id": "body-pillow-protector-body--48x150cm-",
        "sourceVariantId": null,
        "title": "Body (48x150cm)",
        "sku": "MORFE-BODY-PILLO-1",
        "size": "Body (48x150cm)",
        "colorOrPrint": "Crisp White",
        "sourcePrice": 10000,
        "sourceCompareAtPrice": 13000,
        "demoPricePKR": 10000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 122
  },
  {
    "id": "boucle-cotton-cushion-cover-pampas-stripe",
    "handle": "boucle-cotton-cushion-cover-pampas-stripe",
    "title": "Homebody - Pampas Stripe Boucle Square Cushion Cover (50x50)",
    "collectionName": "Bouclé Cotton",
    "productType": "Cushions",
    "colorOrPrint": "Yellow",
    "colorGroup": "Yellow",
    "fabric": "Bouclé Cotton",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium bouclé cotton with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/boucle-cotton-cushion-cover-pampas-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8250,
    "sourceCompareAtPrice": 10313,
    "demoPricePKR": 8250,
    "demoCompareAtPricePKR": 10313,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cushion_Pampas_Stripe.jpg?v=1787122030",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cushion_Pampas_Stripe.jpg?v=1787122030",
        "alt": "Homebody - Pampas Stripe Boucle Square Cushion Cover (50x50) - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Yellow"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cushion_Pampas_Stripe_Detail.jpg?v=1787122029",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cushion_Pampas_Stripe_Detail.jpg?v=1787122029",
        "alt": "Homebody - Pampas Stripe Boucle Square Cushion Cover (50x50) - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Yellow"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/PAMPAS-STRIPE-BOUCLE-CUSHION-STYLED.jpg?v=1787122029",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/PAMPAS-STRIPE-BOUCLE-CUSHION-STYLED.jpg?v=1787122029",
        "alt": "Homebody - Pampas Stripe Boucle Square Cushion Cover (50x50) - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Yellow"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "50x50",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Yellow"
        ]
      }
    ],
    "variants": [
      {
        "id": "boucle-cotton-cushion-cover-pampas-stripe-50x50",
        "sourceVariantId": null,
        "title": "50x50",
        "sku": "MORFE-BOUCLE-COT-1",
        "size": "50x50",
        "colorOrPrint": "Yellow",
        "sourcePrice": 8250,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 8250,
        "availability": "available"
      },
      {
        "id": "boucle-cotton-cushion-cover-pampas-stripe-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-BOUCLE-COT-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Yellow",
        "sourcePrice": 11750,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 11750,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 43
  },
  {
    "id": "boucle-cotton-cushion-cover-midnight-rodeo-stripe",
    "handle": "boucle-cotton-cushion-cover-midnight-rodeo-stripe",
    "title": "Homebody - Midnight Rodeo Boucle Square Cushion Cover (50x50)",
    "collectionName": "Bouclé Cotton",
    "productType": "Cushions",
    "colorOrPrint": "Red",
    "colorGroup": "Red",
    "fabric": "Bouclé Cotton",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium bouclé cotton with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/boucle-cotton-cushion-cover-midnight-rodeo-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8250,
    "sourceCompareAtPrice": 10313,
    "demoPricePKR": 8250,
    "demoCompareAtPricePKR": 10313,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Rory_Washed_Cotton_Mahogany_Cushion_02.jpg?v=1783051602",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Rory_Washed_Cotton_Mahogany_Cushion_02.jpg?v=1783051602",
        "alt": "Homebody - Midnight Rodeo Boucle Square Cushion Cover (50x50) - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Red"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Midnight_Rodeo_Cushion.jpg?v=1783051602",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Midnight_Rodeo_Cushion.jpg?v=1783051602",
        "alt": "Homebody - Midnight Rodeo Boucle Square Cushion Cover (50x50) - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Red"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Midnight_Rodeo_Cushion_Detail.jpg?v=1783051602",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Midnight_Rodeo_Cushion_Detail.jpg?v=1783051602",
        "alt": "Homebody - Midnight Rodeo Boucle Square Cushion Cover (50x50) - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Red"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Midnight_Rodeo_Cushion_Styled.jpg?v=1783051602",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Midnight_Rodeo_Cushion_Styled.jpg?v=1783051602",
        "alt": "Homebody - Midnight Rodeo Boucle Square Cushion Cover (50x50) - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Red"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "50x50",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Red"
        ]
      }
    ],
    "variants": [
      {
        "id": "boucle-cotton-cushion-cover-midnight-rodeo-stripe-50x50",
        "sourceVariantId": null,
        "title": "50x50",
        "sku": "MORFE-BOUCLE-COT-1",
        "size": "50x50",
        "colorOrPrint": "Red",
        "sourcePrice": 8250,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 8250,
        "availability": "available"
      },
      {
        "id": "boucle-cotton-cushion-cover-midnight-rodeo-stripe-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-BOUCLE-COT-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Red",
        "sourcePrice": 11750,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 11750,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 23
  },
  {
    "id": "boucle-cotton-cushion-cover-chocolate-stripe",
    "handle": "boucle-cotton-cushion-cover-chocolate-stripe",
    "title": "Homebody - Chocolate Stripe Boucle Round Cushion Cover",
    "collectionName": "Bouclé Cotton",
    "productType": "Cushions",
    "colorOrPrint": "Brown",
    "colorGroup": "Brown",
    "fabric": "Bouclé Cotton",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium bouclé cotton with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/boucle-cotton-cushion-cover-chocolate-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 7250,
    "sourceCompareAtPrice": 9063,
    "demoPricePKR": 7250,
    "demoCompareAtPricePKR": 9063,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/COTTON_BOUCLE_CHOC_STRIPE_CUSHION.jpg?v=1772159952",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/COTTON_BOUCLE_CHOC_STRIPE_CUSHION.jpg?v=1772159952",
        "alt": "Homebody - Chocolate Stripe Boucle Round Cushion Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/COTTON_BOUCLE_CHOC_STRIPE_CUSHION_DETAIL.jpg?v=1772159952",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/COTTON_BOUCLE_CHOC_STRIPE_CUSHION_DETAIL.jpg?v=1772159952",
        "alt": "Homebody - Chocolate Stripe Boucle Round Cushion Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_BUNDLE_02_0ce9569a-a863-46ae-a099-6e305aa9464f.jpg?v=1772159952",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_BUNDLE_02_0ce9569a-a863-46ae-a099-6e305aa9464f.jpg?v=1772159952",
        "alt": "Homebody - Chocolate Stripe Boucle Round Cushion Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Brown"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Round (40cm)",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Brown"
        ]
      }
    ],
    "variants": [
      {
        "id": "boucle-cotton-cushion-cover-chocolate-stripe-round--40cm-",
        "sourceVariantId": null,
        "title": "Round (40cm)",
        "sku": "MORFE-BOUCLE-COT-1",
        "size": "Round (40cm)",
        "colorOrPrint": "Brown",
        "sourcePrice": 7250,
        "sourceCompareAtPrice": 9063,
        "demoPricePKR": 7250,
        "availability": "available"
      },
      {
        "id": "boucle-cotton-cushion-cover-chocolate-stripe-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-BOUCLE-COT-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Brown",
        "sourcePrice": 10750,
        "sourceCompareAtPrice": 9063,
        "demoPricePKR": 10750,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 42
  },
  {
    "id": "boucle-cotton-cushion-cover-olive-stripe",
    "handle": "boucle-cotton-cushion-cover-olive-stripe",
    "title": "Homebody - Olive Stripe Boucle Square Cushion Cover (50x50)",
    "collectionName": "Bouclé Cotton",
    "productType": "Cushions",
    "colorOrPrint": "Green",
    "colorGroup": "Green",
    "fabric": "Bouclé Cotton",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium bouclé cotton with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/boucle-cotton-cushion-cover-olive-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8250,
    "sourceCompareAtPrice": 10313,
    "demoPricePKR": 8250,
    "demoCompareAtPricePKR": 10313,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/COTTON_BOUCLE_OLIVE_STRIPE_CUSHION.jpg?v=1772153177",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/COTTON_BOUCLE_OLIVE_STRIPE_CUSHION.jpg?v=1772153177",
        "alt": "Homebody - Olive Stripe Boucle Square Cushion Cover (50x50) - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Green"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/COTTON_BOUCLE_OLIVE_STRIPE_CUSHION_DETAIL.jpg?v=1772153178",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/COTTON_BOUCLE_OLIVE_STRIPE_CUSHION_DETAIL.jpg?v=1772153178",
        "alt": "Homebody - Olive Stripe Boucle Square Cushion Cover (50x50) - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Green"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_BUNDLE_01_5d231870-cdf9-44c8-a2f9-d01f870c5745.jpg?v=1772153177",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_BUNDLE_01_5d231870-cdf9-44c8-a2f9-d01f870c5745.jpg?v=1772153177",
        "alt": "Homebody - Olive Stripe Boucle Square Cushion Cover (50x50) - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Green"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "50x50",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Green"
        ]
      }
    ],
    "variants": [
      {
        "id": "boucle-cotton-cushion-cover-olive-stripe-50x50",
        "sourceVariantId": null,
        "title": "50x50",
        "sku": "MORFE-BOUCLE-COT-1",
        "size": "50x50",
        "colorOrPrint": "Green",
        "sourcePrice": 8250,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 8250,
        "availability": "available"
      },
      {
        "id": "boucle-cotton-cushion-cover-olive-stripe-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-BOUCLE-COT-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Green",
        "sourcePrice": 11750,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 11750,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 65
  },
  {
    "id": "boucle-cotton-cushion-cover-bay-blue-stripe",
    "handle": "boucle-cotton-cushion-cover-bay-blue-stripe",
    "title": "Homebody - Bay Blue Stripe Boucle Round Cushion Cover",
    "collectionName": "Bouclé Cotton",
    "productType": "Cushions",
    "colorOrPrint": "Blue",
    "colorGroup": "Blue",
    "fabric": "Bouclé Cotton",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium bouclé cotton with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/boucle-cotton-cushion-cover-bay-blue-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 6000,
    "sourceCompareAtPrice": 7500,
    "demoPricePKR": 6000,
    "demoCompareAtPricePKR": 7500,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_BAY_BLUE_STRIPE_ROUND.jpg?v=1758608088",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_BAY_BLUE_STRIPE_ROUND.jpg?v=1758608088",
        "alt": "Homebody - Bay Blue Stripe Boucle Round Cushion Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_BAY_BLUE_STRIPE_ROUND_DETAIL.jpg?v=1758608088",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_BAY_BLUE_STRIPE_ROUND_DETAIL.jpg?v=1758608088",
        "alt": "Homebody - Bay Blue Stripe Boucle Round Cushion Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_03_8a80f60d-186d-4e79-94a6-68819b2b1034.jpg?v=1758608089",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_03_8a80f60d-186d-4e79-94a6-68819b2b1034.jpg?v=1758608089",
        "alt": "Homebody - Bay Blue Stripe Boucle Round Cushion Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_03_DETAIL_b97e57ef-664c-4194-a520-6a9fb8f7e7fb.jpg?v=1758608089",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_03_DETAIL_b97e57ef-664c-4194-a520-6a9fb8f7e7fb.jpg?v=1758608089",
        "alt": "Homebody - Bay Blue Stripe Boucle Round Cushion Cover - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Blue"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Round (40cm)",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blue"
        ]
      }
    ],
    "variants": [
      {
        "id": "boucle-cotton-cushion-cover-bay-blue-stripe-round--40cm-",
        "sourceVariantId": null,
        "title": "Round (40cm)",
        "sku": "MORFE-BOUCLE-COT-1",
        "size": "Round (40cm)",
        "colorOrPrint": "Blue",
        "sourcePrice": 6000,
        "sourceCompareAtPrice": 7500,
        "demoPricePKR": 6000,
        "availability": "available"
      },
      {
        "id": "boucle-cotton-cushion-cover-bay-blue-stripe-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-BOUCLE-COT-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Blue",
        "sourcePrice": 9500,
        "sourceCompareAtPrice": 7500,
        "demoPricePKR": 9500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 60
  },
  {
    "id": "boucle-cotton-cushion-cover-pink-lotus-stripe",
    "handle": "boucle-cotton-cushion-cover-pink-lotus-stripe",
    "title": "Homebody - Pink Lotus Stripe Boucle Round Cushion Cover",
    "collectionName": "Bouclé Cotton",
    "productType": "Cushions",
    "colorOrPrint": "Pink",
    "colorGroup": "Pink",
    "fabric": "Bouclé Cotton",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium bouclé cotton with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/boucle-cotton-cushion-cover-pink-lotus-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 6000,
    "sourceCompareAtPrice": 7500,
    "demoPricePKR": 6000,
    "demoCompareAtPricePKR": 7500,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_PINK_LOTUS_STRIPE_ROUND.jpg?v=1758608087",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_PINK_LOTUS_STRIPE_ROUND.jpg?v=1758608087",
        "alt": "Homebody - Pink Lotus Stripe Boucle Round Cushion Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Pink"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_PINK_LOTUS_STRIPE_ROUND_DETAIL.jpg?v=1758608088",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_PINK_LOTUS_STRIPE_ROUND_DETAIL.jpg?v=1758608088",
        "alt": "Homebody - Pink Lotus Stripe Boucle Round Cushion Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Pink"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_01_11283d63-e973-426d-8832-182155c7b45a.jpg?v=1758608088",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_01_11283d63-e973-426d-8832-182155c7b45a.jpg?v=1758608088",
        "alt": "Homebody - Pink Lotus Stripe Boucle Round Cushion Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Pink"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_01_DETAIL_02_caaf6439-5faa-4833-9e6b-873cf1652fd4.jpg?v=1758608088",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_01_DETAIL_02_caaf6439-5faa-4833-9e6b-873cf1652fd4.jpg?v=1758608088",
        "alt": "Homebody - Pink Lotus Stripe Boucle Round Cushion Cover - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Pink"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Round (40cm)",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Pink"
        ]
      }
    ],
    "variants": [
      {
        "id": "boucle-cotton-cushion-cover-pink-lotus-stripe-round--40cm-",
        "sourceVariantId": null,
        "title": "Round (40cm)",
        "sku": "MORFE-BOUCLE-COT-1",
        "size": "Round (40cm)",
        "colorOrPrint": "Pink",
        "sourcePrice": 6000,
        "sourceCompareAtPrice": 7500,
        "demoPricePKR": 6000,
        "availability": "available"
      },
      {
        "id": "boucle-cotton-cushion-cover-pink-lotus-stripe-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-BOUCLE-COT-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Pink",
        "sourcePrice": 9500,
        "sourceCompareAtPrice": 7500,
        "demoPricePKR": 9500,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 42
  },
  {
    "id": "boucle-cotton-cushion-cover-nutmeg-stripe",
    "handle": "boucle-cotton-cushion-cover-nutmeg-stripe",
    "title": "Homebody - Nutmeg Stripe Boucle Lumbar Cushion Cover (65x40)",
    "collectionName": "Bouclé Cotton",
    "productType": "Cushions",
    "colorOrPrint": "Brown",
    "colorGroup": "Brown",
    "fabric": "Bouclé Cotton",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium bouclé cotton with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/boucle-cotton-cushion-cover-nutmeg-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8250,
    "sourceCompareAtPrice": 10313,
    "demoPricePKR": 8250,
    "demoCompareAtPricePKR": 10313,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_NUTMEG_STRIPE.jpg?v=1758608079",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_NUTMEG_STRIPE.jpg?v=1758608079",
        "alt": "Homebody - Nutmeg Stripe Boucle Lumbar Cushion Cover (65x40) - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_NUTMEG_STRIPE_DETAIL.jpg?v=1758608079",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_NUTMEG_STRIPE_DETAIL.jpg?v=1758608079",
        "alt": "Homebody - Nutmeg Stripe Boucle Lumbar Cushion Cover (65x40) - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_03_2c5579f7-303d-4e6e-96b7-a37ce984fc33.jpg?v=1758608079",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_03_2c5579f7-303d-4e6e-96b7-a37ce984fc33.jpg?v=1758608079",
        "alt": "Homebody - Nutmeg Stripe Boucle Lumbar Cushion Cover (65x40) - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_03_DETAIL_86bd17f4-6a6a-4228-9437-a4609293fbca.jpg?v=1758608079",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_03_DETAIL_86bd17f4-6a6a-4228-9437-a4609293fbca.jpg?v=1758608079",
        "alt": "Homebody - Nutmeg Stripe Boucle Lumbar Cushion Cover (65x40) - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Brown"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "65x40",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Brown"
        ]
      }
    ],
    "variants": [
      {
        "id": "boucle-cotton-cushion-cover-nutmeg-stripe-65x40",
        "sourceVariantId": null,
        "title": "65x40",
        "sku": "MORFE-BOUCLE-COT-1",
        "size": "65x40",
        "colorOrPrint": "Brown",
        "sourcePrice": 8250,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 8250,
        "availability": "available"
      },
      {
        "id": "boucle-cotton-cushion-cover-nutmeg-stripe-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-BOUCLE-COT-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Brown",
        "sourcePrice": 11750,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 11750,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 35
  },
  {
    "id": "boucle-cotton-cushion-cover-hunter-green-stripe",
    "handle": "boucle-cotton-cushion-cover-hunter-green-stripe",
    "title": "Homebody - Hunter Green Stripe Boucle Lumbar Cushion Cover (65x40)",
    "collectionName": "Bouclé Cotton",
    "productType": "Cushions",
    "colorOrPrint": "Green",
    "colorGroup": "Green",
    "fabric": "Bouclé Cotton",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium bouclé cotton with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/boucle-cotton-cushion-cover-hunter-green-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8250,
    "sourceCompareAtPrice": 10313,
    "demoPricePKR": 8250,
    "demoCompareAtPricePKR": 10313,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_HUNTER_GREEN_STRIPE.jpg?v=1758608079",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_HUNTER_GREEN_STRIPE.jpg?v=1758608079",
        "alt": "Homebody - Hunter Green Stripe Boucle Lumbar Cushion Cover (65x40) - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Green"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_HUNTER_GREEN_STRIPE_DETAIL.jpg?v=1758608078",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_HUNTER_GREEN_STRIPE_DETAIL.jpg?v=1758608078",
        "alt": "Homebody - Hunter Green Stripe Boucle Lumbar Cushion Cover (65x40) - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Green"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_04_e1f15505-a56b-4dd6-8cd4-bdd08e7d6efe.jpg?v=1758608078",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_04_e1f15505-a56b-4dd6-8cd4-bdd08e7d6efe.jpg?v=1758608078",
        "alt": "Homebody - Hunter Green Stripe Boucle Lumbar Cushion Cover (65x40) - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Green"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_04_DETAIL_4479a84a-2f7d-4685-9900-290537a6f456.jpg?v=1758608078",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_04_DETAIL_4479a84a-2f7d-4685-9900-290537a6f456.jpg?v=1758608078",
        "alt": "Homebody - Hunter Green Stripe Boucle Lumbar Cushion Cover (65x40) - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Green"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "65x40",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Green"
        ]
      }
    ],
    "variants": [
      {
        "id": "boucle-cotton-cushion-cover-hunter-green-stripe-65x40",
        "sourceVariantId": null,
        "title": "65x40",
        "sku": "MORFE-BOUCLE-COT-1",
        "size": "65x40",
        "colorOrPrint": "Green",
        "sourcePrice": 8250,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 8250,
        "availability": "available"
      },
      {
        "id": "boucle-cotton-cushion-cover-hunter-green-stripe-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-BOUCLE-COT-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Green",
        "sourcePrice": 11750,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 11750,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 35
  },
  {
    "id": "boucle-cotton-cushion-cover-terracotta-stripe",
    "handle": "boucle-cotton-cushion-cover-terracotta-stripe",
    "title": "Homebody - Terracotta Stripe Boucle Square Cushion Cover (50x50)",
    "collectionName": "Bouclé Cotton",
    "productType": "Cushions",
    "colorOrPrint": "Orange",
    "colorGroup": "Orange",
    "fabric": "Bouclé Cotton",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium bouclé cotton with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/boucle-cotton-cushion-cover-terracotta-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8250,
    "sourceCompareAtPrice": 10313,
    "demoPricePKR": 8250,
    "demoCompareAtPricePKR": 10313,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_TERRACOTTA_STRIPE.jpg?v=1758608081",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_TERRACOTTA_STRIPE.jpg?v=1758608081",
        "alt": "Homebody - Terracotta Stripe Boucle Square Cushion Cover (50x50) - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Orange"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_TERRACOTTA_STRIPE_DETAIL_01.jpg?v=1758608081",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_TERRACOTTA_STRIPE_DETAIL_01.jpg?v=1758608081",
        "alt": "Homebody - Terracotta Stripe Boucle Square Cushion Cover (50x50) - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Orange"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_TERRACOTTA_STRIPE_DETAIL_02.jpg?v=1758608081",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_TERRACOTTA_STRIPE_DETAIL_02.jpg?v=1758608081",
        "alt": "Homebody - Terracotta Stripe Boucle Square Cushion Cover (50x50) - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Orange"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_02_ba1b1118-0904-4b24-84a4-34cf56678d62.jpg?v=1758608081",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_02_ba1b1118-0904-4b24-84a4-34cf56678d62.jpg?v=1758608081",
        "alt": "Homebody - Terracotta Stripe Boucle Square Cushion Cover (50x50) - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Orange"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_02_DETAIL_f485841b-7f8f-48ad-95d7-b2a4f52ce62d.jpg?v=1758608081",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_02_DETAIL_f485841b-7f8f-48ad-95d7-b2a4f52ce62d.jpg?v=1758608081",
        "alt": "Homebody - Terracotta Stripe Boucle Square Cushion Cover (50x50) - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Orange"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "50x50",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Orange"
        ]
      }
    ],
    "variants": [
      {
        "id": "boucle-cotton-cushion-cover-terracotta-stripe-50x50",
        "sourceVariantId": null,
        "title": "50x50",
        "sku": "MORFE-BOUCLE-COT-1",
        "size": "50x50",
        "colorOrPrint": "Orange",
        "sourcePrice": 8250,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 8250,
        "availability": "available"
      },
      {
        "id": "boucle-cotton-cushion-cover-terracotta-stripe-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-BOUCLE-COT-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Orange",
        "sourcePrice": 11750,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 11750,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 60
  },
  {
    "id": "boucle-cotton-cushion-cover-burgundy-stripe",
    "handle": "boucle-cotton-cushion-cover-burgundy-stripe",
    "title": "Homebody - Burgundy Stripe Boucle Square Cushion Cover (50x50)",
    "collectionName": "Bouclé Cotton",
    "productType": "Cushions",
    "colorOrPrint": "Purple",
    "colorGroup": "Purple",
    "fabric": "Bouclé Cotton",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium bouclé cotton with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/boucle-cotton-cushion-cover-burgundy-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8250,
    "sourceCompareAtPrice": 10313,
    "demoPricePKR": 8250,
    "demoCompareAtPricePKR": 10313,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_BURGUNDY_STRIPE.jpg?v=1758608078",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_BURGUNDY_STRIPE.jpg?v=1758608078",
        "alt": "Homebody - Burgundy Stripe Boucle Square Cushion Cover (50x50) - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Purple"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_BURGUNDY_STRIPE_DETAIL.jpg?v=1758608077",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_BOUCLE_BURGUNDY_STRIPE_DETAIL.jpg?v=1758608077",
        "alt": "Homebody - Burgundy Stripe Boucle Square Cushion Cover (50x50) - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Purple"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_01_c94d83ab-615f-4116-aff2-ed99d8ea870a.jpg?v=1758608078",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_01_c94d83ab-615f-4116-aff2-ed99d8ea870a.jpg?v=1758608078",
        "alt": "Homebody - Burgundy Stripe Boucle Square Cushion Cover (50x50) - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Purple"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_01_DETAIL_02_ef4fad33-4b88-4088-83dd-620084b3d02c.jpg?v=1758608078",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_01_DETAIL_02_ef4fad33-4b88-4088-83dd-620084b3d02c.jpg?v=1758608078",
        "alt": "Homebody - Burgundy Stripe Boucle Square Cushion Cover (50x50) - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Purple"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "50x50",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Purple"
        ]
      }
    ],
    "variants": [
      {
        "id": "boucle-cotton-cushion-cover-burgundy-stripe-50x50",
        "sourceVariantId": null,
        "title": "50x50",
        "sku": "MORFE-BOUCLE-COT-1",
        "size": "50x50",
        "colorOrPrint": "Purple",
        "sourcePrice": 8250,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 8250,
        "availability": "available"
      },
      {
        "id": "boucle-cotton-cushion-cover-burgundy-stripe-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-BOUCLE-COT-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Purple",
        "sourcePrice": 11750,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 11750,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 30
  },
  {
    "id": "rib-cushion-cover-plum",
    "handle": "rib-cushion-cover-plum",
    "title": "Homebody - Plum Rib Lumbar Cushion Cover (65x40)",
    "collectionName": "Darcy Corduroy",
    "productType": "Cushions",
    "colorOrPrint": "Plum",
    "colorGroup": "Plum",
    "fabric": "Darcy Corduroy",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium darcy corduroy with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/rib-cushion-cover-plum",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8250,
    "sourceCompareAtPrice": 10313,
    "demoPricePKR": 8250,
    "demoCompareAtPricePKR": 10313,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cushion_Plum.jpg?v=1787122026",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cushion_Plum.jpg?v=1787122026",
        "alt": "Homebody - Plum Rib Lumbar Cushion Cover (65x40) - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Plum"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cushion_Plum_Detail.jpg?v=1787122027",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cushion_Plum_Detail.jpg?v=1787122027",
        "alt": "Homebody - Plum Rib Lumbar Cushion Cover (65x40) - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Plum"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "65x40",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Plum"
        ]
      }
    ],
    "variants": [
      {
        "id": "rib-cushion-cover-plum-65x40",
        "sourceVariantId": null,
        "title": "65x40",
        "sku": "MORFE-RIB-CUSHIO-1",
        "size": "65x40",
        "colorOrPrint": "Plum",
        "sourcePrice": 8250,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 8250,
        "availability": "available"
      },
      {
        "id": "rib-cushion-cover-plum-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-RIB-CUSHIO-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Plum",
        "sourcePrice": 11750,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 11750,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 70
  },
  {
    "id": "rib-cushion-cover-sky",
    "handle": "rib-cushion-cover-sky",
    "title": "Homebody - Sky Rib Square Cushion Cover (50x50)",
    "collectionName": "Darcy Corduroy",
    "productType": "Cushions",
    "colorOrPrint": "Blue",
    "colorGroup": "Blue",
    "fabric": "Darcy Corduroy",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium darcy corduroy with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/rib-cushion-cover-sky",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8250,
    "sourceCompareAtPrice": 10313,
    "demoPricePKR": 8250,
    "demoCompareAtPricePKR": 10313,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cushion_Sky.jpg?v=1787122026",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cushion_Sky.jpg?v=1787122026",
        "alt": "Homebody - Sky Rib Square Cushion Cover (50x50) - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cushion_Sky_Detail.jpg?v=1787122026",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cushion_Sky_Detail.jpg?v=1787122026",
        "alt": "Homebody - Sky Rib Square Cushion Cover (50x50) - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cushion_Sky_Styled.jpg?v=1787122026",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cushion_Sky_Styled.jpg?v=1787122026",
        "alt": "Homebody - Sky Rib Square Cushion Cover (50x50) - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Blue"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "50x50",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blue"
        ]
      }
    ],
    "variants": [
      {
        "id": "rib-cushion-cover-sky-50x50",
        "sourceVariantId": null,
        "title": "50x50",
        "sku": "MORFE-RIB-CUSHIO-1",
        "size": "50x50",
        "colorOrPrint": "Blue",
        "sourcePrice": 8250,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 8250,
        "availability": "available"
      },
      {
        "id": "rib-cushion-cover-sky-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-RIB-CUSHIO-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Blue",
        "sourcePrice": 11750,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 11750,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 50
  },
  {
    "id": "rib-cushion-cover-warm-white",
    "handle": "rib-cushion-cover-warm-white",
    "title": "Homebody - Warm White Rib Lumbar Cushion Cover (65x40)",
    "collectionName": "Darcy Corduroy",
    "productType": "Cushions",
    "colorOrPrint": "Neutral",
    "colorGroup": "Neutral",
    "fabric": "Darcy Corduroy",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium darcy corduroy with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/rib-cushion-cover-warm-white",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 7250,
    "sourceCompareAtPrice": 9063,
    "demoPricePKR": 7250,
    "demoCompareAtPricePKR": 9063,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_RIBBED_WARM_WHITE.jpg?v=1758586003",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_RIBBED_WARM_WHITE.jpg?v=1758586003",
        "alt": "Homebody - Warm White Rib Lumbar Cushion Cover (65x40) - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Neutral"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_RIBBED_WARM_WHITE_BACK.jpg?v=1758586004",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_RIBBED_WARM_WHITE_BACK.jpg?v=1758586004",
        "alt": "Homebody - Warm White Rib Lumbar Cushion Cover (65x40) - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Neutral"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_RIBBED_WARM_WHITE_DETAIL.jpg?v=1758586003",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_RIBBED_WARM_WHITE_DETAIL.jpg?v=1758586003",
        "alt": "Homebody - Warm White Rib Lumbar Cushion Cover (65x40) - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Neutral"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_01.jpg?v=1758586003",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_01.jpg?v=1758586003",
        "alt": "Homebody - Warm White Rib Lumbar Cushion Cover (65x40) - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Neutral"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_01_DETAIL_02.jpg?v=1758586004",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_01_DETAIL_02.jpg?v=1758586004",
        "alt": "Homebody - Warm White Rib Lumbar Cushion Cover (65x40) - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Neutral"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "65x40",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Neutral"
        ]
      }
    ],
    "variants": [
      {
        "id": "rib-cushion-cover-warm-white-65x40",
        "sourceVariantId": null,
        "title": "65x40",
        "sku": "MORFE-RIB-CUSHIO-1",
        "size": "65x40",
        "colorOrPrint": "Neutral",
        "sourcePrice": 7250,
        "sourceCompareAtPrice": 9063,
        "demoPricePKR": 7250,
        "availability": "available"
      },
      {
        "id": "rib-cushion-cover-warm-white-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-RIB-CUSHIO-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Neutral",
        "sourcePrice": 10750,
        "sourceCompareAtPrice": 9063,
        "demoPricePKR": 10750,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 39
  },
  {
    "id": "rib-cushion-cover-hunter-green",
    "handle": "rib-cushion-cover-hunter-green",
    "title": "Homebody - Hunter Green Rib Square Cushion Cover (50x50)",
    "collectionName": "Darcy Corduroy",
    "productType": "Cushions",
    "colorOrPrint": "Green",
    "colorGroup": "Green",
    "fabric": "Darcy Corduroy",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium darcy corduroy with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/rib-cushion-cover-hunter-green",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 6000,
    "sourceCompareAtPrice": 7500,
    "demoPricePKR": 6000,
    "demoCompareAtPricePKR": 7500,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_RIBBED_HUNTER_GREEN.jpg?v=1758586005",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_RIBBED_HUNTER_GREEN.jpg?v=1758586005",
        "alt": "Homebody - Hunter Green Rib Square Cushion Cover (50x50) - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Green"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_RIBBED_HUNTER_GREEN_BACK.jpg?v=1758586005",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_RIBBED_HUNTER_GREEN_BACK.jpg?v=1758586005",
        "alt": "Homebody - Hunter Green Rib Square Cushion Cover (50x50) - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Green"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_RIBBED_HUNTER_GREEN_DETAIL.jpg?v=1758586005",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_RIBBED_HUNTER_GREEN_DETAIL.jpg?v=1758586005",
        "alt": "Homebody - Hunter Green Rib Square Cushion Cover (50x50) - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Green"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_04.jpg?v=1758586005",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_04.jpg?v=1758586005",
        "alt": "Homebody - Hunter Green Rib Square Cushion Cover (50x50) - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Green"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_04_DETAIL.jpg?v=1758586006",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_04_DETAIL.jpg?v=1758586006",
        "alt": "Homebody - Hunter Green Rib Square Cushion Cover (50x50) - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Green"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "50x50",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Green"
        ]
      }
    ],
    "variants": [
      {
        "id": "rib-cushion-cover-hunter-green-50x50",
        "sourceVariantId": null,
        "title": "50x50",
        "sku": "MORFE-RIB-CUSHIO-1",
        "size": "50x50",
        "colorOrPrint": "Green",
        "sourcePrice": 6000,
        "sourceCompareAtPrice": 7500,
        "demoPricePKR": 6000,
        "availability": "available"
      },
      {
        "id": "rib-cushion-cover-hunter-green-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-RIB-CUSHIO-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Green",
        "sourcePrice": 9500,
        "sourceCompareAtPrice": 7500,
        "demoPricePKR": 9500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 60
  },
  {
    "id": "wool-boucle-cushion-cover-natural",
    "handle": "wool-boucle-cushion-cover-natural",
    "title": "Homebody - Natural Wool Boucle Lumbar Cushion Cover (65x40)",
    "collectionName": "Wonder Wool",
    "productType": "Cushions",
    "colorOrPrint": "Beige",
    "colorGroup": "Beige",
    "fabric": "Wonder Wool",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium wonder wool with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/wool-boucle-cushion-cover-natural",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8250,
    "sourceCompareAtPrice": 10313,
    "demoPricePKR": 8250,
    "demoCompareAtPricePKR": 10313,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/NATURAL_WOOL_CUSHION.jpg?v=1772405717",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/NATURAL_WOOL_CUSHION.jpg?v=1772405717",
        "alt": "Homebody - Natural Wool Boucle Lumbar Cushion Cover (65x40) - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Beige"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/NATURAL_WOOL_CUSHION_BACK.jpg?v=1772405719",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/NATURAL_WOOL_CUSHION_BACK.jpg?v=1772405719",
        "alt": "Homebody - Natural Wool Boucle Lumbar Cushion Cover (65x40) - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Beige"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/NATURAL_WOOL_CUSHION_DETAIL.jpg?v=1772405719",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/NATURAL_WOOL_CUSHION_DETAIL.jpg?v=1772405719",
        "alt": "Homebody - Natural Wool Boucle Lumbar Cushion Cover (65x40) - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Beige"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_BUNDLE_01.jpg?v=1772405719",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_BUNDLE_01.jpg?v=1772405719",
        "alt": "Homebody - Natural Wool Boucle Lumbar Cushion Cover (65x40) - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Beige"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "65x40",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Beige"
        ]
      }
    ],
    "variants": [
      {
        "id": "wool-boucle-cushion-cover-natural-65x40",
        "sourceVariantId": null,
        "title": "65x40",
        "sku": "MORFE-WOOL-BOUCL-1",
        "size": "65x40",
        "colorOrPrint": "Beige",
        "sourcePrice": 8250,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 8250,
        "availability": "available"
      },
      {
        "id": "wool-boucle-cushion-cover-natural-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-WOOL-BOUCL-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Beige",
        "sourcePrice": 11750,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 11750,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 48
  },
  {
    "id": "wool-boucle-cushion-cover-chocolate",
    "handle": "wool-boucle-cushion-cover-chocolate",
    "title": "Homebody - Chocolate Wool Boucle Square Cushion Cover (50x50)",
    "collectionName": "Wonder Wool",
    "productType": "Cushions",
    "colorOrPrint": "Brown",
    "colorGroup": "Brown",
    "fabric": "Wonder Wool",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium wonder wool with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/wool-boucle-cushion-cover-chocolate",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 9500,
    "sourceCompareAtPrice": 11875,
    "demoPricePKR": 9500,
    "demoCompareAtPricePKR": 11875,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CHOCOLATE_WOOL_CUSHION.jpg?v=1771888511",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CHOCOLATE_WOOL_CUSHION.jpg?v=1771888511",
        "alt": "Homebody - Chocolate Wool Boucle Square Cushion Cover (50x50) - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CHOCOLATE_WOOL_CUSHION_BACK_V2.jpg?v=1771888511",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CHOCOLATE_WOOL_CUSHION_BACK_V2.jpg?v=1771888511",
        "alt": "Homebody - Chocolate Wool Boucle Square Cushion Cover (50x50) - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CHOCOLATE_WOOL_CUSHION_DETAIL.jpg?v=1771888511",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CHOCOLATE_WOOL_CUSHION_DETAIL.jpg?v=1771888511",
        "alt": "Homebody - Chocolate Wool Boucle Square Cushion Cover (50x50) - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_BUNDLE_02.jpg?v=1771888511",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_BUNDLE_02.jpg?v=1771888511",
        "alt": "Homebody - Chocolate Wool Boucle Square Cushion Cover (50x50) - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Brown"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "50x50",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Brown"
        ]
      }
    ],
    "variants": [
      {
        "id": "wool-boucle-cushion-cover-chocolate-50x50",
        "sourceVariantId": null,
        "title": "50x50",
        "sku": "MORFE-WOOL-BOUCL-1",
        "size": "50x50",
        "colorOrPrint": "Brown",
        "sourcePrice": 9500,
        "sourceCompareAtPrice": 11875,
        "demoPricePKR": 9500,
        "availability": "available"
      },
      {
        "id": "wool-boucle-cushion-cover-chocolate-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-WOOL-BOUCL-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Brown",
        "sourcePrice": 13000,
        "sourceCompareAtPrice": 11875,
        "demoPricePKR": 13000,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 46
  },
  {
    "id": "velvet-cushion-cover-darcie-stripe",
    "handle": "velvet-cushion-cover-darcie-stripe",
    "title": "Homebody - Darcie Stripe Velvet Bolster Cushion Cover",
    "collectionName": "Velvet",
    "productType": "Cushions",
    "colorOrPrint": "Blue",
    "colorGroup": "Blue",
    "fabric": "Velvet",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium velvet with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/velvet-cushion-cover-darcie-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 9500,
    "sourceCompareAtPrice": 11875,
    "demoPricePKR": 9500,
    "demoCompareAtPricePKR": 11875,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Darcie-Stripe-Cushion.jpg?v=1788498219",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Darcie-Stripe-Cushion.jpg?v=1788498219",
        "alt": "Homebody - Darcie Stripe Velvet Bolster Cushion Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Darcie-Stripe-Cushion-Detail.jpg?v=1788498219",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Darcie-Stripe-Cushion-Detail.jpg?v=1788498219",
        "alt": "Homebody - Darcie Stripe Velvet Bolster Cushion Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Darcie-Stripe-Cushion-Styled.jpg?v=1788498219",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Darcie-Stripe-Cushion-Styled.jpg?v=1788498219",
        "alt": "Homebody - Darcie Stripe Velvet Bolster Cushion Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Blue"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Bolster (20x60cm)",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blue"
        ]
      }
    ],
    "variants": [
      {
        "id": "velvet-cushion-cover-darcie-stripe-bolster--20x60cm-",
        "sourceVariantId": null,
        "title": "Bolster (20x60cm)",
        "sku": "MORFE-VELVET-CUS-1",
        "size": "Bolster (20x60cm)",
        "colorOrPrint": "Blue",
        "sourcePrice": 9500,
        "sourceCompareAtPrice": 11875,
        "demoPricePKR": 9500,
        "availability": "available"
      },
      {
        "id": "velvet-cushion-cover-darcie-stripe-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-VELVET-CUS-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Blue",
        "sourcePrice": 13000,
        "sourceCompareAtPrice": 11875,
        "demoPricePKR": 13000,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 39
  },
  {
    "id": "velvet-cushion-cover-rhodes",
    "handle": "velvet-cushion-cover-rhodes",
    "title": "Homebody - Rhodes Velvet Bolster Cushion Cover",
    "collectionName": "Velvet",
    "productType": "Cushions",
    "colorOrPrint": "Blue",
    "colorGroup": "Blue",
    "fabric": "Velvet",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium velvet with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/velvet-cushion-cover-rhodes",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 9500,
    "sourceCompareAtPrice": 11875,
    "demoPricePKR": 9500,
    "demoCompareAtPricePKR": 11875,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cushion_Rhodes.jpg?v=1787122026",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cushion_Rhodes.jpg?v=1787122026",
        "alt": "Homebody - Rhodes Velvet Bolster Cushion Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cushion_Rhodes_Detail.jpg?v=1787122026",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Cushion_Rhodes_Detail.jpg?v=1787122026",
        "alt": "Homebody - Rhodes Velvet Bolster Cushion Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Blue"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Bolster (20x60cm)",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blue"
        ]
      }
    ],
    "variants": [
      {
        "id": "velvet-cushion-cover-rhodes-bolster--20x60cm-",
        "sourceVariantId": null,
        "title": "Bolster (20x60cm)",
        "sku": "MORFE-VELVET-CUS-1",
        "size": "Bolster (20x60cm)",
        "colorOrPrint": "Blue",
        "sourcePrice": 9500,
        "sourceCompareAtPrice": 11875,
        "demoPricePKR": 9500,
        "availability": "available"
      },
      {
        "id": "velvet-cushion-cover-rhodes-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-VELVET-CUS-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Blue",
        "sourcePrice": 13000,
        "sourceCompareAtPrice": 11875,
        "demoPricePKR": 13000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 72
  },
  {
    "id": "velvet-cushion-cover-diamond-ranch",
    "handle": "velvet-cushion-cover-diamond-ranch",
    "title": "Homebody - Diamond Ranch Round Cushion Cover",
    "collectionName": "Velvet",
    "productType": "Cushions",
    "colorOrPrint": "Brown",
    "colorGroup": "Brown",
    "fabric": "Velvet",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium velvet with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/velvet-cushion-cover-diamond-ranch",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 9500,
    "sourceCompareAtPrice": 11875,
    "demoPricePKR": 9500,
    "demoCompareAtPricePKR": 11875,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Diamond_Ranch_Round_Cushion.jpg?v=1783664249",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Diamond_Ranch_Round_Cushion.jpg?v=1783664249",
        "alt": "Homebody - Diamond Ranch Round Cushion Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Diamond_Ranch_Round_Cushion_Detail.jpg?v=1783664250",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Diamond_Ranch_Round_Cushion_Detail.jpg?v=1783664250",
        "alt": "Homebody - Diamond Ranch Round Cushion Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Rory_Washed_Cotton_Mahogany_Bed_Cover_05.jpg?v=1783664249",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Rory_Washed_Cotton_Mahogany_Bed_Cover_05.jpg?v=1783664249",
        "alt": "Homebody - Diamond Ranch Round Cushion Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Brown"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Round (40cm)",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Brown"
        ]
      }
    ],
    "variants": [
      {
        "id": "velvet-cushion-cover-diamond-ranch-round--40cm-",
        "sourceVariantId": null,
        "title": "Round (40cm)",
        "sku": "MORFE-VELVET-CUS-1",
        "size": "Round (40cm)",
        "colorOrPrint": "Brown",
        "sourcePrice": 9500,
        "sourceCompareAtPrice": 11875,
        "demoPricePKR": 9500,
        "availability": "available"
      },
      {
        "id": "velvet-cushion-cover-diamond-ranch-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-VELVET-CUS-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Brown",
        "sourcePrice": 13000,
        "sourceCompareAtPrice": 11875,
        "demoPricePKR": 13000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 45
  },
  {
    "id": "velvet-cushion-cover-lovers-red",
    "handle": "velvet-cushion-cover-lovers-red",
    "title": "Homebody - Lovers Red Lumbar Cushion Cover (65x40)",
    "collectionName": "Velvet",
    "productType": "Cushions",
    "colorOrPrint": "Red",
    "colorGroup": "Red",
    "fabric": "Velvet",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium velvet with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/velvet-cushion-cover-lovers-red",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8250,
    "sourceCompareAtPrice": 10313,
    "demoPricePKR": 8250,
    "demoCompareAtPricePKR": 10313,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Rory_Washed_Cotton_Mahogany_Cushion_01.jpg?v=1783466672",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Rory_Washed_Cotton_Mahogany_Cushion_01.jpg?v=1783466672",
        "alt": "Homebody - Lovers Red Lumbar Cushion Cover (65x40) - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Red"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Rory_Washed_Cotton_Mahogany_Bed_Cover_04_d4996ee6-76b7-4a2c-a53d-df519879d5ec.jpg?v=1783466672",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Rory_Washed_Cotton_Mahogany_Bed_Cover_04_d4996ee6-76b7-4a2c-a53d-df519879d5ec.jpg?v=1783466672",
        "alt": "Homebody - Lovers Red Lumbar Cushion Cover (65x40) - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Red"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Homebody_Love_Is_Red_Cushion.jpg?v=1783466672",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Homebody_Love_Is_Red_Cushion.jpg?v=1783466672",
        "alt": "Homebody - Lovers Red Lumbar Cushion Cover (65x40) - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Red"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Lovers_Red_Velvet_Cushion_Detail.jpg?v=1783466672",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Lovers_Red_Velvet_Cushion_Detail.jpg?v=1783466672",
        "alt": "Homebody - Lovers Red Lumbar Cushion Cover (65x40) - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Red"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "65x40",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Red"
        ]
      }
    ],
    "variants": [
      {
        "id": "velvet-cushion-cover-lovers-red-65x40",
        "sourceVariantId": null,
        "title": "65x40",
        "sku": "MORFE-VELVET-CUS-1",
        "size": "65x40",
        "colorOrPrint": "Red",
        "sourcePrice": 8250,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 8250,
        "availability": "available"
      },
      {
        "id": "velvet-cushion-cover-lovers-red-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-VELVET-CUS-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Red",
        "sourcePrice": 11750,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 11750,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 68
  },
  {
    "id": "velvet-cushion-cover-juni",
    "handle": "velvet-cushion-cover-juni",
    "title": "Homebody - Juni Velvet Lumbar Cushion Cover (65x40)",
    "collectionName": "Velvet",
    "productType": "Cushions",
    "colorOrPrint": "Brown",
    "colorGroup": "Brown",
    "fabric": "Velvet",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium velvet with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/velvet-cushion-cover-juni",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8250,
    "sourceCompareAtPrice": 10313,
    "demoPricePKR": 8250,
    "demoCompareAtPricePKR": 10313,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/COTTON_TEXTURE_JUNI_CUSHION.jpg?v=1772159952",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/COTTON_TEXTURE_JUNI_CUSHION.jpg?v=1772159952",
        "alt": "Homebody - Juni Velvet Lumbar Cushion Cover (65x40) - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/COTTON_TEXTURE_JUNI_CUSHION_DETAIL.jpg?v=1772159952",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/COTTON_TEXTURE_JUNI_CUSHION_DETAIL.jpg?v=1772159952",
        "alt": "Homebody - Juni Velvet Lumbar Cushion Cover (65x40) - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_BUNDLE_02_fdc881ec-c904-4efb-bf8e-aafac3cfe595.jpg?v=1772159952",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_BUNDLE_02_fdc881ec-c904-4efb-bf8e-aafac3cfe595.jpg?v=1772159952",
        "alt": "Homebody - Juni Velvet Lumbar Cushion Cover (65x40) - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Brown"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "65x40",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Brown"
        ]
      }
    ],
    "variants": [
      {
        "id": "velvet-cushion-cover-juni-65x40",
        "sourceVariantId": null,
        "title": "65x40",
        "sku": "MORFE-VELVET-CUS-1",
        "size": "65x40",
        "colorOrPrint": "Brown",
        "sourcePrice": 8250,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 8250,
        "availability": "available"
      },
      {
        "id": "velvet-cushion-cover-juni-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-VELVET-CUS-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Brown",
        "sourcePrice": 11750,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 11750,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 44
  },
  {
    "id": "velvet-cushion-cover-lui-stripe",
    "handle": "velvet-cushion-cover-lui-stripe",
    "title": "Homebody - Lui Stripe Bolster Cushion Cover",
    "collectionName": "Velvet",
    "productType": "Cushions",
    "colorOrPrint": "Brown",
    "colorGroup": "Brown",
    "fabric": "Velvet",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium velvet with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/velvet-cushion-cover-lui-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 9500,
    "sourceCompareAtPrice": 11875,
    "demoPricePKR": 9500,
    "demoCompareAtPricePKR": 11875,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/LIU_STRIPE_BOLSTER_CUSHION.jpg?v=1772152968",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/LIU_STRIPE_BOLSTER_CUSHION.jpg?v=1772152968",
        "alt": "Homebody - Lui Stripe Bolster Cushion Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/LIU_STRIPE_BOLSTER_CUSHION_DETAIL.jpg?v=1772152968",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/LIU_STRIPE_BOLSTER_CUSHION_DETAIL.jpg?v=1772152968",
        "alt": "Homebody - Lui Stripe Bolster Cushion Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_BUNDLE_01_c06c6dbf-f667-46fe-8939-8b3410423005.jpg?v=1772152968",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_BUNDLE_01_c06c6dbf-f667-46fe-8939-8b3410423005.jpg?v=1772152968",
        "alt": "Homebody - Lui Stripe Bolster Cushion Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Brown"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Bolster (20x60cm)",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Brown"
        ]
      }
    ],
    "variants": [
      {
        "id": "velvet-cushion-cover-lui-stripe-bolster--20x60cm-",
        "sourceVariantId": null,
        "title": "Bolster (20x60cm)",
        "sku": "MORFE-VELVET-CUS-1",
        "size": "Bolster (20x60cm)",
        "colorOrPrint": "Brown",
        "sourcePrice": 9500,
        "sourceCompareAtPrice": 11875,
        "demoPricePKR": 9500,
        "availability": "available"
      },
      {
        "id": "velvet-cushion-cover-lui-stripe-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-VELVET-CUS-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Brown",
        "sourcePrice": 13000,
        "sourceCompareAtPrice": 11875,
        "demoPricePKR": 13000,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 29
  },
  {
    "id": "velvet-cushion-cover-blair",
    "handle": "velvet-cushion-cover-blair",
    "title": "Homebody - Blair Velvet Bolster Cushion Cover",
    "collectionName": "Velvet",
    "productType": "Cushions",
    "colorOrPrint": "Multi",
    "colorGroup": "Multi",
    "fabric": "Velvet",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium velvet with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/velvet-cushion-cover-blair",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 9500,
    "sourceCompareAtPrice": 11875,
    "demoPricePKR": 9500,
    "demoCompareAtPricePKR": 11875,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_VELVET_BLAIR_BOLSTER.jpg?v=1758586016",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_VELVET_BLAIR_BOLSTER.jpg?v=1758586016",
        "alt": "Homebody - Blair Velvet Bolster Cushion Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Multi"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/DSCF3203_5.jpg?v=1760913212",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/DSCF3203_5.jpg?v=1760913212",
        "alt": "Homebody - Blair Velvet Bolster Cushion Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Multi"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/DSCF3185_2.jpg?v=1760913212",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/DSCF3185_2.jpg?v=1760913212",
        "alt": "Homebody - Blair Velvet Bolster Cushion Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Multi"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Bolster (20x60cm)",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Multi"
        ]
      }
    ],
    "variants": [
      {
        "id": "velvet-cushion-cover-blair-bolster--20x60cm-",
        "sourceVariantId": null,
        "title": "Bolster (20x60cm)",
        "sku": "MORFE-VELVET-CUS-1",
        "size": "Bolster (20x60cm)",
        "colorOrPrint": "Multi",
        "sourcePrice": 9500,
        "sourceCompareAtPrice": 11875,
        "demoPricePKR": 9500,
        "availability": "available"
      },
      {
        "id": "velvet-cushion-cover-blair-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-VELVET-CUS-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Multi",
        "sourcePrice": 13000,
        "sourceCompareAtPrice": 11875,
        "demoPricePKR": 13000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 19
  },
  {
    "id": "velvet-cushion-cover-burgundy",
    "handle": "velvet-cushion-cover-burgundy",
    "title": "Homebody - Burgundy Velvet Bolster Cushion Cover",
    "collectionName": "Velvet",
    "productType": "Cushions",
    "colorOrPrint": "Purple",
    "colorGroup": "Purple",
    "fabric": "Velvet",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium velvet with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/velvet-cushion-cover-burgundy",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 9500,
    "sourceCompareAtPrice": 11875,
    "demoPricePKR": 9500,
    "demoCompareAtPricePKR": 11875,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_VELVET_BURGUNDY_BOLSTER.jpg?v=1758586017",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_VELVET_BURGUNDY_BOLSTER.jpg?v=1758586017",
        "alt": "Homebody - Burgundy Velvet Bolster Cushion Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Purple"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_VELVET_BURGUNDY_BOLSTER_DETAIL.jpg?v=1758586017",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_VELVET_BURGUNDY_BOLSTER_DETAIL.jpg?v=1758586017",
        "alt": "Homebody - Burgundy Velvet Bolster Cushion Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Purple"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_01_a8ab0b7f-f1d2-4ebb-bd4c-b88cfb96de84.jpg?v=1758586017",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_01_a8ab0b7f-f1d2-4ebb-bd4c-b88cfb96de84.jpg?v=1758586017",
        "alt": "Homebody - Burgundy Velvet Bolster Cushion Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Purple"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_01_DETAIL_02_e0080882-024d-4f3e-b4a8-95572e509e79.jpg?v=1758586016",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_01_DETAIL_02_e0080882-024d-4f3e-b4a8-95572e509e79.jpg?v=1758586016",
        "alt": "Homebody - Burgundy Velvet Bolster Cushion Cover - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Purple"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Bolster (20x60cm)",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Purple"
        ]
      }
    ],
    "variants": [
      {
        "id": "velvet-cushion-cover-burgundy-bolster--20x60cm-",
        "sourceVariantId": null,
        "title": "Bolster (20x60cm)",
        "sku": "MORFE-VELVET-CUS-1",
        "size": "Bolster (20x60cm)",
        "colorOrPrint": "Purple",
        "sourcePrice": 9500,
        "sourceCompareAtPrice": 11875,
        "demoPricePKR": 9500,
        "availability": "available"
      },
      {
        "id": "velvet-cushion-cover-burgundy-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-VELVET-CUS-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Purple",
        "sourcePrice": 13000,
        "sourceCompareAtPrice": 11875,
        "demoPricePKR": 13000,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 55
  },
  {
    "id": "wool-cushion-cover-peaches-gingham",
    "handle": "wool-cushion-cover-peaches-gingham",
    "title": "Morgan Wool - Peaches Gingham Lumbar Cushion Cover (65x40)",
    "collectionName": "Wonder Wool",
    "productType": "Cushions",
    "colorOrPrint": "Pink",
    "colorGroup": "Pink",
    "fabric": "Wonder Wool",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium wonder wool with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/wool-cushion-cover-peaches-gingham",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 9500,
    "sourceCompareAtPrice": 11875,
    "demoPricePKR": 9500,
    "demoCompareAtPricePKR": 11875,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/MORGAN_WOOL_PEACHES_CUSHION.jpg?v=1774394128",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/MORGAN_WOOL_PEACHES_CUSHION.jpg?v=1774394128",
        "alt": "Morgan Wool - Peaches Gingham Lumbar Cushion Cover (65x40) - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Pink"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/MORGAN_WOOL_PEACHES_CUSHION_DETAIL.jpg?v=1774394128",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/MORGAN_WOOL_PEACHES_CUSHION_DETAIL.jpg?v=1774394128",
        "alt": "Morgan Wool - Peaches Gingham Lumbar Cushion Cover (65x40) - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Pink"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/MORGAN_WOOL_PEACHES_BLANKET_TEXTURE_b758887c-d6b4-4340-a930-c802018c986a.jpg?v=1774394128",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/MORGAN_WOOL_PEACHES_BLANKET_TEXTURE_b758887c-d6b4-4340-a930-c802018c986a.jpg?v=1774394128",
        "alt": "Morgan Wool - Peaches Gingham Lumbar Cushion Cover (65x40) - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Pink"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "65x40",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Pink"
        ]
      }
    ],
    "variants": [
      {
        "id": "wool-cushion-cover-peaches-gingham-65x40",
        "sourceVariantId": null,
        "title": "65x40",
        "sku": "MORFE-WOOL-CUSHI-1",
        "size": "65x40",
        "colorOrPrint": "Pink",
        "sourcePrice": 9500,
        "sourceCompareAtPrice": 11875,
        "demoPricePKR": 9500,
        "availability": "available"
      },
      {
        "id": "wool-cushion-cover-peaches-gingham-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-WOOL-CUSHI-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Pink",
        "sourcePrice": 13000,
        "sourceCompareAtPrice": 11875,
        "demoPricePKR": 13000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 39
  },
  {
    "id": "wool-cushion-cover-teddy-gingham",
    "handle": "wool-cushion-cover-teddy-gingham",
    "title": "Morgan Wool - Teddy Square Cushion Cover (50x50)",
    "collectionName": "Wonder Wool",
    "productType": "Cushions",
    "colorOrPrint": "Blue",
    "colorGroup": "Blue",
    "fabric": "Wonder Wool",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium wonder wool with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/wool-cushion-cover-teddy-gingham",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8250,
    "sourceCompareAtPrice": 10313,
    "demoPricePKR": 8250,
    "demoCompareAtPricePKR": 10313,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/MORGAN_WOOL_TEDDY_CUSHION_242b27a7-7f06-4e85-affc-eefe2f8a6399.jpg?v=1774583910",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/MORGAN_WOOL_TEDDY_CUSHION_242b27a7-7f06-4e85-affc-eefe2f8a6399.jpg?v=1774583910",
        "alt": "Morgan Wool - Teddy Square Cushion Cover (50x50) - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/MORGAN_WOOL_TEDDY_CUSHION_DETAIL_67f03166-4523-4a1c-a26b-3a8b9ef27a32.jpg?v=1774583910",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/MORGAN_WOOL_TEDDY_CUSHION_DETAIL_67f03166-4523-4a1c-a26b-3a8b9ef27a32.jpg?v=1774583910",
        "alt": "Morgan Wool - Teddy Square Cushion Cover (50x50) - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Blue"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "50x50",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blue"
        ]
      }
    ],
    "variants": [
      {
        "id": "wool-cushion-cover-teddy-gingham-50x50",
        "sourceVariantId": null,
        "title": "50x50",
        "sku": "MORFE-WOOL-CUSHI-1",
        "size": "50x50",
        "colorOrPrint": "Blue",
        "sourcePrice": 8250,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 8250,
        "availability": "available"
      },
      {
        "id": "wool-cushion-cover-teddy-gingham-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-WOOL-CUSHI-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Blue",
        "sourcePrice": 11750,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 11750,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 54
  },
  {
    "id": "tufted-cotton-cushion-cover-warm-white-checkerboard",
    "handle": "tufted-cotton-cushion-cover-warm-white-checkerboard",
    "title": "Homebody - Warm White Checkerboard Tufted Lumbar Cushion Cover (65x40)",
    "collectionName": "Bouclé Cotton",
    "productType": "Cushions",
    "colorOrPrint": "Neutral",
    "colorGroup": "Neutral",
    "fabric": "Bouclé Cotton",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium bouclé cotton with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/tufted-cotton-cushion-cover-warm-white-checkerboard",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 7250,
    "sourceCompareAtPrice": 9063,
    "demoPricePKR": 7250,
    "demoCompareAtPricePKR": 9063,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_TUFFTED_WARM_WHITE_CHECKER.jpg?v=1758608090",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_TUFFTED_WARM_WHITE_CHECKER.jpg?v=1758608090",
        "alt": "Homebody - Warm White Checkerboard Tufted Lumbar Cushion Cover (65x40) - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Neutral"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_TUFFTED_WARM_WHITE_CHECKER_DETAIL.jpg?v=1758608090",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/HOMEBODY_TUFFTED_WARM_WHITE_CHECKER_DETAIL.jpg?v=1758608090",
        "alt": "Homebody - Warm White Checkerboard Tufted Lumbar Cushion Cover (65x40) - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Neutral"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_05_abcf76ea-53d9-458b-972a-cb8603d8bbb7.jpg?v=1758608090",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_05_abcf76ea-53d9-458b-972a-cb8603d8bbb7.jpg?v=1758608090",
        "alt": "Homebody - Warm White Checkerboard Tufted Lumbar Cushion Cover (65x40) - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Neutral"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_05_DETAIL_2ffb7d5c-1994-4e21-aaec-3de367be2092.jpg?v=1758608090",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CUSHION_STACK_05_DETAIL_2ffb7d5c-1994-4e21-aaec-3de367be2092.jpg?v=1758608090",
        "alt": "Homebody - Warm White Checkerboard Tufted Lumbar Cushion Cover (65x40) - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Neutral"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "65x40",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Neutral"
        ]
      }
    ],
    "variants": [
      {
        "id": "tufted-cotton-cushion-cover-warm-white-checkerboard-65x40",
        "sourceVariantId": null,
        "title": "65x40",
        "sku": "MORFE-TUFTED-COT-1",
        "size": "65x40",
        "colorOrPrint": "Neutral",
        "sourcePrice": 7250,
        "sourceCompareAtPrice": 9063,
        "demoPricePKR": 7250,
        "availability": "available"
      },
      {
        "id": "tufted-cotton-cushion-cover-warm-white-checkerboard-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-TUFTED-COT-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Neutral",
        "sourcePrice": 10750,
        "sourceCompareAtPrice": 9063,
        "demoPricePKR": 10750,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 47
  },
  {
    "id": "cotton-jacquard-cushion-cover-evie-spot",
    "handle": "cotton-jacquard-cushion-cover-evie-spot",
    "title": "Homebody - Evie Spot Cotton Jacquard Lumbar Cushion Cover (65x40)",
    "collectionName": "Bouclé Cotton",
    "productType": "Cushions",
    "colorOrPrint": "Warm-white",
    "colorGroup": "Warm-white",
    "fabric": "Bouclé Cotton",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium bouclé cotton with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cotton-jacquard-cushion-cover-evie-spot",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 9500,
    "sourceCompareAtPrice": 11875,
    "demoPricePKR": 9500,
    "demoCompareAtPricePKR": 11875,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Evie-Spot-Cushion.jpg?v=1788497613",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Evie-Spot-Cushion.jpg?v=1788497613",
        "alt": "Homebody - Evie Spot Cotton Jacquard Lumbar Cushion Cover (65x40) - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Warm-white"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Evie-Spot-Cushion-Detail_94764592-b86a-4ec4-803d-b9e83e5b109f.jpg?v=1788481072",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Evie-Spot-Cushion-Detail_94764592-b86a-4ec4-803d-b9e83e5b109f.jpg?v=1788481072",
        "alt": "Homebody - Evie Spot Cotton Jacquard Lumbar Cushion Cover (65x40) - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Warm-white"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Evie-Spot-Cushion-Styled_05bd1d04-ba82-4962-9358-b15aaacda7f1.jpg?v=1788481072",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Evie-Spot-Cushion-Styled_05bd1d04-ba82-4962-9358-b15aaacda7f1.jpg?v=1788481072",
        "alt": "Homebody - Evie Spot Cotton Jacquard Lumbar Cushion Cover (65x40) - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Warm-white"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "65x40",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Warm-white"
        ]
      }
    ],
    "variants": [
      {
        "id": "cotton-jacquard-cushion-cover-evie-spot-65x40",
        "sourceVariantId": null,
        "title": "65x40",
        "sku": "MORFE-COTTON-JAC-1",
        "size": "65x40",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 9500,
        "sourceCompareAtPrice": 11875,
        "demoPricePKR": 9500,
        "availability": "available"
      },
      {
        "id": "cotton-jacquard-cushion-cover-evie-spot-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-COTTON-JAC-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 13000,
        "sourceCompareAtPrice": 11875,
        "demoPricePKR": 13000,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 60
  },
  {
    "id": "textured-cotton-cushion-cover-astrid",
    "handle": "textured-cotton-cushion-cover-astrid",
    "title": "Charlie Cotton - Astrid Cushion",
    "collectionName": "Bouclé Cotton",
    "productType": "Cushions",
    "colorOrPrint": "Pink",
    "colorGroup": "Pink",
    "fabric": "Bouclé Cotton",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium bouclé cotton with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/textured-cotton-cushion-cover-astrid",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 6750,
    "sourceCompareAtPrice": 8438,
    "demoPricePKR": 6750,
    "demoCompareAtPricePKR": 8438,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Charlie_Cotton_Astrid_Cushion_V1.jpg?v=1749788574",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Charlie_Cotton_Astrid_Cushion_V1.jpg?v=1749788574",
        "alt": "Charlie Cotton - Astrid Cushion - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Pink"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Charlie_Cotton_Astrid_Cushion_Styled.jpg?v=1749788574",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Charlie_Cotton_Astrid_Cushion_Styled.jpg?v=1749788574",
        "alt": "Charlie Cotton - Astrid Cushion - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Pink"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Charlie_Cotton_Astrid_Cushion_Detail.jpg?v=1749788574",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Charlie_Cotton_Astrid_Cushion_Detail.jpg?v=1749788574",
        "alt": "Charlie Cotton - Astrid Cushion - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Pink"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "50x50",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Pink"
        ]
      }
    ],
    "variants": [
      {
        "id": "textured-cotton-cushion-cover-astrid-50x50",
        "sourceVariantId": null,
        "title": "50x50",
        "sku": "MORFE-TEXTURED-C-1",
        "size": "50x50",
        "colorOrPrint": "Pink",
        "sourcePrice": 6750,
        "sourceCompareAtPrice": 8438,
        "demoPricePKR": 6750,
        "availability": "available"
      },
      {
        "id": "textured-cotton-cushion-cover-astrid-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-TEXTURED-C-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Pink",
        "sourcePrice": 10250,
        "sourceCompareAtPrice": 8438,
        "demoPricePKR": 10250,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 35
  },
  {
    "id": "linen-cushion-cover-zahra",
    "handle": "linen-cushion-cover-zahra",
    "title": "Eve Linen - Zahra Cushion",
    "collectionName": "Eve Linen",
    "productType": "Cushions",
    "colorOrPrint": "Blue",
    "colorGroup": "Blue",
    "fabric": "Eve Linen",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium eve linen with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-cushion-cover-zahra",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 6750,
    "sourceCompareAtPrice": 8438,
    "demoPricePKR": 6750,
    "demoCompareAtPricePKR": 8438,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eve_Linen_Zahra_Cushion_V1.jpg?v=1749788566",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eve_Linen_Zahra_Cushion_V1.jpg?v=1749788566",
        "alt": "Eve Linen - Zahra Cushion - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eve_Linen_Zahra_Cushion_Styled.jpg?v=1749788566",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eve_Linen_Zahra_Cushion_Styled.jpg?v=1749788566",
        "alt": "Eve Linen - Zahra Cushion - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eve_Linen_Zahra_Cushion_Detail.jpg?v=1749788566",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eve_Linen_Zahra_Cushion_Detail.jpg?v=1749788566",
        "alt": "Eve Linen - Zahra Cushion - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Blue"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "50x50",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blue"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-cushion-cover-zahra-50x50",
        "sourceVariantId": null,
        "title": "50x50",
        "sku": "MORFE-LINEN-CUSH-1",
        "size": "50x50",
        "colorOrPrint": "Blue",
        "sourcePrice": 6750,
        "sourceCompareAtPrice": 8438,
        "demoPricePKR": 6750,
        "availability": "available"
      },
      {
        "id": "linen-cushion-cover-zahra-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-LINEN-CUSH-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Blue",
        "sourcePrice": 10250,
        "sourceCompareAtPrice": 8438,
        "demoPricePKR": 10250,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 55
  },
  {
    "id": "linen-cushion-cover-bennett-stripe",
    "handle": "linen-cushion-cover-bennett-stripe",
    "title": "Eve Linen - Bennett Stripe Cushion Cover",
    "collectionName": "Eve Linen",
    "productType": "Cushions",
    "colorOrPrint": "Bennett stripe",
    "colorGroup": "Bennett stripe",
    "fabric": "Eve Linen",
    "description": "Tactile luxury designed to bring visual warmth and sculptural dimension to your bed styling. Crafted from premium eve linen with concealed zipper closures.",
    "features": [
      "1x Cushion Cover (optional feather insert available)"
    ],
    "materialDetails": [
      "Heavyweight textured tactile weave with concealed zip fastening",
      "450 GSM Heavyweight Texture"
    ],
    "careInstructions": [
      "Cold gentle machine wash inside out",
      "Line dry flat in shade",
      "Do not bleach or tumble dry"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-cushion-cover-bennett-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 6750,
    "sourceCompareAtPrice": 8438,
    "demoPricePKR": 6750,
    "demoCompareAtPricePKR": 8438,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Bennett_Stripe_Cushion.jpg?v=1741751972",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Bennett_Stripe_Cushion.jpg?v=1741751972",
        "alt": "Eve Linen - Bennett Stripe Cushion Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Bennett stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Bennet_Stripe_Cushion.jpg?v=1741751972",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Bennet_Stripe_Cushion.jpg?v=1741751972",
        "alt": "Eve Linen - Bennett Stripe Cushion Cover - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Bennett stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Bennett_Stripe_Cushion_Detail.jpg?v=1741751972",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Bennett_Stripe_Cushion_Detail.jpg?v=1741751972",
        "alt": "Eve Linen - Bennett Stripe Cushion Cover - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Bennett stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/EVE_BENNET_CUSHION_STYLED.jpg?v=1722216783",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/EVE_BENNET_CUSHION_STYLED.jpg?v=1722216783",
        "alt": "Eve Linen - Bennett Stripe Cushion Cover - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Bennett stripe"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "50x50",
          "With Feather Insert"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Bennett stripe"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-cushion-cover-bennett-stripe-50x50",
        "sourceVariantId": null,
        "title": "50x50",
        "sku": "MORFE-LINEN-CUSH-1",
        "size": "50x50",
        "colorOrPrint": "Bennett stripe",
        "sourcePrice": 6750,
        "sourceCompareAtPrice": 8438,
        "demoPricePKR": 6750,
        "availability": "available"
      },
      {
        "id": "linen-cushion-cover-bennett-stripe-with-feather-insert",
        "sourceVariantId": null,
        "title": "With Feather Insert",
        "sku": "MORFE-LINEN-CUSH-2",
        "size": "With Feather Insert",
        "colorOrPrint": "Bennett stripe",
        "sourcePrice": 10250,
        "sourceCompareAtPrice": 8438,
        "demoPricePKR": 10250,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 55
  },
  {
    "id": "washed-cotton-blanket-sage",
    "handle": "washed-cotton-blanket-sage",
    "title": "Rory Washed Cotton - Sage Blanket",
    "collectionName": "Rory Washed Cotton",
    "productType": "Blankets & Bed Covers",
    "colorOrPrint": "Sage",
    "colorGroup": "Sage",
    "fabric": "Rory Washed Cotton",
    "description": "Generously sized and stone-washed for immediate relaxed drape. The perfect transitional layer for year-round comfort across Queen and King beds.",
    "features": [
      "1x Tailored Bed Blanket"
    ],
    "materialDetails": [
      "Breathable waffle jacquard with self-fringed tailored borders",
      "380 GSM Pre-Washed Cotton Waffle"
    ],
    "careInstructions": [
      "Machine wash cold on gentle cycle",
      "Tumble dry low or air dry in shade",
      "Warm iron if desired"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/washed-cotton-blanket-sage",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 21000,
    "sourceCompareAtPrice": 27300,
    "demoPricePKR": 21000,
    "demoCompareAtPricePKR": 27300,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/RORY_SAGE_BLANKET_LEAD_37af1fa2-fc4f-446a-b367-79f60411d295.jpg?v=1775098852",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/RORY_SAGE_BLANKET_LEAD_37af1fa2-fc4f-446a-b367-79f60411d295.jpg?v=1775098852",
        "alt": "Rory Washed Cotton - Sage Blanket - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Sage"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Throw (130x180cm)",
          "Bed Blanket (240x240cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Sage"
        ]
      }
    ],
    "variants": [
      {
        "id": "washed-cotton-blanket-sage-throw--130x180cm-",
        "sourceVariantId": null,
        "title": "Throw (130x180cm)",
        "sku": "MORFE-WASHED-COT-1",
        "size": "Throw (130x180cm)",
        "colorOrPrint": "Sage",
        "sourcePrice": 18000,
        "sourceCompareAtPrice": 27300,
        "demoPricePKR": 18000,
        "availability": "available"
      },
      {
        "id": "washed-cotton-blanket-sage-bed-blanket--240x240cm-",
        "sourceVariantId": null,
        "title": "Bed Blanket (240x240cm)",
        "sku": "MORFE-WASHED-COT-2",
        "size": "Bed Blanket (240x240cm)",
        "colorOrPrint": "Sage",
        "sourcePrice": 21000,
        "sourceCompareAtPrice": 27300,
        "demoPricePKR": 21000,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 41
  },
  {
    "id": "rory-washed-cotton-blanket-oatmeal-marle",
    "handle": "rory-washed-cotton-blanket-oatmeal-marle",
    "title": "Rory Washed Cotton - Oatmeal Marle Blanket",
    "collectionName": "Rory Washed Cotton",
    "productType": "Blankets & Bed Covers",
    "colorOrPrint": "Rory Oatmeal Marle",
    "colorGroup": "Rory Oatmeal Marle",
    "fabric": "Rory Washed Cotton",
    "description": "Generously sized and stone-washed for immediate relaxed drape. The perfect transitional layer for year-round comfort across Queen and King beds.",
    "features": [
      "1x Tailored Bed Blanket"
    ],
    "materialDetails": [
      "Breathable waffle jacquard with self-fringed tailored borders",
      "380 GSM Pre-Washed Cotton Waffle"
    ],
    "careInstructions": [
      "Machine wash cold on gentle cycle",
      "Tumble dry low or air dry in shade",
      "Warm iron if desired"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/rory-washed-cotton-blanket-oatmeal-marle",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 21000,
    "sourceCompareAtPrice": 27300,
    "demoPricePKR": 21000,
    "demoCompareAtPricePKR": 27300,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/RORY_OATMEAL_BLANKET_LEAD.jpg?v=1755059959",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/RORY_OATMEAL_BLANKET_LEAD.jpg?v=1755059959",
        "alt": "Rory Washed Cotton - Oatmeal Marle Blanket - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Rory Oatmeal Marle"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Throw (130x180cm)",
          "Bed Blanket (240x240cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Rory Oatmeal Marle"
        ]
      }
    ],
    "variants": [
      {
        "id": "rory-washed-cotton-blanket-oatmeal-marle-throw--130x180cm-",
        "sourceVariantId": null,
        "title": "Throw (130x180cm)",
        "sku": "MORFE-RORY-WASHE-1",
        "size": "Throw (130x180cm)",
        "colorOrPrint": "Rory Oatmeal Marle",
        "sourcePrice": 18000,
        "sourceCompareAtPrice": 27300,
        "demoPricePKR": 18000,
        "availability": "available"
      },
      {
        "id": "rory-washed-cotton-blanket-oatmeal-marle-bed-blanket--240x240cm-",
        "sourceVariantId": null,
        "title": "Bed Blanket (240x240cm)",
        "sku": "MORFE-RORY-WASHE-2",
        "size": "Bed Blanket (240x240cm)",
        "colorOrPrint": "Rory Oatmeal Marle",
        "sourcePrice": 21000,
        "sourceCompareAtPrice": 27300,
        "demoPricePKR": 21000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 77
  },
  {
    "id": "washed-cotton-blanket-midnight",
    "handle": "washed-cotton-blanket-midnight",
    "title": "Rory Washed Cotton - Midnight Blanket",
    "collectionName": "Rory Washed Cotton",
    "productType": "Blankets & Bed Covers",
    "colorOrPrint": "Midnight",
    "colorGroup": "Midnight",
    "fabric": "Rory Washed Cotton",
    "description": "Generously sized and stone-washed for immediate relaxed drape. The perfect transitional layer for year-round comfort across Queen and King beds.",
    "features": [
      "1x Tailored Bed Blanket"
    ],
    "materialDetails": [
      "Breathable waffle jacquard with self-fringed tailored borders",
      "380 GSM Pre-Washed Cotton Waffle"
    ],
    "careInstructions": [
      "Machine wash cold on gentle cycle",
      "Tumble dry low or air dry in shade",
      "Warm iron if desired"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/washed-cotton-blanket-midnight",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 21000,
    "sourceCompareAtPrice": 27300,
    "demoPricePKR": 21000,
    "demoCompareAtPricePKR": 27300,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/RORY_MIDNIGHT_BLANKET_LEAD.jpg?v=1755059960",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/RORY_MIDNIGHT_BLANKET_LEAD.jpg?v=1755059960",
        "alt": "Rory Washed Cotton - Midnight Blanket - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Midnight"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Throw (130x180cm)",
          "Bed Blanket (240x240cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Midnight"
        ]
      }
    ],
    "variants": [
      {
        "id": "washed-cotton-blanket-midnight-throw--130x180cm-",
        "sourceVariantId": null,
        "title": "Throw (130x180cm)",
        "sku": "MORFE-WASHED-COT-1",
        "size": "Throw (130x180cm)",
        "colorOrPrint": "Midnight",
        "sourcePrice": 18000,
        "sourceCompareAtPrice": 27300,
        "demoPricePKR": 18000,
        "availability": "available"
      },
      {
        "id": "washed-cotton-blanket-midnight-bed-blanket--240x240cm-",
        "sourceVariantId": null,
        "title": "Bed Blanket (240x240cm)",
        "sku": "MORFE-WASHED-COT-2",
        "size": "Bed Blanket (240x240cm)",
        "colorOrPrint": "Midnight",
        "sourcePrice": 21000,
        "sourceCompareAtPrice": 27300,
        "demoPricePKR": 21000,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 49
  },
  {
    "id": "washed-cotton-blanket-blush",
    "handle": "washed-cotton-blanket-blush",
    "title": "Rory Washed Cotton - Blush Blanket",
    "collectionName": "Rory Washed Cotton",
    "productType": "Blankets & Bed Covers",
    "colorOrPrint": "Blush",
    "colorGroup": "Blush",
    "fabric": "Rory Washed Cotton",
    "description": "Generously sized and stone-washed for immediate relaxed drape. The perfect transitional layer for year-round comfort across Queen and King beds.",
    "features": [
      "1x Tailored Bed Blanket"
    ],
    "materialDetails": [
      "Breathable waffle jacquard with self-fringed tailored borders",
      "380 GSM Pre-Washed Cotton Waffle"
    ],
    "careInstructions": [
      "Machine wash cold on gentle cycle",
      "Tumble dry low or air dry in shade",
      "Warm iron if desired"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/washed-cotton-blanket-blush",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 18500,
    "sourceCompareAtPrice": 24050,
    "demoPricePKR": 18500,
    "demoCompareAtPricePKR": 24050,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/RORY_BLUSH_BLANKET_LEAD.jpg?v=1755059960",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/RORY_BLUSH_BLANKET_LEAD.jpg?v=1755059960",
        "alt": "Rory Washed Cotton - Blush Blanket - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Blush"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Throw (130x180cm)",
          "Bed Blanket (240x240cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blush"
        ]
      }
    ],
    "variants": [
      {
        "id": "washed-cotton-blanket-blush-throw--130x180cm-",
        "sourceVariantId": null,
        "title": "Throw (130x180cm)",
        "sku": "MORFE-WASHED-COT-1",
        "size": "Throw (130x180cm)",
        "colorOrPrint": "Blush",
        "sourcePrice": 15500,
        "sourceCompareAtPrice": 24050,
        "demoPricePKR": 15500,
        "availability": "available"
      },
      {
        "id": "washed-cotton-blanket-blush-bed-blanket--240x240cm-",
        "sourceVariantId": null,
        "title": "Bed Blanket (240x240cm)",
        "sku": "MORFE-WASHED-COT-2",
        "size": "Bed Blanket (240x240cm)",
        "colorOrPrint": "Blush",
        "sourcePrice": 18500,
        "sourceCompareAtPrice": 24050,
        "demoPricePKR": 18500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 62
  },
  {
    "id": "rory-washed-cotton-blanket-mabel-gingham",
    "handle": "rory-washed-cotton-blanket-mabel-gingham",
    "title": "Rory Washed Cotton - Mabel Gingham Blanket",
    "collectionName": "Rory Washed Cotton",
    "productType": "Blankets & Bed Covers",
    "colorOrPrint": "Rory Mabel Gingham",
    "colorGroup": "Rory Mabel Gingham",
    "fabric": "Rory Washed Cotton",
    "description": "Generously sized and stone-washed for immediate relaxed drape. The perfect transitional layer for year-round comfort across Queen and King beds.",
    "features": [
      "1x Tailored Bed Blanket"
    ],
    "materialDetails": [
      "Breathable waffle jacquard with self-fringed tailored borders",
      "380 GSM Pre-Washed Cotton Waffle"
    ],
    "careInstructions": [
      "Machine wash cold on gentle cycle",
      "Tumble dry low or air dry in shade",
      "Warm iron if desired"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/rory-washed-cotton-blanket-mabel-gingham",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 21000,
    "sourceCompareAtPrice": 27300,
    "demoPricePKR": 21000,
    "demoCompareAtPricePKR": 27300,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mabel_Gingham_Blanket_Lead_621f564d-cee5-467a-ab94-97b1a3e96f4c.jpg?v=1769751073",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Mabel_Gingham_Blanket_Lead_621f564d-cee5-467a-ab94-97b1a3e96f4c.jpg?v=1769751073",
        "alt": "Rory Washed Cotton - Mabel Gingham Blanket - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Rory Mabel Gingham"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Throw (130x180cm)",
          "Bed Blanket (240x240cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Rory Mabel Gingham"
        ]
      }
    ],
    "variants": [
      {
        "id": "rory-washed-cotton-blanket-mabel-gingham-throw--130x180cm-",
        "sourceVariantId": null,
        "title": "Throw (130x180cm)",
        "sku": "MORFE-RORY-WASHE-1",
        "size": "Throw (130x180cm)",
        "colorOrPrint": "Rory Mabel Gingham",
        "sourcePrice": 18000,
        "sourceCompareAtPrice": 27300,
        "demoPricePKR": 18000,
        "availability": "available"
      },
      {
        "id": "rory-washed-cotton-blanket-mabel-gingham-bed-blanket--240x240cm-",
        "sourceVariantId": null,
        "title": "Bed Blanket (240x240cm)",
        "sku": "MORFE-RORY-WASHE-2",
        "size": "Bed Blanket (240x240cm)",
        "colorOrPrint": "Rory Mabel Gingham",
        "sourcePrice": 21000,
        "sourceCompareAtPrice": 27300,
        "demoPricePKR": 21000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 32
  },
  {
    "id": "rory-washed-cotton-blanket-lola-print",
    "handle": "rory-washed-cotton-blanket-lola-print",
    "title": "Rory Washed Cotton - Lola Blanket",
    "collectionName": "Rory Washed Cotton",
    "productType": "Blankets & Bed Covers",
    "colorOrPrint": "Rory Lola Print",
    "colorGroup": "Rory Lola Print",
    "fabric": "Rory Washed Cotton",
    "description": "Generously sized and stone-washed for immediate relaxed drape. The perfect transitional layer for year-round comfort across Queen and King beds.",
    "features": [
      "1x Tailored Bed Blanket"
    ],
    "materialDetails": [
      "Breathable waffle jacquard with self-fringed tailored borders",
      "380 GSM Pre-Washed Cotton Waffle"
    ],
    "careInstructions": [
      "Machine wash cold on gentle cycle",
      "Tumble dry low or air dry in shade",
      "Warm iron if desired"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/rory-washed-cotton-blanket-lola-print",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 13000,
    "sourceCompareAtPrice": 16900,
    "demoPricePKR": 13000,
    "demoCompareAtPricePKR": 16900,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/RORY_LOLA_BLANKET_LEAD.jpg?v=1754960020",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/RORY_LOLA_BLANKET_LEAD.jpg?v=1754960020",
        "alt": "Rory Washed Cotton - Lola Blanket - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Rory Lola Print"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Throw (130x180cm)",
          "Bed Blanket (240x240cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Rory Lola Print"
        ]
      }
    ],
    "variants": [
      {
        "id": "rory-washed-cotton-blanket-lola-print-throw--130x180cm-",
        "sourceVariantId": null,
        "title": "Throw (130x180cm)",
        "sku": "MORFE-RORY-WASHE-1",
        "size": "Throw (130x180cm)",
        "colorOrPrint": "Rory Lola Print",
        "sourcePrice": 10000,
        "sourceCompareAtPrice": 16900,
        "demoPricePKR": 10000,
        "availability": "available"
      },
      {
        "id": "rory-washed-cotton-blanket-lola-print-bed-blanket--240x240cm-",
        "sourceVariantId": null,
        "title": "Bed Blanket (240x240cm)",
        "sku": "MORFE-RORY-WASHE-2",
        "size": "Bed Blanket (240x240cm)",
        "colorOrPrint": "Rory Lola Print",
        "sourcePrice": 13000,
        "sourceCompareAtPrice": 16900,
        "demoPricePKR": 13000,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 40
  },
  {
    "id": "rory-washed-cotton-blanket-levi-stripe",
    "handle": "rory-washed-cotton-blanket-levi-stripe",
    "title": "Rory Washed Cotton - Levi Stripe Blanket",
    "collectionName": "Rory Washed Cotton",
    "productType": "Blankets & Bed Covers",
    "colorOrPrint": "Rory Levi Stripe",
    "colorGroup": "Rory Levi Stripe",
    "fabric": "Rory Washed Cotton",
    "description": "Generously sized and stone-washed for immediate relaxed drape. The perfect transitional layer for year-round comfort across Queen and King beds.",
    "features": [
      "1x Tailored Bed Blanket"
    ],
    "materialDetails": [
      "Breathable waffle jacquard with self-fringed tailored borders",
      "380 GSM Pre-Washed Cotton Waffle"
    ],
    "careInstructions": [
      "Machine wash cold on gentle cycle",
      "Tumble dry low or air dry in shade",
      "Warm iron if desired"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/rory-washed-cotton-blanket-levi-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 13000,
    "sourceCompareAtPrice": 16900,
    "demoPricePKR": 13000,
    "demoCompareAtPricePKR": 16900,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/RORY_LEVI_BLANKET_LEAD.jpg?v=1755139182",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/RORY_LEVI_BLANKET_LEAD.jpg?v=1755139182",
        "alt": "Rory Washed Cotton - Levi Stripe Blanket - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Rory Levi Stripe"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Throw (130x180cm)",
          "Bed Blanket (240x240cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Rory Levi Stripe"
        ]
      }
    ],
    "variants": [
      {
        "id": "rory-washed-cotton-blanket-levi-stripe-throw--130x180cm-",
        "sourceVariantId": null,
        "title": "Throw (130x180cm)",
        "sku": "MORFE-RORY-WASHE-1",
        "size": "Throw (130x180cm)",
        "colorOrPrint": "Rory Levi Stripe",
        "sourcePrice": 10000,
        "sourceCompareAtPrice": 16900,
        "demoPricePKR": 10000,
        "availability": "available"
      },
      {
        "id": "rory-washed-cotton-blanket-levi-stripe-bed-blanket--240x240cm-",
        "sourceVariantId": null,
        "title": "Bed Blanket (240x240cm)",
        "sku": "MORFE-RORY-WASHE-2",
        "size": "Bed Blanket (240x240cm)",
        "colorOrPrint": "Rory Levi Stripe",
        "sourcePrice": 13000,
        "sourceCompareAtPrice": 16900,
        "demoPricePKR": 13000,
        "availability": "available"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 83
  },
  {
    "id": "rory-washed-cotton-blanket-bay-blue",
    "handle": "rory-washed-cotton-blanket-bay-blue",
    "title": "Rory Washed Cotton - Bay Blue Blanket",
    "collectionName": "Rory Washed Cotton",
    "productType": "Blankets & Bed Covers",
    "colorOrPrint": "Rory Bay Blue",
    "colorGroup": "Rory Bay Blue",
    "fabric": "Rory Washed Cotton",
    "description": "Generously sized and stone-washed for immediate relaxed drape. The perfect transitional layer for year-round comfort across Queen and King beds.",
    "features": [
      "1x Tailored Bed Blanket"
    ],
    "materialDetails": [
      "Breathable waffle jacquard with self-fringed tailored borders",
      "380 GSM Pre-Washed Cotton Waffle"
    ],
    "careInstructions": [
      "Machine wash cold on gentle cycle",
      "Tumble dry low or air dry in shade",
      "Warm iron if desired"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/rory-washed-cotton-blanket-bay-blue",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 18500,
    "sourceCompareAtPrice": 24050,
    "demoPricePKR": 18500,
    "demoCompareAtPricePKR": 24050,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/RORY_BAY_BLUE_BLANKET_LEAD.jpg?v=1754957893",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/RORY_BAY_BLUE_BLANKET_LEAD.jpg?v=1754957893",
        "alt": "Rory Washed Cotton - Bay Blue Blanket - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Rory Bay Blue"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Throw (130x180cm)",
          "Bed Blanket (240x240cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Rory Bay Blue"
        ]
      }
    ],
    "variants": [
      {
        "id": "rory-washed-cotton-blanket-bay-blue-throw--130x180cm-",
        "sourceVariantId": null,
        "title": "Throw (130x180cm)",
        "sku": "MORFE-RORY-WASHE-1",
        "size": "Throw (130x180cm)",
        "colorOrPrint": "Rory Bay Blue",
        "sourcePrice": 15500,
        "sourceCompareAtPrice": 24050,
        "demoPricePKR": 15500,
        "availability": "available"
      },
      {
        "id": "rory-washed-cotton-blanket-bay-blue-bed-blanket--240x240cm-",
        "sourceVariantId": null,
        "title": "Bed Blanket (240x240cm)",
        "sku": "MORFE-RORY-WASHE-2",
        "size": "Bed Blanket (240x240cm)",
        "colorOrPrint": "Rory Bay Blue",
        "sourcePrice": 18500,
        "sourceCompareAtPrice": 24050,
        "demoPricePKR": 18500,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 79
  },
  {
    "id": "rory-washed-cotton-blanket-valerie-print",
    "handle": "rory-washed-cotton-blanket-valerie-print",
    "title": "Rory Washed Cotton - Valerie Blanket",
    "collectionName": "Rory Washed Cotton",
    "productType": "Blankets & Bed Covers",
    "colorOrPrint": "Rory Valerie Print",
    "colorGroup": "Rory Valerie Print",
    "fabric": "Rory Washed Cotton",
    "description": "Generously sized and stone-washed for immediate relaxed drape. The perfect transitional layer for year-round comfort across Queen and King beds.",
    "features": [
      "1x Tailored Bed Blanket"
    ],
    "materialDetails": [
      "Breathable waffle jacquard with self-fringed tailored borders",
      "380 GSM Pre-Washed Cotton Waffle"
    ],
    "careInstructions": [
      "Machine wash cold on gentle cycle",
      "Tumble dry low or air dry in shade",
      "Warm iron if desired"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/rory-washed-cotton-blanket-valerie-print",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 16000,
    "sourceCompareAtPrice": 20800,
    "demoPricePKR": 16000,
    "demoCompareAtPricePKR": 20800,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/RORY_VALERIE_BLANKET_SHOPIFY.jpg?v=1764558886",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/RORY_VALERIE_BLANKET_SHOPIFY.jpg?v=1764558886",
        "alt": "Rory Washed Cotton - Valerie Blanket - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Rory Valerie Print"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Throw (130x180cm)",
          "Bed Blanket (240x240cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Rory Valerie Print"
        ]
      }
    ],
    "variants": [
      {
        "id": "rory-washed-cotton-blanket-valerie-print-throw--130x180cm-",
        "sourceVariantId": null,
        "title": "Throw (130x180cm)",
        "sku": "MORFE-RORY-WASHE-1",
        "size": "Throw (130x180cm)",
        "colorOrPrint": "Rory Valerie Print",
        "sourcePrice": 13000,
        "sourceCompareAtPrice": 20800,
        "demoPricePKR": 13000,
        "availability": "available"
      },
      {
        "id": "rory-washed-cotton-blanket-valerie-print-bed-blanket--240x240cm-",
        "sourceVariantId": null,
        "title": "Bed Blanket (240x240cm)",
        "sku": "MORFE-RORY-WASHE-2",
        "size": "Bed Blanket (240x240cm)",
        "colorOrPrint": "Rory Valerie Print",
        "sourcePrice": 16000,
        "sourceCompareAtPrice": 20800,
        "demoPricePKR": 16000,
        "availability": "available"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 32
  },
  {
    "id": "flannelette-blanket-tilly",
    "handle": "flannelette-blanket-tilly",
    "title": "Frankie Flannelette - Tilly Blanket",
    "collectionName": "Frankie Flannelette",
    "productType": "Blankets & Bed Covers",
    "colorOrPrint": "Tilly",
    "colorGroup": "Tilly",
    "fabric": "Frankie Flannelette",
    "description": "Generously sized and stone-washed for immediate relaxed drape. The perfect transitional layer for year-round comfort across Queen and King beds.",
    "features": [
      "1x Tailored Bed Blanket"
    ],
    "materialDetails": [
      "Breathable waffle jacquard with self-fringed tailored borders",
      "380 GSM Pre-Washed Cotton Waffle"
    ],
    "careInstructions": [
      "Machine wash cold on gentle cycle",
      "Tumble dry low or air dry in shade",
      "Warm iron if desired"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/flannelette-blanket-tilly",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 12500,
    "sourceCompareAtPrice": 16250,
    "demoPricePKR": 12500,
    "demoCompareAtPricePKR": 16250,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/FRANKIE_TILLY_BLANKET.jpg?v=1774394122",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/FRANKIE_TILLY_BLANKET.jpg?v=1774394122",
        "alt": "Frankie Flannelette - Tilly Blanket - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Tilly"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Throw (130x180cm)",
          "Bed Blanket (240x240cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Tilly"
        ]
      }
    ],
    "variants": [
      {
        "id": "flannelette-blanket-tilly-throw--130x180cm-",
        "sourceVariantId": null,
        "title": "Throw (130x180cm)",
        "sku": "MORFE-FLANNELETT-1",
        "size": "Throw (130x180cm)",
        "colorOrPrint": "Tilly",
        "sourcePrice": 9500,
        "sourceCompareAtPrice": 16250,
        "demoPricePKR": 9500,
        "availability": "available"
      },
      {
        "id": "flannelette-blanket-tilly-bed-blanket--240x240cm-",
        "sourceVariantId": null,
        "title": "Bed Blanket (240x240cm)",
        "sku": "MORFE-FLANNELETT-2",
        "size": "Bed Blanket (240x240cm)",
        "colorOrPrint": "Tilly",
        "sourcePrice": 12500,
        "sourceCompareAtPrice": 16250,
        "demoPricePKR": 12500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 34
  },
  {
    "id": "wool-blanket-peaches-gingham",
    "handle": "wool-blanket-peaches-gingham",
    "title": "Morgan Wool - Peaches Gingham Blanket",
    "collectionName": "Wonder Wool",
    "productType": "Blankets & Bed Covers",
    "colorOrPrint": "Peaches Gingham",
    "colorGroup": "Peaches Gingham",
    "fabric": "Wonder Wool",
    "description": "Generously sized and stone-washed for immediate relaxed drape. The perfect transitional layer for year-round comfort across Queen and King beds.",
    "features": [
      "1x Tailored Bed Blanket"
    ],
    "materialDetails": [
      "Breathable waffle jacquard with self-fringed tailored borders",
      "380 GSM Pre-Washed Cotton Waffle"
    ],
    "careInstructions": [
      "Machine wash cold on gentle cycle",
      "Tumble dry low or air dry in shade",
      "Warm iron if desired"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/wool-blanket-peaches-gingham",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 32000,
    "sourceCompareAtPrice": 41600,
    "demoPricePKR": 32000,
    "demoCompareAtPricePKR": 41600,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/MORGAN_WOOL_PEACHES_BLANKET.jpg?v=1774394126",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/MORGAN_WOOL_PEACHES_BLANKET.jpg?v=1774394126",
        "alt": "Morgan Wool - Peaches Gingham Blanket - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Peaches Gingham"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Throw (130x180cm)",
          "Bed Blanket (240x240cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Peaches Gingham"
        ]
      }
    ],
    "variants": [
      {
        "id": "wool-blanket-peaches-gingham-throw--130x180cm-",
        "sourceVariantId": null,
        "title": "Throw (130x180cm)",
        "sku": "MORFE-WOOL-BLANK-1",
        "size": "Throw (130x180cm)",
        "colorOrPrint": "Peaches Gingham",
        "sourcePrice": 29000,
        "sourceCompareAtPrice": 41600,
        "demoPricePKR": 29000,
        "availability": "available"
      },
      {
        "id": "wool-blanket-peaches-gingham-bed-blanket--240x240cm-",
        "sourceVariantId": null,
        "title": "Bed Blanket (240x240cm)",
        "sku": "MORFE-WOOL-BLANK-2",
        "size": "Bed Blanket (240x240cm)",
        "colorOrPrint": "Peaches Gingham",
        "sourcePrice": 32000,
        "sourceCompareAtPrice": 41600,
        "demoPricePKR": 32000,
        "availability": "available"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 44
  },
  {
    "id": "rory-washed-cotton-blanket-harper-polka-dot",
    "handle": "rory-washed-cotton-blanket-harper-polka-dot",
    "title": "Rory Washed Cotton - Harper Polka Dot Blanket",
    "collectionName": "Rory Washed Cotton",
    "productType": "Blankets & Bed Covers",
    "colorOrPrint": "Rory Harper Polka Dot",
    "colorGroup": "Rory Harper Polka Dot",
    "fabric": "Rory Washed Cotton",
    "description": "Generously sized and stone-washed for immediate relaxed drape. The perfect transitional layer for year-round comfort across Queen and King beds.",
    "features": [
      "1x Tailored Bed Blanket"
    ],
    "materialDetails": [
      "Breathable waffle jacquard with self-fringed tailored borders",
      "380 GSM Pre-Washed Cotton Waffle"
    ],
    "careInstructions": [
      "Machine wash cold on gentle cycle",
      "Tumble dry low or air dry in shade",
      "Warm iron if desired"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/rory-washed-cotton-blanket-harper-polka-dot",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 18500,
    "sourceCompareAtPrice": 24050,
    "demoPricePKR": 18500,
    "demoCompareAtPricePKR": 24050,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Rory_Harper_Polkadot_Blanket_Lead.jpg?v=1768446691",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Rory_Harper_Polkadot_Blanket_Lead.jpg?v=1768446691",
        "alt": "Rory Washed Cotton - Harper Polka Dot Blanket - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Rory Harper Polka Dot"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Throw (130x180cm)",
          "Bed Blanket (240x240cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Rory Harper Polka Dot"
        ]
      }
    ],
    "variants": [
      {
        "id": "rory-washed-cotton-blanket-harper-polka-dot-throw--130x180cm-",
        "sourceVariantId": null,
        "title": "Throw (130x180cm)",
        "sku": "MORFE-RORY-WASHE-1",
        "size": "Throw (130x180cm)",
        "colorOrPrint": "Rory Harper Polka Dot",
        "sourcePrice": 15500,
        "sourceCompareAtPrice": 24050,
        "demoPricePKR": 15500,
        "availability": "available"
      },
      {
        "id": "rory-washed-cotton-blanket-harper-polka-dot-bed-blanket--240x240cm-",
        "sourceVariantId": null,
        "title": "Bed Blanket (240x240cm)",
        "sku": "MORFE-RORY-WASHE-2",
        "size": "Bed Blanket (240x240cm)",
        "colorOrPrint": "Rory Harper Polka Dot",
        "sourcePrice": 18500,
        "sourceCompareAtPrice": 24050,
        "demoPricePKR": 18500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 63
  },
  {
    "id": "wool-blanket-teddy-gingham",
    "handle": "wool-blanket-teddy-gingham",
    "title": "Morgan Wool - Teddy Blanket",
    "collectionName": "Wonder Wool",
    "productType": "Blankets & Bed Covers",
    "colorOrPrint": "Teddy Gingham",
    "colorGroup": "Teddy Gingham",
    "fabric": "Wonder Wool",
    "description": "Generously sized and stone-washed for immediate relaxed drape. The perfect transitional layer for year-round comfort across Queen and King beds.",
    "features": [
      "1x Tailored Bed Blanket"
    ],
    "materialDetails": [
      "Breathable waffle jacquard with self-fringed tailored borders",
      "380 GSM Pre-Washed Cotton Waffle"
    ],
    "careInstructions": [
      "Machine wash cold on gentle cycle",
      "Tumble dry low or air dry in shade",
      "Warm iron if desired"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/wool-blanket-teddy-gingham",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 27500,
    "sourceCompareAtPrice": 35750,
    "demoPricePKR": 27500,
    "demoCompareAtPricePKR": 35750,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/MORGAN_WOOL_TEDDY_BLANKET.jpg?v=1774583909",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/MORGAN_WOOL_TEDDY_BLANKET.jpg?v=1774583909",
        "alt": "Morgan Wool - Teddy Blanket - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Teddy Gingham"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Throw (130x180cm)",
          "Bed Blanket (240x240cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Teddy Gingham"
        ]
      }
    ],
    "variants": [
      {
        "id": "wool-blanket-teddy-gingham-throw--130x180cm-",
        "sourceVariantId": null,
        "title": "Throw (130x180cm)",
        "sku": "MORFE-WOOL-BLANK-1",
        "size": "Throw (130x180cm)",
        "colorOrPrint": "Teddy Gingham",
        "sourcePrice": 24500,
        "sourceCompareAtPrice": 35750,
        "demoPricePKR": 24500,
        "availability": "available"
      },
      {
        "id": "wool-blanket-teddy-gingham-bed-blanket--240x240cm-",
        "sourceVariantId": null,
        "title": "Bed Blanket (240x240cm)",
        "sku": "MORFE-WOOL-BLANK-2",
        "size": "Bed Blanket (240x240cm)",
        "colorOrPrint": "Teddy Gingham",
        "sourcePrice": 27500,
        "sourceCompareAtPrice": 35750,
        "demoPricePKR": 27500,
        "availability": "available"
      }
    ],
    "rating": 4.7,
    "reviewsCount": 49
  },
  {
    "id": "cotton-bath-sheet-warm-white",
    "handle": "cotton-bath-sheet-warm-white",
    "title": "Tommy Cotton - Warm White Bath Sheet",
    "collectionName": "Tommy 600 GSM Cotton",
    "productType": "Bath & Towels",
    "colorOrPrint": "Neutral",
    "colorGroup": "Neutral",
    "fabric": "Tommy 600 GSM Cotton",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest tommy 600 gsm cotton to elevate your daily sanctuary.",
    "features": [
      "Tommy Cotton - Warm White Bath Sheet"
    ],
    "materialDetails": [
      "600 GSM zero-twist combed Turkish cotton",
      "600 GSM Combed Cotton"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cotton-bath-sheet-warm-white",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8750,
    "sourceCompareAtPrice": 10938,
    "demoPricePKR": 8750,
    "demoCompareAtPricePKR": 10938,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Warm_White_Bath_Sheet_1080x.jpg?v=1787103471",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Warm_White_Bath_Sheet_1080x.jpg?v=1787103471",
        "alt": "Tommy Cotton - Warm White Bath Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Neutral"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Warm_White_Detail_1080x.jpg?v=1787103462",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Warm_White_Detail_1080x.jpg?v=1787103462",
        "alt": "Tommy Cotton - Warm White Bath Sheet - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Neutral"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Sheet_Warm_White_Texture_1080x.jpg?v=1726194205",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Sheet_Warm_White_Texture_1080x.jpg?v=1726194205",
        "alt": "Tommy Cotton - Warm White Bath Sheet - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Neutral"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Sheet_Mustard_Styled_1080x.jpg?v=1726194463",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Sheet_Mustard_Styled_1080x.jpg?v=1726194463",
        "alt": "Tommy Cotton - Warm White Bath Sheet - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Neutral"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Sheet_Warm_White_Styled_1080x.jpg?v=1726194196",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Sheet_Warm_White_Styled_1080x.jpg?v=1726194196",
        "alt": "Tommy Cotton - Warm White Bath Sheet - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Neutral"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Warm_White_Bath_Stack_1080x.jpg?v=1726194208",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Warm_White_Bath_Stack_1080x.jpg?v=1726194208",
        "alt": "Tommy Cotton - Warm White Bath Sheet - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Neutral"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Set_Warm_White_Styled_1080x.jpg?v=1726194207",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Set_Warm_White_Styled_1080x.jpg?v=1726194207",
        "alt": "Tommy Cotton - Warm White Bath Sheet - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Neutral"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Bath Sheet (90x165cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Neutral"
        ]
      }
    ],
    "variants": [
      {
        "id": "cotton-bath-sheet-warm-white-bath-sheet--90x165cm-",
        "sourceVariantId": null,
        "title": "Bath Sheet (90x165cm)",
        "sku": "MORFE-COTTON-BAT-1",
        "size": "Bath Sheet (90x165cm)",
        "colorOrPrint": "Neutral",
        "sourcePrice": 8750,
        "sourceCompareAtPrice": 10938,
        "demoPricePKR": 8750,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 81
  },
  {
    "id": "cotton-bath-sheet-jimmy-stripe",
    "handle": "cotton-bath-sheet-jimmy-stripe",
    "title": "Tommy Cotton - Jimmy Stripe Bath Sheet",
    "collectionName": "Tommy 600 GSM Cotton",
    "productType": "Bath & Towels",
    "colorOrPrint": "Blue",
    "colorGroup": "Blue",
    "fabric": "Tommy 600 GSM Cotton",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest tommy 600 gsm cotton to elevate your daily sanctuary.",
    "features": [
      "Tommy Cotton - Jimmy Stripe Bath Sheet"
    ],
    "materialDetails": [
      "600 GSM zero-twist combed Turkish cotton",
      "600 GSM Combed Cotton"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cotton-bath-sheet-jimmy-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 7500,
    "sourceCompareAtPrice": 9375,
    "demoPricePKR": 7500,
    "demoCompareAtPricePKR": 9375,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/TOMMY_JIMMY_STRIPE_BATH_SHEET_BACK_1080x.jpg?v=1774583802",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/TOMMY_JIMMY_STRIPE_BATH_SHEET_BACK_1080x.jpg?v=1774583802",
        "alt": "Tommy Cotton - Jimmy Stripe Bath Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/TOMMY_JIMMY_STRIPE_BATH_SHEET_5162d639-64f8-49a3-b966-a654cd4144d4_1080x.jpg?v=1774583802",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/TOMMY_JIMMY_STRIPE_BATH_SHEET_5162d639-64f8-49a3-b966-a654cd4144d4_1080x.jpg?v=1774583802",
        "alt": "Tommy Cotton - Jimmy Stripe Bath Sheet - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/TOMMY_JIMMY_STRIPE_LOOP_DETAIL_1080x.jpg?v=1774583802",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/TOMMY_JIMMY_STRIPE_LOOP_DETAIL_1080x.jpg?v=1774583802",
        "alt": "Tommy Cotton - Jimmy Stripe Bath Sheet - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/TOMMY_JIMMY_STRIPE_BATH_STACK_d12647ad-b66a-429e-b6e6-ce0ce5506032_1080x.jpg?v=1774583801",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/TOMMY_JIMMY_STRIPE_BATH_STACK_d12647ad-b66a-429e-b6e6-ce0ce5506032_1080x.jpg?v=1774583801",
        "alt": "Tommy Cotton - Jimmy Stripe Bath Sheet - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/TOMMY_JIMMY_STRIPE_TEXTURE_1080x.jpg?v=1774583802",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/TOMMY_JIMMY_STRIPE_TEXTURE_1080x.jpg?v=1774583802",
        "alt": "Tommy Cotton - Jimmy Stripe Bath Sheet - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Blue"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Bath Sheet (90x165cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Blue"
        ]
      }
    ],
    "variants": [
      {
        "id": "cotton-bath-sheet-jimmy-stripe-bath-sheet--90x165cm-",
        "sourceVariantId": null,
        "title": "Bath Sheet (90x165cm)",
        "sku": "MORFE-COTTON-BAT-1",
        "size": "Bath Sheet (90x165cm)",
        "colorOrPrint": "Blue",
        "sourcePrice": 7500,
        "sourceCompareAtPrice": 9375,
        "demoPricePKR": 7500,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 88
  },
  {
    "id": "cotton-bath-sheet-bambi-stripe",
    "handle": "cotton-bath-sheet-bambi-stripe",
    "title": "Tommy Cotton - Bambi Stripe Bath Sheet",
    "collectionName": "Tommy 600 GSM Cotton",
    "productType": "Bath & Towels",
    "colorOrPrint": "Pink",
    "colorGroup": "Pink",
    "fabric": "Tommy 600 GSM Cotton",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest tommy 600 gsm cotton to elevate your daily sanctuary.",
    "features": [
      "Tommy Cotton - Bambi Stripe Bath Sheet"
    ],
    "materialDetails": [
      "600 GSM zero-twist combed Turkish cotton",
      "600 GSM Combed Cotton"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cotton-bath-sheet-bambi-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 10000,
    "sourceCompareAtPrice": 12500,
    "demoPricePKR": 10000,
    "demoCompareAtPricePKR": 12500,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bambi_Bath_Sheet_1080x.jpg?v=1786686828",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bambi_Bath_Sheet_1080x.jpg?v=1786686828",
        "alt": "Tommy Cotton - Bambi Stripe Bath Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Pink"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bambi_Detail_1080x.jpg?v=1786686827",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bambi_Detail_1080x.jpg?v=1786686827",
        "alt": "Tommy Cotton - Bambi Stripe Bath Sheet - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Pink"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bambi_Stripe_Styled_1080x.jpg?v=1738275277",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bambi_Stripe_Styled_1080x.jpg?v=1738275277",
        "alt": "Tommy Cotton - Bambi Stripe Bath Sheet - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Pink"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bambi_Stripe_Bath_Sheet_1080x.jpg?v=1738275277",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bambi_Stripe_Bath_Sheet_1080x.jpg?v=1738275277",
        "alt": "Tommy Cotton - Bambi Stripe Bath Sheet - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Pink"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bambi_Stripe_Bath_Sheet_2_1080x.jpg?v=1738275277",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bambi_Stripe_Bath_Sheet_2_1080x.jpg?v=1738275277",
        "alt": "Tommy Cotton - Bambi Stripe Bath Sheet - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Pink"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bambi_Stripe_Styled_Set_1080x.jpg?v=1738275276",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bambi_Stripe_Styled_Set_1080x.jpg?v=1738275276",
        "alt": "Tommy Cotton - Bambi Stripe Bath Sheet - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Pink"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bambi_Stripe_Texture_V2_1080x.jpg?v=1738275277",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bambi_Stripe_Texture_V2_1080x.jpg?v=1738275277",
        "alt": "Tommy Cotton - Bambi Stripe Bath Sheet - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Pink"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bambi_Stripe_Bath_Set_V2_1080x.jpg?v=1738275276",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bambi_Stripe_Bath_Set_V2_1080x.jpg?v=1738275276",
        "alt": "Tommy Cotton - Bambi Stripe Bath Sheet - View 8",
        "role": "gallery",
        "position": 8,
        "colorOrPrint": "Pink"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Bath Sheet (90x165cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Pink"
        ]
      }
    ],
    "variants": [
      {
        "id": "cotton-bath-sheet-bambi-stripe-bath-sheet--90x165cm-",
        "sourceVariantId": null,
        "title": "Bath Sheet (90x165cm)",
        "sku": "MORFE-COTTON-BAT-1",
        "size": "Bath Sheet (90x165cm)",
        "colorOrPrint": "Pink",
        "sourcePrice": 10000,
        "sourceCompareAtPrice": 12500,
        "demoPricePKR": 10000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 97
  },
  {
    "id": "cotton-towels-sage",
    "handle": "cotton-towels-sage",
    "title": "Tommy Cotton - Sage Towels",
    "collectionName": "Tommy 600 GSM Cotton",
    "productType": "Bath & Towels",
    "colorOrPrint": "Green",
    "colorGroup": "Green",
    "fabric": "Tommy 600 GSM Cotton",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest tommy 600 gsm cotton to elevate your daily sanctuary.",
    "features": [
      "Tommy Cotton - Sage Towels"
    ],
    "materialDetails": [
      "600 GSM zero-twist combed Turkish cotton",
      "600 GSM Combed Cotton"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cotton-towels-sage",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 3750,
    "sourceCompareAtPrice": 4688,
    "demoPricePKR": 3750,
    "demoCompareAtPricePKR": 4688,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Sage_Bath_Stack_1080x.jpg?v=1726193640",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Sage_Bath_Stack_1080x.jpg?v=1726193640",
        "alt": "Tommy Cotton - Sage Towels - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Green"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Sage_Bath_Sheet_1080x.jpg?v=1787103476",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Sage_Bath_Sheet_1080x.jpg?v=1787103476",
        "alt": "Tommy Cotton - Sage Towels - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Green"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Sage_Hand_Towel_1080x.jpg?v=1787103471",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Sage_Hand_Towel_1080x.jpg?v=1787103471",
        "alt": "Tommy Cotton - Sage Towels - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Green"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Sage_Detail_1080x.jpg?v=1787103471",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Sage_Detail_1080x.jpg?v=1787103471",
        "alt": "Tommy Cotton - Sage Towels - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Green"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Hand_Towel_Sage_Styled_1080x.jpg?v=1726193639",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Hand_Towel_Sage_Styled_1080x.jpg?v=1726193639",
        "alt": "Tommy Cotton - Sage Towels - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Green"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Face_Towel_Sage_1080x.jpg?v=1726193628",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Face_Towel_Sage_1080x.jpg?v=1726193628",
        "alt": "Tommy Cotton - Sage Towels - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Green"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/TOMMY_SAGE_BATHMAT_1080x.jpg?v=1787103478",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/TOMMY_SAGE_BATHMAT_1080x.jpg?v=1787103478",
        "alt": "Tommy Cotton - Sage Towels - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Green"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Sheet_Sage_Texture_1080x.jpg?v=1726193640",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Sheet_Sage_Texture_1080x.jpg?v=1726193640",
        "alt": "Tommy Cotton - Sage Towels - View 8",
        "role": "gallery",
        "position": 8,
        "colorOrPrint": "Green"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Set_Sage_1080x.jpg?v=1726193638",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Set_Sage_1080x.jpg?v=1726193638",
        "alt": "Tommy Cotton - Sage Towels - View 9",
        "role": "gallery",
        "position": 9,
        "colorOrPrint": "Green"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Mat_Sage_Styled_1080x.jpg?v=1726193634",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Mat_Sage_Styled_1080x.jpg?v=1726193634",
        "alt": "Tommy Cotton - Sage Towels - View 10",
        "role": "gallery",
        "position": 10,
        "colorOrPrint": "Green"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Sheet_Sage_Styled_1080x.jpg?v=1726193631",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Sheet_Sage_Styled_1080x.jpg?v=1726193631",
        "alt": "Tommy Cotton - Sage Towels - View 11",
        "role": "gallery",
        "position": 11,
        "colorOrPrint": "Green"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "4-Piece Set",
          "6-Piece Luxury Suite"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Green"
        ]
      }
    ],
    "variants": [
      {
        "id": "cotton-towels-sage-4-piece-set",
        "sourceVariantId": null,
        "title": "4-Piece Set",
        "sku": "MORFE-COTTON-TOW-1",
        "size": "4-Piece Set",
        "colorOrPrint": "Green",
        "sourcePrice": 3750,
        "sourceCompareAtPrice": 4688,
        "demoPricePKR": 3750,
        "availability": "available"
      },
      {
        "id": "cotton-towels-sage-6-piece-luxury-suite",
        "sourceVariantId": null,
        "title": "6-Piece Luxury Suite",
        "sku": "MORFE-COTTON-TOW-2",
        "size": "6-Piece Luxury Suite",
        "colorOrPrint": "Green",
        "sourcePrice": 9750,
        "sourceCompareAtPrice": 4688,
        "demoPricePKR": 9750,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 60
  },
  {
    "id": "cotton-bath-mat-charcoal",
    "handle": "cotton-bath-mat-charcoal",
    "title": "Tommy Cotton - Charcoal Bath Mat",
    "collectionName": "Tommy 600 GSM Cotton",
    "productType": "Bath & Towels",
    "colorOrPrint": "Black",
    "colorGroup": "Black",
    "fabric": "Tommy 600 GSM Cotton",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest tommy 600 gsm cotton to elevate your daily sanctuary.",
    "features": [
      "Tommy Cotton - Charcoal Bath Mat"
    ],
    "materialDetails": [
      "600 GSM zero-twist combed Turkish cotton",
      "600 GSM Combed Cotton"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cotton-bath-mat-charcoal",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 5500,
    "sourceCompareAtPrice": 6875,
    "demoPricePKR": 5500,
    "demoCompareAtPricePKR": 6875,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/TOMMY_CHARCOAL_BATHMAT_1080x.jpg?v=1787103478",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/TOMMY_CHARCOAL_BATHMAT_1080x.jpg?v=1787103478",
        "alt": "Tommy Cotton - Charcoal Bath Mat - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Black"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Sheet_Charcoal_Texture_1080x.jpg?v=1726191161",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Sheet_Charcoal_Texture_1080x.jpg?v=1726191161",
        "alt": "Tommy Cotton - Charcoal Bath Mat - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Black"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Mat_Charcoal_Styled_02_1080x.jpg?v=1726191166",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Mat_Charcoal_Styled_02_1080x.jpg?v=1726191166",
        "alt": "Tommy Cotton - Charcoal Bath Mat - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Black"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Mat_Charcoal_Styled_1080x.jpg?v=1726191184",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Mat_Charcoal_Styled_1080x.jpg?v=1726191184",
        "alt": "Tommy Cotton - Charcoal Bath Mat - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Black"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Charcoal_Bath_Stack_1080x.jpg?v=1726191212",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Charcoal_Bath_Stack_1080x.jpg?v=1726191212",
        "alt": "Tommy Cotton - Charcoal Bath Mat - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Black"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Set_Charcoal_Styled_1080x.jpg?v=1726191212",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Set_Charcoal_Styled_1080x.jpg?v=1726191212",
        "alt": "Tommy Cotton - Charcoal Bath Mat - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Black"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Bath Mat (50x80cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Black"
        ]
      }
    ],
    "variants": [
      {
        "id": "cotton-bath-mat-charcoal-bath-mat--50x80cm-",
        "sourceVariantId": null,
        "title": "Bath Mat (50x80cm)",
        "sku": "MORFE-COTTON-BAT-1",
        "size": "Bath Mat (50x80cm)",
        "colorOrPrint": "Black",
        "sourcePrice": 5500,
        "sourceCompareAtPrice": 6875,
        "demoPricePKR": 5500,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 79
  },
  {
    "id": "cotton-towels-biscuit",
    "handle": "cotton-towels-biscuit",
    "title": "Tommy Cotton - Biscuit Towels",
    "collectionName": "Tommy 600 GSM Cotton",
    "productType": "Bath & Towels",
    "colorOrPrint": "Brown",
    "colorGroup": "Brown",
    "fabric": "Tommy 600 GSM Cotton",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest tommy 600 gsm cotton to elevate your daily sanctuary.",
    "features": [
      "Tommy Cotton - Biscuit Towels"
    ],
    "materialDetails": [
      "600 GSM zero-twist combed Turkish cotton",
      "600 GSM Combed Cotton"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cotton-towels-biscuit",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 3750,
    "sourceCompareAtPrice": 4688,
    "demoPricePKR": 3750,
    "demoCompareAtPricePKR": 4688,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Biscuit_Bath_Stack_232d2d92-7a64-4c45-bcdb-ea4f8f31df44_1080x.jpg?v=1726190100",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Biscuit_Bath_Stack_232d2d92-7a64-4c45-bcdb-ea4f8f31df44_1080x.jpg?v=1726190100",
        "alt": "Tommy Cotton - Biscuit Towels - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Biscuit_Bath_Sheet_1080x.jpg?v=1786687247",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Biscuit_Bath_Sheet_1080x.jpg?v=1786687247",
        "alt": "Tommy Cotton - Biscuit Towels - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Biscuit_Detail_1080x.jpg?v=1786687292",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Biscuit_Detail_1080x.jpg?v=1786687292",
        "alt": "Tommy Cotton - Biscuit Towels - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Biscuit_Hand_Towel_1080x.jpg?v=1786687246",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Biscuit_Hand_Towel_1080x.jpg?v=1786687246",
        "alt": "Tommy Cotton - Biscuit Towels - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Hand_Towel_Biscuit_Styled_1080x.jpg?v=1726190067",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Hand_Towel_Biscuit_Styled_1080x.jpg?v=1726190067",
        "alt": "Tommy Cotton - Biscuit Towels - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Face_Towel_Biscuit_1080x.jpg?v=1726122629",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Face_Towel_Biscuit_1080x.jpg?v=1726122629",
        "alt": "Tommy Cotton - Biscuit Towels - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/TOMMY_BISCUIT_BATHMAT_1080x.jpg?v=1786687247",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/TOMMY_BISCUIT_BATHMAT_1080x.jpg?v=1786687247",
        "alt": "Tommy Cotton - Biscuit Towels - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Set_Biscuit_Styled_f0edf365-2f6e-460e-92df-83dea7411481_1080x.jpg?v=1726190108",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Set_Biscuit_Styled_f0edf365-2f6e-460e-92df-83dea7411481_1080x.jpg?v=1726190108",
        "alt": "Tommy Cotton - Biscuit Towels - View 8",
        "role": "gallery",
        "position": 8,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Mat_Biscuit_Texture_0e2dbbbc-cb83-440e-ae20-e677d3d7695d_1080x.jpg?v=1726190058",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Mat_Biscuit_Texture_0e2dbbbc-cb83-440e-ae20-e677d3d7695d_1080x.jpg?v=1726190058",
        "alt": "Tommy Cotton - Biscuit Towels - View 9",
        "role": "gallery",
        "position": 9,
        "colorOrPrint": "Brown"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Sheet_Biscuit_Styled_1080x.jpg?v=1726122541",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Tommy_Bath_Sheet_Biscuit_Styled_1080x.jpg?v=1726122541",
        "alt": "Tommy Cotton - Biscuit Towels - View 10",
        "role": "gallery",
        "position": 10,
        "colorOrPrint": "Brown"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "4-Piece Set",
          "6-Piece Luxury Suite"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Brown"
        ]
      }
    ],
    "variants": [
      {
        "id": "cotton-towels-biscuit-4-piece-set",
        "sourceVariantId": null,
        "title": "4-Piece Set",
        "sku": "MORFE-COTTON-TOW-1",
        "size": "4-Piece Set",
        "colorOrPrint": "Brown",
        "sourcePrice": 3750,
        "sourceCompareAtPrice": 4688,
        "demoPricePKR": 3750,
        "availability": "available"
      },
      {
        "id": "cotton-towels-biscuit-6-piece-luxury-suite",
        "sourceVariantId": null,
        "title": "6-Piece Luxury Suite",
        "sku": "MORFE-COTTON-TOW-2",
        "size": "6-Piece Luxury Suite",
        "colorOrPrint": "Brown",
        "sourcePrice": 9750,
        "sourceCompareAtPrice": 4688,
        "demoPricePKR": 9750,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 56
  },
  {
    "id": "cloudknit-jersey-riley-pant-cloud-grey",
    "handle": "cloudknit-jersey-riley-pant-cloud-grey",
    "title": "Cloud Grey - Jersey Riley Pant",
    "collectionName": "Cloudknit Jersey",
    "productType": "Sleepwear",
    "colorOrPrint": "Cloud-grey",
    "colorGroup": "Cloud-grey",
    "fabric": "Cloudknit Jersey",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest cloudknit jersey to elevate your daily sanctuary.",
    "features": [
      "Cloud Grey - Jersey Riley Pant"
    ],
    "materialDetails": [
      "Ultra-fine rib-knit stretch jersey",
      "220 GSM Breathable Modal Jersey"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cloudknit-jersey-riley-pant-cloud-grey",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 14500,
    "sourceCompareAtPrice": 18125,
    "demoPricePKR": 14500,
    "demoCompareAtPricePKR": 18125,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/01_JERSEY_CLOUD_RILEY_PANT_1080x.jpg?v=1764816743",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/01_JERSEY_CLOUD_RILEY_PANT_1080x.jpg?v=1764816743",
        "alt": "Cloud Grey - Jersey Riley Pant - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Cloud-grey"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/PDP-IMAGES_STYLING-SUITE_1600x2000px_09_1080x.jpg?v=1771815351",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/PDP-IMAGES_STYLING-SUITE_1600x2000px_09_1080x.jpg?v=1771815351",
        "alt": "Cloud Grey - Jersey Riley Pant - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Cloud-grey"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/02_JERSEY_CLOUD_RILEY_PANT_1080x.jpg?v=1764816743",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/02_JERSEY_CLOUD_RILEY_PANT_1080x.jpg?v=1764816743",
        "alt": "Cloud Grey - Jersey Riley Pant - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Cloud-grey"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/03_JERSEY_CLOUD_RILEY_PANT_1080x.jpg?v=1764816743",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/03_JERSEY_CLOUD_RILEY_PANT_1080x.jpg?v=1764816743",
        "alt": "Cloud Grey - Jersey Riley Pant - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Cloud-grey"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/04_JERSEY_CLOUD_RILEY_PANT_1080x.jpg?v=1764816743",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/04_JERSEY_CLOUD_RILEY_PANT_1080x.jpg?v=1764816743",
        "alt": "Cloud Grey - Jersey Riley Pant - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Cloud-grey"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/UGC_1600x2000px_fe4bb97f-6fc4-4530-8709-f609ab5a81af_1080x.jpg?v=1782958020",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/UGC_1600x2000px_fe4bb97f-6fc4-4530-8709-f609ab5a81af_1080x.jpg?v=1782958020",
        "alt": "Cloud Grey - Jersey Riley Pant - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Cloud-grey"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/GHOST_JERSEY_CLOUD_RILEY_PANT_1080x.jpg?v=1771815351",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/GHOST_JERSEY_CLOUD_RILEY_PANT_1080x.jpg?v=1771815351",
        "alt": "Cloud Grey - Jersey Riley Pant - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Cloud-grey"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Cloud-grey"
        ]
      }
    ],
    "variants": [
      {
        "id": "cloudknit-jersey-riley-pant-cloud-grey-xs",
        "sourceVariantId": null,
        "title": "XS",
        "sku": "MORFE-CLOUDKNIT--1",
        "size": "XS",
        "colorOrPrint": "Cloud-grey",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-pant-cloud-grey-s",
        "sourceVariantId": null,
        "title": "S",
        "sku": "MORFE-CLOUDKNIT--2",
        "size": "S",
        "colorOrPrint": "Cloud-grey",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-pant-cloud-grey-m",
        "sourceVariantId": null,
        "title": "M",
        "sku": "MORFE-CLOUDKNIT--3",
        "size": "M",
        "colorOrPrint": "Cloud-grey",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-pant-cloud-grey-l",
        "sourceVariantId": null,
        "title": "L",
        "sku": "MORFE-CLOUDKNIT--4",
        "size": "L",
        "colorOrPrint": "Cloud-grey",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-pant-cloud-grey-xl",
        "sourceVariantId": null,
        "title": "XL",
        "sku": "MORFE-CLOUDKNIT--5",
        "size": "XL",
        "colorOrPrint": "Cloud-grey",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 98
  },
  {
    "id": "cloudknit-jersey-riley-pant-burgundy",
    "handle": "cloudknit-jersey-riley-pant-burgundy",
    "title": "Burgundy - Jersey Riley Pant",
    "collectionName": "Cloudknit Jersey",
    "productType": "Sleepwear",
    "colorOrPrint": "Burgundy",
    "colorGroup": "Burgundy",
    "fabric": "Cloudknit Jersey",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest cloudknit jersey to elevate your daily sanctuary.",
    "features": [
      "Burgundy - Jersey Riley Pant"
    ],
    "materialDetails": [
      "Ultra-fine rib-knit stretch jersey",
      "220 GSM Breathable Modal Jersey"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cloudknit-jersey-riley-pant-burgundy",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 14500,
    "sourceCompareAtPrice": 18125,
    "demoPricePKR": 14500,
    "demoCompareAtPricePKR": 18125,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/01-JERSEY-BURGUNDY-RILEY-PANT_1080x.jpg?v=1772173520",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/01-JERSEY-BURGUNDY-RILEY-PANT_1080x.jpg?v=1772173520",
        "alt": "Burgundy - Jersey Riley Pant - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Burgundy"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/02-JERSEY-BURGUNDY-RILEY-PANT_1080x.jpg?v=1772173520",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/02-JERSEY-BURGUNDY-RILEY-PANT_1080x.jpg?v=1772173520",
        "alt": "Burgundy - Jersey Riley Pant - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Burgundy"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/03-JERSEY-BURGUNDY-RILEY-PANT_1080x.jpg?v=1772173520",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/03-JERSEY-BURGUNDY-RILEY-PANT_1080x.jpg?v=1772173520",
        "alt": "Burgundy - Jersey Riley Pant - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Burgundy"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/04-JERSEY-BURGUNDY-RILEY-PANT_1080x.jpg?v=1772173520",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/04-JERSEY-BURGUNDY-RILEY-PANT_1080x.jpg?v=1772173520",
        "alt": "Burgundy - Jersey Riley Pant - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Burgundy"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/05-JERSEY-BURGUNDY-RILEY-PANT_1080x.jpg?v=1772173520",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/05-JERSEY-BURGUNDY-RILEY-PANT_1080x.jpg?v=1772173520",
        "alt": "Burgundy - Jersey Riley Pant - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Burgundy"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/06-JERSEY-BURGUNDY-RILEY-PANT_1080x.jpg?v=1772173520",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/06-JERSEY-BURGUNDY-RILEY-PANT_1080x.jpg?v=1772173520",
        "alt": "Burgundy - Jersey Riley Pant - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Burgundy"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/07-JERSEY-BURGUNDY-RILEY-PANT_1080x.jpg?v=1772173520",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/07-JERSEY-BURGUNDY-RILEY-PANT_1080x.jpg?v=1772173520",
        "alt": "Burgundy - Jersey Riley Pant - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Burgundy"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Ghost_Jersey_Burgundy_Rylie-Pant_1080x.jpg?v=1772173520",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Ghost_Jersey_Burgundy_Rylie-Pant_1080x.jpg?v=1772173520",
        "alt": "Burgundy - Jersey Riley Pant - View 8",
        "role": "gallery",
        "position": 8,
        "colorOrPrint": "Burgundy"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Burgundy"
        ]
      }
    ],
    "variants": [
      {
        "id": "cloudknit-jersey-riley-pant-burgundy-xs",
        "sourceVariantId": null,
        "title": "XS",
        "sku": "MORFE-CLOUDKNIT--1",
        "size": "XS",
        "colorOrPrint": "Burgundy",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-pant-burgundy-s",
        "sourceVariantId": null,
        "title": "S",
        "sku": "MORFE-CLOUDKNIT--2",
        "size": "S",
        "colorOrPrint": "Burgundy",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-pant-burgundy-m",
        "sourceVariantId": null,
        "title": "M",
        "sku": "MORFE-CLOUDKNIT--3",
        "size": "M",
        "colorOrPrint": "Burgundy",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-pant-burgundy-l",
        "sourceVariantId": null,
        "title": "L",
        "sku": "MORFE-CLOUDKNIT--4",
        "size": "L",
        "colorOrPrint": "Burgundy",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-pant-burgundy-xl",
        "sourceVariantId": null,
        "title": "XL",
        "sku": "MORFE-CLOUDKNIT--5",
        "size": "XL",
        "colorOrPrint": "Burgundy",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 63
  },
  {
    "id": "cloudknit-jersey-riley-pant-camilla-stripe",
    "handle": "cloudknit-jersey-riley-pant-camilla-stripe",
    "title": "Camilla Stripe - Jersey Riley Pant",
    "collectionName": "Cloudknit Jersey",
    "productType": "Sleepwear",
    "colorOrPrint": "Camilla-stripe",
    "colorGroup": "Camilla-stripe",
    "fabric": "Cloudknit Jersey",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest cloudknit jersey to elevate your daily sanctuary.",
    "features": [
      "Camilla Stripe - Jersey Riley Pant"
    ],
    "materialDetails": [
      "Ultra-fine rib-knit stretch jersey",
      "220 GSM Breathable Modal Jersey"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cloudknit-jersey-riley-pant-camilla-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 14500,
    "sourceCompareAtPrice": 18125,
    "demoPricePKR": 14500,
    "demoCompareAtPricePKR": 18125,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/01-JERSEY-CAMILLA-RILEY-PANT_1080x.jpg?v=1773892032",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/01-JERSEY-CAMILLA-RILEY-PANT_1080x.jpg?v=1773892032",
        "alt": "Camilla Stripe - Jersey Riley Pant - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Camilla-stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/02-JERSEY-CAMILLA-RILEY-PANT_1080x.jpg?v=1773892032",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/02-JERSEY-CAMILLA-RILEY-PANT_1080x.jpg?v=1773892032",
        "alt": "Camilla Stripe - Jersey Riley Pant - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Camilla-stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/04-JERSEY-CAMILLA-RILEY-PANT_1080x.jpg?v=1773892032",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/04-JERSEY-CAMILLA-RILEY-PANT_1080x.jpg?v=1773892032",
        "alt": "Camilla Stripe - Jersey Riley Pant - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Camilla-stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/05-JERSEY-CAMILLA-RILEY-PANT_1080x.jpg?v=1773892032",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/05-JERSEY-CAMILLA-RILEY-PANT_1080x.jpg?v=1773892032",
        "alt": "Camilla Stripe - Jersey Riley Pant - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Camilla-stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/06-JERSEY-CAMILLA-RILEY-PANT_1080x.jpg?v=1773892032",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/06-JERSEY-CAMILLA-RILEY-PANT_1080x.jpg?v=1773892032",
        "alt": "Camilla Stripe - Jersey Riley Pant - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Camilla-stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/07-JERSEY-CAMILLA-RILEY-PANT_1080x.jpg?v=1773892032",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/07-JERSEY-CAMILLA-RILEY-PANT_1080x.jpg?v=1773892032",
        "alt": "Camilla Stripe - Jersey Riley Pant - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Camilla-stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/GHOST-JERSEY-CAMILLA-RILEY-PANT_1080x.jpg?v=1773892032",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/GHOST-JERSEY-CAMILLA-RILEY-PANT_1080x.jpg?v=1773892032",
        "alt": "Camilla Stripe - Jersey Riley Pant - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Camilla-stripe"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Camilla-stripe"
        ]
      }
    ],
    "variants": [
      {
        "id": "cloudknit-jersey-riley-pant-camilla-stripe-xs",
        "sourceVariantId": null,
        "title": "XS",
        "sku": "MORFE-CLOUDKNIT--1",
        "size": "XS",
        "colorOrPrint": "Camilla-stripe",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-pant-camilla-stripe-s",
        "sourceVariantId": null,
        "title": "S",
        "sku": "MORFE-CLOUDKNIT--2",
        "size": "S",
        "colorOrPrint": "Camilla-stripe",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-pant-camilla-stripe-m",
        "sourceVariantId": null,
        "title": "M",
        "sku": "MORFE-CLOUDKNIT--3",
        "size": "M",
        "colorOrPrint": "Camilla-stripe",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-pant-camilla-stripe-l",
        "sourceVariantId": null,
        "title": "L",
        "sku": "MORFE-CLOUDKNIT--4",
        "size": "L",
        "colorOrPrint": "Camilla-stripe",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-pant-camilla-stripe-xl",
        "sourceVariantId": null,
        "title": "XL",
        "sku": "MORFE-CLOUDKNIT--5",
        "size": "XL",
        "colorOrPrint": "Camilla-stripe",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 44
  },
  {
    "id": "cloudknit-jersey-riley-pant-cherry",
    "handle": "cloudknit-jersey-riley-pant-cherry",
    "title": "Cherry - Riley Pant",
    "collectionName": "Cloudknit Jersey",
    "productType": "Sleepwear",
    "colorOrPrint": "Cherry",
    "colorGroup": "Cherry",
    "fabric": "Cloudknit Jersey",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest cloudknit jersey to elevate your daily sanctuary.",
    "features": [
      "Cherry - Riley Pant"
    ],
    "materialDetails": [
      "Ultra-fine rib-knit stretch jersey",
      "220 GSM Breathable Modal Jersey"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cloudknit-jersey-riley-pant-cherry",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 11250,
    "sourceCompareAtPrice": 14063,
    "demoPricePKR": 11250,
    "demoCompareAtPricePKR": 14063,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/01_JERSEY_CHERRY_RILEY_PANT_1080x.jpg?v=1764816029",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/01_JERSEY_CHERRY_RILEY_PANT_1080x.jpg?v=1764816029",
        "alt": "Cherry - Riley Pant - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Cherry"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/02_JERSEY_CHERRY_RILEY_PANT_1080x.jpg?v=1764816029",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/02_JERSEY_CHERRY_RILEY_PANT_1080x.jpg?v=1764816029",
        "alt": "Cherry - Riley Pant - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Cherry"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/03_JERSEY_CHERRY_RILEY_PANT_1080x.jpg?v=1764816029",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/03_JERSEY_CHERRY_RILEY_PANT_1080x.jpg?v=1764816029",
        "alt": "Cherry - Riley Pant - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Cherry"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/04_JERSEY_CHERRY_RILEY_PANT_1080x.jpg?v=1764816029",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/04_JERSEY_CHERRY_RILEY_PANT_1080x.jpg?v=1764816029",
        "alt": "Cherry - Riley Pant - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Cherry"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/05_JERSEY_CHERRY_RILEY_PANT_1080x.jpg?v=1764816030",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/05_JERSEY_CHERRY_RILEY_PANT_1080x.jpg?v=1764816030",
        "alt": "Cherry - Riley Pant - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Cherry"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/PDP-IMAGES_STYLING-SUITE_1600x2000px_02_6387b579-b19a-47fa-9c44-dca519176279_1080x.jpg?v=1771815349",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/PDP-IMAGES_STYLING-SUITE_1600x2000px_02_6387b579-b19a-47fa-9c44-dca519176279_1080x.jpg?v=1771815349",
        "alt": "Cherry - Riley Pant - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Cherry"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/PDP-IMAGES_STYLING-SUITE_1600x2000px_10_1080x.jpg?v=1771815349",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/PDP-IMAGES_STYLING-SUITE_1600x2000px_10_1080x.jpg?v=1771815349",
        "alt": "Cherry - Riley Pant - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Cherry"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/GHOST_JERSEY_CHERRY_RILEY_PANT_1080x.jpg?v=1771815349",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/GHOST_JERSEY_CHERRY_RILEY_PANT_1080x.jpg?v=1771815349",
        "alt": "Cherry - Riley Pant - View 8",
        "role": "gallery",
        "position": 8,
        "colorOrPrint": "Cherry"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Cherry"
        ]
      }
    ],
    "variants": [
      {
        "id": "cloudknit-jersey-riley-pant-cherry-xs",
        "sourceVariantId": null,
        "title": "XS",
        "sku": "MORFE-CLOUDKNIT--1",
        "size": "XS",
        "colorOrPrint": "Cherry",
        "sourcePrice": 11250,
        "sourceCompareAtPrice": 14063,
        "demoPricePKR": 11250,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-pant-cherry-s",
        "sourceVariantId": null,
        "title": "S",
        "sku": "MORFE-CLOUDKNIT--2",
        "size": "S",
        "colorOrPrint": "Cherry",
        "sourcePrice": 11250,
        "sourceCompareAtPrice": 14063,
        "demoPricePKR": 11250,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-pant-cherry-m",
        "sourceVariantId": null,
        "title": "M",
        "sku": "MORFE-CLOUDKNIT--3",
        "size": "M",
        "colorOrPrint": "Cherry",
        "sourcePrice": 11250,
        "sourceCompareAtPrice": 14063,
        "demoPricePKR": 11250,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-pant-cherry-l",
        "sourceVariantId": null,
        "title": "L",
        "sku": "MORFE-CLOUDKNIT--4",
        "size": "L",
        "colorOrPrint": "Cherry",
        "sourcePrice": 11250,
        "sourceCompareAtPrice": 14063,
        "demoPricePKR": 11250,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-pant-cherry-xl",
        "sourceVariantId": null,
        "title": "XL",
        "sku": "MORFE-CLOUDKNIT--5",
        "size": "XL",
        "colorOrPrint": "Cherry",
        "sourcePrice": 11250,
        "sourceCompareAtPrice": 14063,
        "demoPricePKR": 11250,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 97
  },
  {
    "id": "cloudknit-jersey-riley-mini-short-sundown-stripe",
    "handle": "cloudknit-jersey-riley-mini-short-sundown-stripe",
    "title": "Sundown Stripe - Riley Short",
    "collectionName": "Cloudknit Jersey",
    "productType": "Sleepwear",
    "colorOrPrint": "Sundown-stripe",
    "colorGroup": "Sundown-stripe",
    "fabric": "Cloudknit Jersey",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest cloudknit jersey to elevate your daily sanctuary.",
    "features": [
      "Sundown Stripe - Riley Short"
    ],
    "materialDetails": [
      "Ultra-fine rib-knit stretch jersey",
      "220 GSM Breathable Modal Jersey"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cloudknit-jersey-riley-mini-short-sundown-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 6250,
    "sourceCompareAtPrice": 7813,
    "demoPricePKR": 6250,
    "demoCompareAtPricePKR": 7813,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/01_JERSEY_SUNDOWN_RILEY_SHORT_1080x.jpg?v=1764817402",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/01_JERSEY_SUNDOWN_RILEY_SHORT_1080x.jpg?v=1764817402",
        "alt": "Sundown Stripe - Riley Short - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Sundown-stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/02_JERSEY_SUNDOWN_RILEY_SHORT_1080x.jpg?v=1764817402",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/02_JERSEY_SUNDOWN_RILEY_SHORT_1080x.jpg?v=1764817402",
        "alt": "Sundown Stripe - Riley Short - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Sundown-stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/03_JERSEY_SUNDOWN_RILEY_SHORT_1080x.jpg?v=1764817401",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/03_JERSEY_SUNDOWN_RILEY_SHORT_1080x.jpg?v=1764817401",
        "alt": "Sundown Stripe - Riley Short - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Sundown-stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/04_JERSEY_SUNDOWN_RILEY_SHORT_1080x.jpg?v=1764817402",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/04_JERSEY_SUNDOWN_RILEY_SHORT_1080x.jpg?v=1764817402",
        "alt": "Sundown Stripe - Riley Short - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Sundown-stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/05_JERSEY_SUNDOWN_RILEY_SHORT_1080x.jpg?v=1764817402",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/05_JERSEY_SUNDOWN_RILEY_SHORT_1080x.jpg?v=1764817402",
        "alt": "Sundown Stripe - Riley Short - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Sundown-stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/UGC_SundownStripe_1_a3e34c9c-0f33-45a5-b2c0-f55410443a42_1080x.jpg?v=1793324374",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/UGC_SundownStripe_1_a3e34c9c-0f33-45a5-b2c0-f55410443a42_1080x.jpg?v=1793324374",
        "alt": "Sundown Stripe - Riley Short - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Sundown-stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/GHOST_JERSEY_SUNDOWN_RILEY_SHORT_1080x.jpg?v=1764817476",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/GHOST_JERSEY_SUNDOWN_RILEY_SHORT_1080x.jpg?v=1764817476",
        "alt": "Sundown Stripe - Riley Short - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Sundown-stripe"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Sundown-stripe"
        ]
      }
    ],
    "variants": [
      {
        "id": "cloudknit-jersey-riley-mini-short-sundown-stripe-xs",
        "sourceVariantId": null,
        "title": "XS",
        "sku": "MORFE-CLOUDKNIT--1",
        "size": "XS",
        "colorOrPrint": "Sundown-stripe",
        "sourcePrice": 6250,
        "sourceCompareAtPrice": 7813,
        "demoPricePKR": 6250,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-mini-short-sundown-stripe-s",
        "sourceVariantId": null,
        "title": "S",
        "sku": "MORFE-CLOUDKNIT--2",
        "size": "S",
        "colorOrPrint": "Sundown-stripe",
        "sourcePrice": 6250,
        "sourceCompareAtPrice": 7813,
        "demoPricePKR": 6250,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-mini-short-sundown-stripe-m",
        "sourceVariantId": null,
        "title": "M",
        "sku": "MORFE-CLOUDKNIT--3",
        "size": "M",
        "colorOrPrint": "Sundown-stripe",
        "sourcePrice": 6250,
        "sourceCompareAtPrice": 7813,
        "demoPricePKR": 6250,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-mini-short-sundown-stripe-l",
        "sourceVariantId": null,
        "title": "L",
        "sku": "MORFE-CLOUDKNIT--4",
        "size": "L",
        "colorOrPrint": "Sundown-stripe",
        "sourcePrice": 6250,
        "sourceCompareAtPrice": 7813,
        "demoPricePKR": 6250,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-mini-short-sundown-stripe-xl",
        "sourceVariantId": null,
        "title": "XL",
        "sku": "MORFE-CLOUDKNIT--5",
        "size": "XL",
        "colorOrPrint": "Sundown-stripe",
        "sourcePrice": 6250,
        "sourceCompareAtPrice": 7813,
        "demoPricePKR": 6250,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 81
  },
  {
    "id": "cloudknit-jersey-riley-mini-short-bella-stripe",
    "handle": "cloudknit-jersey-riley-mini-short-bella-stripe",
    "title": "Bella Stripe - Jersey Mini Short",
    "collectionName": "Cloudknit Jersey",
    "productType": "Sleepwear",
    "colorOrPrint": "Bella-stripe",
    "colorGroup": "Bella-stripe",
    "fabric": "Cloudknit Jersey",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest cloudknit jersey to elevate your daily sanctuary.",
    "features": [
      "Bella Stripe - Jersey Mini Short"
    ],
    "materialDetails": [
      "Ultra-fine rib-knit stretch jersey",
      "220 GSM Breathable Modal Jersey"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cloudknit-jersey-riley-mini-short-bella-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 11250,
    "sourceCompareAtPrice": 14063,
    "demoPricePKR": 11250,
    "demoCompareAtPricePKR": 14063,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/01-JERSEY-BELLA-STRIPE-RYLIE-MINI-SHORT_1080x.jpg?v=1787808547",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/01-JERSEY-BELLA-STRIPE-RYLIE-MINI-SHORT_1080x.jpg?v=1787808547",
        "alt": "Bella Stripe - Jersey Mini Short - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Bella-stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/02-JERSEY-BELLA-STRIPE-RYLIE-MINI-SHORT_1080x.jpg?v=1787808547",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/02-JERSEY-BELLA-STRIPE-RYLIE-MINI-SHORT_1080x.jpg?v=1787808547",
        "alt": "Bella Stripe - Jersey Mini Short - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Bella-stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/03-JERSEY-BELLA-STRIPE-RYLIE-MINI-SHORT_1080x.jpg?v=1787808547",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/03-JERSEY-BELLA-STRIPE-RYLIE-MINI-SHORT_1080x.jpg?v=1787808547",
        "alt": "Bella Stripe - Jersey Mini Short - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Bella-stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/04-JERSEY-BELLA-STRIPE-RYLIE-MINI-SHORT_1080x.jpg?v=1787808547",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/04-JERSEY-BELLA-STRIPE-RYLIE-MINI-SHORT_1080x.jpg?v=1787808547",
        "alt": "Bella Stripe - Jersey Mini Short - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Bella-stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/05-JERSEY-BELLA-STRIPE-RYLIE-MINI-SHORT_1080x.jpg?v=1787808547",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/05-JERSEY-BELLA-STRIPE-RYLIE-MINI-SHORT_1080x.jpg?v=1787808547",
        "alt": "Bella Stripe - Jersey Mini Short - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Bella-stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/06-JERSEY-BELLA-STRIPE-RYLIE-MINI-SHORT_1080x.jpg?v=1787808547",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/06-JERSEY-BELLA-STRIPE-RYLIE-MINI-SHORT_1080x.jpg?v=1787808547",
        "alt": "Bella Stripe - Jersey Mini Short - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Bella-stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/07-JERSEY-BELLA-STRIPE-RYLIE-MINI-SHORT_1080x.jpg?v=1787808547",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/07-JERSEY-BELLA-STRIPE-RYLIE-MINI-SHORT_1080x.jpg?v=1787808547",
        "alt": "Bella Stripe - Jersey Mini Short - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Bella-stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/08-JERSEY-BELLA-STRIPE-RYLIE-MINI-SHORT_1080x.jpg?v=1787808547",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/08-JERSEY-BELLA-STRIPE-RYLIE-MINI-SHORT_1080x.jpg?v=1787808547",
        "alt": "Bella Stripe - Jersey Mini Short - View 8",
        "role": "gallery",
        "position": 8,
        "colorOrPrint": "Bella-stripe"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/GHOST-JERSEY-BELLA-STRIPE-RYLIE-MINI-SHORT_1080x.jpg?v=1787808547",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/GHOST-JERSEY-BELLA-STRIPE-RYLIE-MINI-SHORT_1080x.jpg?v=1787808547",
        "alt": "Bella Stripe - Jersey Mini Short - View 9",
        "role": "gallery",
        "position": 9,
        "colorOrPrint": "Bella-stripe"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Bella-stripe"
        ]
      }
    ],
    "variants": [
      {
        "id": "cloudknit-jersey-riley-mini-short-bella-stripe-xs",
        "sourceVariantId": null,
        "title": "XS",
        "sku": "MORFE-CLOUDKNIT--1",
        "size": "XS",
        "colorOrPrint": "Bella-stripe",
        "sourcePrice": 11250,
        "sourceCompareAtPrice": 14063,
        "demoPricePKR": 11250,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-mini-short-bella-stripe-s",
        "sourceVariantId": null,
        "title": "S",
        "sku": "MORFE-CLOUDKNIT--2",
        "size": "S",
        "colorOrPrint": "Bella-stripe",
        "sourcePrice": 11250,
        "sourceCompareAtPrice": 14063,
        "demoPricePKR": 11250,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-mini-short-bella-stripe-m",
        "sourceVariantId": null,
        "title": "M",
        "sku": "MORFE-CLOUDKNIT--3",
        "size": "M",
        "colorOrPrint": "Bella-stripe",
        "sourcePrice": 11250,
        "sourceCompareAtPrice": 14063,
        "demoPricePKR": 11250,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-mini-short-bella-stripe-l",
        "sourceVariantId": null,
        "title": "L",
        "sku": "MORFE-CLOUDKNIT--4",
        "size": "L",
        "colorOrPrint": "Bella-stripe",
        "sourcePrice": 11250,
        "sourceCompareAtPrice": 14063,
        "demoPricePKR": 11250,
        "availability": "available"
      },
      {
        "id": "cloudknit-jersey-riley-mini-short-bella-stripe-xl",
        "sourceVariantId": null,
        "title": "XL",
        "sku": "MORFE-CLOUDKNIT--5",
        "size": "XL",
        "colorOrPrint": "Bella-stripe",
        "sourcePrice": 11250,
        "sourceCompareAtPrice": 14063,
        "demoPricePKR": 11250,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 65
  },
  {
    "id": "soft-woven-cotton-kit-pant-rue-gingham",
    "handle": "soft-woven-cotton-kit-pant-rue-gingham",
    "title": "Rue Gingham - Cotton Kit Pant",
    "collectionName": "Cloudknit Jersey",
    "productType": "Sleepwear",
    "colorOrPrint": "Rue-gingham",
    "colorGroup": "Rue-gingham",
    "fabric": "Cloudknit Jersey",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest cloudknit jersey to elevate your daily sanctuary.",
    "features": [
      "Rue Gingham - Cotton Kit Pant"
    ],
    "materialDetails": [
      "Ultra-fine rib-knit stretch jersey",
      "220 GSM Breathable Modal Jersey"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/soft-woven-cotton-kit-pant-rue-gingham",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 17250,
    "sourceCompareAtPrice": 21563,
    "demoPricePKR": 17250,
    "demoCompareAtPricePKR": 21563,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/01_COTTON_RUE_KIT-PANT_1080x.jpg?v=1772502226",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/01_COTTON_RUE_KIT-PANT_1080x.jpg?v=1772502226",
        "alt": "Rue Gingham - Cotton Kit Pant - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Rue-gingham"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/02_COTTON_RUE_KIT-PANT_1080x.jpg?v=1772502226",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/02_COTTON_RUE_KIT-PANT_1080x.jpg?v=1772502226",
        "alt": "Rue Gingham - Cotton Kit Pant - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Rue-gingham"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/03_COTTON_RUE_KIT-PANT_1080x.jpg?v=1772502225",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/03_COTTON_RUE_KIT-PANT_1080x.jpg?v=1772502225",
        "alt": "Rue Gingham - Cotton Kit Pant - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Rue-gingham"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/04_COTTON_RUE_KIT-PANT_1080x.jpg?v=1772502225",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/04_COTTON_RUE_KIT-PANT_1080x.jpg?v=1772502225",
        "alt": "Rue Gingham - Cotton Kit Pant - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Rue-gingham"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CAMILLA-TOP_1600x2000px-1_1080x.jpg?v=1779332145",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CAMILLA-TOP_1600x2000px-1_1080x.jpg?v=1779332145",
        "alt": "Rue Gingham - Cotton Kit Pant - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Rue-gingham"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/05_COTTON_RUE_KIT-PANT_1080x.jpg?v=1772502226",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/05_COTTON_RUE_KIT-PANT_1080x.jpg?v=1772502226",
        "alt": "Rue Gingham - Cotton Kit Pant - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Rue-gingham"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/06_COTTON_RUE_KIT-PANT_1080x.jpg?v=1772502226",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/06_COTTON_RUE_KIT-PANT_1080x.jpg?v=1772502226",
        "alt": "Rue Gingham - Cotton Kit Pant - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Rue-gingham"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/07_COTTON_RUE_KIT-PANT_1080x.jpg?v=1772502225",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/07_COTTON_RUE_KIT-PANT_1080x.jpg?v=1772502225",
        "alt": "Rue Gingham - Cotton Kit Pant - View 8",
        "role": "gallery",
        "position": 8,
        "colorOrPrint": "Rue-gingham"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/08_COTTON_RUE_KIT-PANT_1080x.jpg?v=1772502225",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/08_COTTON_RUE_KIT-PANT_1080x.jpg?v=1772502225",
        "alt": "Rue Gingham - Cotton Kit Pant - View 9",
        "role": "gallery",
        "position": 9,
        "colorOrPrint": "Rue-gingham"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Ghost_Cotton_Rue_Kit-Pant_1080x.jpg?v=1772502226",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Ghost_Cotton_Rue_Kit-Pant_1080x.jpg?v=1772502226",
        "alt": "Rue Gingham - Cotton Kit Pant - View 10",
        "role": "gallery",
        "position": 10,
        "colorOrPrint": "Rue-gingham"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Rue-gingham"
        ]
      }
    ],
    "variants": [
      {
        "id": "soft-woven-cotton-kit-pant-rue-gingham-xs",
        "sourceVariantId": null,
        "title": "XS",
        "sku": "MORFE-SOFT-WOVEN-1",
        "size": "XS",
        "colorOrPrint": "Rue-gingham",
        "sourcePrice": 17250,
        "sourceCompareAtPrice": 21563,
        "demoPricePKR": 17250,
        "availability": "available"
      },
      {
        "id": "soft-woven-cotton-kit-pant-rue-gingham-s",
        "sourceVariantId": null,
        "title": "S",
        "sku": "MORFE-SOFT-WOVEN-2",
        "size": "S",
        "colorOrPrint": "Rue-gingham",
        "sourcePrice": 17250,
        "sourceCompareAtPrice": 21563,
        "demoPricePKR": 17250,
        "availability": "available"
      },
      {
        "id": "soft-woven-cotton-kit-pant-rue-gingham-m",
        "sourceVariantId": null,
        "title": "M",
        "sku": "MORFE-SOFT-WOVEN-3",
        "size": "M",
        "colorOrPrint": "Rue-gingham",
        "sourcePrice": 17250,
        "sourceCompareAtPrice": 21563,
        "demoPricePKR": 17250,
        "availability": "available"
      },
      {
        "id": "soft-woven-cotton-kit-pant-rue-gingham-l",
        "sourceVariantId": null,
        "title": "L",
        "sku": "MORFE-SOFT-WOVEN-4",
        "size": "L",
        "colorOrPrint": "Rue-gingham",
        "sourcePrice": 17250,
        "sourceCompareAtPrice": 21563,
        "demoPricePKR": 17250,
        "availability": "available"
      },
      {
        "id": "soft-woven-cotton-kit-pant-rue-gingham-xl",
        "sourceVariantId": null,
        "title": "XL",
        "sku": "MORFE-SOFT-WOVEN-5",
        "size": "XL",
        "colorOrPrint": "Rue-gingham",
        "sourcePrice": 17250,
        "sourceCompareAtPrice": 21563,
        "demoPricePKR": 17250,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 82
  },
  {
    "id": "double-brushed-flannelette-lennox-pant-mason-gingham",
    "handle": "double-brushed-flannelette-lennox-pant-mason-gingham",
    "title": "Mason Gingham - Flannelette Lennox Pant",
    "collectionName": "Frankie Flannelette",
    "productType": "Sleepwear",
    "colorOrPrint": "Mason-gingham",
    "colorGroup": "Mason-gingham",
    "fabric": "Frankie Flannelette",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest frankie flannelette to elevate your daily sanctuary.",
    "features": [
      "Mason Gingham - Flannelette Lennox Pant"
    ],
    "materialDetails": [
      "Ultra-fine rib-knit stretch jersey",
      "220 GSM Breathable Modal Jersey"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/double-brushed-flannelette-lennox-pant-mason-gingham",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8500,
    "sourceCompareAtPrice": 10625,
    "demoPricePKR": 8500,
    "demoCompareAtPricePKR": 10625,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/01-FLANNELETTE-MASON-LENNOX-PANT_4f7daec2-5455-4532-b1b7-9253eaeebc5d_1080x.jpg?v=1773800455",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/01-FLANNELETTE-MASON-LENNOX-PANT_4f7daec2-5455-4532-b1b7-9253eaeebc5d_1080x.jpg?v=1773800455",
        "alt": "Mason Gingham - Flannelette Lennox Pant - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Mason-gingham"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/02-FLANNELETTE-MASON-LENNOX-PANT_1080x.jpg?v=1773800454",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/02-FLANNELETTE-MASON-LENNOX-PANT_1080x.jpg?v=1773800454",
        "alt": "Mason Gingham - Flannelette Lennox Pant - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Mason-gingham"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/03-FLANNELETTE-MASON-LENNOX-PANT_2_1080x.jpg?v=1781160743",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/03-FLANNELETTE-MASON-LENNOX-PANT_2_1080x.jpg?v=1781160743",
        "alt": "Mason Gingham - Flannelette Lennox Pant - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Mason-gingham"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/04-FLANNELETTE-MASON-LENNOX-PANT_800daa36-333b-4ac7-94fa-34d641e50952_1080x.jpg?v=1773800455",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/04-FLANNELETTE-MASON-LENNOX-PANT_800daa36-333b-4ac7-94fa-34d641e50952_1080x.jpg?v=1773800455",
        "alt": "Mason Gingham - Flannelette Lennox Pant - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Mason-gingham"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/05-FLANNELETTE-MASON-LENNOX-PANT_f8bb986c-5995-4496-9134-e29d79580fe4_1080x.jpg?v=1773800455",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/05-FLANNELETTE-MASON-LENNOX-PANT_f8bb986c-5995-4496-9134-e29d79580fe4_1080x.jpg?v=1773800455",
        "alt": "Mason Gingham - Flannelette Lennox Pant - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Mason-gingham"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/06-FLANNELETTE-MASON-LENNOX-PANT_1080x.jpg?v=1773800454",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/06-FLANNELETTE-MASON-LENNOX-PANT_1080x.jpg?v=1773800454",
        "alt": "Mason Gingham - Flannelette Lennox Pant - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Mason-gingham"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/07-FLANNELETTE-MASON-LENNOX-PANT_1080x.jpg?v=1773800455",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/07-FLANNELETTE-MASON-LENNOX-PANT_1080x.jpg?v=1773800455",
        "alt": "Mason Gingham - Flannelette Lennox Pant - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Mason-gingham"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/08-FLANNELETTE-MASON-LENNOX-PANT_587355de-eb32-42f3-9692-9c8caa5f7d28_1080x.jpg?v=1773800455",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/08-FLANNELETTE-MASON-LENNOX-PANT_587355de-eb32-42f3-9692-9c8caa5f7d28_1080x.jpg?v=1773800455",
        "alt": "Mason Gingham - Flannelette Lennox Pant - View 8",
        "role": "gallery",
        "position": 8,
        "colorOrPrint": "Mason-gingham"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/GHOST-FLANNELETTE-MASON-LENNOX-PANT_d29729bc-c878-43c6-8dad-7af98380a59e_1080x.jpg?v=1773800455",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/GHOST-FLANNELETTE-MASON-LENNOX-PANT_d29729bc-c878-43c6-8dad-7af98380a59e_1080x.jpg?v=1773800455",
        "alt": "Mason Gingham - Flannelette Lennox Pant - View 9",
        "role": "gallery",
        "position": 9,
        "colorOrPrint": "Mason-gingham"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Mason-gingham"
        ]
      }
    ],
    "variants": [
      {
        "id": "double-brushed-flannelette-lennox-pant-mason-gingham-xs",
        "sourceVariantId": null,
        "title": "XS",
        "sku": "MORFE-DOUBLE-BRU-1",
        "size": "XS",
        "colorOrPrint": "Mason-gingham",
        "sourcePrice": 8500,
        "sourceCompareAtPrice": 10625,
        "demoPricePKR": 8500,
        "availability": "available"
      },
      {
        "id": "double-brushed-flannelette-lennox-pant-mason-gingham-s",
        "sourceVariantId": null,
        "title": "S",
        "sku": "MORFE-DOUBLE-BRU-2",
        "size": "S",
        "colorOrPrint": "Mason-gingham",
        "sourcePrice": 8500,
        "sourceCompareAtPrice": 10625,
        "demoPricePKR": 8500,
        "availability": "available"
      },
      {
        "id": "double-brushed-flannelette-lennox-pant-mason-gingham-m",
        "sourceVariantId": null,
        "title": "M",
        "sku": "MORFE-DOUBLE-BRU-3",
        "size": "M",
        "colorOrPrint": "Mason-gingham",
        "sourcePrice": 8500,
        "sourceCompareAtPrice": 10625,
        "demoPricePKR": 8500,
        "availability": "available"
      },
      {
        "id": "double-brushed-flannelette-lennox-pant-mason-gingham-l",
        "sourceVariantId": null,
        "title": "L",
        "sku": "MORFE-DOUBLE-BRU-4",
        "size": "L",
        "colorOrPrint": "Mason-gingham",
        "sourcePrice": 8500,
        "sourceCompareAtPrice": 10625,
        "demoPricePKR": 8500,
        "availability": "available"
      },
      {
        "id": "double-brushed-flannelette-lennox-pant-mason-gingham-xl",
        "sourceVariantId": null,
        "title": "XL",
        "sku": "MORFE-DOUBLE-BRU-5",
        "size": "XL",
        "colorOrPrint": "Mason-gingham",
        "sourcePrice": 8500,
        "sourceCompareAtPrice": 10625,
        "demoPricePKR": 8500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 74
  },
  {
    "id": "pointelle-scout-pant-nora-polka-dot",
    "handle": "pointelle-scout-pant-nora-polka-dot",
    "title": "Nora Polka Dot - Pointelle Scout Pant",
    "collectionName": "Cloudknit Jersey",
    "productType": "Sleepwear",
    "colorOrPrint": "Nora-polka-dot",
    "colorGroup": "Nora-polka-dot",
    "fabric": "Cloudknit Jersey",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest cloudknit jersey to elevate your daily sanctuary.",
    "features": [
      "Nora Polka Dot - Pointelle Scout Pant"
    ],
    "materialDetails": [
      "Ultra-fine rib-knit stretch jersey",
      "220 GSM Breathable Modal Jersey"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/pointelle-scout-pant-nora-polka-dot",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 14500,
    "sourceCompareAtPrice": 18125,
    "demoPricePKR": 14500,
    "demoCompareAtPricePKR": 18125,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/01-POINTELLE-NORA-DOT-SCOUT-PANT_1080x.jpg?v=1778037562",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/01-POINTELLE-NORA-DOT-SCOUT-PANT_1080x.jpg?v=1778037562",
        "alt": "Nora Polka Dot - Pointelle Scout Pant - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Nora-polka-dot"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/UGC_1600x2000px-5_1080x.jpg?v=1782957941",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/UGC_1600x2000px-5_1080x.jpg?v=1782957941",
        "alt": "Nora Polka Dot - Pointelle Scout Pant - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Nora-polka-dot"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/02-POINTELLE-NORA-DOT-SCOUT-PANT_1080x.jpg?v=1778037562",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/02-POINTELLE-NORA-DOT-SCOUT-PANT_1080x.jpg?v=1778037562",
        "alt": "Nora Polka Dot - Pointelle Scout Pant - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Nora-polka-dot"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/03-POINTELLE-NORA-DOT-SCOUT-PANT_1080x.jpg?v=1778037562",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/03-POINTELLE-NORA-DOT-SCOUT-PANT_1080x.jpg?v=1778037562",
        "alt": "Nora Polka Dot - Pointelle Scout Pant - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Nora-polka-dot"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/04-POINTELLE-NORA-DOT-SCOUT-PANT_1080x.jpg?v=1778037562",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/04-POINTELLE-NORA-DOT-SCOUT-PANT_1080x.jpg?v=1778037562",
        "alt": "Nora Polka Dot - Pointelle Scout Pant - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Nora-polka-dot"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/05-POINTELLE-NORA-DOT-SCOUT-PANT_1080x.jpg?v=1778037562",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/05-POINTELLE-NORA-DOT-SCOUT-PANT_1080x.jpg?v=1778037562",
        "alt": "Nora Polka Dot - Pointelle Scout Pant - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Nora-polka-dot"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/06-POINTELLE-NORA-DOT-SCOUT-PANT_1080x.jpg?v=1778037562",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/06-POINTELLE-NORA-DOT-SCOUT-PANT_1080x.jpg?v=1778037562",
        "alt": "Nora Polka Dot - Pointelle Scout Pant - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Nora-polka-dot"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/07-POINTELLE-NORA-DOT-SCOUT-PANT_1080x.jpg?v=1778037562",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/07-POINTELLE-NORA-DOT-SCOUT-PANT_1080x.jpg?v=1778037562",
        "alt": "Nora Polka Dot - Pointelle Scout Pant - View 8",
        "role": "gallery",
        "position": 8,
        "colorOrPrint": "Nora-polka-dot"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/GHOST-POINTELLE-NORA-DOT-SCOUT-PANT_1080x.jpg?v=1778037562",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/GHOST-POINTELLE-NORA-DOT-SCOUT-PANT_1080x.jpg?v=1778037562",
        "alt": "Nora Polka Dot - Pointelle Scout Pant - View 9",
        "role": "gallery",
        "position": 9,
        "colorOrPrint": "Nora-polka-dot"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Nora-polka-dot"
        ]
      }
    ],
    "variants": [
      {
        "id": "pointelle-scout-pant-nora-polka-dot-xs",
        "sourceVariantId": null,
        "title": "XS",
        "sku": "MORFE-POINTELLE--1",
        "size": "XS",
        "colorOrPrint": "Nora-polka-dot",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "pointelle-scout-pant-nora-polka-dot-s",
        "sourceVariantId": null,
        "title": "S",
        "sku": "MORFE-POINTELLE--2",
        "size": "S",
        "colorOrPrint": "Nora-polka-dot",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "pointelle-scout-pant-nora-polka-dot-m",
        "sourceVariantId": null,
        "title": "M",
        "sku": "MORFE-POINTELLE--3",
        "size": "M",
        "colorOrPrint": "Nora-polka-dot",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "pointelle-scout-pant-nora-polka-dot-l",
        "sourceVariantId": null,
        "title": "L",
        "sku": "MORFE-POINTELLE--4",
        "size": "L",
        "colorOrPrint": "Nora-polka-dot",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "pointelle-scout-pant-nora-polka-dot-xl",
        "sourceVariantId": null,
        "title": "XL",
        "sku": "MORFE-POINTELLE--5",
        "size": "XL",
        "colorOrPrint": "Nora-polka-dot",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 59
  },
  {
    "id": "sleep-well-soothing-bed-spray",
    "handle": "sleep-well-soothing-bed-spray",
    "title": "Sleep Well - Soothing Bed Spray",
    "collectionName": "Mulberry Silk",
    "productType": "Wellness",
    "colorOrPrint": "Bed spray",
    "colorGroup": "Bed spray",
    "fabric": "Mulberry Silk",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest mulberry silk to elevate your daily sanctuary.",
    "features": [
      "Sleep Well - Soothing Bed Spray"
    ],
    "materialDetails": [
      "100% Pure Grade 6A 22-Momme Mulberry Silk",
      "22 Momme Silk"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/sleep-well-soothing-bed-spray",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 5750,
    "sourceCompareAtPrice": 7188,
    "demoPricePKR": 5750,
    "demoCompareAtPricePKR": 7188,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/SOOTHING_BED_SPRAY_01_1080x.jpg?v=1769475994",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/SOOTHING_BED_SPRAY_01_1080x.jpg?v=1769475994",
        "alt": "Sleep Well - Soothing Bed Spray - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Bed spray"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/SOOTHING_BED_SPRAY_02_1080x.jpg?v=1769475994",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/SOOTHING_BED_SPRAY_02_1080x.jpg?v=1769475994",
        "alt": "Sleep Well - Soothing Bed Spray - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Bed spray"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/SOOTHING_BED_SPRAY_03_1080x.jpg?v=1769475994",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/SOOTHING_BED_SPRAY_03_1080x.jpg?v=1769475994",
        "alt": "Sleep Well - Soothing Bed Spray - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Bed spray"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/SOOTHING_BED_SPRAY_04_1080x.jpg?v=1769475994",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/SOOTHING_BED_SPRAY_04_1080x.jpg?v=1769475994",
        "alt": "Sleep Well - Soothing Bed Spray - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Bed spray"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/SOOTHING_BED_SPRAY_05_1080x.jpg?v=1769475994",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/SOOTHING_BED_SPRAY_05_1080x.jpg?v=1769475994",
        "alt": "Sleep Well - Soothing Bed Spray - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Bed spray"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "100ml Mist"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Bed spray"
        ]
      }
    ],
    "variants": [
      {
        "id": "sleep-well-soothing-bed-spray-100ml-mist",
        "sourceVariantId": null,
        "title": "100ml Mist",
        "sku": "MORFE-SLEEP-WELL-1",
        "size": "100ml Mist",
        "colorOrPrint": "Bed spray",
        "sourcePrice": 5750,
        "sourceCompareAtPrice": 7188,
        "demoPricePKR": 5750,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 72
  },
  {
    "id": "sleep-well-magnesium-balm-50g",
    "handle": "sleep-well-magnesium-balm-50g",
    "title": "Sleep Well - Magnesium Balm",
    "collectionName": "Mulberry Silk",
    "productType": "Wellness",
    "colorOrPrint": "Balm 50g",
    "colorGroup": "Balm 50g",
    "fabric": "Mulberry Silk",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest mulberry silk to elevate your daily sanctuary.",
    "features": [
      "Sleep Well - Magnesium Balm"
    ],
    "materialDetails": [
      "100% Pure Grade 6A 22-Momme Mulberry Silk",
      "22 Momme Silk"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/sleep-well-magnesium-balm-50g",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 5000,
    "sourceCompareAtPrice": 6250,
    "demoPricePKR": 5000,
    "demoCompareAtPricePKR": 6250,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/MAGNESIUM_BALM_01_1080x.jpg?v=1769475994",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/MAGNESIUM_BALM_01_1080x.jpg?v=1769475994",
        "alt": "Sleep Well - Magnesium Balm - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Balm 50g"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/MAGNESIUM_BALM_02_1080x.jpg?v=1769475994",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/MAGNESIUM_BALM_02_1080x.jpg?v=1769475994",
        "alt": "Sleep Well - Magnesium Balm - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Balm 50g"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/MAGNESIUM_BALM_03_1080x.jpg?v=1769475994",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/MAGNESIUM_BALM_03_1080x.jpg?v=1769475994",
        "alt": "Sleep Well - Magnesium Balm - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Balm 50g"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/MAGNESIUM_BALM_04_1080x.jpg?v=1769475994",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/MAGNESIUM_BALM_04_1080x.jpg?v=1769475994",
        "alt": "Sleep Well - Magnesium Balm - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Balm 50g"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/MAGNESIUM_BALM_05_1080x.jpg?v=1769475994",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/MAGNESIUM_BALM_05_1080x.jpg?v=1769475994",
        "alt": "Sleep Well - Magnesium Balm - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Balm 50g"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "50g"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Balm 50g"
        ]
      }
    ],
    "variants": [
      {
        "id": "sleep-well-magnesium-balm-50g-50g",
        "sourceVariantId": null,
        "title": "50g",
        "sku": "MORFE-SLEEP-WELL-1",
        "size": "50g",
        "colorOrPrint": "Balm 50g",
        "sourcePrice": 5000,
        "sourceCompareAtPrice": 6250,
        "demoPricePKR": 5000,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 48
  },
  {
    "id": "sleep-well-magnesium-bath-soak",
    "handle": "sleep-well-magnesium-bath-soak",
    "title": "Sleep Well - Magnesium Bath Soak",
    "collectionName": "Mulberry Silk",
    "productType": "Wellness",
    "colorOrPrint": "Bath soak",
    "colorGroup": "Bath soak",
    "fabric": "Mulberry Silk",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest mulberry silk to elevate your daily sanctuary.",
    "features": [
      "Sleep Well - Magnesium Bath Soak"
    ],
    "materialDetails": [
      "100% Pure Grade 6A 22-Momme Mulberry Silk",
      "22 Momme Silk"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/sleep-well-magnesium-bath-soak",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 5000,
    "sourceCompareAtPrice": 6250,
    "demoPricePKR": 5000,
    "demoCompareAtPricePKR": 6250,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/MAGNESIUM_BATH_SOAK_01_1080x.jpg?v=1769475990",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/MAGNESIUM_BATH_SOAK_01_1080x.jpg?v=1769475990",
        "alt": "Sleep Well - Magnesium Bath Soak - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Bath soak"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/MAGNESIUM_BATH_SOAK_02_1080x.jpg?v=1769475990",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/MAGNESIUM_BATH_SOAK_02_1080x.jpg?v=1769475990",
        "alt": "Sleep Well - Magnesium Bath Soak - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Bath soak"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/MAGNESIUM_BATH_SOAK_03_1080x.jpg?v=1769475990",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/MAGNESIUM_BATH_SOAK_03_1080x.jpg?v=1769475990",
        "alt": "Sleep Well - Magnesium Bath Soak - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Bath soak"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/MAGNESIUM_BATH_SOAK_04_1080x.jpg?v=1769475990",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/MAGNESIUM_BATH_SOAK_04_1080x.jpg?v=1769475990",
        "alt": "Sleep Well - Magnesium Bath Soak - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Bath soak"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/MAGNESIUM_BATH_SOAK_05_1080x.jpg?v=1769475990",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/MAGNESIUM_BATH_SOAK_05_1080x.jpg?v=1769475990",
        "alt": "Sleep Well - Magnesium Bath Soak - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Bath soak"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "500g Jar"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Bath soak"
        ]
      }
    ],
    "variants": [
      {
        "id": "sleep-well-magnesium-bath-soak-500g-jar",
        "sourceVariantId": null,
        "title": "500g Jar",
        "sku": "MORFE-SLEEP-WELL-1",
        "size": "500g Jar",
        "colorOrPrint": "Bath soak",
        "sourcePrice": 5000,
        "sourceCompareAtPrice": 6250,
        "demoPricePKR": 5000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 42
  },
  {
    "id": "sleep-well-calming-sleep-wash",
    "handle": "sleep-well-calming-sleep-wash",
    "title": "Sleep Well - Calming Sleep Wash",
    "collectionName": "Mulberry Silk",
    "productType": "Wellness",
    "colorOrPrint": "Sleep wash",
    "colorGroup": "Sleep wash",
    "fabric": "Mulberry Silk",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest mulberry silk to elevate your daily sanctuary.",
    "features": [
      "Sleep Well - Calming Sleep Wash"
    ],
    "materialDetails": [
      "100% Pure Grade 6A 22-Momme Mulberry Silk",
      "22 Momme Silk"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/sleep-well-calming-sleep-wash",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 5750,
    "sourceCompareAtPrice": 7188,
    "demoPricePKR": 5750,
    "demoCompareAtPricePKR": 7188,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CALMING_SLEEP_WASH_01_1080x.jpg?v=1769475990",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CALMING_SLEEP_WASH_01_1080x.jpg?v=1769475990",
        "alt": "Sleep Well - Calming Sleep Wash - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Sleep wash"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CALMING_SLEEP_WASH_02_1080x.jpg?v=1769475990",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CALMING_SLEEP_WASH_02_1080x.jpg?v=1769475990",
        "alt": "Sleep Well - Calming Sleep Wash - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Sleep wash"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CALMING_SLEEP_WASH_03_1080x.jpg?v=1769475990",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CALMING_SLEEP_WASH_03_1080x.jpg?v=1769475990",
        "alt": "Sleep Well - Calming Sleep Wash - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Sleep wash"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CALMING_SLEEP_WASH_04_1080x.jpg?v=1769475990",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CALMING_SLEEP_WASH_04_1080x.jpg?v=1769475990",
        "alt": "Sleep Well - Calming Sleep Wash - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Sleep wash"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/CALMING_SLEEP_WASH_05_1080x.jpg?v=1769475990",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/CALMING_SLEEP_WASH_05_1080x.jpg?v=1769475990",
        "alt": "Sleep Well - Calming Sleep Wash - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Sleep wash"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "250ml Bottle"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Sleep wash"
        ]
      }
    ],
    "variants": [
      {
        "id": "sleep-well-calming-sleep-wash-250ml-bottle",
        "sourceVariantId": null,
        "title": "250ml Bottle",
        "sku": "MORFE-SLEEP-WELL-1",
        "size": "250ml Bottle",
        "colorOrPrint": "Sleep wash",
        "sourcePrice": 5750,
        "sourceCompareAtPrice": 7188,
        "demoPricePKR": 5750,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 64
  },
  {
    "id": "sleep-well-sunrise-candle",
    "handle": "sleep-well-sunrise-candle",
    "title": "Sleep Well - Sunrise Candle",
    "collectionName": "Mulberry Silk",
    "productType": "Wellness",
    "colorOrPrint": "Sunrise candle",
    "colorGroup": "Sunrise candle",
    "fabric": "Mulberry Silk",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest mulberry silk to elevate your daily sanctuary.",
    "features": [
      "Sleep Well - Sunrise Candle"
    ],
    "materialDetails": [
      "100% Pure Grade 6A 22-Momme Mulberry Silk",
      "22 Momme Silk"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/sleep-well-sunrise-candle",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 7500,
    "sourceCompareAtPrice": 9375,
    "demoPricePKR": 7500,
    "demoCompareAtPricePKR": 9375,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/SUNRISE_CANDLE_01_1080x.jpg?v=1769475990",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/SUNRISE_CANDLE_01_1080x.jpg?v=1769475990",
        "alt": "Sleep Well - Sunrise Candle - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Sunrise candle"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/SUNRISE_CANDLE_02_1080x.jpg?v=1769475990",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/SUNRISE_CANDLE_02_1080x.jpg?v=1769475990",
        "alt": "Sleep Well - Sunrise Candle - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Sunrise candle"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/SUNRISE_CANDLE_03_1080x.jpg?v=1769475990",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/SUNRISE_CANDLE_03_1080x.jpg?v=1769475990",
        "alt": "Sleep Well - Sunrise Candle - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Sunrise candle"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/SUNRISE_CANDLE_04_1080x.jpg?v=1769475990",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/SUNRISE_CANDLE_04_1080x.jpg?v=1769475990",
        "alt": "Sleep Well - Sunrise Candle - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Sunrise candle"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/SUNRISE_CANDLE_05_1080x.jpg?v=1769475990",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/SUNRISE_CANDLE_05_1080x.jpg?v=1769475990",
        "alt": "Sleep Well - Sunrise Candle - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Sunrise candle"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "300g Soy Wax"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Sunrise candle"
        ]
      }
    ],
    "variants": [
      {
        "id": "sleep-well-sunrise-candle-300g-soy-wax",
        "sourceVariantId": null,
        "title": "300g Soy Wax",
        "sku": "MORFE-SLEEP-WELL-1",
        "size": "300g Soy Wax",
        "colorOrPrint": "Sunrise candle",
        "sourcePrice": 7500,
        "sourceCompareAtPrice": 9375,
        "demoPricePKR": 7500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 57
  },
  {
    "id": "sleep-well-sunset-candle",
    "handle": "sleep-well-sunset-candle",
    "title": "Sleep Well - Sunset Candle",
    "collectionName": "Mulberry Silk",
    "productType": "Wellness",
    "colorOrPrint": "Sunset candle",
    "colorGroup": "Sunset candle",
    "fabric": "Mulberry Silk",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest mulberry silk to elevate your daily sanctuary.",
    "features": [
      "Sleep Well - Sunset Candle"
    ],
    "materialDetails": [
      "100% Pure Grade 6A 22-Momme Mulberry Silk",
      "22 Momme Silk"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/sleep-well-sunset-candle",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 7500,
    "sourceCompareAtPrice": 9375,
    "demoPricePKR": 7500,
    "demoCompareAtPricePKR": 9375,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/SUNSET_CANDLE_01_1080x.jpg?v=1769475990",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/SUNSET_CANDLE_01_1080x.jpg?v=1769475990",
        "alt": "Sleep Well - Sunset Candle - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Sunset candle"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/SUNSET_CANDLE_02_1080x.jpg?v=1769475990",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/SUNSET_CANDLE_02_1080x.jpg?v=1769475990",
        "alt": "Sleep Well - Sunset Candle - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Sunset candle"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/SUNSET_CANDLE_03_1080x.jpg?v=1769475990",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/SUNSET_CANDLE_03_1080x.jpg?v=1769475990",
        "alt": "Sleep Well - Sunset Candle - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Sunset candle"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/SUNSET_CANDLE_04_1080x.jpg?v=1769475990",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/SUNSET_CANDLE_04_1080x.jpg?v=1769475990",
        "alt": "Sleep Well - Sunset Candle - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Sunset candle"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/SUNSET_CANDLE_05_1080x.jpg?v=1769475990",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/SUNSET_CANDLE_05_1080x.jpg?v=1769475990",
        "alt": "Sleep Well - Sunset Candle - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Sunset candle"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "300g Soy Wax"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Sunset candle"
        ]
      }
    ],
    "variants": [
      {
        "id": "sleep-well-sunset-candle-300g-soy-wax",
        "sourceVariantId": null,
        "title": "300g Soy Wax",
        "sku": "MORFE-SLEEP-WELL-1",
        "size": "300g Soy Wax",
        "colorOrPrint": "Sunset candle",
        "sourcePrice": 7500,
        "sourceCompareAtPrice": 9375,
        "demoPricePKR": 7500,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 113
  },
  {
    "id": "silk-winnie-polka-dot-pillowcases",
    "handle": "silk-winnie-polka-dot-pillowcases",
    "title": "Fleur Silk - Winnie Polka Dot Pillowcases",
    "collectionName": "Mulberry Silk",
    "productType": "Wellness",
    "colorOrPrint": "Warm-white",
    "colorGroup": "Warm-white",
    "fabric": "Mulberry Silk",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest mulberry silk to elevate your daily sanctuary.",
    "features": [
      "Fleur Silk - Winnie Polka Dot Pillowcases"
    ],
    "materialDetails": [
      "100% Pure Grade 6A 22-Momme Mulberry Silk",
      "22 Momme Silk"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/silk-winnie-polka-dot-pillowcases",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 15750,
    "sourceCompareAtPrice": 19688,
    "demoPricePKR": 15750,
    "demoCompareAtPricePKR": 19688,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Fluer_Silk_Winnie_Polkadot_Pillowcase_1080x.jpg?v=1790034242",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Fluer_Silk_Winnie_Polkadot_Pillowcase_1080x.jpg?v=1790034242",
        "alt": "Fleur Silk - Winnie Polka Dot Pillowcases - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Warm-white"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Winnie-Fleur-Silk-Pillowcase-02_1080x.jpg?v=1788242454",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Winnie-Fleur-Silk-Pillowcase-02_1080x.jpg?v=1788242454",
        "alt": "Fleur Silk - Winnie Polka Dot Pillowcases - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Warm-white"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Winnie-Fleur-Silk-Texture_1080x.jpg?v=1788242455",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Winnie-Fleur-Silk-Texture_1080x.jpg?v=1788242455",
        "alt": "Fleur Silk - Winnie Polka Dot Pillowcases - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Warm-white"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Standard (48x73cm)",
          "King (50x90cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Warm-white"
        ]
      }
    ],
    "variants": [
      {
        "id": "silk-winnie-polka-dot-pillowcases-standard--48x73cm-",
        "sourceVariantId": null,
        "title": "Standard (48x73cm)",
        "sku": "MORFE-SILK-WINNI-1",
        "size": "Standard (48x73cm)",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 15750,
        "sourceCompareAtPrice": 19688,
        "demoPricePKR": 15750,
        "availability": "available"
      },
      {
        "id": "silk-winnie-polka-dot-pillowcases-king--50x90cm-",
        "sourceVariantId": null,
        "title": "King (50x90cm)",
        "sku": "MORFE-SILK-WINNI-2",
        "size": "King (50x90cm)",
        "colorOrPrint": "Warm-white",
        "sourcePrice": 18250,
        "sourceCompareAtPrice": 19688,
        "demoPricePKR": 18250,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 47
  },
  {
    "id": "silk-pillowcases-warm-white",
    "handle": "silk-pillowcases-warm-white",
    "title": "Fleur Silk - Warm White Pillowcases",
    "collectionName": "Mulberry Silk",
    "productType": "Wellness",
    "colorOrPrint": "Neutral",
    "colorGroup": "Neutral",
    "fabric": "Mulberry Silk",
    "description": "Crafted for restorative evenings and tranquil mornings. Made from the purest mulberry silk to elevate your daily sanctuary.",
    "features": [
      "Fleur Silk - Warm White Pillowcases"
    ],
    "materialDetails": [
      "100% Pure Grade 6A 22-Momme Mulberry Silk",
      "22 Momme Silk"
    ],
    "careInstructions": [
      "Machine wash gentle with like colours",
      "Air dry flat away from direct sunlight",
      "Store in a cool dry place"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/silk-pillowcases-warm-white",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 14500,
    "sourceCompareAtPrice": 18125,
    "demoPricePKR": 14500,
    "demoCompareAtPricePKR": 18125,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/FLEUR_SILK_WARM_WHITE_01_1080x.jpg?v=1758608116",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/FLEUR_SILK_WARM_WHITE_01_1080x.jpg?v=1758608116",
        "alt": "Fleur Silk - Warm White Pillowcases - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Neutral"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/FLEUR_SILK_WARM_WHITE_PILLOWCASE_1080x.jpg?v=1758608116",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/FLEUR_SILK_WARM_WHITE_PILLOWCASE_1080x.jpg?v=1758608116",
        "alt": "Fleur Silk - Warm White Pillowcases - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Neutral"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/FLEUR_SILK_WARM_WHITE_PILLOW_FOLD_1080x.jpg?v=1758608116",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/FLEUR_SILK_WARM_WHITE_PILLOW_FOLD_1080x.jpg?v=1758608116",
        "alt": "Fleur Silk - Warm White Pillowcases - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Neutral"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/FLEUR_SILK_WARM_WHITE_PILLOWCASE_DETAIL_1080x.jpg?v=1758608116",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/FLEUR_SILK_WARM_WHITE_PILLOWCASE_DETAIL_1080x.jpg?v=1758608116",
        "alt": "Fleur Silk - Warm White Pillowcases - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Neutral"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/EDEN_POPPY_STRIPE_STYLED_09_1080x.jpg?v=1758608116",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/EDEN_POPPY_STRIPE_STYLED_09_1080x.jpg?v=1758608116",
        "alt": "Fleur Silk - Warm White Pillowcases - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Neutral"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/FLEUR_SILK_WARM_WHITE_TEXTURE_1080x.jpg?v=1758608116",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/FLEUR_SILK_WARM_WHITE_TEXTURE_1080x.jpg?v=1758608116",
        "alt": "Fleur Silk - Warm White Pillowcases - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Neutral"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Standard (48x73cm)",
          "King (50x90cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Neutral"
        ]
      }
    ],
    "variants": [
      {
        "id": "silk-pillowcases-warm-white-standard--48x73cm-",
        "sourceVariantId": null,
        "title": "Standard (48x73cm)",
        "sku": "MORFE-SILK-PILLO-1",
        "size": "Standard (48x73cm)",
        "colorOrPrint": "Neutral",
        "sourcePrice": 14500,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 14500,
        "availability": "available"
      },
      {
        "id": "silk-pillowcases-warm-white-king--50x90cm-",
        "sourceVariantId": null,
        "title": "King (50x90cm)",
        "sku": "MORFE-SILK-PILLO-2",
        "size": "King (50x90cm)",
        "colorOrPrint": "Neutral",
        "sourcePrice": 17000,
        "sourceCompareAtPrice": 18125,
        "demoPricePKR": 17000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 38
  },
  {
    "id": "washed-cotton-cot-fitted-sheet-buddy",
    "handle": "washed-cotton-cot-fitted-sheet-buddy",
    "title": "Leo Washed Cotton - Buddy Cot Fitted Sheet",
    "collectionName": "Leo Washed Cotton",
    "productType": "Kids & Baby",
    "colorOrPrint": "Cot Fitted Sheet Buddy",
    "colorGroup": "Cot Fitted Sheet Buddy",
    "fabric": "Leo Washed Cotton",
    "description": "OEKO-TEX® certified 100% organic washed cotton tailored especially for nursery mattresses. Ultra-gentle on delicate skin with all-around elastic for a safe, secure fit.",
    "features": [
      "Leo Washed Cotton - Buddy Cot Fitted Sheet"
    ],
    "materialDetails": [
      "Pre-washed percale weave with reinforced elastic border",
      "300 Thread Count Organic Cotton"
    ],
    "careInstructions": [
      "Machine wash warm with mild baby-safe detergent",
      "Tumble dry gentle",
      "Safe for sensitive newborn skin"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/washed-cotton-cot-fitted-sheet-buddy",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 7000,
    "sourceCompareAtPrice": 8750,
    "demoPricePKR": 7000,
    "demoCompareAtPricePKR": 8750,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Buddy_Cot_Fitted_Sheet.jpg?v=1787722561",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Buddy_Cot_Fitted_Sheet.jpg?v=1787722561",
        "alt": "Leo Washed Cotton - Buddy Cot Fitted Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Cot Fitted Sheet Buddy"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Cot (77x132cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Cot Fitted Sheet Buddy"
        ]
      }
    ],
    "variants": [
      {
        "id": "washed-cotton-cot-fitted-sheet-buddy-cot--77x132cm-",
        "sourceVariantId": null,
        "title": "Cot (77x132cm)",
        "sku": "MORFE-WASHED-COT-1",
        "size": "Cot (77x132cm)",
        "colorOrPrint": "Cot Fitted Sheet Buddy",
        "sourcePrice": 7000,
        "sourceCompareAtPrice": 8750,
        "demoPricePKR": 7000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 35
  },
  {
    "id": "cot-washed-cotton-fitted-sheet-lala-print",
    "handle": "cot-washed-cotton-fitted-sheet-lala-print",
    "title": "Leo Washed Cotton - Lala Cot Fitted Sheet",
    "collectionName": "Leo Washed Cotton",
    "productType": "Kids & Baby",
    "colorOrPrint": "Cot Fitted Sheet Lala Print",
    "colorGroup": "Cot Fitted Sheet Lala Print",
    "fabric": "Leo Washed Cotton",
    "description": "OEKO-TEX® certified 100% organic washed cotton tailored especially for nursery mattresses. Ultra-gentle on delicate skin with all-around elastic for a safe, secure fit.",
    "features": [
      "Leo Washed Cotton - Lala Cot Fitted Sheet"
    ],
    "materialDetails": [
      "Pre-washed percale weave with reinforced elastic border",
      "300 Thread Count Organic Cotton"
    ],
    "careInstructions": [
      "Machine wash warm with mild baby-safe detergent",
      "Tumble dry gentle",
      "Safe for sensitive newborn skin"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cot-washed-cotton-fitted-sheet-lala-print",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 7000,
    "sourceCompareAtPrice": 8750,
    "demoPricePKR": 7000,
    "demoCompareAtPricePKR": 8750,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/LALA-LEO-WC-COT-FITTED.jpg?v=1785968545",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/LALA-LEO-WC-COT-FITTED.jpg?v=1785968545",
        "alt": "Leo Washed Cotton - Lala Cot Fitted Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Cot Fitted Sheet Lala Print"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Cot (77x132cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Cot Fitted Sheet Lala Print"
        ]
      }
    ],
    "variants": [
      {
        "id": "cot-washed-cotton-fitted-sheet-lala-print-cot--77x132cm-",
        "sourceVariantId": null,
        "title": "Cot (77x132cm)",
        "sku": "MORFE-COT-WASHED-1",
        "size": "Cot (77x132cm)",
        "colorOrPrint": "Cot Fitted Sheet Lala Print",
        "sourcePrice": 7000,
        "sourceCompareAtPrice": 8750,
        "demoPricePKR": 7000,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 17
  },
  {
    "id": "cot-washed-cotton-fitted-sheet-oatmeal-marle",
    "handle": "cot-washed-cotton-fitted-sheet-oatmeal-marle",
    "title": "Leo Washed Cotton - Oatmeal Marle Cot Fitted Sheet",
    "collectionName": "Leo Washed Cotton",
    "productType": "Kids & Baby",
    "colorOrPrint": "Cot Fitted Sheet Oatmeal Marle",
    "colorGroup": "Cot Fitted Sheet Oatmeal Marle",
    "fabric": "Leo Washed Cotton",
    "description": "OEKO-TEX® certified 100% organic washed cotton tailored especially for nursery mattresses. Ultra-gentle on delicate skin with all-around elastic for a safe, secure fit.",
    "features": [
      "Leo Washed Cotton - Oatmeal Marle Cot Fitted Sheet"
    ],
    "materialDetails": [
      "Pre-washed percale weave with reinforced elastic border",
      "300 Thread Count Organic Cotton"
    ],
    "careInstructions": [
      "Machine wash warm with mild baby-safe detergent",
      "Tumble dry gentle",
      "Safe for sensitive newborn skin"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cot-washed-cotton-fitted-sheet-oatmeal-marle",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 7000,
    "sourceCompareAtPrice": 8750,
    "demoPricePKR": 7000,
    "demoCompareAtPricePKR": 8750,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/LEO_OATMEAL_COT_FITTED_SHEET.jpg?v=1789013605",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/LEO_OATMEAL_COT_FITTED_SHEET.jpg?v=1789013605",
        "alt": "Leo Washed Cotton - Oatmeal Marle Cot Fitted Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Cot Fitted Sheet Oatmeal Marle"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Cot (77x132cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Cot Fitted Sheet Oatmeal Marle"
        ]
      }
    ],
    "variants": [
      {
        "id": "cot-washed-cotton-fitted-sheet-oatmeal-marle-cot--77x132cm-",
        "sourceVariantId": null,
        "title": "Cot (77x132cm)",
        "sku": "MORFE-COT-WASHED-1",
        "size": "Cot (77x132cm)",
        "colorOrPrint": "Cot Fitted Sheet Oatmeal Marle",
        "sourcePrice": 7000,
        "sourceCompareAtPrice": 8750,
        "demoPricePKR": 7000,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 30
  },
  {
    "id": "cot-quilt-cover-cosmo-warm-white",
    "handle": "cot-quilt-cover-cosmo-warm-white",
    "title": "Eden Cotton - Cosmo Warm White Cot Quilt Cover",
    "collectionName": "Leo Washed Cotton",
    "productType": "Kids & Baby",
    "colorOrPrint": "Cot Quilt Cover Cosmo Warm White",
    "colorGroup": "Cot Quilt Cover Cosmo Warm White",
    "fabric": "Leo Washed Cotton",
    "description": "OEKO-TEX® certified 100% organic washed cotton tailored especially for nursery mattresses. Ultra-gentle on delicate skin with all-around elastic for a safe, secure fit.",
    "features": [
      "Eden Cotton - Cosmo Warm White Cot Quilt Cover"
    ],
    "materialDetails": [
      "Pre-washed percale weave with reinforced elastic border",
      "300 Thread Count Organic Cotton"
    ],
    "careInstructions": [
      "Machine wash warm with mild baby-safe detergent",
      "Tumble dry gentle",
      "Safe for sensitive newborn skin"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cot-quilt-cover-cosmo-warm-white",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 12250,
    "sourceCompareAtPrice": 15313,
    "demoPricePKR": 12250,
    "demoCompareAtPricePKR": 15313,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/EDEN_COSMO_WARM_WHITECOT_QUILT.jpg?v=1769126467",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/EDEN_COSMO_WARM_WHITECOT_QUILT.jpg?v=1769126467",
        "alt": "Eden Cotton - Cosmo Warm White Cot Quilt Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Cot Quilt Cover Cosmo Warm White"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Cot Quilt (100x120cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Cot Quilt Cover Cosmo Warm White"
        ]
      }
    ],
    "variants": [
      {
        "id": "cot-quilt-cover-cosmo-warm-white-cot-quilt--100x120cm-",
        "sourceVariantId": null,
        "title": "Cot Quilt (100x120cm)",
        "sku": "MORFE-COT-QUILT--1",
        "size": "Cot Quilt (100x120cm)",
        "colorOrPrint": "Cot Quilt Cover Cosmo Warm White",
        "sourcePrice": 12250,
        "sourceCompareAtPrice": 15313,
        "demoPricePKR": 12250,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 21
  },
  {
    "id": "cot-washed-cotton-fitted-sheet-henley-gingham",
    "handle": "cot-washed-cotton-fitted-sheet-henley-gingham",
    "title": "Leo Washed Cotton - Henley Gingham Cot Fitted Sheet",
    "collectionName": "Leo Washed Cotton",
    "productType": "Kids & Baby",
    "colorOrPrint": "Cot Fitted Sheet Henley Gingham",
    "colorGroup": "Cot Fitted Sheet Henley Gingham",
    "fabric": "Leo Washed Cotton",
    "description": "OEKO-TEX® certified 100% organic washed cotton tailored especially for nursery mattresses. Ultra-gentle on delicate skin with all-around elastic for a safe, secure fit.",
    "features": [
      "Leo Washed Cotton - Henley Gingham Cot Fitted Sheet"
    ],
    "materialDetails": [
      "Pre-washed percale weave with reinforced elastic border",
      "300 Thread Count Organic Cotton"
    ],
    "careInstructions": [
      "Machine wash warm with mild baby-safe detergent",
      "Tumble dry gentle",
      "Safe for sensitive newborn skin"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cot-washed-cotton-fitted-sheet-henley-gingham",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 7000,
    "sourceCompareAtPrice": 8750,
    "demoPricePKR": 7000,
    "demoCompareAtPricePKR": 8750,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Henley_Cot_Fitted_Sheet.jpg?v=1784856028",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Henley_Cot_Fitted_Sheet.jpg?v=1784856028",
        "alt": "Leo Washed Cotton - Henley Gingham Cot Fitted Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Cot Fitted Sheet Henley Gingham"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Cot (77x132cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Cot Fitted Sheet Henley Gingham"
        ]
      }
    ],
    "variants": [
      {
        "id": "cot-washed-cotton-fitted-sheet-henley-gingham-cot--77x132cm-",
        "sourceVariantId": null,
        "title": "Cot (77x132cm)",
        "sku": "MORFE-COT-WASHED-1",
        "size": "Cot (77x132cm)",
        "colorOrPrint": "Cot Fitted Sheet Henley Gingham",
        "sourcePrice": 7000,
        "sourceCompareAtPrice": 8750,
        "demoPricePKR": 7000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 38
  },
  {
    "id": "cot-washed-cotton-quilt-cover-oatmeal-marle",
    "handle": "cot-washed-cotton-quilt-cover-oatmeal-marle",
    "title": "Leo Washed Cotton - Oatmeal Marle Cot Quilt Cover",
    "collectionName": "Leo Washed Cotton",
    "productType": "Kids & Baby",
    "colorOrPrint": "Cot Quilt Cover Oatmeal Marle",
    "colorGroup": "Cot Quilt Cover Oatmeal Marle",
    "fabric": "Leo Washed Cotton",
    "description": "OEKO-TEX® certified 100% organic washed cotton tailored especially for nursery mattresses. Ultra-gentle on delicate skin with all-around elastic for a safe, secure fit.",
    "features": [
      "Leo Washed Cotton - Oatmeal Marle Cot Quilt Cover"
    ],
    "materialDetails": [
      "Pre-washed percale weave with reinforced elastic border",
      "300 Thread Count Organic Cotton"
    ],
    "careInstructions": [
      "Machine wash warm with mild baby-safe detergent",
      "Tumble dry gentle",
      "Safe for sensitive newborn skin"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cot-washed-cotton-quilt-cover-oatmeal-marle",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 10250,
    "sourceCompareAtPrice": 12813,
    "demoPricePKR": 10250,
    "demoCompareAtPricePKR": 12813,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/LEO_OATMEAL_COT_QUILT_COVER.jpg?v=1789013296",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/LEO_OATMEAL_COT_QUILT_COVER.jpg?v=1789013296",
        "alt": "Leo Washed Cotton - Oatmeal Marle Cot Quilt Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Cot Quilt Cover Oatmeal Marle"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Cot Quilt (100x120cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Cot Quilt Cover Oatmeal Marle"
        ]
      }
    ],
    "variants": [
      {
        "id": "cot-washed-cotton-quilt-cover-oatmeal-marle-cot-quilt--100x120cm-",
        "sourceVariantId": null,
        "title": "Cot Quilt (100x120cm)",
        "sku": "MORFE-COT-WASHED-1",
        "size": "Cot Quilt (100x120cm)",
        "colorOrPrint": "Cot Quilt Cover Oatmeal Marle",
        "sourcePrice": 10250,
        "sourceCompareAtPrice": 12813,
        "demoPricePKR": 10250,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 22
  },
  {
    "id": "washed-cotton-bassinet-fitted-sheet-buddy",
    "handle": "washed-cotton-bassinet-fitted-sheet-buddy",
    "title": "Leo Washed Cotton - Buddy Bassinet Fitted Sheet",
    "collectionName": "Leo Washed Cotton",
    "productType": "Kids & Baby",
    "colorOrPrint": "Bassinet Fitted Sheet Buddy",
    "colorGroup": "Bassinet Fitted Sheet Buddy",
    "fabric": "Leo Washed Cotton",
    "description": "OEKO-TEX® certified 100% organic washed cotton tailored especially for nursery mattresses. Ultra-gentle on delicate skin with all-around elastic for a safe, secure fit.",
    "features": [
      "Leo Washed Cotton - Buddy Bassinet Fitted Sheet"
    ],
    "materialDetails": [
      "Pre-washed percale weave with reinforced elastic border",
      "300 Thread Count Organic Cotton"
    ],
    "careInstructions": [
      "Machine wash warm with mild baby-safe detergent",
      "Tumble dry gentle",
      "Safe for sensitive newborn skin"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/washed-cotton-bassinet-fitted-sheet-buddy",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 5000,
    "sourceCompareAtPrice": 6250,
    "demoPricePKR": 5000,
    "demoCompareAtPricePKR": 6250,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Buddy_Bassinet_Sheet.jpg?v=1787722562",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Buddy_Bassinet_Sheet.jpg?v=1787722562",
        "alt": "Leo Washed Cotton - Buddy Bassinet Fitted Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Bassinet Fitted Sheet Buddy"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Bassinet (40x80cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Bassinet Fitted Sheet Buddy"
        ]
      }
    ],
    "variants": [
      {
        "id": "washed-cotton-bassinet-fitted-sheet-buddy-bassinet--40x80cm-",
        "sourceVariantId": null,
        "title": "Bassinet (40x80cm)",
        "sku": "MORFE-WASHED-COT-1",
        "size": "Bassinet (40x80cm)",
        "colorOrPrint": "Bassinet Fitted Sheet Buddy",
        "sourcePrice": 5000,
        "sourceCompareAtPrice": 6250,
        "demoPricePKR": 5000,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 48
  },
  {
    "id": "bassinet-washed-cotton-fitted-sheet-hattie-polka-dot",
    "handle": "bassinet-washed-cotton-fitted-sheet-hattie-polka-dot",
    "title": "Leo Washed Cotton - Hattie Polka Dot Bassinet Fitted Sheet",
    "collectionName": "Leo Washed Cotton",
    "productType": "Kids & Baby",
    "colorOrPrint": "Bassinet Fitted Sheet Hattie Polka Dot",
    "colorGroup": "Bassinet Fitted Sheet Hattie Polka Dot",
    "fabric": "Leo Washed Cotton",
    "description": "OEKO-TEX® certified 100% organic washed cotton tailored especially for nursery mattresses. Ultra-gentle on delicate skin with all-around elastic for a safe, secure fit.",
    "features": [
      "Leo Washed Cotton - Hattie Polka Dot Bassinet Fitted Sheet"
    ],
    "materialDetails": [
      "Pre-washed percale weave with reinforced elastic border",
      "300 Thread Count Organic Cotton"
    ],
    "careInstructions": [
      "Machine wash warm with mild baby-safe detergent",
      "Tumble dry gentle",
      "Safe for sensitive newborn skin"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/bassinet-washed-cotton-fitted-sheet-hattie-polka-dot",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 5000,
    "sourceCompareAtPrice": 6250,
    "demoPricePKR": 5000,
    "demoCompareAtPricePKR": 6250,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Hattie_Bassinet_Sheet.jpg?v=1787627764",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Hattie_Bassinet_Sheet.jpg?v=1787627764",
        "alt": "Leo Washed Cotton - Hattie Polka Dot Bassinet Fitted Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Bassinet Fitted Sheet Hattie Polka Dot"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Bassinet (40x80cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Bassinet Fitted Sheet Hattie Polka Dot"
        ]
      }
    ],
    "variants": [
      {
        "id": "bassinet-washed-cotton-fitted-sheet-hattie-polka-dot-bassinet--40x80cm-",
        "sourceVariantId": null,
        "title": "Bassinet (40x80cm)",
        "sku": "MORFE-BASSINET-W-1",
        "size": "Bassinet (40x80cm)",
        "colorOrPrint": "Bassinet Fitted Sheet Hattie Polka Dot",
        "sourcePrice": 5000,
        "sourceCompareAtPrice": 6250,
        "demoPricePKR": 5000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 30
  },
  {
    "id": "cot-washed-cotton-fitted-sheet-cassidy-gingham",
    "handle": "cot-washed-cotton-fitted-sheet-cassidy-gingham",
    "title": "Leo Washed Cotton - Cassidy Gingham Cot Fitted Sheet",
    "collectionName": "Leo Washed Cotton",
    "productType": "Kids & Baby",
    "colorOrPrint": "Cot Fitted Sheet Cassidy Gingham",
    "colorGroup": "Cot Fitted Sheet Cassidy Gingham",
    "fabric": "Leo Washed Cotton",
    "description": "OEKO-TEX® certified 100% organic washed cotton tailored especially for nursery mattresses. Ultra-gentle on delicate skin with all-around elastic for a safe, secure fit.",
    "features": [
      "Leo Washed Cotton - Cassidy Gingham Cot Fitted Sheet"
    ],
    "materialDetails": [
      "Pre-washed percale weave with reinforced elastic border",
      "300 Thread Count Organic Cotton"
    ],
    "careInstructions": [
      "Machine wash warm with mild baby-safe detergent",
      "Tumble dry gentle",
      "Safe for sensitive newborn skin"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cot-washed-cotton-fitted-sheet-cassidy-gingham",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 7000,
    "sourceCompareAtPrice": 8750,
    "demoPricePKR": 7000,
    "demoCompareAtPricePKR": 8750,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Cassidy_Cot_Fitted_Sheet.jpg?v=1787611050",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Cassidy_Cot_Fitted_Sheet.jpg?v=1787611050",
        "alt": "Leo Washed Cotton - Cassidy Gingham Cot Fitted Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Cot Fitted Sheet Cassidy Gingham"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Cot (77x132cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Cot Fitted Sheet Cassidy Gingham"
        ]
      }
    ],
    "variants": [
      {
        "id": "cot-washed-cotton-fitted-sheet-cassidy-gingham-cot--77x132cm-",
        "sourceVariantId": null,
        "title": "Cot (77x132cm)",
        "sku": "MORFE-COT-WASHED-1",
        "size": "Cot (77x132cm)",
        "colorOrPrint": "Cot Fitted Sheet Cassidy Gingham",
        "sourcePrice": 7000,
        "sourceCompareAtPrice": 8750,
        "demoPricePKR": 7000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 40
  },
  {
    "id": "cot-washed-cotton-fitted-sheet-weston-stripe",
    "handle": "cot-washed-cotton-fitted-sheet-weston-stripe",
    "title": "Eden Cotton - Weston Stripe Cot Fitted Sheet",
    "collectionName": "Leo Washed Cotton",
    "productType": "Kids & Baby",
    "colorOrPrint": "Cot Fitted Sheet Weston Stripe",
    "colorGroup": "Cot Fitted Sheet Weston Stripe",
    "fabric": "Leo Washed Cotton",
    "description": "OEKO-TEX® certified 100% organic washed cotton tailored especially for nursery mattresses. Ultra-gentle on delicate skin with all-around elastic for a safe, secure fit.",
    "features": [
      "Eden Cotton - Weston Stripe Cot Fitted Sheet"
    ],
    "materialDetails": [
      "Pre-washed percale weave with reinforced elastic border",
      "300 Thread Count Organic Cotton"
    ],
    "careInstructions": [
      "Machine wash warm with mild baby-safe detergent",
      "Tumble dry gentle",
      "Safe for sensitive newborn skin"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cot-washed-cotton-fitted-sheet-weston-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 8250,
    "sourceCompareAtPrice": 10313,
    "demoPricePKR": 8250,
    "demoCompareAtPricePKR": 10313,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Weston_Cot_Fitted_Sheet.jpg?v=1787611027",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Weston_Cot_Fitted_Sheet.jpg?v=1787611027",
        "alt": "Eden Cotton - Weston Stripe Cot Fitted Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Cot Fitted Sheet Weston Stripe"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Cot (77x132cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Cot Fitted Sheet Weston Stripe"
        ]
      }
    ],
    "variants": [
      {
        "id": "cot-washed-cotton-fitted-sheet-weston-stripe-cot--77x132cm-",
        "sourceVariantId": null,
        "title": "Cot (77x132cm)",
        "sku": "MORFE-COT-WASHED-1",
        "size": "Cot (77x132cm)",
        "colorOrPrint": "Cot Fitted Sheet Weston Stripe",
        "sourcePrice": 8250,
        "sourceCompareAtPrice": 10313,
        "demoPricePKR": 8250,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 36
  },
  {
    "id": "bassinet-washed-cotton-fitted-sheet-lala-print",
    "handle": "bassinet-washed-cotton-fitted-sheet-lala-print",
    "title": "Leo Washed Cotton - Lala Bassinet Fitted Sheet",
    "collectionName": "Leo Washed Cotton",
    "productType": "Kids & Baby",
    "colorOrPrint": "Bassinet Fitted Sheet Lala Print",
    "colorGroup": "Bassinet Fitted Sheet Lala Print",
    "fabric": "Leo Washed Cotton",
    "description": "OEKO-TEX® certified 100% organic washed cotton tailored especially for nursery mattresses. Ultra-gentle on delicate skin with all-around elastic for a safe, secure fit.",
    "features": [
      "Leo Washed Cotton - Lala Bassinet Fitted Sheet"
    ],
    "materialDetails": [
      "Pre-washed percale weave with reinforced elastic border",
      "300 Thread Count Organic Cotton"
    ],
    "careInstructions": [
      "Machine wash warm with mild baby-safe detergent",
      "Tumble dry gentle",
      "Safe for sensitive newborn skin"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/bassinet-washed-cotton-fitted-sheet-lala-print",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 5000,
    "sourceCompareAtPrice": 6250,
    "demoPricePKR": 5000,
    "demoCompareAtPricePKR": 6250,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/LALA-LEO-WC-BASSINET.jpg?v=1785968545",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/LALA-LEO-WC-BASSINET.jpg?v=1785968545",
        "alt": "Leo Washed Cotton - Lala Bassinet Fitted Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Bassinet Fitted Sheet Lala Print"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Bassinet (40x80cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Bassinet Fitted Sheet Lala Print"
        ]
      }
    ],
    "variants": [
      {
        "id": "bassinet-washed-cotton-fitted-sheet-lala-print-bassinet--40x80cm-",
        "sourceVariantId": null,
        "title": "Bassinet (40x80cm)",
        "sku": "MORFE-BASSINET-W-1",
        "size": "Bassinet (40x80cm)",
        "colorOrPrint": "Bassinet Fitted Sheet Lala Print",
        "sourcePrice": 5000,
        "sourceCompareAtPrice": 6250,
        "demoPricePKR": 5000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 52
  },
  {
    "id": "cot-washed-cotton-fitted-sheet-hattie-polka-dot",
    "handle": "cot-washed-cotton-fitted-sheet-hattie-polka-dot",
    "title": "Leo Washed Cotton - Hattie Polka Dot Cot Fitted Sheet",
    "collectionName": "Leo Washed Cotton",
    "productType": "Kids & Baby",
    "colorOrPrint": "Cot Fitted Sheet Hattie Polka Dot",
    "colorGroup": "Cot Fitted Sheet Hattie Polka Dot",
    "fabric": "Leo Washed Cotton",
    "description": "OEKO-TEX® certified 100% organic washed cotton tailored especially for nursery mattresses. Ultra-gentle on delicate skin with all-around elastic for a safe, secure fit.",
    "features": [
      "Leo Washed Cotton - Hattie Polka Dot Cot Fitted Sheet"
    ],
    "materialDetails": [
      "Pre-washed percale weave with reinforced elastic border",
      "300 Thread Count Organic Cotton"
    ],
    "careInstructions": [
      "Machine wash warm with mild baby-safe detergent",
      "Tumble dry gentle",
      "Safe for sensitive newborn skin"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cot-washed-cotton-fitted-sheet-hattie-polka-dot",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 7000,
    "sourceCompareAtPrice": 8750,
    "demoPricePKR": 7000,
    "demoCompareAtPricePKR": 8750,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Hattie_Cot_Fitted_Sheet.jpg?v=1787627763",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Hattie_Cot_Fitted_Sheet.jpg?v=1787627763",
        "alt": "Leo Washed Cotton - Hattie Polka Dot Cot Fitted Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Cot Fitted Sheet Hattie Polka Dot"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Cot (77x132cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Cot Fitted Sheet Hattie Polka Dot"
        ]
      }
    ],
    "variants": [
      {
        "id": "cot-washed-cotton-fitted-sheet-hattie-polka-dot-cot--77x132cm-",
        "sourceVariantId": null,
        "title": "Cot (77x132cm)",
        "sku": "MORFE-COT-WASHED-1",
        "size": "Cot (77x132cm)",
        "colorOrPrint": "Cot Fitted Sheet Hattie Polka Dot",
        "sourcePrice": 7000,
        "sourceCompareAtPrice": 8750,
        "demoPricePKR": 7000,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 26
  },
  {
    "id": "bassinet-washed-cotton-fitted-sheet-cassidy-gingham",
    "handle": "bassinet-washed-cotton-fitted-sheet-cassidy-gingham",
    "title": "Leo Washed Cotton - Cassidy Gingham Bassinet Fitted Sheet",
    "collectionName": "Leo Washed Cotton",
    "productType": "Kids & Baby",
    "colorOrPrint": "Bassinet Fitted Sheet Cassidy Gingham",
    "colorGroup": "Bassinet Fitted Sheet Cassidy Gingham",
    "fabric": "Leo Washed Cotton",
    "description": "OEKO-TEX® certified 100% organic washed cotton tailored especially for nursery mattresses. Ultra-gentle on delicate skin with all-around elastic for a safe, secure fit.",
    "features": [
      "Leo Washed Cotton - Cassidy Gingham Bassinet Fitted Sheet"
    ],
    "materialDetails": [
      "Pre-washed percale weave with reinforced elastic border",
      "300 Thread Count Organic Cotton"
    ],
    "careInstructions": [
      "Machine wash warm with mild baby-safe detergent",
      "Tumble dry gentle",
      "Safe for sensitive newborn skin"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/bassinet-washed-cotton-fitted-sheet-cassidy-gingham",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 5000,
    "sourceCompareAtPrice": 6250,
    "demoPricePKR": 5000,
    "demoCompareAtPricePKR": 6250,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Cassidy_Bassinet_Sheet.jpg?v=1791153638",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Cassidy_Bassinet_Sheet.jpg?v=1791153638",
        "alt": "Leo Washed Cotton - Cassidy Gingham Bassinet Fitted Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Bassinet Fitted Sheet Cassidy Gingham"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Bassinet (40x80cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Bassinet Fitted Sheet Cassidy Gingham"
        ]
      }
    ],
    "variants": [
      {
        "id": "bassinet-washed-cotton-fitted-sheet-cassidy-gingham-bassinet--40x80cm-",
        "sourceVariantId": null,
        "title": "Bassinet (40x80cm)",
        "sku": "MORFE-BASSINET-W-1",
        "size": "Bassinet (40x80cm)",
        "colorOrPrint": "Bassinet Fitted Sheet Cassidy Gingham",
        "sourcePrice": 5000,
        "sourceCompareAtPrice": 6250,
        "demoPricePKR": 5000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 34
  },
  {
    "id": "cot-washed-cotton-fitted-sheet-midnight-rodeo-stripe",
    "handle": "cot-washed-cotton-fitted-sheet-midnight-rodeo-stripe",
    "title": "Leo Washed Cotton - Midnight Rodeo Cot Fitted Sheet",
    "collectionName": "Leo Washed Cotton",
    "productType": "Kids & Baby",
    "colorOrPrint": "Cot Fitted Sheet Midnight Rodeo Stripe",
    "colorGroup": "Cot Fitted Sheet Midnight Rodeo Stripe",
    "fabric": "Leo Washed Cotton",
    "description": "OEKO-TEX® certified 100% organic washed cotton tailored especially for nursery mattresses. Ultra-gentle on delicate skin with all-around elastic for a safe, secure fit.",
    "features": [
      "Leo Washed Cotton - Midnight Rodeo Cot Fitted Sheet"
    ],
    "materialDetails": [
      "Pre-washed percale weave with reinforced elastic border",
      "300 Thread Count Organic Cotton"
    ],
    "careInstructions": [
      "Machine wash warm with mild baby-safe detergent",
      "Tumble dry gentle",
      "Safe for sensitive newborn skin"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/cot-washed-cotton-fitted-sheet-midnight-rodeo-stripe",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 7000,
    "sourceCompareAtPrice": 8750,
    "demoPricePKR": 7000,
    "demoCompareAtPricePKR": 8750,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Washed_Cotton_Midnight_Rodeo_Cot_Sheet.jpg?v=1783485684",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Washed_Cotton_Midnight_Rodeo_Cot_Sheet.jpg?v=1783485684",
        "alt": "Leo Washed Cotton - Midnight Rodeo Cot Fitted Sheet - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Cot Fitted Sheet Midnight Rodeo Stripe"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Cot (77x132cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Cot Fitted Sheet Midnight Rodeo Stripe"
        ]
      }
    ],
    "variants": [
      {
        "id": "cot-washed-cotton-fitted-sheet-midnight-rodeo-stripe-cot--77x132cm-",
        "sourceVariantId": null,
        "title": "Cot (77x132cm)",
        "sku": "MORFE-COT-WASHED-1",
        "size": "Cot (77x132cm)",
        "colorOrPrint": "Cot Fitted Sheet Midnight Rodeo Stripe",
        "sourcePrice": 7000,
        "sourceCompareAtPrice": 8750,
        "demoPricePKR": 7000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 27
  },
  {
    "id": "washed-cotton-cot-quilt-cover-buddy",
    "handle": "washed-cotton-cot-quilt-cover-buddy",
    "title": "Leo Washed Cotton - Buddy Cot Quilt Cover",
    "collectionName": "Leo Washed Cotton",
    "productType": "Kids & Baby",
    "colorOrPrint": "Cot Quilt Cover Buddy",
    "colorGroup": "Cot Quilt Cover Buddy",
    "fabric": "Leo Washed Cotton",
    "description": "OEKO-TEX® certified 100% organic washed cotton tailored especially for nursery mattresses. Ultra-gentle on delicate skin with all-around elastic for a safe, secure fit.",
    "features": [
      "Leo Washed Cotton - Buddy Cot Quilt Cover"
    ],
    "materialDetails": [
      "Pre-washed percale weave with reinforced elastic border",
      "300 Thread Count Organic Cotton"
    ],
    "careInstructions": [
      "Machine wash warm with mild baby-safe detergent",
      "Tumble dry gentle",
      "Safe for sensitive newborn skin"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/washed-cotton-cot-quilt-cover-buddy",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 10250,
    "sourceCompareAtPrice": 12813,
    "demoPricePKR": 10250,
    "demoCompareAtPricePKR": 12813,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Buddy_Cot_Quilt_Cover.jpg?v=1787722562",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Buddy_Cot_Quilt_Cover.jpg?v=1787722562",
        "alt": "Leo Washed Cotton - Buddy Cot Quilt Cover - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Cot Quilt Cover Buddy"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Cot Quilt (100x120cm)"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Cot Quilt Cover Buddy"
        ]
      }
    ],
    "variants": [
      {
        "id": "washed-cotton-cot-quilt-cover-buddy-cot-quilt--100x120cm-",
        "sourceVariantId": null,
        "title": "Cot Quilt (100x120cm)",
        "sku": "MORFE-WASHED-COT-1",
        "size": "Cot Quilt (100x120cm)",
        "colorOrPrint": "Cot Quilt Cover Buddy",
        "sourcePrice": 10250,
        "sourceCompareAtPrice": 12813,
        "demoPricePKR": 10250,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 32
  },
  {
    "id": "bed-sheets-winnie-polka-dot",
    "handle": "bed-sheets-winnie-polka-dot",
    "title": "Eden Cotton - Winnie Polka Dot Bed Sheets",
    "collectionName": "Eden Cotton",
    "productType": "Bed Sheets & Sets",
    "colorOrPrint": "Polka dot",
    "colorGroup": "Polka dot",
    "fabric": "Eden Cotton",
    "description": "The complete coordinated sleep suite. Includes 1x fitted sheet with our signature 55cm deep elastic wall, 1x tailored flat sheet, and 2x matching envelope pillowcases.",
    "features": [
      "1x 55cm Deep Wall Fitted Sheet",
      "1x Tailored Double-Hem Flat Sheet",
      "2x Envelope Standard Pillowcases"
    ],
    "materialDetails": [
      "Smooth buttery sateen / washed percale weave pre-softened with natural enzymes",
      "400 Thread Count Long-Staple Cotton"
    ],
    "careInstructions": [
      "Warm machine wash with gentle liquid detergent",
      "Line dry or tumble dry low",
      "Do not dry clean"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/bed-sheets-winnie-polka-dot",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 18000,
    "sourceCompareAtPrice": 23400,
    "demoPricePKR": 18000,
    "demoCompareAtPricePKR": 23400,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Winnie_Polkadot_Sheets.jpg?v=1767764663",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Winnie_Polkadot_Sheets.jpg?v=1767764663",
        "alt": "Eden Cotton - Winnie Polka Dot Bed Sheets - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Polka dot"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Winnie_Polkadot_Fitted_Sheet.jpg?v=1767764665",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Winnie_Polkadot_Fitted_Sheet.jpg?v=1767764665",
        "alt": "Eden Cotton - Winnie Polka Dot Bed Sheets - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Polka dot"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Winnie_Polkadot_Fitted_Sheet_Depth.jpg?v=1767764664",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Winnie_Polkadot_Fitted_Sheet_Depth.jpg?v=1767764664",
        "alt": "Eden Cotton - Winnie Polka Dot Bed Sheets - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Polka dot"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Winnie_Polkadot_Flat_Sheet.jpg?v=1767764664",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Winnie_Polkadot_Flat_Sheet.jpg?v=1767764664",
        "alt": "Eden Cotton - Winnie Polka Dot Bed Sheets - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Polka dot"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Winnie_Polkadot_Pillowcases.jpg?v=1767764662",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Winnie_Polkadot_Pillowcases.jpg?v=1767764662",
        "alt": "Eden Cotton - Winnie Polka Dot Bed Sheets - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Polka dot"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Winnie_Polkadot_Pillow_Fold.jpg?v=1767764663",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Winnie_Polkadot_Pillow_Fold.jpg?v=1767764663",
        "alt": "Eden Cotton - Winnie Polka Dot Bed Sheets - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Polka dot"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Winnie_Polkadot_Texture.jpg?v=1767764665",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Winnie_Polkadot_Texture.jpg?v=1767764665",
        "alt": "Eden Cotton - Winnie Polka Dot Bed Sheets - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Polka dot"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Polka dot"
        ]
      }
    ],
    "variants": [
      {
        "id": "bed-sheets-winnie-polka-dot-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-BED-SHEETS-1",
        "size": "Double",
        "colorOrPrint": "Polka dot",
        "sourcePrice": 14000,
        "sourceCompareAtPrice": 23400,
        "demoPricePKR": 14000,
        "availability": "available"
      },
      {
        "id": "bed-sheets-winnie-polka-dot-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-BED-SHEETS-2",
        "size": "Queen",
        "colorOrPrint": "Polka dot",
        "sourcePrice": 18000,
        "sourceCompareAtPrice": 23400,
        "demoPricePKR": 18000,
        "availability": "available"
      },
      {
        "id": "bed-sheets-winnie-polka-dot-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-BED-SHEETS-3",
        "size": "King",
        "colorOrPrint": "Polka dot",
        "sourcePrice": 22000,
        "sourceCompareAtPrice": 23400,
        "demoPricePKR": 22000,
        "availability": "available"
      },
      {
        "id": "bed-sheets-winnie-polka-dot-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-BED-SHEETS-4",
        "size": "Super King",
        "colorOrPrint": "Polka dot",
        "sourcePrice": 26000,
        "sourceCompareAtPrice": 23400,
        "demoPricePKR": 26000,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 80
  },
  {
    "id": "bed-sheets-chocolate",
    "handle": "bed-sheets-chocolate",
    "title": "Eden Cotton - Chocolate Bed Sheets",
    "collectionName": "Eden Cotton",
    "productType": "Bed Sheets & Sets",
    "colorOrPrint": "Sheets chocolate",
    "colorGroup": "Sheets chocolate",
    "fabric": "Eden Cotton",
    "description": "The complete coordinated sleep suite. Includes 1x fitted sheet with our signature 55cm deep elastic wall, 1x tailored flat sheet, and 2x matching envelope pillowcases.",
    "features": [
      "1x 55cm Deep Wall Fitted Sheet",
      "1x Tailored Double-Hem Flat Sheet",
      "2x Envelope Standard Pillowcases"
    ],
    "materialDetails": [
      "Smooth buttery sateen / washed percale weave pre-softened with natural enzymes",
      "400 Thread Count Long-Staple Cotton"
    ],
    "careInstructions": [
      "Warm machine wash with gentle liquid detergent",
      "Line dry or tumble dry low",
      "Do not dry clean"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/bed-sheets-chocolate",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 25000,
    "sourceCompareAtPrice": 32500,
    "demoPricePKR": 25000,
    "demoCompareAtPricePKR": 32500,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Chocolate_Sheets.jpg?v=1766461031",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Chocolate_Sheets.jpg?v=1766461031",
        "alt": "Eden Cotton - Chocolate Bed Sheets - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Sheets chocolate"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Chocolate_Fitted_Sheet.jpg?v=1766461031",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Chocolate_Fitted_Sheet.jpg?v=1766461031",
        "alt": "Eden Cotton - Chocolate Bed Sheets - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Sheets chocolate"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Chocolate_Fitted_Sheet_Depth.jpg?v=1766461030",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Chocolate_Fitted_Sheet_Depth.jpg?v=1766461030",
        "alt": "Eden Cotton - Chocolate Bed Sheets - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Sheets chocolate"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Chocolate_Flat_Sheet.jpg?v=1766461031",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Chocolate_Flat_Sheet.jpg?v=1766461031",
        "alt": "Eden Cotton - Chocolate Bed Sheets - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Sheets chocolate"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Chocolate_Pillowcases.jpg?v=1766461030",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Chocolate_Pillowcases.jpg?v=1766461030",
        "alt": "Eden Cotton - Chocolate Bed Sheets - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Sheets chocolate"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Chocolate_Pillowcase_Fold.jpg?v=1766461031",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Chocolate_Pillowcase_Fold.jpg?v=1766461031",
        "alt": "Eden Cotton - Chocolate Bed Sheets - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Sheets chocolate"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Chocolate_Texture.jpg?v=1766461032",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_Chocolate_Texture.jpg?v=1766461032",
        "alt": "Eden Cotton - Chocolate Bed Sheets - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Sheets chocolate"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Sheets chocolate"
        ]
      }
    ],
    "variants": [
      {
        "id": "bed-sheets-chocolate-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-BED-SHEETS-1",
        "size": "Double",
        "colorOrPrint": "Sheets chocolate",
        "sourcePrice": 21000,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 21000,
        "availability": "available"
      },
      {
        "id": "bed-sheets-chocolate-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-BED-SHEETS-2",
        "size": "Queen",
        "colorOrPrint": "Sheets chocolate",
        "sourcePrice": 25000,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 25000,
        "availability": "available"
      },
      {
        "id": "bed-sheets-chocolate-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-BED-SHEETS-3",
        "size": "King",
        "colorOrPrint": "Sheets chocolate",
        "sourcePrice": 29000,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 29000,
        "availability": "available"
      },
      {
        "id": "bed-sheets-chocolate-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-BED-SHEETS-4",
        "size": "Super King",
        "colorOrPrint": "Sheets chocolate",
        "sourcePrice": 33000,
        "sourceCompareAtPrice": 32500,
        "demoPricePKR": 33000,
        "availability": "available"
      }
    ],
    "rating": 5,
    "reviewsCount": 140
  },
  {
    "id": "washed-cotton-bed-sheets-rue",
    "handle": "washed-cotton-bed-sheets-rue",
    "title": "Leo Washed Cotton - Rue Stripe Bed Sheets",
    "collectionName": "Leo Washed Cotton",
    "productType": "Bed Sheets & Sets",
    "colorOrPrint": "Sheets rue",
    "colorGroup": "Sheets rue",
    "fabric": "Leo Washed Cotton",
    "description": "The complete coordinated sleep suite. Includes 1x fitted sheet with our signature 55cm deep elastic wall, 1x tailored flat sheet, and 2x matching envelope pillowcases.",
    "features": [
      "1x 55cm Deep Wall Fitted Sheet",
      "1x Tailored Double-Hem Flat Sheet",
      "2x Envelope Standard Pillowcases"
    ],
    "materialDetails": [
      "Smooth buttery sateen / washed percale weave pre-softened with natural enzymes",
      "400 Thread Count Long-Staple Cotton"
    ],
    "careInstructions": [
      "Warm machine wash with gentle liquid detergent",
      "Line dry or tumble dry low",
      "Do not dry clean"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/washed-cotton-bed-sheets-rue",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 11000,
    "sourceCompareAtPrice": 14300,
    "demoPricePKR": 11000,
    "demoCompareAtPricePKR": 14300,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Rue_Stripe_Sheets_459ce0aa-3649-4bc5-a88a-a10b4db8a603.jpg?v=1747611844",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Rue_Stripe_Sheets_459ce0aa-3649-4bc5-a88a-a10b4db8a603.jpg?v=1747611844",
        "alt": "Leo Washed Cotton - Rue Stripe Bed Sheets - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Sheets rue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Rue_Stripe_Styled.jpg?v=1747978320",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Rue_Stripe_Styled.jpg?v=1747978320",
        "alt": "Leo Washed Cotton - Rue Stripe Bed Sheets - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Sheets rue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Rue_Stripe_Fitted_Sheet_69c3a632-96d1-462d-a2f0-d38fbe0dcd83.jpg?v=1747978320",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Rue_Stripe_Fitted_Sheet_69c3a632-96d1-462d-a2f0-d38fbe0dcd83.jpg?v=1747978320",
        "alt": "Leo Washed Cotton - Rue Stripe Bed Sheets - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Sheets rue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Rue_Stripe_Fitted_Depth_cd9c054e-a6a2-488e-99c0-cf3b410ba309.jpg?v=1747978320",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Rue_Stripe_Fitted_Depth_cd9c054e-a6a2-488e-99c0-cf3b410ba309.jpg?v=1747978320",
        "alt": "Leo Washed Cotton - Rue Stripe Bed Sheets - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Sheets rue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Rue_Stripe_Flat_Sheet_9a39ffc0-f739-4e97-9b90-0ab6b0dcdf77.jpg?v=1747978320",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Rue_Stripe_Flat_Sheet_9a39ffc0-f739-4e97-9b90-0ab6b0dcdf77.jpg?v=1747978320",
        "alt": "Leo Washed Cotton - Rue Stripe Bed Sheets - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Sheets rue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Rue_Stripe_Pillowcases_19d724ae-6fb3-4863-8ddc-b35c3e28e319.jpg?v=1747978320",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Rue_Stripe_Pillowcases_19d724ae-6fb3-4863-8ddc-b35c3e28e319.jpg?v=1747978320",
        "alt": "Leo Washed Cotton - Rue Stripe Bed Sheets - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Sheets rue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Rue_Stripe_Pillow_Fold_f68d2882-8782-459d-a922-d267b1671af1.jpg?v=1747978320",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Rue_Stripe_Pillow_Fold_f68d2882-8782-459d-a922-d267b1671af1.jpg?v=1747978320",
        "alt": "Leo Washed Cotton - Rue Stripe Bed Sheets - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Sheets rue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Rue_Stripe_Texture_39e6cf19-21b8-4684-81a6-a1bd7776ea9b.jpg?v=1747978320",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Leo_Rue_Stripe_Texture_39e6cf19-21b8-4684-81a6-a1bd7776ea9b.jpg?v=1747978320",
        "alt": "Leo Washed Cotton - Rue Stripe Bed Sheets - View 8",
        "role": "gallery",
        "position": 8,
        "colorOrPrint": "Sheets rue"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Sheets rue"
        ]
      }
    ],
    "variants": [
      {
        "id": "washed-cotton-bed-sheets-rue-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-WASHED-COT-1",
        "size": "Double",
        "colorOrPrint": "Sheets rue",
        "sourcePrice": 7000,
        "sourceCompareAtPrice": 14300,
        "demoPricePKR": 7000,
        "availability": "available"
      },
      {
        "id": "washed-cotton-bed-sheets-rue-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-WASHED-COT-2",
        "size": "Queen",
        "colorOrPrint": "Sheets rue",
        "sourcePrice": 11000,
        "sourceCompareAtPrice": 14300,
        "demoPricePKR": 11000,
        "availability": "available"
      },
      {
        "id": "washed-cotton-bed-sheets-rue-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-WASHED-COT-3",
        "size": "King",
        "colorOrPrint": "Sheets rue",
        "sourcePrice": 15000,
        "sourceCompareAtPrice": 14300,
        "demoPricePKR": 15000,
        "availability": "available"
      },
      {
        "id": "washed-cotton-bed-sheets-rue-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-WASHED-COT-4",
        "size": "Super King",
        "colorOrPrint": "Sheets rue",
        "sourcePrice": 19000,
        "sourceCompareAtPrice": 14300,
        "demoPricePKR": 19000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 71
  },
  {
    "id": "bed-sheets-white",
    "handle": "bed-sheets-white",
    "title": "Eden Cotton - White Bed Sheets",
    "collectionName": "Eden Cotton",
    "productType": "Bed Sheets & Sets",
    "colorOrPrint": "Sheets white",
    "colorGroup": "Sheets white",
    "fabric": "Eden Cotton",
    "description": "The complete coordinated sleep suite. Includes 1x fitted sheet with our signature 55cm deep elastic wall, 1x tailored flat sheet, and 2x matching envelope pillowcases.",
    "features": [
      "1x 55cm Deep Wall Fitted Sheet",
      "1x Tailored Double-Hem Flat Sheet",
      "2x Envelope Standard Pillowcases"
    ],
    "materialDetails": [
      "Smooth buttery sateen / washed percale weave pre-softened with natural enzymes",
      "400 Thread Count Long-Staple Cotton"
    ],
    "careInstructions": [
      "Warm machine wash with gentle liquid detergent",
      "Line dry or tumble dry low",
      "Do not dry clean"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/bed-sheets-white",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 22000,
    "sourceCompareAtPrice": 28600,
    "demoPricePKR": 22000,
    "demoCompareAtPricePKR": 28600,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_White_Sheets_626b2bf9-8672-4730-a739-f69a0e80a863.jpg?v=1730090481",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_White_Sheets_626b2bf9-8672-4730-a739-f69a0e80a863.jpg?v=1730090481",
        "alt": "Eden Cotton - White Bed Sheets - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Sheets white"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/White_Eden_Fitted_Sheet_c0143d2d-8e09-4468-b465-df2a127abe07.jpg?v=1730090484",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/White_Eden_Fitted_Sheet_c0143d2d-8e09-4468-b465-df2a127abe07.jpg?v=1730090484",
        "alt": "Eden Cotton - White Bed Sheets - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Sheets white"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/White_Eden_Fitted_Detail_64f3656e-13b0-4b84-b92d-fabd38030eef.jpg?v=1730090483",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/White_Eden_Fitted_Detail_64f3656e-13b0-4b84-b92d-fabd38030eef.jpg?v=1730090483",
        "alt": "Eden Cotton - White Bed Sheets - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Sheets white"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_White_Euro_10ffb6af-be49-4d57-8914-8e22b4c72830.jpg?v=1730090477",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_White_Euro_10ffb6af-be49-4d57-8914-8e22b4c72830.jpg?v=1730090477",
        "alt": "Eden Cotton - White Bed Sheets - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Sheets white"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_White_Flat_Sheet_bc98727b-d6a1-4171-b620-6fbd4272265b.jpg?v=1730090476",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_White_Flat_Sheet_bc98727b-d6a1-4171-b620-6fbd4272265b.jpg?v=1730090476",
        "alt": "Eden Cotton - White Bed Sheets - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Sheets white"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_White_Pillowcases_9faa4a4a-d3f2-4b70-842b-cd2e7846bde0.jpg?v=1730090477",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_White_Pillowcases_9faa4a4a-d3f2-4b70-842b-cd2e7846bde0.jpg?v=1730090477",
        "alt": "Eden Cotton - White Bed Sheets - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Sheets white"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_White_Pillow_Fold_c79947f0-2c46-415d-b54a-29fb635f8858.jpg?v=1730090483",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_White_Pillow_Fold_c79947f0-2c46-415d-b54a-29fb635f8858.jpg?v=1730090483",
        "alt": "Eden Cotton - White Bed Sheets - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Sheets white"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_White_Texture_42793088-2c73-492f-86a5-61a6399b4143.jpg?v=1730090487",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eden_White_Texture_42793088-2c73-492f-86a5-61a6399b4143.jpg?v=1730090487",
        "alt": "Eden Cotton - White Bed Sheets - View 8",
        "role": "gallery",
        "position": 8,
        "colorOrPrint": "Sheets white"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Sheets white"
        ]
      }
    ],
    "variants": [
      {
        "id": "bed-sheets-white-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-BED-SHEETS-1",
        "size": "Double",
        "colorOrPrint": "Sheets white",
        "sourcePrice": 18000,
        "sourceCompareAtPrice": 28600,
        "demoPricePKR": 18000,
        "availability": "available"
      },
      {
        "id": "bed-sheets-white-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-BED-SHEETS-2",
        "size": "Queen",
        "colorOrPrint": "Sheets white",
        "sourcePrice": 22000,
        "sourceCompareAtPrice": 28600,
        "demoPricePKR": 22000,
        "availability": "available"
      },
      {
        "id": "bed-sheets-white-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-BED-SHEETS-3",
        "size": "King",
        "colorOrPrint": "Sheets white",
        "sourcePrice": 26000,
        "sourceCompareAtPrice": 28600,
        "demoPricePKR": 26000,
        "availability": "available"
      },
      {
        "id": "bed-sheets-white-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-BED-SHEETS-4",
        "size": "Super King",
        "colorOrPrint": "Sheets white",
        "sourcePrice": 30000,
        "sourceCompareAtPrice": 28600,
        "demoPricePKR": 30000,
        "availability": "available"
      }
    ],
    "rating": 4.8,
    "reviewsCount": 76
  },
  {
    "id": "striped-bed-sheets-sage",
    "handle": "striped-bed-sheets-sage",
    "title": "Leo Washed Cotton - Sage Stripe Bed Sheets",
    "collectionName": "Leo Washed Cotton",
    "productType": "Bed Sheets & Sets",
    "colorOrPrint": "Sheets sage",
    "colorGroup": "Sheets sage",
    "fabric": "Leo Washed Cotton",
    "description": "The complete coordinated sleep suite. Includes 1x fitted sheet with our signature 55cm deep elastic wall, 1x tailored flat sheet, and 2x matching envelope pillowcases.",
    "features": [
      "1x 55cm Deep Wall Fitted Sheet",
      "1x Tailored Double-Hem Flat Sheet",
      "2x Envelope Standard Pillowcases"
    ],
    "materialDetails": [
      "Smooth buttery sateen / washed percale weave pre-softened with natural enzymes",
      "400 Thread Count Long-Staple Cotton"
    ],
    "careInstructions": [
      "Warm machine wash with gentle liquid detergent",
      "Line dry or tumble dry low",
      "Do not dry clean"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/striped-bed-sheets-sage",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 18000,
    "sourceCompareAtPrice": 23400,
    "demoPricePKR": 18000,
    "demoCompareAtPricePKR": 23400,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/Leo_Sage_Stripe_Sheets_Pillow_dc841131-aa5c-4cef-973a-979b12c750fa.jpg?v=1669086058",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/Leo_Sage_Stripe_Sheets_Pillow_dc841131-aa5c-4cef-973a-979b12c750fa.jpg?v=1669086058",
        "alt": "Leo Washed Cotton - Sage Stripe Bed Sheets - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Sheets sage"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/Leo_Sage_Stripe_Sheets_f943ec71-addc-4b64-8dc9-84ce274b66f0.jpg?v=1669086058",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/Leo_Sage_Stripe_Sheets_f943ec71-addc-4b64-8dc9-84ce274b66f0.jpg?v=1669086058",
        "alt": "Leo Washed Cotton - Sage Stripe Bed Sheets - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Sheets sage"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/TheSheetSociety_Leo_Sage_07_554fa4dd-44d9-45db-86c8-abfbc9a230b0.jpg?v=1669086058",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/TheSheetSociety_Leo_Sage_07_554fa4dd-44d9-45db-86c8-abfbc9a230b0.jpg?v=1669086058",
        "alt": "Leo Washed Cotton - Sage Stripe Bed Sheets - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Sheets sage"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/TheSheetSociety_Leo_Sage_05_1eee25f0-ccb1-45b4-ae95-2f18083c8be2.jpg?v=1669086058",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/TheSheetSociety_Leo_Sage_05_1eee25f0-ccb1-45b4-ae95-2f18083c8be2.jpg?v=1669086058",
        "alt": "Leo Washed Cotton - Sage Stripe Bed Sheets - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Sheets sage"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/Leo_Sage_Stripe_Fitted_Sheet_Detail.jpg?v=1669086058",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/Leo_Sage_Stripe_Fitted_Sheet_Detail.jpg?v=1669086058",
        "alt": "Leo Washed Cotton - Sage Stripe Bed Sheets - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Sheets sage"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/TheSheetSociety_Leo_Sage_08_9b83122b-a033-418d-8700-d282b4e0fa1d.jpg?v=1669086058",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/TheSheetSociety_Leo_Sage_08_9b83122b-a033-418d-8700-d282b4e0fa1d.jpg?v=1669086058",
        "alt": "Leo Washed Cotton - Sage Stripe Bed Sheets - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Sheets sage"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/Leo_Sage_Stripe_Pillow_Fold_5f7930cb-883e-4d61-876f-1dcd6293caac.jpg?v=1669086058",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/Leo_Sage_Stripe_Pillow_Fold_5f7930cb-883e-4d61-876f-1dcd6293caac.jpg?v=1669086058",
        "alt": "Leo Washed Cotton - Sage Stripe Bed Sheets - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Sheets sage"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Sage_Stripe_Leo_Fitted_Sheet.jpg?v=1730071349",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Sage_Stripe_Leo_Fitted_Sheet.jpg?v=1730071349",
        "alt": "Leo Washed Cotton - Sage Stripe Bed Sheets - View 8",
        "role": "gallery",
        "position": 8,
        "colorOrPrint": "Sheets sage"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/Leo_Sage_Stripe_Styled_0cfb74b0-5fc7-47b8-b5f6-c9c5167bcc43.jpg?v=1669086058",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/Leo_Sage_Stripe_Styled_0cfb74b0-5fc7-47b8-b5f6-c9c5167bcc43.jpg?v=1669086058",
        "alt": "Leo Washed Cotton - Sage Stripe Bed Sheets - View 9",
        "role": "gallery",
        "position": 9,
        "colorOrPrint": "Sheets sage"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/products/Leo_Sage_Stripe_Texture_b9e7ea8f-abb3-4a44-b2cf-f159bcd9ae5b.jpg?v=1669086058",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/products/Leo_Sage_Stripe_Texture_b9e7ea8f-abb3-4a44-b2cf-f159bcd9ae5b.jpg?v=1669086058",
        "alt": "Leo Washed Cotton - Sage Stripe Bed Sheets - View 10",
        "role": "gallery",
        "position": 10,
        "colorOrPrint": "Sheets sage"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Sheets sage"
        ]
      }
    ],
    "variants": [
      {
        "id": "striped-bed-sheets-sage-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-STRIPED-BE-1",
        "size": "Double",
        "colorOrPrint": "Sheets sage",
        "sourcePrice": 14000,
        "sourceCompareAtPrice": 23400,
        "demoPricePKR": 14000,
        "availability": "available"
      },
      {
        "id": "striped-bed-sheets-sage-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-STRIPED-BE-2",
        "size": "Queen",
        "colorOrPrint": "Sheets sage",
        "sourcePrice": 18000,
        "sourceCompareAtPrice": 23400,
        "demoPricePKR": 18000,
        "availability": "available"
      },
      {
        "id": "striped-bed-sheets-sage-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-STRIPED-BE-3",
        "size": "King",
        "colorOrPrint": "Sheets sage",
        "sourcePrice": 22000,
        "sourceCompareAtPrice": 23400,
        "demoPricePKR": 22000,
        "availability": "available"
      },
      {
        "id": "striped-bed-sheets-sage-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-STRIPED-BE-4",
        "size": "Super King",
        "colorOrPrint": "Sheets sage",
        "sourcePrice": 26000,
        "sourceCompareAtPrice": 23400,
        "demoPricePKR": 26000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 112
  },
  {
    "id": "organic-cotton-bed-sheets-bay-blue",
    "handle": "organic-cotton-bed-sheets-bay-blue",
    "title": "Jude Organic Cotton - Bay Blue Bed Sheets",
    "collectionName": "Jude Organic Cotton",
    "productType": "Bed Sheets & Sets",
    "colorOrPrint": "Bay blue",
    "colorGroup": "Bay blue",
    "fabric": "Jude Organic Cotton",
    "description": "The complete coordinated sleep suite. Includes 1x fitted sheet with our signature 55cm deep elastic wall, 1x tailored flat sheet, and 2x matching envelope pillowcases.",
    "features": [
      "1x 55cm Deep Wall Fitted Sheet",
      "1x Tailored Double-Hem Flat Sheet",
      "2x Envelope Standard Pillowcases"
    ],
    "materialDetails": [
      "Smooth buttery sateen / washed percale weave pre-softened with natural enzymes",
      "400 Thread Count Long-Staple Cotton"
    ],
    "careInstructions": [
      "Warm machine wash with gentle liquid detergent",
      "Line dry or tumble dry low",
      "Do not dry clean"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/organic-cotton-bed-sheets-bay-blue",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 17000,
    "sourceCompareAtPrice": 22100,
    "demoPricePKR": 17000,
    "demoCompareAtPricePKR": 22100,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/JUDE_BAY_BLUE_SHEETS.jpg?v=1754349478",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/JUDE_BAY_BLUE_SHEETS.jpg?v=1754349478",
        "alt": "Jude Organic Cotton - Bay Blue Bed Sheets - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Bay blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/JUDE_BAY_BLUE_FITTED_SHEET.jpg?v=1754349478",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/JUDE_BAY_BLUE_FITTED_SHEET.jpg?v=1754349478",
        "alt": "Jude Organic Cotton - Bay Blue Bed Sheets - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Bay blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/JUDE_BAY_BLUE_FITTED_DEPTH.jpg?v=1754349478",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/JUDE_BAY_BLUE_FITTED_DEPTH.jpg?v=1754349478",
        "alt": "Jude Organic Cotton - Bay Blue Bed Sheets - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Bay blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/JUDE_BAY_BLUE_FLAT_SHEET.jpg?v=1754349478",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/JUDE_BAY_BLUE_FLAT_SHEET.jpg?v=1754349478",
        "alt": "Jude Organic Cotton - Bay Blue Bed Sheets - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Bay blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/JUDE_BAY_BLUE_PILLOWCASES.jpg?v=1754349478",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/JUDE_BAY_BLUE_PILLOWCASES.jpg?v=1754349478",
        "alt": "Jude Organic Cotton - Bay Blue Bed Sheets - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Bay blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/JUDE_BAY_BLUE_PILLOW_FOLD.jpg?v=1754349478",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/JUDE_BAY_BLUE_PILLOW_FOLD.jpg?v=1754349478",
        "alt": "Jude Organic Cotton - Bay Blue Bed Sheets - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Bay blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/JUDE_BAY_BLUE_TEXTURE.jpg?v=1754349478",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/JUDE_BAY_BLUE_TEXTURE.jpg?v=1754349478",
        "alt": "Jude Organic Cotton - Bay Blue Bed Sheets - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Bay blue"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/JUDE_BAY_BLUE_SHEETS_STYLED.jpg?v=1754980705",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/JUDE_BAY_BLUE_SHEETS_STYLED.jpg?v=1754980705",
        "alt": "Jude Organic Cotton - Bay Blue Bed Sheets - View 8",
        "role": "gallery",
        "position": 8,
        "colorOrPrint": "Bay blue"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Bay blue"
        ]
      }
    ],
    "variants": [
      {
        "id": "organic-cotton-bed-sheets-bay-blue-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-ORGANIC-CO-1",
        "size": "Double",
        "colorOrPrint": "Bay blue",
        "sourcePrice": 13000,
        "sourceCompareAtPrice": 22100,
        "demoPricePKR": 13000,
        "availability": "available"
      },
      {
        "id": "organic-cotton-bed-sheets-bay-blue-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-ORGANIC-CO-2",
        "size": "Queen",
        "colorOrPrint": "Bay blue",
        "sourcePrice": 17000,
        "sourceCompareAtPrice": 22100,
        "demoPricePKR": 17000,
        "availability": "available"
      },
      {
        "id": "organic-cotton-bed-sheets-bay-blue-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-ORGANIC-CO-3",
        "size": "King",
        "colorOrPrint": "Bay blue",
        "sourcePrice": 21000,
        "sourceCompareAtPrice": 22100,
        "demoPricePKR": 21000,
        "availability": "available"
      },
      {
        "id": "organic-cotton-bed-sheets-bay-blue-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-ORGANIC-CO-4",
        "size": "Super King",
        "colorOrPrint": "Bay blue",
        "sourcePrice": 25000,
        "sourceCompareAtPrice": 22100,
        "demoPricePKR": 25000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 155
  },
  {
    "id": "bed-sheets-butter",
    "handle": "bed-sheets-butter",
    "title": "Eden Cotton - Butter Bed Sheets",
    "collectionName": "Eden Cotton",
    "productType": "Bed Sheets & Sets",
    "colorOrPrint": "Sheets butter",
    "colorGroup": "Sheets butter",
    "fabric": "Eden Cotton",
    "description": "The complete coordinated sleep suite. Includes 1x fitted sheet with our signature 55cm deep elastic wall, 1x tailored flat sheet, and 2x matching envelope pillowcases.",
    "features": [
      "1x 55cm Deep Wall Fitted Sheet",
      "1x Tailored Double-Hem Flat Sheet",
      "2x Envelope Standard Pillowcases"
    ],
    "materialDetails": [
      "Smooth buttery sateen / washed percale weave pre-softened with natural enzymes",
      "400 Thread Count Long-Staple Cotton"
    ],
    "careInstructions": [
      "Warm machine wash with gentle liquid detergent",
      "Line dry or tumble dry low",
      "Do not dry clean"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/bed-sheets-butter",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 20000,
    "sourceCompareAtPrice": 26000,
    "demoPricePKR": 20000,
    "demoCompareAtPricePKR": 26000,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Butter_Eden_Sheets.jpg?v=1730077654",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Butter_Eden_Sheets.jpg?v=1730077654",
        "alt": "Eden Cotton - Butter Bed Sheets - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Sheets butter"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Butter_Eden_Fitted_Sheet_a6951df2-08e2-4bbc-af25-d09b3172b126.jpg?v=1730077655",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Butter_Eden_Fitted_Sheet_a6951df2-08e2-4bbc-af25-d09b3172b126.jpg?v=1730077655",
        "alt": "Eden Cotton - Butter Bed Sheets - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Sheets butter"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Butter_Eden_Fitted_Detail_e5fd3ca9-9124-4534-b63f-e2930edee224.jpg?v=1730077656",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Butter_Eden_Fitted_Detail_e5fd3ca9-9124-4534-b63f-e2930edee224.jpg?v=1730077656",
        "alt": "Eden Cotton - Butter Bed Sheets - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Sheets butter"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Butter_Eden_Flat_Sheet.jpg?v=1730077648",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Butter_Eden_Flat_Sheet.jpg?v=1730077648",
        "alt": "Eden Cotton - Butter Bed Sheets - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Sheets butter"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Butter_Eden_Pillowcases.jpg?v=1730077648",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Butter_Eden_Pillowcases.jpg?v=1730077648",
        "alt": "Eden Cotton - Butter Bed Sheets - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Sheets butter"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Butter_Eden_Pillow_Fold.jpg?v=1730077655",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Butter_Eden_Pillow_Fold.jpg?v=1730077655",
        "alt": "Eden Cotton - Butter Bed Sheets - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Sheets butter"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Butter_Eden_Texture_432549a5-781d-46fd-bd3e-e2ddc1ae3eef.jpg?v=1730077654",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Butter_Eden_Texture_432549a5-781d-46fd-bd3e-e2ddc1ae3eef.jpg?v=1730077654",
        "alt": "Eden Cotton - Butter Bed Sheets - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Sheets butter"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Sheets butter"
        ]
      }
    ],
    "variants": [
      {
        "id": "bed-sheets-butter-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-BED-SHEETS-1",
        "size": "Double",
        "colorOrPrint": "Sheets butter",
        "sourcePrice": 16000,
        "sourceCompareAtPrice": 26000,
        "demoPricePKR": 16000,
        "availability": "available"
      },
      {
        "id": "bed-sheets-butter-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-BED-SHEETS-2",
        "size": "Queen",
        "colorOrPrint": "Sheets butter",
        "sourcePrice": 20000,
        "sourceCompareAtPrice": 26000,
        "demoPricePKR": 20000,
        "availability": "available"
      },
      {
        "id": "bed-sheets-butter-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-BED-SHEETS-3",
        "size": "King",
        "colorOrPrint": "Sheets butter",
        "sourcePrice": 24000,
        "sourceCompareAtPrice": 26000,
        "demoPricePKR": 24000,
        "availability": "available"
      },
      {
        "id": "bed-sheets-butter-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-BED-SHEETS-4",
        "size": "Super King",
        "colorOrPrint": "Sheets butter",
        "sourcePrice": 28000,
        "sourceCompareAtPrice": 26000,
        "demoPricePKR": 28000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 90
  },
  {
    "id": "linen-bed-sheets-bailey",
    "handle": "linen-bed-sheets-bailey",
    "title": "Eve Linen - Bailey Stripe Bed Sheets",
    "collectionName": "Eve Linen",
    "productType": "Bed Sheets & Sets",
    "colorOrPrint": "Sheets bailey",
    "colorGroup": "Sheets bailey",
    "fabric": "Eve Linen",
    "description": "The complete coordinated sleep suite. Includes 1x fitted sheet with our signature 55cm deep elastic wall, 1x tailored flat sheet, and 2x matching envelope pillowcases.",
    "features": [
      "1x 55cm Deep Wall Fitted Sheet",
      "1x Tailored Double-Hem Flat Sheet",
      "2x Envelope Standard Pillowcases"
    ],
    "materialDetails": [
      "Smooth buttery sateen / washed percale weave pre-softened with natural enzymes",
      "400 Thread Count Long-Staple Cotton"
    ],
    "careInstructions": [
      "Warm machine wash with gentle liquid detergent",
      "Line dry or tumble dry low",
      "Do not dry clean"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/linen-bed-sheets-bailey",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 38000,
    "sourceCompareAtPrice": 49400,
    "demoPricePKR": 38000,
    "demoCompareAtPricePKR": 49400,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eve_Bailey_Stripe_Sheets_ea16e3f0-8e94-4452-972b-729491d6fdb4.jpg?v=1747286032",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eve_Bailey_Stripe_Sheets_ea16e3f0-8e94-4452-972b-729491d6fdb4.jpg?v=1747286032",
        "alt": "Eve Linen - Bailey Stripe Bed Sheets - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Sheets bailey"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eve_Bailey_Stripe_Fitted_Sheet_fec2db06-ad62-4a31-9211-33fed08468af.jpg?v=1747286031",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eve_Bailey_Stripe_Fitted_Sheet_fec2db06-ad62-4a31-9211-33fed08468af.jpg?v=1747286031",
        "alt": "Eve Linen - Bailey Stripe Bed Sheets - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Sheets bailey"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eve_Bailey_Stripe_Fitted_Depth_d0014f74-8648-4816-ae8d-445427656911.jpg?v=1747286031",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eve_Bailey_Stripe_Fitted_Depth_d0014f74-8648-4816-ae8d-445427656911.jpg?v=1747286031",
        "alt": "Eve Linen - Bailey Stripe Bed Sheets - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Sheets bailey"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eve_Bailey_Stripe_Quilt_Flat_Sheet_6763f5db-2283-438b-9902-44e809b307ef.jpg?v=1747286032",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eve_Bailey_Stripe_Quilt_Flat_Sheet_6763f5db-2283-438b-9902-44e809b307ef.jpg?v=1747286032",
        "alt": "Eve Linen - Bailey Stripe Bed Sheets - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Sheets bailey"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eve_Bailey_Stripe_Pillowcases_4351d23a-4d15-481e-9de5-acf82a3703d4.jpg?v=1747286031",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eve_Bailey_Stripe_Pillowcases_4351d23a-4d15-481e-9de5-acf82a3703d4.jpg?v=1747286031",
        "alt": "Eve Linen - Bailey Stripe Bed Sheets - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Sheets bailey"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eve_Bailey_Stripe_Pillow_Fold_7d71002e-1586-457d-975a-f8eb3f7e79d4.jpg?v=1747286032",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eve_Bailey_Stripe_Pillow_Fold_7d71002e-1586-457d-975a-f8eb3f7e79d4.jpg?v=1747286032",
        "alt": "Eve Linen - Bailey Stripe Bed Sheets - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Sheets bailey"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eve_Bailey_Stripe_Texture_f1467f09-7217-421f-a13a-8c0d0b6c5357.jpg?v=1747286031",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Eve_Bailey_Stripe_Texture_f1467f09-7217-421f-a13a-8c0d0b6c5357.jpg?v=1747286031",
        "alt": "Eve Linen - Bailey Stripe Bed Sheets - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Sheets bailey"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Sheets bailey"
        ]
      }
    ],
    "variants": [
      {
        "id": "linen-bed-sheets-bailey-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-LINEN-BED--1",
        "size": "Double",
        "colorOrPrint": "Sheets bailey",
        "sourcePrice": 34000,
        "sourceCompareAtPrice": 49400,
        "demoPricePKR": 34000,
        "availability": "available"
      },
      {
        "id": "linen-bed-sheets-bailey-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-LINEN-BED--2",
        "size": "Queen",
        "colorOrPrint": "Sheets bailey",
        "sourcePrice": 38000,
        "sourceCompareAtPrice": 49400,
        "demoPricePKR": 38000,
        "availability": "available"
      },
      {
        "id": "linen-bed-sheets-bailey-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-LINEN-BED--3",
        "size": "King",
        "colorOrPrint": "Sheets bailey",
        "sourcePrice": 42000,
        "sourceCompareAtPrice": 49400,
        "demoPricePKR": 42000,
        "availability": "available"
      },
      {
        "id": "linen-bed-sheets-bailey-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-LINEN-BED--4",
        "size": "Super King",
        "colorOrPrint": "Sheets bailey",
        "sourcePrice": 46000,
        "sourceCompareAtPrice": 49400,
        "demoPricePKR": 46000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 98
  },
  {
    "id": "organic-cotton-bed-sheets-nutmeg",
    "handle": "organic-cotton-bed-sheets-nutmeg",
    "title": "Jude Organic Cotton - Nutmeg Bed Sheets",
    "collectionName": "Jude Organic Cotton",
    "productType": "Bed Sheets & Sets",
    "colorOrPrint": "Sheets nutmeg",
    "colorGroup": "Sheets nutmeg",
    "fabric": "Jude Organic Cotton",
    "description": "The complete coordinated sleep suite. Includes 1x fitted sheet with our signature 55cm deep elastic wall, 1x tailored flat sheet, and 2x matching envelope pillowcases.",
    "features": [
      "1x 55cm Deep Wall Fitted Sheet",
      "1x Tailored Double-Hem Flat Sheet",
      "2x Envelope Standard Pillowcases"
    ],
    "materialDetails": [
      "Smooth buttery sateen / washed percale weave pre-softened with natural enzymes",
      "400 Thread Count Long-Staple Cotton"
    ],
    "careInstructions": [
      "Warm machine wash with gentle liquid detergent",
      "Line dry or tumble dry low",
      "Do not dry clean"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/organic-cotton-bed-sheets-nutmeg",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 21000,
    "sourceCompareAtPrice": 27300,
    "demoPricePKR": 21000,
    "demoCompareAtPricePKR": 27300,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Jude_Nutmeg_Sheets_d4b1d328-7ea0-4d77-a494-e1ff085d710d.jpg?v=1735620900",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Jude_Nutmeg_Sheets_d4b1d328-7ea0-4d77-a494-e1ff085d710d.jpg?v=1735620900",
        "alt": "Jude Organic Cotton - Nutmeg Bed Sheets - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Sheets nutmeg"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Jude_Nutmeg_Fitted_Sheet_488f895d-e8e1-49eb-9d77-e2b7743e7a1b.jpg?v=1735620900",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Jude_Nutmeg_Fitted_Sheet_488f895d-e8e1-49eb-9d77-e2b7743e7a1b.jpg?v=1735620900",
        "alt": "Jude Organic Cotton - Nutmeg Bed Sheets - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Sheets nutmeg"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Jude_Nutmeg_Fitted_Depth_2c4b0d34-1da1-4266-9779-b85c9923b03b.jpg?v=1735620900",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Jude_Nutmeg_Fitted_Depth_2c4b0d34-1da1-4266-9779-b85c9923b03b.jpg?v=1735620900",
        "alt": "Jude Organic Cotton - Nutmeg Bed Sheets - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Sheets nutmeg"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Jude_Nutmeg_Flat_Sheet_fbe5b3b9-2a50-49f3-bc74-a972a7eaad6c.jpg?v=1735620900",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Jude_Nutmeg_Flat_Sheet_fbe5b3b9-2a50-49f3-bc74-a972a7eaad6c.jpg?v=1735620900",
        "alt": "Jude Organic Cotton - Nutmeg Bed Sheets - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Sheets nutmeg"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Jude_Nutmeg_Pillowcases.jpg?v=1735620900",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Jude_Nutmeg_Pillowcases.jpg?v=1735620900",
        "alt": "Jude Organic Cotton - Nutmeg Bed Sheets - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Sheets nutmeg"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Jude_Nutmeg_Pillow_Fold_62487b79-9378-49cc-b2c1-80e397500373.jpg?v=1735620900",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Jude_Nutmeg_Pillow_Fold_62487b79-9378-49cc-b2c1-80e397500373.jpg?v=1735620900",
        "alt": "Jude Organic Cotton - Nutmeg Bed Sheets - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Sheets nutmeg"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Jude_Nutmeg_Texture_2537808b-0436-49bb-8300-bb67880e59e6.jpg?v=1735620900",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Jude_Nutmeg_Texture_2537808b-0436-49bb-8300-bb67880e59e6.jpg?v=1735620900",
        "alt": "Jude Organic Cotton - Nutmeg Bed Sheets - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Sheets nutmeg"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Sheets nutmeg"
        ]
      }
    ],
    "variants": [
      {
        "id": "organic-cotton-bed-sheets-nutmeg-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-ORGANIC-CO-1",
        "size": "Double",
        "colorOrPrint": "Sheets nutmeg",
        "sourcePrice": 17000,
        "sourceCompareAtPrice": 27300,
        "demoPricePKR": 17000,
        "availability": "available"
      },
      {
        "id": "organic-cotton-bed-sheets-nutmeg-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-ORGANIC-CO-2",
        "size": "Queen",
        "colorOrPrint": "Sheets nutmeg",
        "sourcePrice": 21000,
        "sourceCompareAtPrice": 27300,
        "demoPricePKR": 21000,
        "availability": "available"
      },
      {
        "id": "organic-cotton-bed-sheets-nutmeg-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-ORGANIC-CO-3",
        "size": "King",
        "colorOrPrint": "Sheets nutmeg",
        "sourcePrice": 25000,
        "sourceCompareAtPrice": 27300,
        "demoPricePKR": 25000,
        "availability": "available"
      },
      {
        "id": "organic-cotton-bed-sheets-nutmeg-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-ORGANIC-CO-4",
        "size": "Super King",
        "colorOrPrint": "Sheets nutmeg",
        "sourcePrice": 29000,
        "sourceCompareAtPrice": 27300,
        "demoPricePKR": 29000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 118
  },
  {
    "id": "bed-sheets-sky",
    "handle": "bed-sheets-sky",
    "title": "Eden Cotton - Sky Bed Sheets",
    "collectionName": "Eden Cotton",
    "productType": "Bed Sheets & Sets",
    "colorOrPrint": "Sheets sky",
    "colorGroup": "Sheets sky",
    "fabric": "Eden Cotton",
    "description": "The complete coordinated sleep suite. Includes 1x fitted sheet with our signature 55cm deep elastic wall, 1x tailored flat sheet, and 2x matching envelope pillowcases.",
    "features": [
      "1x 55cm Deep Wall Fitted Sheet",
      "1x Tailored Double-Hem Flat Sheet",
      "2x Envelope Standard Pillowcases"
    ],
    "materialDetails": [
      "Smooth buttery sateen / washed percale weave pre-softened with natural enzymes",
      "400 Thread Count Long-Staple Cotton"
    ],
    "careInstructions": [
      "Warm machine wash with gentle liquid detergent",
      "Line dry or tumble dry low",
      "Do not dry clean"
    ],
    "sourceProductUrl": "https://sheetsociety.com/en/products/bed-sheets-sky",
    "sourceRegion": "en (PKR demo)",
    "sourceCheckedAt": "2026-11-20T19:00:00.000Z",
    "sourceCurrency": "PKR",
    "sourcePriceFrom": 14000,
    "sourceCompareAtPrice": 18200,
    "demoPricePKR": 14000,
    "demoCompareAtPricePKR": 18200,
    "images": [
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Sky_Eden_Sheets_dffbdf7c-3e8c-4b68-9818-6b5f3380b08d.jpg?v=1730091530",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Sky_Eden_Sheets_dffbdf7c-3e8c-4b68-9818-6b5f3380b08d.jpg?v=1730091530",
        "alt": "Eden Cotton - Sky Bed Sheets - View 1",
        "role": "hero",
        "position": 1,
        "colorOrPrint": "Sheets sky"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Sky_Eden_Fitted_Sheet_1592d29f-3654-4656-849c-b52d0f2d4a03.jpg?v=1730091529",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Sky_Eden_Fitted_Sheet_1592d29f-3654-4656-849c-b52d0f2d4a03.jpg?v=1730091529",
        "alt": "Eden Cotton - Sky Bed Sheets - View 2",
        "role": "gallery",
        "position": 2,
        "colorOrPrint": "Sheets sky"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Sky_Eden_Fitted_Detail_4ad640aa-8cf7-4393-b2d9-247952eb92ee.jpg?v=1730091534",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Sky_Eden_Fitted_Detail_4ad640aa-8cf7-4393-b2d9-247952eb92ee.jpg?v=1730091534",
        "alt": "Eden Cotton - Sky Bed Sheets - View 3",
        "role": "gallery",
        "position": 3,
        "colorOrPrint": "Sheets sky"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Sky_Eden_Flat_Sheet.jpg?v=1730091526",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Sky_Eden_Flat_Sheet.jpg?v=1730091526",
        "alt": "Eden Cotton - Sky Bed Sheets - View 4",
        "role": "gallery",
        "position": 4,
        "colorOrPrint": "Sheets sky"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Sky_Eden_Pillowcases.jpg?v=1730091527",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Sky_Eden_Pillowcases.jpg?v=1730091527",
        "alt": "Eden Cotton - Sky Bed Sheets - View 5",
        "role": "gallery",
        "position": 5,
        "colorOrPrint": "Sheets sky"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Sky_Eden_Pillow_Fold.jpg?v=1730091534",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Sky_Eden_Pillow_Fold.jpg?v=1730091534",
        "alt": "Eden Cotton - Sky Bed Sheets - View 6",
        "role": "gallery",
        "position": 6,
        "colorOrPrint": "Sheets sky"
      },
      {
        "src": "https://cdn.shopify.com/s/files/1/1463/0170/files/Sky_Eden_Texture_4aec4581-82ec-4cac-8aff-cfa9f504b2a2.jpg?v=1759459215",
        "remoteUrl": "https://cdn.shopify.com/s/files/1/1463/0170/files/Sky_Eden_Texture_4aec4581-82ec-4cac-8aff-cfa9f504b2a2.jpg?v=1759459215",
        "alt": "Eden Cotton - Sky Bed Sheets - View 7",
        "role": "gallery",
        "position": 7,
        "colorOrPrint": "Sheets sky"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Double",
          "Queen",
          "King",
          "Super King"
        ]
      },
      {
        "name": "Color",
        "values": [
          "Sheets sky"
        ]
      }
    ],
    "variants": [
      {
        "id": "bed-sheets-sky-double",
        "sourceVariantId": null,
        "title": "Double",
        "sku": "MORFE-BED-SHEETS-1",
        "size": "Double",
        "colorOrPrint": "Sheets sky",
        "sourcePrice": 10000,
        "sourceCompareAtPrice": 18200,
        "demoPricePKR": 10000,
        "availability": "available"
      },
      {
        "id": "bed-sheets-sky-queen",
        "sourceVariantId": null,
        "title": "Queen",
        "sku": "MORFE-BED-SHEETS-2",
        "size": "Queen",
        "colorOrPrint": "Sheets sky",
        "sourcePrice": 14000,
        "sourceCompareAtPrice": 18200,
        "demoPricePKR": 14000,
        "availability": "available"
      },
      {
        "id": "bed-sheets-sky-king",
        "sourceVariantId": null,
        "title": "King",
        "sku": "MORFE-BED-SHEETS-3",
        "size": "King",
        "colorOrPrint": "Sheets sky",
        "sourcePrice": 18000,
        "sourceCompareAtPrice": 18200,
        "demoPricePKR": 18000,
        "availability": "available"
      },
      {
        "id": "bed-sheets-sky-super-king",
        "sourceVariantId": null,
        "title": "Super King",
        "sku": "MORFE-BED-SHEETS-4",
        "size": "Super King",
        "colorOrPrint": "Sheets sky",
        "sourcePrice": 22000,
        "sourceCompareAtPrice": 18200,
        "demoPricePKR": 22000,
        "availability": "available"
      }
    ],
    "rating": 4.9,
    "reviewsCount": 137
  }
];

export default SHEET_SOCIETY_PRODUCTS;
