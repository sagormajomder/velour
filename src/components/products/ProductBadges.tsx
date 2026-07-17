'use client';

interface ProductBadgesProps {
  discount: number;
  isNew?: boolean;
  inStock: boolean;
}

export function ProductBadges({
  discount,
  isNew,
  inStock,
}: ProductBadgesProps) {
  return (
    <div className='absolute top-3 left-3 z-20 flex flex-col gap-1.5 pointer-events-none'>
      {discount > 0 && (
        <span className='px-2.5 py-1 bg-white text-[10px] sm:text-xs font-bold text-zinc-950 rounded-full tracking-wider uppercase shadow-xs'>
          GET {discount}% OFF
        </span>
      )}
      {isNew && (
        <span className='px-2.5 py-1 bg-accent text-[10px] sm:text-xs font-bold text-accent-foreground rounded-full tracking-wider uppercase shadow-xs'>
          NEW ARRIVAL
        </span>
      )}
      {!inStock && (
        <span className='px-2.5 py-1 bg-destructive/90 text-[10px] sm:text-xs font-bold text-white rounded-full tracking-wider uppercase shadow-xs'>
          OUT OF STOCK
        </span>
      )}
    </div>
  );
}
