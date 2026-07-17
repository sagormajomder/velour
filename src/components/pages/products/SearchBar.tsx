'use client';

import { Cancel01Icon, Search01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Input } from '@src/components/ui/input';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search by product name...',
}: SearchBarProps) {
  return (
    <div className='relative w-full max-w-md mx-auto'>
      <div className='relative flex items-center w-full h-11 rounded-full bg-secondary/30 dark:bg-secondary/10 border border-border/50 hover:border-border focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-all duration-300'>
        {/* Search Icon */}
        <div className='pl-4 pr-2 text-muted-foreground shrink-0'>
          <HugeiconsIcon
            icon={Search01Icon}
            size={18}
            strokeWidth={1.5}
            className='transition-colors duration-300'
          />
        </div>

        {/* Search Input */}
        <Input
          type='text'
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className='border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:border-none w-full h-full text-sm text-foreground placeholder:text-muted-foreground pr-10 font-sans'
        />

        {/* Clear Button */}
        {value && (
          <button
            type='button'
            onClick={() => onChange('')}
            className='absolute right-3 p-1 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-200 cursor-pointer'
            aria-label='Clear search'>
            <HugeiconsIcon icon={Cancel01Icon} size={16} strokeWidth={1.5} />
          </button>
        )}
      </div>
    </div>
  );
}
