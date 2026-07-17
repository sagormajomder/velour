import Container from '@src/components/layouts/Container';
import { ProductAccordions } from '@src/components/pages/product-detail/ProductAccordions';
import { ProductBreadcrumbs } from '@src/components/pages/product-detail/ProductBreadcrumbs';
import { ProductInfo } from '@src/components/pages/product-detail/ProductInfo';
import { ProductPrice } from '@src/components/pages/product-detail/ProductPrice';
import { RelatedProducts } from '@src/components/pages/product-detail/RelatedProducts';
import { ImageGallery } from '@src/components/products/ImageGallery';
import { ProductPurchaseForm } from '@src/components/products/ProductPurchaseForm';
import { getProductBySlug, getRelatedProducts } from '@src/data/products';
import { calculateDiscount } from '@src/lib/utils';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

// Generate Dynamic SEO Metadata
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | VELOUR',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: `${product.name} | VELOUR`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product, 4);

  // Calculate discount percentage
  const discount = calculateDiscount(product.price, product.originalPrice);

  return (
    <main className='w-full py-16 sm:py-24 bg-background transition-colors duration-300'>
      <Container>
        {/* Breadcrumb Navigation */}
        <ProductBreadcrumbs category={product.category} name={product.name} />

        {/* Main Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 md:mb-24'>
          {/* Left Column: Image Gallery */}
          <div className='lg:col-span-7 w-full'>
            <ImageGallery
              images={product.images}
              name={product.name}
              defaultImage={product.image}
            />
          </div>

          {/* Right Column: Product details */}
          <div className='lg:col-span-5 flex flex-col gap-6 w-full lg:sticky lg:top-24'>
            {/* Product info headers & badges */}
            <ProductInfo
              category={product.category}
              name={product.name}
              rating={product.rating}
              reviewCount={product.reviewCount}
              discount={discount}
            />

            {/* Pricing Section */}
            <ProductPrice
              price={product.price}
              originalPrice={product.originalPrice}
            />

            {/* Description Text */}
            <p className='text-sm leading-relaxed text-muted-foreground font-sans'>
              {product.description}
            </p>

            {/* Purchase Form*/}
            <ProductPurchaseForm product={product} />

            {/* Details Accordion */}
            <div className='mt-6 border-t border-border/60'>
              <ProductAccordions
                description={product.description}
                material={product.material}
                careInstructions={product.careInstructions}
              />
            </div>
          </div>
        </div>

        {/* Related Products Section*/}
        <RelatedProducts relatedProducts={relatedProducts} />
      </Container>
    </main>
  );
}
