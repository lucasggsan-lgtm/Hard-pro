export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  category: string;
  image: string;
  description: string;
  stock: number;
  features: string[];
  specs: Record<string, string>;
  rating: number;
  reviews: number;
  relatedIds: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface QuoteItem {
  product: Product;
  quantity: number;
}
