'use client';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (qty: number) => void;
  disabled?: boolean;
  size?: 'default' | 'sm';
}

export function QuantitySelector({
  quantity,
  onQuantityChange,
  disabled = false,
  size = 'default',
}: QuantitySelectorProps) {
  const incrementQty = () => onQuantityChange(quantity + 1);
  const decrementQty = () => onQuantityChange(Math.max(1, quantity - 1));

  const isSm = size === 'sm';

  return (
    <div
      className={`flex items-center border border-border/80 rounded-full overflow-hidden bg-card shrink-0 transition-all ${
        isSm ? 'h-9 px-0.5' : 'h-12 px-1'
      }`}>
      <button
        onClick={decrementQty}
        disabled={quantity <= 1 || disabled}
        className={`flex items-center justify-center font-medium text-zinc-500 hover:text-foreground hover:bg-secondary/40 rounded-full transition-all disabled:opacity-30 cursor-pointer active:scale-95 ${
          isSm ? 'size-7 text-sm' : 'size-10 text-lg'
        }`}
        aria-label='Reduce quantity'>
        −
      </button>
      <span
        className={`text-center font-mono font-bold text-foreground select-none ${
          isSm ? 'w-8 text-xs' : 'w-10 text-sm'
        }`}>
        {quantity}
      </span>
      <button
        onClick={incrementQty}
        disabled={disabled}
        className={`flex items-center justify-center font-medium text-zinc-500 hover:text-foreground hover:bg-secondary/40 rounded-full transition-all disabled:opacity-30 cursor-pointer active:scale-95 ${
          isSm ? 'size-7 text-sm' : 'size-10 text-lg'
        }`}
        aria-label='Increase quantity'>
        +
      </button>
    </div>
  );
}
