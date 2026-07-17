'use client';

import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import React from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
      className='w-full flex-1 flex flex-col'>
      {children}
    </motion.div>
  );
}

export default PageTransition;
