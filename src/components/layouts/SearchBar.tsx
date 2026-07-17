'use client';

import { Cancel01Icon, Search01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { buttonVariants } from '@src/components/ui/button';
import { Input } from '@src/components/ui/input';
import { cn } from '@src/lib/utils';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function SearchBar({ alwaysOpen = false }: { alwaysOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(alwaysOpen);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Focus input when search bar opens
  useEffect(() => {
    if (isOpen && inputRef.current && !alwaysOpen) {
      inputRef.current.focus();
    }
  }, [isOpen, alwaysOpen]);

  // Close search bar when clicking outside of it (only if not alwaysOpen)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (alwaysOpen) return;
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen && !alwaysOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, alwaysOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/products?search=${encodeURIComponent(query.trim())}`);
      if (!alwaysOpen) {
        setIsOpen(false);
      }
      setQuery('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && !alwaysOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex items-center h-9',
        alwaysOpen ? 'w-full justify-start' : 'justify-end',
      )}>
      <form
        onSubmit={handleSearchSubmit}
        className={cn(
          'flex items-center overflow-hidden rounded-full bg-secondary/80 dark:bg-secondary/20 transition-all duration-300 ease-out border border-transparent',
          alwaysOpen
            ? 'w-full px-3 py-1.5 border-border/80 opacity-100'
            : isOpen
            ? 'w-48 sm:w-64 px-3 py-1 border-border/80 opacity-100'
            : 'w-0 opacity-0 pointer-events-none',
        )}>
        {alwaysOpen && (
          <HugeiconsIcon
            icon={Search01Icon}
            size={16}
            strokeWidth={1.5}
            className='text-muted-foreground mr-2 shrink-0'
          />
        )}
        <Input
          ref={inputRef}
          type='text'
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Search items...'
          className='border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:border-none w-full text-sm text-foreground placeholder:text-muted-foreground h-auto py-0'
        />
        {query && (
          <button
            type='button'
            onClick={() => setQuery('')}
            className='text-muted-foreground hover:text-foreground transition-colors mr-1 cursor-pointer'>
            <HugeiconsIcon icon={Cancel01Icon} size={14} />
          </button>
        )}
      </form>

      {!alwaysOpen && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon' }),
            'text-foreground/80 hover:text-foreground hover:bg-secondary/50 dark:hover:bg-secondary/20 rounded-full transition-all duration-300 cursor-pointer',
          )}
          aria-label='Search products'>
          <HugeiconsIcon icon={Search01Icon} size={20} strokeWidth={1.5} />
        </button>
      )}

      {!alwaysOpen && isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'icon' }),
            'text-foreground/80 hover:text-foreground hover:bg-secondary/50 dark:hover:bg-secondary/20 rounded-full transition-all duration-300 ml-1',
          )}
          aria-label='Close search'>
          <HugeiconsIcon icon={Cancel01Icon} size={20} strokeWidth={1.5} />
        </button>
      )}
    </div>
  );
}
