import { getCategories } from '@src/data/products';
import { BRAND_NAME, CONTACT_INFO, SOCIAL_LINKS } from '@src/lib/constants';
import Link from 'next/link';
import Container from './Container';

export default function Footer() {
  return (
    <footer className='w-full border-t border-border/40 bg-secondary/35 dark:bg-secondary/10 py-12 transition-colors'>
      <Container className='grid grid-cols-1 gap-10 md:grid-cols-3'>
        {/* Column 1: Brand Information & Contact */}
        <div className='flex flex-col gap-4'>
          <Link
            href='/'
            className='font-heading text-2xl font-bold tracking-widest text-primary hover:opacity-90 transition-opacity'>
            {BRAND_NAME}
          </Link>
          <p className='text-sm text-muted-foreground max-w-sm leading-relaxed'>
            Velour is a premium South-Asian fashion brand. We specialize in
            blending timeless heritage fabrics with contemporary modern
            aesthetics to create elevated styles.
          </p>
          <div className='text-xs text-muted-foreground/80 flex flex-col gap-1.5 mt-2 font-mono'>
            <span>Email: {CONTACT_INFO.email}</span>
            <span>Phone: {CONTACT_INFO.phone}</span>
            <span>Address: {CONTACT_INFO.address}</span>
          </div>
        </div>

        {/* Column 2: Product Categories */}
        <div className='flex flex-col gap-4'>
          <h3 className='text-sm font-semibold uppercase tracking-wider text-foreground'>
            Categories
          </h3>
          <ul className='flex flex-col gap-2.5'>
            {getCategories().map(category => (
              <li key={category}>
                <Link
                  href={`/products?category=${encodeURIComponent(category)}`}
                  className='text-sm text-muted-foreground hover:text-accent transition-colors'>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Social Media Links */}
        <div className='flex flex-col gap-4'>
          <h3 className='text-sm font-semibold uppercase tracking-wider text-foreground'>
            Follow Us
          </h3>
          <ul className='flex flex-col gap-2.5'>
            {SOCIAL_LINKS.map(social => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2'>
                  <span>{social.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Copyright Bar */}
      <div className='w-full border-t border-border/40 mt-10 pt-6'>
        <Container className='flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground'>
          <p>
            &copy; {new Date().getFullYear()} {BRAND_NAME} Store. All rights
            reserved.
          </p>
          <div className='flex gap-6 font-mono'>
            <Link
              href='/privacy'
              className='hover:text-accent transition-colors'>
              Privacy Policy
            </Link>
            <Link href='/terms' className='hover:text-accent transition-colors'>
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
