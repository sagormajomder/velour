'use client';

import { useCart } from '@src/context/CartContext';
import { getProductById } from '@src/data/products';
import { useIsMounted } from '@src/hooks/useIsMounted';
import { AnimatePresence, motion } from 'motion/react';
import { toast } from 'sonner';
import CartItemCard from './CartItemCard';
import CartSummary from './CartSummary';
import EmptyCart from './EmptyCart';

export default function CartPageContent() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const mounted = useIsMounted();

  // Resolve cart items with product details
  const enrichedItems = cart.flatMap(item => {
    const product = getProductById(item.productId);
    return product ? [{ ...item, product }] : [];
  });

  const subtotal = enrichedItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  const handleQuantityChange = (
    productId: number,
    color: Parameters<typeof updateQuantity>[1],
    size: Parameters<typeof updateQuantity>[2],
    qty: number,
  ) => {
    updateQuantity(productId, color, size, qty);
  };

  const handleRemove = (
    productId: number,
    color: Parameters<typeof removeFromCart>[1],
    size: Parameters<typeof removeFromCart>[2],
    name: string,
  ) => {
    removeFromCart(productId, color, size);
    toast.success(`Removed "${name}" from your cart.`);
  };

  const handleClearCart = () => {
    if (confirm('Are you sure you want to clear your cart?')) {
      clearCart();
      toast.success('Your shopping cart has been cleared.');
    }
  };

  if (!mounted) {
    return (
      <div className='flex items-center justify-center py-20 min-h-100'>
        <div className='animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-accent'></div>
      </div>
    );
  }

  if (enrichedItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start py-8 sm:py-12 animate-fade-in'>
      {/* Left Column: Cart Items list */}
      <div className='lg:col-span-8 flex flex-col gap-6'>
        <div className='flex justify-between items-center pb-4 border-b border-border/80'>
          <h2 className='text-xl sm:text-2xl font-heading font-bold text-foreground'>
            Shopping Bag ({enrichedItems.length}{' '}
            {enrichedItems.length === 1 ? 'item' : 'items'})
          </h2>
          <button
            onClick={handleClearCart}
            className='text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-destructive transition-colors duration-300 cursor-pointer'>
            Clear Bag
          </button>
        </div>

        {/* Table Header (Desktop/Tablet Only) */}
        <div className='hidden md:grid grid-cols-12 gap-4 pb-3 border-b border-border/40 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-muted-foreground font-sans px-4 sm:px-6'>
          <div className='col-span-5'>Product Details</div>
          <div className='col-span-2 text-center'>Color & Size</div>
          <div className='col-span-3 text-center'>Quantity</div>
          <div className='col-span-2 text-right'>Total</div>
        </div>

        {/* Cart Items List with AnimatePresence for smooth removals */}
        <div className='flex flex-col'>
          <AnimatePresence initial={false}>
            {enrichedItems.map(item => {
              const itemKey = `${item.productId}-${item.selectedColor}-${item.selectedSize}`;
              return (
                <motion.div
                  key={itemKey}
                  initial={{ opacity: 1, height: 'auto' }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    overflow: 'hidden',
                    transition: { duration: 0.3 },
                  }}
                  layout>
                  <CartItemCard
                    product={item.product}
                    selectedColor={item.selectedColor}
                    selectedSize={item.selectedSize}
                    quantity={item.quantity}
                    onQuantityChange={qty =>
                      handleQuantityChange(
                        item.productId,
                        item.selectedColor,
                        item.selectedSize,
                        qty,
                      )
                    }
                    onRemove={() =>
                      handleRemove(
                        item.productId,
                        item.selectedColor,
                        item.selectedSize,
                        item.product.name,
                      )
                    }
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Column: Order Summary */}
      <div className='lg:col-span-4'>
        <CartSummary subtotal={subtotal} />
      </div>
    </div>
  );
}
