import React from 'react';
import { cn } from '@src/lib/utils';

interface SectionHeaderProps {
  tagline: string;
  heading: string;
  description?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
  className?: string;
}

export function SectionHeader({
  tagline,
  heading,
  description,
  align = 'center',
  as = 'h2',
  className,
}: SectionHeaderProps) {
  const isCenter = align === 'center';
  const HeadingTag = as;

  return (
    <div
      className={cn(
        'flex flex-col gap-3 max-w-3xl mx-auto w-full transition-all duration-300',
        isCenter ? 'items-center text-center' : 'items-start text-left',
        className
      )}>
      <span className='text-xs font-bold tracking-widest text-accent uppercase font-sans'>
        {tagline}
      </span>
      <HeadingTag className='text-3xl sm:text-5xl font-heading font-bold text-foreground tracking-tight leading-tight'>
        {heading}
      </HeadingTag>
      {description && (
        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mt-1'>
          {description}
        </p>
      )}
    </div>
  );
}
export default SectionHeader;
