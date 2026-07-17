export type Product = {
  id: number;
  name: string;
  slug: string;
  category: ProductCategory;
  price: number;
  /**
   * Original price before discount (optional).
   * When present, a "Sale" badge is shown and the discount % is calculated.
   */
  originalPrice?: number;
  image: string;
  images: string[];
  rating: number;
  reviewCount: number;
  colors: ProductColor[];
  sizes: ProductSize[];
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  description: string;
  material: string;
  careInstructions: string;
};

export type ProductCategory = 'Panjabi' | 'Saree' | 'Kurti' | 'Polo Shirt';

export type ProductColor =
  | 'White'
  | 'Black'
  | 'Navy'
  | 'Olive'
  | 'Maroon'
  | 'Cream'
  | 'Beige'
  | 'Red'
  | 'Gold'
  | 'Teal'
  | 'Pink'
  | 'Grey'
  | 'Sky Blue'
  | 'Charcoal'
  | 'Sage';

export type ProductSize = 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'Free Size';
export interface SocialLink {
  name: string;
  href: string;
}

export type NavLink = {
  label: string;
  href: string;
};

export type CategoryShowcaseItem = {
  name: ProductCategory;
  queryParam: string;
  image: string;
  subtitle: string;
};

export type CartItem = {
  productId: number;
  selectedColor: ProductColor;
  selectedSize: ProductSize;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};

export type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | {
      type: 'REMOVE_ITEM';
      payload: {
        productId: number;
        selectedColor: ProductColor;
        selectedSize: ProductSize;
      };
    }
  | {
      type: 'UPDATE_QUANTITY';
      payload: {
        productId: number;
        selectedColor: ProductColor;
        selectedSize: ProductSize;
        quantity: number;
      };
    }
  | { type: 'CLEAR_CART' };

export type SortOption =
  | 'default'
  | 'price-asc'
  | 'price-desc'
  | 'name-asc'
  | 'name-desc'
  | 'rating-desc';
