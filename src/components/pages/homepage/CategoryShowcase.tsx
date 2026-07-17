import Container from '@src/components/layouts/Container';
import { SectionHeader } from '@src/components/ui/SectionHeader';
import { CATEGORY_SHOWCASE_ITEMS } from '@src/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

export function CategoryShowcase() {
  return (
    <section className='w-full pt-5 pb-16 sm:pt-5 sm:pb-24 bg-background transition-colors duration-300'>
      <Container className='flex flex-col gap-10 sm:gap-14'>
        {/* Section Header */}
        <SectionHeader
          tagline='Curated Collections'
          heading='Shop By Category'
          description='Discover our carefully tailored signature pieces, crafted to bring together premium natural fabrics and timeless designs.'
        />

        {/* Categories Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
          {CATEGORY_SHOWCASE_ITEMS.map(category => (
            <Link
              key={category.name}
              href={`/products?category=${encodeURIComponent(category.queryParam)}`}
              className='group relative flex flex-col justify-end aspect-3/4 rounded-3xl overflow-hidden bg-secondary/30 border border-border/40 shadow-xs hover:shadow-lg transition-all duration-500'>
              {/* Category Background Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                className='object-cover w-full h-full transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out'
              />

              {/* Gradient Overlay */}
              <div className='absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300' />

              {/* Category Content */}
              <div className='absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col gap-1.5 z-10'>
                <span className='text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-accent uppercase'>
                  {category.subtitle}
                </span>
                <h3 className='font-heading text-2xl sm:text-3xl font-bold text-white tracking-wide'>
                  {category.name}
                </h3>

                {/* Discover CTA (revealed on hover) */}
                <div className='flex items-center gap-1.5 mt-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out'>
                  <span className='text-xs font-bold tracking-widest text-accent uppercase font-sans'>
                    Explore Collection
                  </span>
                  <span className='text-accent text-sm font-bold transform group-hover:translate-x-1 transition-transform duration-300'>
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
