'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';

interface ImageGalleryMainProps {
  activeImage: string;
  name: string;
  onOpenLightbox: () => void;
}

export function ImageGalleryMain({
  activeImage,
  name,
  onOpenLightbox,
}: ImageGalleryMainProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState('center center');
  const mainImageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mainImageRef.current) return;
    const rect = mainImageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomOrigin(`${x}% ${y}%`);
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
    setZoomOrigin('center center');
  };

  return (
    <div className='flex-1 relative aspect-5/6 rounded-2xl overflow-hidden bg-secondary/30 shadow-xs group/main border border-border/20'>
      <div
        ref={mainImageRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onOpenLightbox}
        className='w-full h-full relative cursor-zoom-in overflow-hidden'
        role='button'
        aria-label='View full-screen slideshow'>
        <div
          className='w-full h-full relative transition-transform duration-200 ease-out'
          style={{
            transformOrigin: zoomOrigin,
            transform: isZoomed ? 'scale(1.8)' : 'scale(1)',
          }}>
          <Image
            src={activeImage}
            alt={name}
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw'
            className='object-cover w-full h-full'
          />
        </div>

        {/* Hover zoom tip indicator on desktop */}
        <div className='absolute bottom-4 right-4 bg-black/45 backdrop-blur-xs text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide pointer-events-none opacity-0 group-hover/main:opacity-100 transition-opacity duration-300'>
          Click to zoom
        </div>
      </div>
    </div>
  );
}
