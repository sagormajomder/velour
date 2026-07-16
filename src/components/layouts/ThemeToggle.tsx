'use client';

import { MoonIcon, Sun01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Button } from '@src/components/ui/button';

export default function ThemeToggle() {
  const theme = 'light';

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => {}}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className='text-foreground/80 hover:text-foreground hover:bg-secondary/50 dark:hover:bg-secondary/20 rounded-full transition-all duration-300'>
      <HugeiconsIcon
        icon={theme === 'light' ? MoonIcon : Sun01Icon}
        size={20}
        strokeWidth={1.5}
        className='transition-transform duration-300 rotate-0 hover:rotate-12'
      />
    </Button>
  );
}
