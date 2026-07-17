import ProductCard from '@src/components/products/ProductCard';
import { Product } from '@src/types';
import React from 'react';

interface RelatedProductsProps {
  relatedProducts: Product[];
}

export function RelatedProducts({ relatedProducts }: RelatedProductsProps) {
  if (relatedProducts.length === 0) return null;

  return (
    <section className='pt-16 md:pt-24'>
      <div className='flex flex-col gap-2 mb-8 md:mb-12'>
        <span className='text-xs font-bold tracking-widest text-accent uppercase font-sans'>
          Complete the Look
        </span>
        <h2 className='text-2xl md:text-3xl font-heading font-bold text-foreground'>
          You May Also Like
        </h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
        {relatedProducts.map((p, idx) => (
          <ProductCard key={p.id} product={p} priority={idx === 0} />
        ))}
      </div>
    </section>
  );
}
