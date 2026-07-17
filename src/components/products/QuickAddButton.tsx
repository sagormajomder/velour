'use client';

import { ShoppingBag01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import React from 'react';

interface QuickAddButtonProps {
  onClick: (e: React.MouseEvent) => void;
}

export function QuickAddButton({ onClick }: QuickAddButtonProps) {
  return (
    <button
      onClick={onClick}
      className='flex items-center justify-center size-9 rounded-full bg-black/35 backdrop-blur-xs text-white hover:bg-black/50 hover:scale-105 shadow-md transition-all duration-300'
      aria-label='Quick add to cart'>
      <HugeiconsIcon icon={ShoppingBag01Icon} size={18} strokeWidth={2} />
    </button>
  );
}
