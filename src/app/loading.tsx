'use client';

import Container from '@src/components/layouts/Container';
import { motion } from 'motion/react';

export default function RootLoading() {
  return (
    <main className='w-full min-h-[60vh] flex flex-col items-center justify-center bg-background transition-colors duration-300'>
      <Container className='flex flex-col items-center justify-center gap-6 py-20'>
        {/* Pulsing Brand Logo */}
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className='flex flex-col items-center gap-2 select-none'>
          <span className='font-heading text-4xl sm:text-5xl font-bold tracking-widest text-primary'>
            VELOUR
          </span>
          <span className='text-[10px] sm:text-xs font-sans tracking-widest text-accent uppercase font-semibold'>
            Elegance Redefined
          </span>
        </motion.div>

        {/* Minimalist Gold Progress Bar */}
        <div className='w-48 h-0.5 bg-secondary rounded-full overflow-hidden relative'>
          <motion.div
            initial={{ left: '-40%', width: '40%' }}
            animate={{
              left: ['-40%', '100%'],
              width: ['40%', '60%', '40%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='absolute top-0 bottom-0 bg-accent rounded-full'
          />
        </div>
      </Container>
    </main>
  );
}
