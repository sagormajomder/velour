'use client';

import { HeartIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import React from 'react';

interface WishlistButtonProps {
  isLiked: boolean;
  onClick: (e: React.MouseEvent) => void;
}

export function WishlistButton({ isLiked, onClick }: WishlistButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center size-9 rounded-full shadow-md transition-all duration-300 ${
        isLiked
          ? 'bg-red-500 text-white hover:bg-red-600 scale-105'
          : 'bg-black/35 backdrop-blur-xs text-white hover:bg-black/50 hover:scale-105'
      }`}
      aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}>
      <HugeiconsIcon
        icon={HeartIcon}
        size={18}
        strokeWidth={2}
        className={isLiked ? 'fill-current' : ''}
      />
    </button>
  );
}
