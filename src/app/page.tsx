import { CategoryShowcase } from '@src/components/pages/homepage/CategoryShowcase';
import { FeaturedProducts } from '@src/components/pages/homepage/FeaturedProducts';
import { HeroBanner } from '@src/components/pages/homepage/HeroBanner';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FeaturedProducts />
      <CategoryShowcase />
    </>
  );
}
