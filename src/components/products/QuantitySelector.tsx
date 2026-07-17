'use client';

import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (qty: number) => void;
  disabled?: boolean;
}

export function QuantitySelector({
  quantity,
  onQuantityChange,
  disabled = false,
}: QuantitySelectorProps) {
  const incrementQty = () => onQuantityChange(quantity + 1);
  const decrementQty = () => onQuantityChange(Math.max(1, quantity - 1));

  return (
    <div className='flex items-center border border-border/80 h-12 rounded-full overflow-hidden bg-card shrink-0 px-1'>
      <button
        onClick={decrementQty}
        disabled={quantity <= 1 || disabled}
        className='size-10 flex items-center justify-center text-lg font-medium text-zinc-500 hover:text-foreground hover:bg-secondary/40 rounded-full transition-all disabled:opacity-30 cursor-pointer active:scale-95'
        aria-label='Reduce quantity'>
        −
      </button>
      <span className='w-10 text-center font-mono font-bold text-sm text-foreground select-none'>
        {quantity}
      </span>
      <button
        onClick={incrementQty}
        disabled={disabled}
        className='size-10 flex items-center justify-center text-lg font-medium text-zinc-500 hover:text-foreground hover:bg-secondary/40 rounded-full transition-all disabled:opacity-30 cursor-pointer active:scale-95'
        aria-label='Increase quantity'>
        +
      </button>
    </div>
  );
}
