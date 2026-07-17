import ProductCardSkeleton from '@src/components/products/ProductCardSkeleton';

export default function ProductsCatalogSkeleton() {
  return (
    <div className='flex flex-col gap-8 sm:gap-12 animate-pulse'>
      {/* Search and Sort Toolbar Skeleton */}
      <div className='flex flex-col md:flex-row gap-4 items-center justify-between border-b border-border/40 pb-6'>
        {/* Search Input Skeleton */}
        <div className='w-full md:w-80 h-11 bg-zinc-200 dark:bg-zinc-800/80 rounded-full' />
        {/* Sort Dropdown Skeleton */}
        <div className='flex items-center gap-3 w-full md:w-auto justify-end'>
          <div className='w-12 h-4 bg-zinc-200 dark:bg-zinc-800/80 rounded-md' />
          <div className='w-44 h-10 bg-zinc-200 dark:bg-zinc-800/80 rounded-full' />
        </div>
      </div>

      {/* Filter Category Pills Skeleton */}
      <div className='flex items-center gap-2 overflow-x-auto py-2 -mx-4 px-4 sm:mx-0 sm:px-0'>
        {['All', 'New Arrivals', 'Panjabi', 'Saree', 'Kurti', 'Polo Shirt'].map(
          (cat, i) => (
            <div
              key={cat}
              className='h-9 w-24 bg-zinc-200 dark:bg-zinc-800/80 rounded-full shrink-0'
              style={{ opacity: 1 - i * 0.12 }}
            />
          ),
        )}
      </div>

      {/* Results Count Skeleton */}
      <div className='flex justify-between items-center text-sm'>
        <div className='w-36 h-5 bg-zinc-200 dark:bg-zinc-800/80 rounded-md' />
      </div>

      {/* Product Grid Skeleton */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-y-12'>
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
