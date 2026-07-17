'use client';

import React, { useState } from 'react';
import { Button } from '@src/components/ui/button';
import { Input } from '@src/components/ui/input';
import { toast } from 'sonner';
import { cn } from '@src/lib/utils';

interface SubscriptionFormProps {
  className?: string;
}

export function SubscriptionForm({ className }: SubscriptionFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API subscription delay
    setTimeout(() => {
      toast.success('Thank you for subscribing to VELOUR!', {
        description: 'You will receive early collection updates and exclusive invites.',
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'w-full max-w-xl flex flex-col sm:flex-row items-center gap-3 sm:gap-0 border border-border/80 rounded-3xl sm:rounded-full bg-card p-1.5 focus-within:ring-2 focus-within:ring-accent/30 focus-within:border-accent transition-all duration-300 shadow-xs',
        className
      )}>
      <Input
        type='email'
        placeholder='Enter your email address'
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={isSubmitting}
        className='border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:border-none px-5 py-3 h-auto text-sm text-foreground placeholder:text-muted-foreground rounded-full'
        required
      />
      <Button
        type='submit'
        variant='default'
        size='lg'
        disabled={isSubmitting}
        className='w-full sm:w-auto px-8 py-3 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-xs active:scale-95 shrink-0 bg-primary text-primary-foreground hover:bg-primary/90'>
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  );
}

export default SubscriptionForm;
