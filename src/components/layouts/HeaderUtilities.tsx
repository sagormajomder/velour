'use client';

import dynamic from 'next/dynamic';
import SearchBar from './SearchBar';

// Defer rendering to the client side to bypass SSR hydration mismatches
const ThemeToggle = dynamic(() => import('./ThemeToggle'), { ssr: false });
const CartIcon = dynamic(() => import('./CartIcon'), { ssr: false });

export default function HeaderUtilities() {
  return (
    <div className='flex items-center gap-1 sm:gap-2'>
      <ThemeToggle />
      <CartIcon />
    </div>
  );
}
