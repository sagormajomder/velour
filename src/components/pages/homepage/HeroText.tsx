'use client';

import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const lineRevealVariants = {
  hidden: { y: '105%' },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function HeroText() {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      className='flex flex-col gap-5 text-white'>
      {/* Category/Intro tagline */}
      <div className='overflow-hidden'>
        <motion.span
          variants={fadeUpVariants}
          className='block text-xs md:text-sm font-semibold tracking-[0.25em] text-accent uppercase drop-shadow-xs'>
          New Collection 2026
        </motion.span>
      </div>

      {/* Premium line-by-line reveal heading */}
      <h1 className='font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight drop-shadow-sm'>
        <span className='block overflow-hidden pb-1'>
          <motion.span variants={lineRevealVariants} className='block'>
            Discover Your
          </motion.span>
        </span>
        <span className='block overflow-hidden pb-1'>
          <motion.span
            variants={lineRevealVariants}
            className='block text-accent italic font-serif'>
            Premium Style
          </motion.span>
        </span>
      </h1>

      {/* Description */}
      <div className='overflow-hidden'>
        <motion.p
          variants={fadeUpVariants}
          className='font-sans text-lg md:text-xl text-zinc-200 max-w-137.5 font-light leading-relaxed drop-shadow-xs'>
          Elevate your wardrobe with Velour&apos;s exclusive collection of
          modern South-Asian inspired fashion.
        </motion.p>
      </div>
    </motion.div>
  );
}
