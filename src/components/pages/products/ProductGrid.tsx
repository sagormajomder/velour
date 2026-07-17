'use client';

import ProductCard from '@src/components/products/ProductCard';
import { Product } from '@src/types';
import { AnimatePresence, motion } from 'motion/react';

interface ProductGridProps {
  products: Product[];
  onResetFilters?: () => void;
}

export default function ProductGrid({
  products,
  onResetFilters,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center py-16 px-4 text-center bg-secondary/10 dark:bg-secondary/5 rounded-3xl border border-dashed border-border/60 max-w-lg mx-auto mt-8 animate-fade-in'>
        {/* Empty State Icon */}
        <div className='w-16 h-16 rounded-full bg-secondary/50 dark:bg-secondary/20 flex items-center justify-center text-muted-foreground mb-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-8 h-8'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
            />
          </svg>
        </div>

        {/* Empty State Text */}
        <h3 className='font-heading text-lg font-bold text-foreground mb-2'>
          No Products Found
        </h3>
        <p className='text-sm text-muted-foreground max-w-sm mb-6 leading-relaxed'>
          We couldn&apos;t find any products matching your search or filters.
          Try adjusting your search query or choosing another category.
        </p>

        {/* Reset Action */}
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className='px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground bg-primary hover:bg-primary/95 hover:scale-[1.02] active:scale-[0.98] rounded-full transition-all duration-300 shadow-md cursor-pointer'>
            Clear Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className='relative w-full'>
      <motion.div
        layout
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-y-12'>
        <AnimatePresence mode='popLayout'>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className='h-full'>
              <ProductCard product={product} priority={index < 4} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
