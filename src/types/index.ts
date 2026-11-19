export interface ColorVariant {
  name: string;
  hex: string;
  image: string;
}

export type BeddingCategory = 
  | 'Quilt Covers'
  | 'Fitted Sheets'
  | 'Flat Sheets'
  | 'Pillowcases'
  | 'Bed Sheets & Sets'
  | 'Blankets & Bed Covers'
  | 'Duvet Covers'
  | 'Sheets & Sets'
  | 'Quilts & Comforters'
  | 'Blankets & Throws';

export type BeddingMaterial = 
  | 'Eve Linen'
  | 'Eden Cotton'
  | 'Jude Organic Cotton'
  | 'Leo Washed Cotton'
  | 'Darcy Corduroy'
  | 'Frankie Flannelette'
  | 'Rory Washed Cotton'
  | 'Sofia Ruched Cotton'
  | 'French Flax Linen'
  | 'Organic Cotton Percale'
  | 'Cloud Cotton Gauze'
  | 'Sateen Luxe'
  | 'Waffle Wool-Linen';

export type BedSize = 
  | 'Single'
  | 'Double'
  | 'Queen'
  | 'King'
  | 'Super King'
  | 'Standard'
  | 'Twin'
  | 'Full'
  | 'Cal King'
  | string;

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: BeddingCategory;
  material: BeddingMaterial;
  price: number;
  salePrice?: number;
  variantPrices?: Record<string, number>;
  minPrice?: number;
  maxPrice?: number;
  colors: ColorVariant[];
  sizes: BedSize[];
  images: string[];
  description: string;
  weaveDetails: string;
  threadCountOrWeight: string;
  includes: string[];
  care: string[];
  dimensions: Record<string, string>;
  rating: number;
  reviewsCount: number;
  isNew?: boolean;
  isBestseller?: boolean;
  certification?: string;
}

export interface CartItem {
  id: string; // unique item cart key (e.g. productId-color-size)
  product: Product;
  selectedColor: ColorVariant;
  selectedSize: BedSize;
  quantity: number;
}

export interface BedroomLook {
  id: string;
  title: string;
  roomName: string;
  description: string;
  image: string;
  palette: string[];
  hotspots: {
    productId: string;
    label: string;
    price: number;
    x: number; // percentage 0-100
    y: number; // percentage 0-100
  }[];
}

export interface Review {
  id: string;
  author: string;
  location: string;
  verified: boolean;
  rating: number;
  title: string;
  text: string;
  productName: string;
  colorPurchased: string;
  date: string;
  image?: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  content: string[];
}
