'use client';

import { Delete02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { QuantitySelector } from '@src/components/products/QuantitySelector';
import { buttonVariants } from '@src/components/ui/button';
import { COLOR_HEX_MAP } from '@src/lib/constants';
import { cn, formatPrice } from '@src/lib/utils';
import { Product, ProductColor, ProductSize } from '@src/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CartItemCardProps {
  product: Product;
  selectedColor: ProductColor;
  selectedSize: ProductSize;
  quantity: number;
  onQuantityChange: (qty: number) => void;
  onRemove: () => void;
}

export default function CartItemCard({
  product,
  selectedColor,
  selectedSize,
  quantity,
  onQuantityChange,
  onRemove,
}: CartItemCardProps) {
  const { name, slug, price, image } = product;
  const hexColor = COLOR_HEX_MAP[selectedColor] || '#cccccc';
  const itemTotal = price * quantity;

  return (
    <div className='grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-6 border-b border-border/60 hover:bg-secondary/20 dark:hover:bg-secondary/5 rounded-3xl px-4 sm:px-6 transition-all duration-300 relative group/card'>
      {/* Product Image & Details */}
      <div className='col-span-1 md:col-span-5 flex gap-4 items-center'>
        <Link
          href={`/products/${slug}`}
          className='relative shrink-0 w-20 aspect-5/6 rounded-2xl overflow-hidden bg-secondary/30 border border-border/50'>
          <Image
            src={image}
            alt={name}
            fill
            sizes='80px'
            className='object-cover transform group-hover/card:scale-105 transition-transform duration-500 ease-out'
          />
        </Link>
        <div className='flex flex-col min-w-0'>
          <Link
            href={`/products/${slug}`}
            className='font-heading text-sm sm:text-base lg:text-lg font-bold text-foreground hover:underline decoration-accent decoration-1.5 line-clamp-2 pr-8 md:pr-0'>
            {name}
          </Link>
          <span className='font-mono text-sm text-muted-foreground mt-1'>
            {formatPrice(price)}
          </span>

          {/* Mobile-Only Color & Size Display */}
          <div className='flex flex-wrap items-center gap-3 mt-2 md:hidden text-xs'>
            <div className='flex items-center gap-1.5 bg-secondary/60 dark:bg-secondary/15 px-2.5 py-1 rounded-full'>
              <span
                className='size-3 rounded-full border border-border/80'
                style={{ backgroundColor: hexColor }}
              />
              <span className='text-foreground font-medium'>
                {selectedColor}
              </span>
            </div>
            <div className='bg-secondary/60 dark:bg-secondary/15 px-2.5 py-1 rounded-full font-semibold text-foreground'>
              Size: {selectedSize}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop-Only Color & Size */}
      <div className='hidden md:flex col-span-2 flex-col items-center justify-center gap-1.5 text-center'>
        <div className='flex items-center gap-1.5'>
          <span
            className='size-3.5 rounded-full border border-zinc-300 dark:border-zinc-700 shadow-xs'
            style={{ backgroundColor: hexColor }}
            title={selectedColor}
          />
          <span className='text-sm text-foreground/80 font-medium'>
            {selectedColor}
          </span>
        </div>
        <span className='text-xs font-mono bg-secondary/60 dark:bg-secondary/20 px-2 py-0.5 rounded-md font-bold text-foreground'>
          {selectedSize}
        </span>
      </div>

      {/* Quantity Selector (3 cols on Desktop) */}
      <div className='col-span-1 md:col-span-3 flex items-center justify-between md:justify-center mt-3 md:mt-0'>
        <span className='text-sm font-medium text-muted-foreground md:hidden'>
          Quantity:
        </span>
        <QuantitySelector
          quantity={quantity}
          onQuantityChange={onQuantityChange}
          size='sm'
        />
      </div>

      {/* Line Total & Remove button (2 cols on Desktop) */}
      <div className='col-span-1 md:col-span-2 flex items-center justify-between md:justify-end gap-4 mt-3 md:mt-0'>
        <span className='text-sm font-medium text-muted-foreground md:hidden'>
          Total:
        </span>
        <div className='flex items-center gap-4'>
          <span className='font-mono font-bold text-sm sm:text-base lg:text-lg text-foreground'>
            {formatPrice(itemTotal)}
          </span>

          {/* Desktop Hover / Mobile Absolute Remove Button */}
          <button
            onClick={onRemove}
            className={cn(
              buttonVariants({ variant: 'destructive', size: 'icon-sm' }),
              'absolute top-4 right-4 md:static md:opacity-0 md:group-hover/card:opacity-100 transition-all duration-300 rounded-full cursor-pointer shadow-xs md:shadow-none bg-destructive/10 text-destructive border border-destructive/20 hover:bg-destructive hover:text-white',
            )}
            aria-label={`Remove ${name} from cart`}>
            <HugeiconsIcon icon={Delete02Icon} size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
