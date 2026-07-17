import Link from 'next/link';
import React from 'react';

interface ProductBreadcrumbsProps {
  category: string;
  name: string;
}

export function ProductBreadcrumbs({
  category,
  name,
}: ProductBreadcrumbsProps) {
  return (
    <nav
      aria-label='Breadcrumb'
      className='mb-6 md:mb-10 text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5 font-sans font-medium'>
      <Link href='/' className='hover:text-foreground transition-colors'>
        Home
      </Link>
      <span className='text-zinc-400'>/</span>
      <Link
        href='/products'
        className='hover:text-foreground transition-colors'>
        Shop
      </Link>
      <span className='text-zinc-400'>/</span>
      <span className='text-zinc-500 capitalize'>{category}</span>
      <span className='text-zinc-400'>/</span>
      <span className='text-foreground font-semibold truncate max-w-50 md:max-w-xs'>
        {name}
      </span>
    </nav>
  );
}
