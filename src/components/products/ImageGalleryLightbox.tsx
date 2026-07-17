'use client';

import { ArrowLeft01Icon, ArrowRight01Icon, Cancel01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';

interface ImageGalleryLightboxProps {
  images: string[];
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
  nextImage: () => void;
  prevImage: () => void;
  name: string;
  onClose: () => void;
}

export function ImageGalleryLightbox({
  images,
  activeIndex,
  setActiveIndex,
  nextImage,
  prevImage,
  name,
  onClose,
}: ImageGalleryLightboxProps) {
  const activeImage = images[activeIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className='fixed inset-0 z-50 flex flex-col justify-between p-6 bg-black/95 backdrop-blur-sm select-none'>
      {/* Top Toolbar */}
      <div className='flex justify-between items-center w-full text-white z-10'>
        <span className='font-mono text-sm tracking-widest text-zinc-400'>
          {activeIndex + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          className='p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white cursor-pointer hover:scale-105 active:scale-95'
          aria-label='Close lightbox'>
          <HugeiconsIcon icon={Cancel01Icon} size={22} strokeWidth={1.5} />
        </button>
      </div>

      {/* Main Carousel / Slider Content */}
      <div className='flex-1 flex items-center justify-between w-full max-w-5xl mx-auto gap-4 relative'>
        {/* Prev Button */}
        <button
          onClick={prevImage}
          className='p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white cursor-pointer z-10 hidden sm:block hover:scale-105 active:scale-95 border border-white/5'
          aria-label='Previous image'>
          <HugeiconsIcon icon={ArrowLeft01Icon} size={24} strokeWidth={1.5} />
        </button>

        {/* Central Image Container */}
        <div
          onClick={e => e.stopPropagation()}
          className='relative w-full max-w-[90vw] sm:max-w-2xl aspect-5/6 rounded-2xl overflow-hidden'>
          <AnimatePresence mode='popLayout'>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className='relative w-full h-full'>
              <Image
                src={activeImage}
                alt={`${name} slideshow ${activeIndex + 1}`}
                fill
                sizes='(max-width: 768px) 95vw, 600px'
                className='object-contain w-full h-full'
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <button
          onClick={nextImage}
          className='p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white cursor-pointer z-10 hidden sm:block hover:scale-105 active:scale-95 border border-white/5'
          aria-label='Next image'>
          <HugeiconsIcon icon={ArrowRight01Icon} size={24} strokeWidth={1.5} />
        </button>
      </div>

      {/* Bottom Indicator/Thumbnail Row */}
      <div
        onClick={e => e.stopPropagation()}
        className='flex justify-center gap-2.5 overflow-x-auto max-w-full pb-2 z-10'>
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`size-2.5 rounded-full cursor-pointer transition-all duration-300 ${
              activeIndex === idx ? 'bg-accent w-6' : 'bg-zinc-600 hover:bg-zinc-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Mobile navigation row */}
      <div className='flex sm:hidden justify-center gap-12 mt-4 z-10'>
        <button
          onClick={prevImage}
          className='flex items-center gap-1 px-4 py-2 bg-white/5 rounded-full text-sm text-zinc-300 active:bg-white/10'>
          <HugeiconsIcon icon={ArrowLeft01Icon} size={16} /> Prev
        </button>
        <button
          onClick={nextImage}
          className='flex items-center gap-1 px-4 py-2 bg-white/5 rounded-full text-sm text-zinc-300 active:bg-white/10'>
          Next <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
        </button>
      </div>
    </motion.div>
  );
}
