import { Product, ProductCategory } from '@src/types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Royal Ivory Silk Panjabi',
    slug: 'royal-ivory-silk-panjabi',
    category: 'Panjabi',
    price: 4850,
    originalPrice: 5500,
    image:
      'https://images.pexels.com/photos/12643003/pexels-photo-12643003.jpeg',
    images: [
      'https://images.pexels.com/photos/12643003/pexels-photo-12643003.jpeg',
      'https://images.pexels.com/photos/12643002/pexels-photo-12643002.jpeg',
      'https://images.pexels.com/photos/12643001/pexels-photo-12643001.jpeg',
    ],
    rating: 4.8,
    reviewCount: 34,
    colors: ['Cream', 'Beige', 'White'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    isNew: true,
    isFeatured: true,
    description:
      'Crafted from the finest mulberry silk, this Royal Ivory Panjabi features delicate hand-embroidery along the collar and placket. Ideal for weddings and festive occasions, it offers a sophisticated silhouette that blends heritage with modern elegance.',
    material: '100% Premium Mulberry Silk',
    careInstructions:
      'Professional dry clean only. Iron inside out on low silk settings.',
  },
  {
    id: 2,
    name: 'Midnight Onyx Jacquard Panjabi',
    slug: 'midnight-onyx-jacquard-panjabi',
    category: 'Panjabi',
    price: 3950,
    image: 'https://images.pexels.com/photos/9415796/pexels-photo-9415796.jpeg',
    images: [
      'https://images.pexels.com/photos/9415796/pexels-photo-9415796.jpeg',
      'https://images.pexels.com/photos/9474567/pexels-photo-9474567.jpeg',
      'https://images.pexels.com/photos/9415795/pexels-photo-9415795.jpeg',
    ],
    rating: 4.7,
    reviewCount: 28,
    colors: ['Black', 'Charcoal'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    inStock: true,
    isFeatured: true,
    description:
      'A striking contemporary interpretation of traditional wear. This Panjabi is woven in rich onyx black jacquard fabric with a subtle geometric pattern. The matte black metal buttons add a modern edge.',
    material: 'Premium Cotton-Silk Blend',
    careInstructions: 'Hand wash cold separately. Do not bleach. Dry in shade.',
  },
  {
    id: 3,
    name: 'Crimson Heritage Embroidered Panjabi',
    slug: 'crimson-heritage-embroidered-panjabi',
    category: 'Panjabi',
    price: 4500,
    originalPrice: 5200,
    image:
      'https://jahaclothing.com/cdn/shop/files/JMP-029_a.webp?v=1771954662',
    images: [
      'https://jahaclothing.com/cdn/shop/files/JMP-029_a.webp?v=1771954662',
      'https://jahaclothing.com/cdn/shop/files/JMP-029_b.webp?v=1771954663',
      'https://jahaclothing.com/cdn/shop/files/JMP-029_d.webp?v=1771954663',
    ],
    rating: 4.9,
    reviewCount: 18,
    colors: ['Maroon', 'Red'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    isNew: true,
    description:
      'Celebrate festive traditions in this rich crimson Panjabi. Features detailed gold thread embroidery on the collar, cuffs, and front placket. Designed for maximum breathability and comfort without compromising on style.',
    material: 'Handspun Organic Cotton',
    careInstructions: 'Dry clean recommended. Cool iron on reverse.',
  },
  {
    id: 4,
    name: 'Crimson Rajkumari Silk Saree',
    slug: 'crimson-rajkumari-silk-saree',
    category: 'Saree',
    price: 12500,
    originalPrice: 15000,
    image:
      'https://images.pexels.com/photos/28943520/pexels-photo-28943520.jpeg',
    images: [
      'https://images.pexels.com/photos/28943520/pexels-photo-28943520.jpeg',
      'https://images.pexels.com/photos/28943544/pexels-photo-28943544.jpeg',
      'https://images.pexels.com/photos/28943543/pexels-photo-28943543.jpeg',
    ],
    rating: 4.9,
    reviewCount: 45,
    colors: ['Red', 'Gold'],
    sizes: ['Free Size'],
    inStock: true,
    isFeatured: true,
    description:
      'A breath of royal elegance. The Crimson Rajkumari Silk Saree features hand-woven gold zari borders and intricate floral motifs. A timeless heirloom piece for weddings and special occasions.',
    material: '100% Pure Rajshahi Silk',
    careInstructions:
      'Dry clean only. Keep wrapped in a soft cotton cloth when storing to protect the zari.',
  },
  {
    id: 5,
    name: 'Golden Aura Katan Saree',
    slug: 'golden-aura-katan-saree',
    category: 'Saree',
    price: 14800,
    image:
      'https://images.pexels.com/photos/28943610/pexels-photo-28943610.jpeg',
    images: [
      'https://images.pexels.com/photos/28943610/pexels-photo-28943610.jpeg',
      'https://images.pexels.com/photos/28943658/pexels-photo-28943658.jpeg',
      'https://images.pexels.com/photos/28943655/pexels-photo-28943655.jpeg',
    ],
    rating: 4.6,
    reviewCount: 12,
    colors: ['Gold', 'Beige'],
    sizes: ['Free Size'],
    inStock: true,
    isNew: true,
    description:
      'An exquisite creation woven from premium Katan silk. The saree shimmers with deep golden undertones and displays an elegant pallu decorated with traditional paisley patterns.',
    material: 'Katan Silk with Gold Metallic Thread',
    careInstructions: 'Professional dry clean only. Protect from moisture.',
  },
  {
    id: 6,
    name: 'Emerald Forest Jamdani Saree',
    slug: 'emerald-forest-jamdani-saree',
    category: 'Saree',
    price: 9500,
    originalPrice: 11000,
    image:
      'https://images.pexels.com/photos/33729227/pexels-photo-33729227.jpeg',
    images: [
      'https://images.pexels.com/photos/33729227/pexels-photo-33729227.jpeg',
      'https://images.pexels.com/photos/33729213/pexels-photo-33729213.jpeg',
      'https://images.pexels.com/photos/33729225/pexels-photo-33729225.jpeg',
    ],
    rating: 4.8,
    reviewCount: 22,
    colors: ['Teal', 'Gold'],
    sizes: ['Free Size'],
    inStock: true,
    isFeatured: true,
    description:
      'Beautifully hand-loomed by master weavers, this Jamdani Saree features intricate geometric motifs on a semi-sheer emerald green cotton background. An effortless expression of heritage and grace.',
    material: 'Handloom Muslin Cotton & Silk Blend',
    careInstructions:
      'Dry clean recommended. Gentle hand wash in cold water using a mild detergent if necessary.',
  },
  {
    id: 7,
    name: 'Blush Blossom Linen Kurti',
    slug: 'blush-blossom-linen-kurti',
    category: 'Kurti',
    price: 2850,
    originalPrice: 3500,
    image:
      'https://images.pexels.com/photos/36884930/pexels-photo-36884930.jpeg',
    images: [
      'https://images.pexels.com/photos/36884930/pexels-photo-36884930.jpeg',
      'https://images.pexels.com/photos/36884929/pexels-photo-36884929.jpeg',
      'https://images.pexels.com/photos/36884928/pexels-photo-36884928.jpeg',
    ],
    rating: 4.5,
    reviewCount: 38,
    colors: ['Pink', 'White'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    isNew: true,
    description:
      'Exude casual charm with this pastel pink linen Kurti. Adorned with delicate floral embroidery on the yoke and a breezy, relaxed fit that is perfect for everyday elegance.',
    material: '100% Breathable Linen Cotton',
    careInstructions: 'Machine wash cold on a gentle cycle. Medium iron.',
  },
  {
    id: 8,
    name: 'Indigo Breeze Printed Kurti',
    slug: 'indigo-breeze-printed-kurti',
    category: 'Kurti',
    price: 2450,
    image:
      'https://images.pexels.com/photos/33356915/pexels-photo-33356915.jpeg',
    images: [
      'https://images.pexels.com/photos/33356915/pexels-photo-33356915.jpeg',
      'https://images.pexels.com/photos/33335355/pexels-photo-33335355.jpeg',
      'https://images.pexels.com/photos/33356903/pexels-photo-33356903.jpeg',
    ],
    rating: 4.7,
    reviewCount: 19,
    colors: ['Navy', 'Sky Blue'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    description:
      'Features traditional hand-block printed indigo patterns. Styled with a split mandarin collar and wooden button accents, this versatile tunic transitions seamlessly from desk to dinner.',
    material: '100% Organic Indigo-Dyed Cotton',
    careInstructions:
      'Wash separately in cold water. Indigo dyes may bleed slightly during first washes.',
  },
  {
    id: 9,
    name: 'Mustard Meadow Georgette Kurti',
    slug: 'mustard-meadow-georgette-kurti',
    category: 'Kurti',
    price: 3200,
    originalPrice: 3800,
    image:
      'https://images.pexels.com/photos/20702675/pexels-photo-20702675.jpeg',
    images: [
      'https://images.pexels.com/photos/20702675/pexels-photo-20702675.jpeg',
      'https://images.pexels.com/photos/20702640/pexels-photo-20702640.jpeg',
      'https://images.pexels.com/photos/20702673/pexels-photo-20702673.jpeg',
    ],
    rating: 4.4,
    reviewCount: 14,
    colors: ['Gold', 'Cream'],
    sizes: ['M', 'L', 'XL'],
    inStock: false,
    description:
      'A cheerful mustard kurti crafted from soft, flowing georgette. Beautifully structured with side slits and minimal gold bead embroidery along the neckline. Note: currently out of stock due to high demand.',
    material: 'Premium Georgette with Butter Crepe Lining',
    careInstructions: 'Hand wash gently. Hang to dry. Steam iron if needed.',
  },
  {
    id: 10,
    name: 'Classic Navy Pique Polo',
    slug: 'classic-navy-pique-polo',
    category: 'Polo Shirt',
    price: 1850,
    originalPrice: 2200,
    image:
      'https://images.pexels.com/photos/38010898/pexels-photo-38010898.jpeg',
    images: [
      'https://images.pexels.com/photos/38010898/pexels-photo-38010898.jpeg',
      'https://images.pexels.com/photos/27788216/pexels-photo-27788216.jpeg',
      'https://images.pexels.com/photos/27788217/pexels-photo-27788217.jpeg',
    ],
    rating: 4.8,
    reviewCount: 84,
    colors: ['Navy', 'Grey', 'Black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    isFeatured: true,
    description:
      'A wardrobe staple built for lasting style and comfort. Featuring a double-pique knit structure, ribbed collar, and signature embroidered logo on the chest. Designed to maintain fit and color wash after wash.',
    material: '100% Combed Pique Cotton',
    careInstructions: 'Machine wash warm with like colors. Tumble dry medium.',
  },
  {
    id: 11,
    name: 'Sage Green Premium Polo',
    slug: 'sage-green-premium-polo',
    category: 'Polo Shirt',
    price: 1950,
    image:
      'https://images.pexels.com/photos/24022815/pexels-photo-24022815.jpeg',
    images: [
      'https://images.pexels.com/photos/24022815/pexels-photo-24022815.jpeg',
      'https://images.pexels.com/photos/24022821/pexels-photo-24022821.jpeg',
      'https://images.pexels.com/photos/24022811/pexels-photo-24022811.jpeg',
    ],
    rating: 4.6,
    reviewCount: 43,
    colors: ['Sage', 'Olive'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    isNew: true,
    description:
      'Upgrade your casual look with this rich, sage green premium polo. It features a luxuriously soft mercerized finish and subtle details, such as side vents and a clean three-button placket.',
    material: '100% Mercerized Egyptian Cotton',
    careInstructions: 'Machine wash cold. Do not tumble dry. Warm iron.',
  },
  {
    id: 12,
    name: 'Charcoal Textured Polo',
    slug: 'charcoal-textured-polo',
    category: 'Polo Shirt',
    price: 2100,
    originalPrice: 2600,
    image:
      'https://images.pexels.com/photos/15994973/pexels-photo-15994973.jpeg',
    images: [
      'https://images.pexels.com/photos/15994969/pexels-photo-15994969.jpeg',
      'https://images.pexels.com/photos/15994968/pexels-photo-15994968.jpeg',
    ],
    rating: 4.7,
    reviewCount: 31,
    colors: ['Charcoal', 'Grey'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    inStock: true,
    description:
      'Made with waffle-knit cotton fabric, this charcoal grey polo offers exceptional texture and depth. Ideal for smart-casual wear, featuring a structured self-collar and modern slim silhouette.',
    material: 'Waffle-Knit Cotton-Polyester Blend',
    careInstructions: 'Machine wash cold. Flat dry to prevent stretching.',
  },
];

// Helper functions for querying the static data
export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductById(id: number): Product | undefined {
  return products.find(p => p.id === id);
}

export function getFeaturedProducts(limit?: number): Product[] {
  const featured = products.filter(p => p.isFeatured);
  return limit ? featured.slice(0, limit) : featured;
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter(p => p.category === category);
}

export function getNewArrivals(): Product[] {
  return products.filter(p => p.isNew);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function getCategories(): ProductCategory[] {
  const categories = new Set(products.map(p => p.category));
  return Array.from(categories);
}

export function getPriceRange(): { min: number; max: number } {
  const prices = products.map(p => p.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
}

/**
 * Searches products by name (case-insensitive partial match).
 */
export function searchProducts(query: string): Product[] {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return products;
  return products.filter(
    p =>
      p.name.toLowerCase().includes(normalizedQuery) ||
      p.category.toLowerCase().includes(normalizedQuery) ||
      p.description.toLowerCase().includes(normalizedQuery),
  );
}
