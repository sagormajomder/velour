import { BRAND_NAME, NAV_LINKS } from '@src/lib/constants';
import Link from 'next/link';
import Container from './Container';
import HeaderUtilities from './HeaderUtilities';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors'>
      <Container className='flex h-16 items-center justify-between'>
        {/* Left Side: Mobile Menu Trigger + Brand Logo */}
        <div className='flex items-center gap-2'>
          <Link
            href='/'
            className='font-heading text-xl sm:text-2xl font-bold tracking-widest text-primary hover:opacity-90 transition-opacity'>
            {BRAND_NAME}
          </Link>
        </div>

        {/* Center: Desktop/Tablet Navigation Links */}
        <nav className='hidden md:flex items-center gap-8'>
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className='text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover:underline underline-offset-4 decoration-accent decoration-2'>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side: Interactive Client Utilities */}
        <HeaderUtilities />
      </Container>
    </header>
  );
}
