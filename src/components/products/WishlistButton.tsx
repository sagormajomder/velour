import { HeartIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { cn } from '@src/lib/utils';
import React from 'react';

interface WishlistButtonProps {
  isLiked: boolean;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
  size?: number;
}

export function WishlistButton({
  isLiked,
  onClick,
  className,
  size = 18,
}: WishlistButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center justify-center size-9 rounded-full shadow-md transition-all duration-300 cursor-pointer',
        isLiked
          ? 'bg-red-500 text-white hover:bg-red-600 scale-105'
          : 'bg-black/35 backdrop-blur-xs text-white hover:bg-black/50 hover:scale-105',
        className,
      )}
      aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}>
      <HugeiconsIcon
        icon={HeartIcon}
        size={size}
        strokeWidth={2}
        className={isLiked ? 'fill-current' : ''}
      />
    </button>
  );
}
