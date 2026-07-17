import { Search01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Container from '@src/components/layouts/Container';
import { Button } from '@src/components/ui/button';
import Link from 'next/link';

export default function RootNotFound() {
  return (
    <main className='w-full min-h-[70vh] flex flex-col items-center justify-center bg-background transition-colors duration-300'>
      <Container className='flex flex-col items-center text-center gap-6 py-16 sm:py-24 max-w-xl mx-auto'>
        {/* Error Code and Icon */}
        <div className='flex flex-col items-center gap-1 select-none'>
          <h1 className='text-8xl sm:text-9xl font-heading font-extrabold text-secondary-foreground/20 tracking-tighter leading-none'>
            404
          </h1>
          <div className='flex items-center justify-center size-12 rounded-full bg-secondary/50 dark:bg-secondary/15 text-muted-foreground -mt-4 sm:-mt-6 shadow-xs'>
            <HugeiconsIcon icon={Search01Icon} size={20} strokeWidth={1.5} />
          </div>
        </div>

        {/* Text Details */}
        <div className='flex flex-col gap-2'>
          <span className='text-xs font-bold tracking-widest text-accent uppercase font-sans'>
            Page Missing
          </span>
          <h2 className='text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight'>
            Collection Not Found
          </h2>
          <p className='text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto mt-1'>
            The page or style collection you are looking for does not exist, has
            been archived, or is temporarily unavailable.
          </p>
        </div>

        {/* CTAs */}
        <div className='flex flex-col sm:flex-row gap-3 w-full justify-center mt-2'>
          <Link href='/products' className='inline-block'>
            <Button
              variant='default'
              size='lg'
              className='w-full rounded-full px-8 py-3 font-semibold tracking-wide cursor-pointer shadow-xs bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 active:scale-95'>
              Shop New Arrivals
            </Button>
          </Link>
          <Link href='/' className='inline-block'>
            <Button
              variant='outline'
              size='lg'
              className='w-full rounded-full px-8 py-3 font-semibold tracking-wide border-border hover:bg-secondary/40 text-foreground transition-all duration-300 active:scale-95 cursor-pointer'>
              Go Back Home
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
