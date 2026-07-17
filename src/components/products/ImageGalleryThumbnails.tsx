'use client';

import Image from 'next/image';
import React from 'react';

interface ImageGalleryThumbnailsProps {
  images: string[];
  activeIndex: number;
  setActiveIndex: (idx: number) => void;
  name: string;
  thumbnailRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  onKeyDown: (e: React.KeyboardEvent, index: number) => void;
}

export function ImageGalleryThumbnails({
  images,
  activeIndex,
  setActiveIndex,
  name,
  thumbnailRefs,
  onKeyDown,
}: ImageGalleryThumbnailsProps) {
  return (
    <div
      role='tablist'
      aria-label='Product Images'
      className='flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible md:overflow-y-auto gap-3 shrink-0 pb-2 md:pb-0 md:max-h-125 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent'>
      {images.map((img, idx) => (
        <button
          key={idx}
          ref={el => {
            thumbnailRefs.current[idx] = el;
          }}
          role='tab'
          aria-selected={activeIndex === idx}
          aria-controls={`image-panel-${idx}`}
          id={`image-tab-${idx}`}
          tabIndex={activeIndex === idx ? 0 : -1}
          onClick={() => setActiveIndex(idx)}
          onKeyDown={e => onKeyDown(e, idx)}
          className={`relative size-16 md:size-20 rounded-xl overflow-hidden cursor-pointer bg-secondary/30 transition-all duration-300 border-2 shrink-0 ${
            activeIndex === idx
              ? 'border-accent shadow-sm scale-102 ring-2 ring-accent/20'
              : 'border-transparent hover:border-border hover:opacity-85'
          }`}>
          <Image
            src={img}
            alt={`${name} thumbnail ${idx + 1}`}
            fill
            sizes='(max-width: 768px) 80px, 120px'
            className='object-cover w-full h-full'
          />
        </button>
      ))}
    </div>
  );
}
