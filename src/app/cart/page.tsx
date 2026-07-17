import Container from '@src/components/layouts/Container';
import CartPageContent from '@src/components/pages/cart/CartPageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopping Cart | VELOUR',
  description:
    'Review your selected premium South-Asian fashion items, manage quantities, and proceed to secure checkout at VELOUR.',
};

export default function CartPage() {
  return (
    <main className='w-full py-12 sm:py-16 bg-background transition-colors duration-300'>
      <Container>
        <div className='flex flex-col gap-2 mb-8'>
          <span className='text-xs font-bold tracking-widest text-accent uppercase font-sans'>
            Checkout Bag
          </span>
          <h1 className='text-3xl sm:text-5xl font-heading font-bold text-foreground tracking-tight'>
            Your Cart
          </h1>
        </div>

        <CartPageContent />
      </Container>
    </main>
  );
}
