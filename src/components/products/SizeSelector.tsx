'use client';

import { ProductSize } from '@src/types';
import React from 'react';

interface SizeSelectorProps {
  sizes: ProductSize[];
  selectedSize: ProductSize;
  onSizeChange: (size: ProductSize) => void;
}

export function SizeSelector({
  sizes,
  selectedSize,
  onSizeChange,
}: SizeSelectorProps) {
  if (sizes.length === 0) return null;

  return (
    <div className='flex flex-col gap-2.5'>
      <span className='text-xs font-bold tracking-widest uppercase text-foreground font-sans flex items-center gap-1.5'>
        Size:{' '}
        <span className='text-zinc-500 font-medium normal-case font-body text-sm'>
          {selectedSize}
        </span>
      </span>
      <div
        className='flex items-center gap-2.5 flex-wrap'
        role='radiogroup'
        aria-label='Select size'>
        {sizes.map(size => {
          const isSelected = selectedSize === size;
          return (
            <button
              key={size}
              role='radio'
              aria-checked={isSelected}
              onClick={() => onSizeChange(size)}
              className={`h-9 px-4.5 text-xs font-semibold tracking-wide rounded-full border transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-primary text-primary-foreground border-primary scale-102 shadow-xs'
                  : 'bg-card text-foreground border-border hover:bg-secondary/40 hover:border-zinc-400'
              }`}>
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}
