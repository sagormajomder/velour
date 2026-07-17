'use client';

import { ProductSize } from '@src/types';
import React from 'react';
import { motion } from 'motion/react';

interface MobileSizeSelectorProps {
  sizes: ProductSize[];
  onSelect: (size: ProductSize, e: React.MouseEvent) => void;
  onClose: (e: React.MouseEvent) => void;
}

export function MobileSizeSelector({
  sizes,
  onSelect,
  onClose,
}: MobileSizeSelectorProps) {
  return (
    <div className='md:hidden absolute inset-0 bg-black/60 backdrop-blur-xs z-30 flex flex-col items-center justify-end p-4 transition-all duration-300'>
      <motion.div
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className='w-full bg-card rounded-2xl p-4 flex flex-col gap-3'
      >
        <div className='flex items-center justify-between'>
          <span className='text-xs font-bold tracking-wider text-foreground uppercase'>
            Select Size
          </span>
          <button
            onClick={onClose}
            className='text-xs font-semibold text-muted-foreground hover:text-foreground'>
            Close
          </button>
        </div>
        <div className='flex flex-wrap gap-2'>
          {sizes.map(size => (
            <button
              key={size}
              onClick={e => onSelect(size, e)}
              className='flex-1 min-w-17.5 py-2 text-sm font-semibold rounded-lg border border-border text-foreground hover:bg-primary hover:text-white transition-all'>
              {size}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

