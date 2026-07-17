import { formatPrice } from '@src/lib/utils';
import React from 'react';

interface ProductPriceProps {
  price: number;
  originalPrice?: number;
}

export function ProductPrice({ price, originalPrice }: ProductPriceProps) {
  return (
    <div className='flex items-baseline gap-3 pb-4 border-b border-border/40'>
      <span className='text-2xl md:text-3xl font-mono font-bold text-foreground'>
        {formatPrice(price)}
      </span>
      {originalPrice && (
        <span className='text-base md:text-lg font-mono text-muted-foreground line-through'>
          {formatPrice(originalPrice)}
        </span>
      )}
    </div>
  );
}
