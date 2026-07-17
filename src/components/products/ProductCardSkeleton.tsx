export default function ProductCardSkeleton() {
  return (
    <div className='flex flex-col gap-4 w-full h-full animate-pulse'>
      {/* Card Image Skeleton */}
      <div className='relative w-full aspect-5/6 rounded-2xl bg-zinc-200 dark:bg-zinc-800/80 overflow-hidden' />
      {/* Card Content Skeleton */}
      <div className='flex justify-between items-start gap-4 py-2 px-1.5'>
        <div className='flex flex-col gap-2 w-3/5'>
          <div className='h-4 bg-zinc-200 dark:bg-zinc-800/80 rounded-md w-full' />
          <div className='h-4 bg-zinc-200 dark:bg-zinc-800/80 rounded-md w-2/3' />
        </div>
        <div className='flex flex-col items-end gap-1.5 w-1/4'>
          <div className='h-4 bg-zinc-200 dark:bg-zinc-800/80 rounded-md w-16' />
          <div className='h-3 bg-zinc-200/70 dark:bg-zinc-800/50 rounded-md w-12' />
        </div>
      </div>
    </div>
  );
}
