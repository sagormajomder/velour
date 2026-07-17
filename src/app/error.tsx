'use client';

import { AlertCircleIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Container from '@src/components/layouts/Container';
import { Button } from '@src/components/ui/button';
import Link from 'next/link';
import { useEffect } from 'react';

interface RootErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function RootError({ error, reset }: RootErrorProps) {
  useEffect(() => {
    console.error('Captured Application Runtime Error:', error);
  }, [error]);

  return (
    <main className='w-full min-h-[70vh] flex flex-col items-center justify-center bg-background transition-colors duration-300'>
      <Container className='flex flex-col items-center text-center gap-6 py-16 sm:py-24 max-w-lg mx-auto'>
        {/* Warning Icon Overlay */}
        <div className='flex items-center justify-center size-16 rounded-full bg-destructive/10 text-destructive mb-2 animate-bounce'>
          <HugeiconsIcon icon={AlertCircleIcon} size={32} strokeWidth={1.5} />
        </div>

        {/* Header Text */}
        <div className='flex flex-col gap-2'>
          <span className='text-xs font-bold tracking-widest text-accent uppercase font-sans'>
            System Alert
          </span>
          <h1 className='text-3xl font-heading font-bold text-foreground tracking-tight'>
            Something Went Wrong
          </h1>
          <p className='text-sm text-muted-foreground leading-relaxed mt-1'>
            We apologize for the inconvenience. An unexpected runtime error
            occurred on our storefront servers.
          </p>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-3 w-full justify-center mt-2'>
          <Button
            onClick={() => reset()}
            variant='default'
            size='lg'
            className='rounded-full px-8 py-3 font-semibold tracking-wide cursor-pointer shadow-xs bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 active:scale-95'>
            Try Again
          </Button>
          <Link href='/' className='inline-block'>
            <Button
              variant='outline'
              size='lg'
              className='w-full rounded-full px-8 py-3 font-semibold tracking-wide border-border hover:bg-secondary/40 text-foreground transition-all duration-300 active:scale-95'>
              Go Back Home
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
