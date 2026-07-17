'use client';

import React from 'react';
import { Button } from '@src/components/ui/button';
import { formatPrice } from '@src/lib/utils';
import { SHIPPING_COST, SHIPPING_THRESHOLD } from '@src/lib/constants';
import { toast } from 'sonner';
import Link from 'next/link';

interface CartSummaryProps {
  subtotal: number;
}

export default function CartSummary({ subtotal }: CartSummaryProps) {
  const isFreeShipping = subtotal >= SHIPPING_THRESHOLD;
  const shippingCost = subtotal === 0 ? 0 : isFreeShipping ? 0 : SHIPPING_COST;
  const total = subtotal + shippingCost;
  const progressToFreeShipping = Math.min((subtotal / SHIPPING_THRESHOLD) * 100, 100);
  const remainingForFreeShipping = SHIPPING_THRESHOLD - subtotal;

  const handleCheckout = () => {
    toast.success('Thank you for your order! Checkout system integration coming soon.', {
      description: `Total amount: ${formatPrice(total)}`,
      duration: 5000,
    });
  };

  return (
    <div className='bg-card border border-border/80 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-xs sticky top-24 transition-all duration-300'>
      <h2 className='font-heading text-xl sm:text-2xl font-bold text-foreground border-b border-border/80 pb-4'>
        Order Summary
      </h2>

      {/* Free Shipping Progress Indicator */}
      {subtotal > 0 && remainingForFreeShipping > 0 && (
        <div className='flex flex-col gap-2 bg-secondary/30 dark:bg-secondary/15 rounded-2xl p-4 transition-all duration-300'>
          <p className='text-xs sm:text-sm text-foreground/80 font-medium'>
            Add <span className='font-mono font-bold text-accent'>{formatPrice(remainingForFreeShipping)}</span> more for <span className='font-bold text-success'>FREE SHIPPING</span>
          </p>
          <div className='w-full bg-border h-2 rounded-full overflow-hidden'>
            <div
              className='bg-accent h-full transition-all duration-500 ease-out'
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>
      )}

      {subtotal > 0 && remainingForFreeShipping <= 0 && (
        <div className='bg-success/10 text-success rounded-2xl p-4 flex items-center gap-2.5 transition-all duration-300'>
          <span className='text-lg font-bold'>✓</span>
          <p className='text-xs sm:text-sm font-semibold tracking-wide uppercase'>
            Your order qualifies for free shipping!
          </p>
        </div>
      )}

      {/* Price breakdown */}
      <div className='flex flex-col gap-4 text-sm sm:text-base'>
        <div className='flex justify-between items-center text-muted-foreground'>
          <span>Subtotal</span>
          <span className='font-mono font-semibold text-foreground'>{formatPrice(subtotal)}</span>
        </div>
        
        <div className='flex justify-between items-center text-muted-foreground'>
          <span>Shipping Estimate</span>
          {isFreeShipping ? (
            <span className='text-success font-semibold uppercase text-xs sm:text-sm tracking-wider'>Free</span>
          ) : (
            <span className='font-mono font-semibold text-foreground'>
              {subtotal === 0 ? formatPrice(0) : formatPrice(SHIPPING_COST)}
            </span>
          )}
        </div>

        <div className='h-px bg-border my-1' />

        <div className='flex justify-between items-end'>
          <span className='text-base sm:text-lg font-bold text-foreground'>Total</span>
          <div className='flex flex-col items-end'>
            <span className='font-mono text-xl sm:text-2xl font-extrabold text-foreground'>
              {formatPrice(total)}
            </span>
            <p className='text-[10px] sm:text-xs text-muted-foreground mt-0.5'>
              Including VAT & Duties
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className='flex flex-col gap-3 mt-2'>
        <Button
          onClick={handleCheckout}
          variant='default'
          size='lg'
          disabled={subtotal === 0}
          className='w-full py-6 rounded-full text-sm sm:text-base font-bold tracking-widest uppercase shadow-md hover:shadow-lg transition-all duration-300 hover:bg-primary/90 active:scale-98 cursor-pointer disabled:pointer-events-none disabled:opacity-50'>
          Proceed to Checkout
        </Button>
        
        <Link href='/products' className='w-full'>
          <Button
            variant='outline'
            size='lg'
            className='w-full py-6 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase border-border/80 hover:bg-secondary/40 transition-all duration-300 cursor-pointer'>
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}
