'use client';

import { ProductSize } from '@src/types';
import React from 'react';

interface QuickSizeSelectorProps {
  sizes: ProductSize[];
  onSelect: (size: ProductSize, e: React.MouseEvent) => void;
}

export function QuickSizeSelector({ sizes, onSelect }: QuickSizeSelectorProps) {
  return (
    <div className='hidden md:flex absolute bottom-0 inset-x-0 bg-card/95 backdrop-blur-xs p-4 flex-col gap-2 items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-30'>
      <span className='text-[10px] font-bold tracking-wider text-muted-foreground uppercase'>
        Quick Add Size
      </span>
      <div className='flex flex-wrap justify-center gap-2 w-full'>
        {sizes.map(size => (
          <button
            key={size}
            onClick={e => onSelect(size, e)}
            className='px-3.5 py-1.5 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground border border-border/50 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 active:scale-95 shadow-xs cursor-pointer'>
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
