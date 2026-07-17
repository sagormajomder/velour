'use client';

import { ProductCategory } from '@src/types';
import { cn } from '@src/lib/utils';
import { motion } from 'motion/react';
import React from 'react';

// Define the full set of filter choices
export type FilterCategory = 'All' | 'New Arrivals' | ProductCategory;

interface CategoryFilterProps {
  categories: FilterCategory[];
  activeCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className='w-full overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 py-2'>
      <div className='flex items-center gap-2 min-w-max md:flex-wrap md:justify-center'>
        {categories.map(category => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn(
                'relative px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-accent',
                isActive
                  ? 'text-primary-foreground font-semibold'
                  : 'text-muted-foreground hover:text-foreground bg-secondary/40 dark:bg-secondary/10 hover:bg-secondary/80 dark:hover:bg-secondary/20',
              )}
            >
              {/* Category label */}
              <span className='relative z-10'>{category}</span>

              {/* Animated active background pill */}
              {isActive && (
                <motion.div
                  layoutId='activeCategoryBackground'
                  className='absolute inset-0 bg-primary rounded-full'
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
