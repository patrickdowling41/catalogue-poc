export interface IProduct {
  sku: string;
  name: string;
  price: number;
  rating: number;
  ratingCount: number;
  category: string;
  thumbnail: string;
}

export interface ICreateFakeProduct {
  count?: number;
  sku?: string;
  category?: string;
}
