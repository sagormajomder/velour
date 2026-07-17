import { NavLink, SocialLink, ProductColor, CategoryShowcaseItem } from '@src/types';

export const BRAND_NAME = 'VELOUR';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/products' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Facebook', href: 'https://facebook.com' },
  { name: 'Instagram', href: 'https://instagram.com' },
  { name: 'Twitter', href: 'https://twitter.com' },
  { name: 'Pinterest', href: 'https://pinterest.com' },
];

export const CONTACT_INFO = {
  email: 'info@velour.com',
  phone: '+880 1711-223344',
  address: 'House 12, Road 11, Banani, Dhaka, Bangladesh',
};

export const COLOR_HEX_MAP: Record<ProductColor, string> = {
  White: '#ffffff',
  Black: '#111111',
  Navy: '#0f172a',
  Olive: '#556b2f',
  Maroon: '#7f1d1d',
  Cream: '#fffdd0',
  Beige: '#f5f5dc',
  Red: '#dc2626',
  Gold: '#c9a96e',
  Teal: '#0d9488',
  Pink: '#f9a8d4',
  Grey: '#9ca3af',
  'Sky Blue': '#bae6fd',
  Charcoal: '#374151',
  Sage: '#87a987',
};

export const SHIPPING_THRESHOLD = 5000;
export const SHIPPING_COST = 120;

export const CATEGORY_SHOWCASE_ITEMS: CategoryShowcaseItem[] = [
  {
    name: 'Panjabi',
    queryParam: 'panjabi',
    image: 'https://images.pexels.com/photos/12643001/pexels-photo-12643001.jpeg',
    subtitle: 'Heritage & Elegance',
  },
  {
    name: 'Saree',
    queryParam: 'saree',
    image: 'https://images.pexels.com/photos/28943520/pexels-photo-28943520.jpeg',
    subtitle: 'Grace Redefined',
  },
  {
    name: 'Kurti',
    queryParam: 'kurti',
    image: 'https://images.pexels.com/photos/36884930/pexels-photo-36884930.jpeg',
    subtitle: 'Modern Ethnic Wear',
  },
  {
    name: 'Polo Shirt',
    queryParam: 'polo shirt',
    image: 'https://images.pexels.com/photos/38010898/pexels-photo-38010898.jpeg',
    subtitle: 'Refined Casuals',
  },
];

