'use client';

import { Button } from '@src/components/ui/button';
import { useCart } from '@src/context/CartContext';
import { Product, ProductColor, ProductSize } from '@src/types';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { ColorSelector } from './ColorSelector';
import { QuantitySelector } from './QuantitySelector';
import { SizeSelector } from './SizeSelector';
import { WishlistButton } from './WishlistButton';

interface ProductPurchaseFormProps {
  product: Product;
}

export function ProductPurchaseForm({ product }: ProductPurchaseFormProps) {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState<ProductColor>(
    product.colors[0] || 'White',
  );
  const [selectedSize, setSelectedSize] = useState<ProductSize>(
    product.sizes[0] || 'Free Size',
  );
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = () => {
    if (!product.inStock) return;
    addToCart(product.id, quantity, selectedColor, selectedSize);
    toast.success(
      `Added ${quantity} × "${product.name}" (${selectedSize} / ${selectedColor}) to cart!`,
    );
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    toast.success(
      isLiked
        ? `Removed "${product.name}" from your wishlist.`
        : `Added "${product.name}" to your wishlist!`,
    );
  };

  return (
    <div className='flex flex-col gap-6 w-full'>
      {/* Color Selector */}
      <ColorSelector
        colors={product.colors}
        selectedColor={selectedColor}
        onColorChange={setSelectedColor}
      />

      {/* Size Selector */}
      <SizeSelector
        sizes={product.sizes}
        selectedSize={selectedSize}
        onSizeChange={setSelectedSize}
      />

      {/* Stock Status Indicator */}
      <div className='flex items-center gap-2 pt-1'>
        <span
          className={`size-2.5 rounded-full ${
            product.inStock ? 'bg-success' : 'bg-red-500'
          }`}
        />
        <span className='text-xs font-semibold font-sans tracking-wide text-zinc-500'>
          {product.inStock ? 'In Stock — Ready to Dispatch' : 'Out of Stock'}
        </span>
      </div>

      <div className='flex gap-3 items-center flex-wrap pt-2'>
        {/* Stepper counter */}
        <QuantitySelector
          quantity={quantity}
          onQuantityChange={setQuantity}
          disabled={!product.inStock}
        />

        {/* Add to Cart CTA */}
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className='flex-1 h-12 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 disabled:opacity-40 cursor-pointer bg-primary text-primary-foreground hover:bg-primary/95 active:scale-98 shadow-sm hover:shadow-md'>
          {product.inStock ? 'Add to Cart' : 'Sold Out'}
        </Button>

        {/* Wishlist Button */}
        <WishlistButton
          isLiked={isLiked}
          onClick={handleWishlistToggle}
          className={`size-12 bg-card border border-border text-foreground hover:bg-secondary/40 shadow-none ${
            isLiked ? 'text-red-500 border-red-200 bg-red-50/10' : ''
          }`}
          size={20}
        />
      </div>
    </div>
  );
}
