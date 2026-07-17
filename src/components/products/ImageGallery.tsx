'use client';

import { AnimatePresence } from 'motion/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ImageGalleryLightbox } from './ImageGalleryLightbox';
import { ImageGalleryMain } from './ImageGalleryMain';
import { ImageGalleryThumbnails } from './ImageGalleryThumbnails';

interface ImageGalleryProps {
  images: string[];
  name: string;
  defaultImage?: string;
}

export function ImageGallery({ images, name, defaultImage }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Fall back to the product's primary cover image if images array is empty
  const galleryImages =
    images && images.length > 0
      ? images
      : defaultImage
      ? [defaultImage]
      : [];

  const activeImage = galleryImages[activeIndex];

  // Keyboard navigation for thumbnails
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = index === 0 ? galleryImages.length - 1 : index - 1;
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = index === galleryImages.length - 1 ? 0 : index + 1;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = galleryImages.length - 1;
    }

    if (nextIndex !== index) {
      setActiveIndex(nextIndex);
      thumbnailRefs.current[nextIndex]?.focus();
    }
  };

  // Lightbox navigation callbacks wrapped in useCallback to prevent effect re-runs
  const nextImage = useCallback(() => {
    setActiveIndex(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, [galleryImages.length]);

  const prevImage = useCallback(() => {
    setActiveIndex(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, [galleryImages.length]);

  // Lightbox keyboard shortcuts
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen, nextImage, prevImage]);

  return (
    <div className='flex flex-col-reverse md:flex-row gap-4 w-full'>
      {/* Thumbnails list */}
      <ImageGalleryThumbnails
        images={galleryImages}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        name={name}
        thumbnailRefs={thumbnailRefs}
        onKeyDown={handleKeyDown}
      />

      {/* Main Image View */}
      <ImageGalleryMain
        activeImage={activeImage}
        name={name}
        onOpenLightbox={() => setIsLightboxOpen(true)}
      />

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <ImageGalleryLightbox
            images={galleryImages}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            nextImage={nextImage}
            prevImage={prevImage}
            name={name}
            onClose={() => setIsLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
