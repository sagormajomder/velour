import Container from '@src/components/layouts/Container';
import ProductsCatalog from '@src/components/pages/products/ProductsCatalog';
import ProductsCatalogSkeleton from '@src/components/pages/products/ProductsCatalogSkeleton';
import { SectionHeader } from '@src/components/ui/SectionHeader';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Shop Collection | VELOUR',
  description:
    'Explore VELOUR’s premium collection of traditional and contemporary South-Asian wear, including premium silk Panjabis, designer S sarees, linen Kurtis, and mercerized cotton Polo shirts.',
};

export default function ProductsPage() {
  return (
    <main className='w-full py-16 sm:py-24 bg-background transition-colors duration-300'>
      <Container className='flex flex-col gap-10 sm:gap-14'>
        {/* Page Header */}
        <SectionHeader
          as='h1'
          tagline='Catalog Collection'
          heading='Elevated Essentials'
          description='A meticulously curated collection that blends South-Asian cultural heritage with clean, contemporary styles. Crafted with premium natural fibers.'
        />

        <Suspense fallback={<ProductsCatalogSkeleton />}>
          <ProductsCatalog />
        </Suspense>
      </Container>
    </main>
  );
}
