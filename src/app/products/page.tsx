import Container from '@src/components/layouts/Container';
import ProductsCatalog from '@src/components/pages/products/ProductsCatalog';
import ProductsCatalogSkeleton from '@src/components/pages/products/ProductsCatalogSkeleton';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Shop Collection | VELOUR',
  description:
    'Explore VELOUR’s premium collection of traditional and contemporary South-Asian wear, including premium silk Panjabis, designer S sarees, linen Kurtis, and mercerized cotton Polo shirts.',
};

export default function ProductsPage() {
  return (
    <main className='w-full py-12 sm:py-16 bg-background transition-colors duration-300'>
      <Container className='flex flex-col gap-10 sm:gap-14'>
        {/* Page Header */}
        <div className='flex flex-col items-center text-center max-w-2xl mx-auto gap-3'>
          <span className='text-xs font-bold tracking-widest text-accent uppercase font-sans'>
            Catalog Collection
          </span>
          <h1 className='text-3xl sm:text-5xl font-heading font-bold text-foreground tracking-tight'>
            Elevated Essentials
          </h1>
          <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
            A meticulously curated collection that blends South-Asian cultural
            heritage with clean, contemporary styles. Crafted with premium
            natural fibers.
          </p>
        </div>

        <Suspense fallback={<ProductsCatalogSkeleton />}>
          <ProductsCatalog />
        </Suspense>
      </Container>
    </main>
  );
}
