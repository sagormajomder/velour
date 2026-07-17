import Container from '@src/components/layouts/Container';
import { HeroCTA } from './HeroCTA';
import { HeroImage } from './HeroImage';
import { HeroText } from './HeroText';

export function HeroBanner() {
  return (
    <section className='relative w-full min-h-[70vh] flex items-center overflow-hidden bg-zinc-950'>
      <div className='absolute inset-0 w-full h-full z-0'>
        <HeroImage />
      </div>

      {/* Base overlay for mobile and overall contrast */}
      <div className='absolute inset-0 bg-black/50 z-10' />

      {/* Sleek gradient overlay for desktop layout aesthetics */}
      <div className='hidden md:block absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent z-10 pointer-events-none' />

      {/* Hero Content */}
      <Container className='relative z-20 w-full py-20 md:py-32 flex items-center'>
        <div className='flex flex-col justify-center max-w-2xl text-left'>
          <HeroText />
          <HeroCTA />
        </div>
      </Container>
    </section>
  );
}
