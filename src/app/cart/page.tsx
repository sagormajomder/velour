import Container from '@src/components/layouts/Container';
import CartPageContent from '@src/components/pages/cart/CartPageContent';
import { SectionHeader } from '@src/components/ui/SectionHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopping Cart | VELOUR',
  description:
    'Review your selected premium South-Asian fashion items, manage quantities, and proceed to secure checkout at VELOUR.',
};

export default function CartPage() {
  return (
    <main className='w-full py-16 sm:py-24 bg-background transition-colors duration-300'>
      <Container>
        <SectionHeader
          as='h1'
          align='left'
          tagline='Checkout Bag'
          heading='Your Cart'
          className='mb-10 sm:mb-14'
        />

        <CartPageContent />
      </Container>
    </main>
  );
}
