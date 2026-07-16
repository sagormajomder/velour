'use client';

import { Menu01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Button } from '@src/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@src/components/ui/sheet';
import { BRAND_NAME, NAV_LINKS, SOCIAL_LINKS } from '@src/lib/constants';
import Link from 'next/link';
import { useState } from 'react';
import SearchBar from './SearchBar';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden text-foreground/80 hover:text-foreground hover:bg-secondary/50 dark:hover:bg-secondary/20 rounded-full cursor-pointer'
            aria-label='Open mobile menu'
          />
        }>
        <HugeiconsIcon icon={Menu01Icon} size={20} strokeWidth={1.5} />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='w-75 flex flex-col justify-between h-full bg-background border-r border-border p-6 shadow-xl'>
        <div className='flex flex-col gap-8'>
          <SheetHeader className='text-left border-b border-border/40 pb-4'>
            <SheetTitle>
              <Link
                href='/'
                onClick={() => setOpen(false)}
                className='font-heading text-2xl font-bold tracking-widest text-primary'>
                {BRAND_NAME}
              </Link>
            </SheetTitle>
          </SheetHeader>

          <nav className='flex flex-col gap-6'>
            {/* Mobile Search Bar */}
            <div className='px-1 mb-2'>
              <SearchBar alwaysOpen={true} />
            </div>

            <div className='flex flex-col gap-3'>
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className='text-lg font-medium text-foreground hover:text-accent transition-colors'>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className='flex flex-col gap-6 border-t border-border/40 pt-6 mt-auto'>
          <div className='flex flex-col gap-2 text-xs text-muted-foreground'>
            <span className='font-semibold uppercase tracking-wider text-[10px]'>
              Connect with us
            </span>
            <div className='flex gap-4 mt-2'>
              {SOCIAL_LINKS.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-foreground/75 hover:text-accent transition-colors text-sm font-medium'>
                  {social.name}
                </a>
              ))}
            </div>
          </div>
          <p className='text-[11px] text-muted-foreground/80 font-mono'>
            &copy; {new Date().getFullYear()} {BRAND_NAME} Store. All rights
            reserved.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
