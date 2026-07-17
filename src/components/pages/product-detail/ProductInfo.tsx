import { RatingStars } from '@src/components/products/RatingStars';
import React from 'react';

interface ProductInfoProps {
  category: string;
  name: string;
  rating: number;
  reviewCount: number;
  discount: number;
}

export function ProductInfo({
  category,
  name,
  rating,
  reviewCount,
  discount,
}: ProductInfoProps) {
  return (
    <div className='flex flex-col gap-4'>
      {/* Category & Badge Row */}
      <div className='flex items-center justify-between gap-4'>
        <span className='text-xs font-bold tracking-widest text-accent uppercase font-sans'>
          VELOUR / {category}
        </span>
        {discount > 0 && (
          <span className='px-2.5 py-1 text-xs font-bold font-sans tracking-wide bg-accent/10 text-accent rounded-full'>
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Title & Ratings */}
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight'>
          {name}
        </h1>
        <div className='flex items-center gap-2'>
          <RatingStars rating={rating} />
          <span className='text-xs font-semibold text-zinc-500 font-sans tracking-wider'>
            {rating} / 5.0 ({reviewCount} Reviews)
          </span>
        </div>
      </div>
    </div>
  );
}
