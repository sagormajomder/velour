'use client';

import { ShoppingBag01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { buttonVariants } from '@src/components/ui/button';
import { cn } from '@src/lib/utils';
import Link from 'next/link';
import { useCart } from '@src/context/CartContext';
import { useIsMounted } from '@src/hooks/useIsMounted';
import { motion } from 'motion/react';

export default function CartIcon() {
  const { cartCount } = useCart();
  const mounted = useIsMounted();

  return (
    <Link
      href='/cart'
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'icon' }),
        'relative text-foreground/80 hover:text-foreground hover:bg-secondary/50 dark:hover:bg-secondary/20 rounded-full transition-all duration-300',
      )}
      aria-label='View shopping cart'>
      <HugeiconsIcon icon={ShoppingBag01Icon} size={20} strokeWidth={1.5} />
      {mounted && cartCount > 0 && (
        <motion.span
          key={cartCount}
          initial={{ scale: 0.6 }}
          animate={{ scale: [0.6, 1.3, 1] }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className='absolute top-0.5 right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground font-mono'>
          {cartCount}
        </motion.span>
      )}
    </Link>
  );
}

