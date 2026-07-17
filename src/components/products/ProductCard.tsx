'use client';

import { useCart } from '@src/context/CartContext';
import { formatPrice, calculateDiscount } from '@src/lib/utils';
import { Product, ProductSize } from '@src/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'sonner';

import { MobileSizeSelector } from './MobileSizeSelector';
import { ProductBadges } from './ProductBadges';
import { QuickAddButton } from './QuickAddButton';
import { QuickSizeSelector } from './QuickSizeSelector';
import { WishlistButton } from './WishlistButton';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({
  product,
  priority = false,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const [isLiked, setIsLiked] = useState(false);
  const [showSizesOnMobile, setShowSizesOnMobile] = useState(false);

  const { id, name, slug, price, originalPrice, image, sizes, inStock, isNew } =
    product;

  // Calculate discount percentage using the shared utility helper
  const discount = calculateDiscount(price, originalPrice);

  const handleQuickAdd = (size: ProductSize, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!inStock) return;

    // Use the first color as default
    const defaultColor = product.colors[0] || 'White';
    addToCart(id, 1, defaultColor, size);
    toast.success(`Added "${name}" (${size}) to cart!`);
  };

  const handleQuickAddDefault = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!inStock) return;

    // On mobile, if there are multiple sizes, toggle the size drawer overlay
    if (sizes.length > 1 && window.innerWidth < 768) {
      setShowSizesOnMobile(!showSizesOnMobile);
      return;
    }

    // Otherwise, add first size
    const defaultSize = sizes[0] || 'Free Size';
    const defaultColor = product.colors[0] || 'White';
    addToCart(id, 1, defaultColor, defaultSize);
    toast.success(`Added "${name}" (${defaultSize}) to cart!`);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    toast.success(
      isLiked
        ? `Removed "${name}" from your wishlist.`
        : `Added "${name}" to your wishlist!`,
    );
  };

  return (
    <div className='group relative flex flex-col w-full h-full bg-card rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300'>
      {/* Product Image Container */}
      <div className='relative w-full aspect-5/6 rounded-2xl overflow-hidden bg-secondary/30'>
        <Link
          href={`/products/${slug}`}
          className='relative block w-full h-full overflow-hidden'>
          <Image
            src={image}
            alt={name}
            fill
            sizes='(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
            priority={priority}
            className='object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out'
          />
        </Link>

        {/* Badges Overlay */}
        <ProductBadges discount={discount} isNew={isNew} inStock={inStock} />

        {/* Quick Actions Panel (Floating Circle Buttons) */}
        <div className='absolute top-3 right-3 z-20 flex flex-col gap-2'>
          <WishlistButton isLiked={isLiked} onClick={handleWishlistToggle} />
          {inStock && <QuickAddButton onClick={handleQuickAddDefault} />}
        </div>

        {/* Quick Size Selector: Slide up overlay on hover (Desktop) */}
        {inStock && (
          <QuickSizeSelector sizes={sizes} onSelect={handleQuickAdd} />
        )}

        {/* Mobile Size Selection Overlay */}
        {inStock && showSizesOnMobile && (
          <MobileSizeSelector
            sizes={sizes}
            onSelect={handleQuickAdd}
            onClose={e => {
              e.preventDefault();
              setShowSizesOnMobile(false);
            }}
          />
        )}
      </div>

      {/* Product Details Section */}
      <div className='flex flex-col gap-1 py-4 px-1.5 bg-card'>
        <div className='flex justify-between items-start gap-2'>
          <h3 className='font-sans text-sm sm:text-base font-semibold text-foreground tracking-tight line-clamp-2 min-h-10'>
            <Link
              href={`/products/${slug}`}
              className='hover:underline decoration-accent decoration-1.5'>
              {name}
            </Link>
          </h3>
          <div className='flex flex-col items-end shrink-0'>
            <span className='font-mono text-sm sm:text-base font-bold text-foreground'>
              {formatPrice(price)}
            </span>
            {originalPrice && (
              <span className='font-mono text-xs text-muted-foreground line-through'>
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
