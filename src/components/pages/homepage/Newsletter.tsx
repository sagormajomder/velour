import Container from '@src/components/layouts/Container';
import { SubscriptionForm } from '@src/components/pages/homepage/SubscriptionForm';
import { SectionHeader } from '@src/components/ui/SectionHeader';

export function Newsletter() {
  return (
    <section className='w-full py-16 sm:py-24 bg-secondary/30 border-t border-b border-border/40 transition-colors duration-300'>
      <Container className='flex flex-col gap-8 sm:gap-12 items-center max-w-4xl mx-auto'>
        {/* Section Header */}
        <SectionHeader
          tagline='Newsletter Club'
          heading='Join The Velour Society'
          description='Sign up to receive early access to premium collections, seasonal campaigns, and private sales previews.'
        />

        <SubscriptionForm />

        {/* Fine print */}
        <p className='text-[10px] sm:text-xs text-muted-foreground font-sans tracking-wide text-center max-w-md'>
          By subscribing, you agree to our Privacy Policy and consent to receive
          marketing updates. You can unsubscribe at any time.
        </p>
      </Container>
    </section>
  );
}

export default Newsletter;
