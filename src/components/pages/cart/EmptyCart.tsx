import { Button } from '@src/components/ui/button';
import Link from 'next/link';

export default function EmptyCart() {
  return (
    <div className='flex flex-col items-center justify-center py-20 px-4 text-center max-w-md mx-auto animate-fade-in'>
      <div className='relative mb-8 text-muted-foreground/30 dark:text-muted-foreground/20'>
        <svg
          className='w-32 h-32 mx-auto stroke-current'
          viewBox='0 0 24 24'
          fill='none'
          strokeWidth='1'
          strokeLinecap='round'
          strokeLinejoin='round'>
          <path d='M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z' />
          <line x1='3' y1='6' x2='21' y2='6' />
          <path d='M16 10a4 4 0 0 1-8 0' />
        </svg>
        <div className='absolute inset-0 flex items-center justify-center translate-y-2'>
          <span className='font-heading text-4xl font-light text-accent/60 select-none'>
            ?
          </span>
        </div>
      </div>

      <h2 className='text-2xl sm:text-3xl font-heading font-medium text-foreground mb-3'>
        Your Shopping Bag is Empty
      </h2>
      <p className='text-sm sm:text-base text-muted-foreground mb-8 leading-relaxed'>
        It looks like you haven&apos;t added any items to your cart yet. Explore
        our curated collections to find your perfect style.
      </p>

      <Link href='/products' className='w-full sm:w-auto'>
        <Button
          variant='default'
          size='lg'
          className='w-full px-8 py-6 rounded-full text-base font-semibold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 cursor-pointer'>
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
}
