'use client';

import Container from '@src/components/layouts/Container';
import ProductCard from '@src/components/products/ProductCard';
import { Button } from '@src/components/ui/button';
import { getFeaturedProducts } from '@src/data/products';
import Link from 'next/link';
import { SectionHeader } from '@src/components/ui/SectionHeader';

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts(4);

  return (
    <section className='w-full py-16 sm:py-24 bg-background transition-colors duration-300'>
      <Container className='flex flex-col gap-10 sm:gap-16'>
        {/* Section Header */}
        <SectionHeader
          tagline='Curated Selection'
          heading='Most Popular Products'
          description='Explore our most wanted signature styles, chosen by our design experts for their timeless charm.'
        />

        {/* Products Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={index === 0}
            />
          ))}
        </div>

        {/* Show All Products Button */}
        <div className='flex justify-center mt-4'>
          <Link href='/products' className='inline-block'>
            <Button
              variant='outline'
              size='lg'
              className='group relative rounded-full px-8 py-3 text-sm font-semibold tracking-wide border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 active:scale-95 cursor-pointer shadow-xs hover:shadow-md'>
              View All Products
              <span className='inline-block transform group-hover:translate-x-1 transition-transform duration-200 ml-1.5'>
                &rarr;
              </span>
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
