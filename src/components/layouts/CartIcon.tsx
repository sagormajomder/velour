'use client';

import { ShoppingBag01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { buttonVariants } from '@src/components/ui/button';
import { cn } from '@src/lib/utils';
import Link from 'next/link';
import { useCart } from '@src/context/CartContext';

export default function CartIcon() {
  const { cartCount } = useCart();

  return (
    <Link
      href='/cart'
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'icon' }),
        'relative text-foreground/80 hover:text-foreground hover:bg-secondary/50 dark:hover:bg-secondary/20 rounded-full transition-all duration-300',
      )}
      aria-label='View shopping cart'>
      <HugeiconsIcon icon={ShoppingBag01Icon} size={20} strokeWidth={1.5} />
      {cartCount > 0 && (
        <span className='absolute top-0.5 right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground font-mono scale-100 transition-all'>
          {cartCount}
        </span>
      )}
    </Link>
  );
}

