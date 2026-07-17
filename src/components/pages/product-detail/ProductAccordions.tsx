import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@src/components/ui/accordion';

interface ProductAccordionsProps {
  description: string;
  material: string;
  careInstructions: string;
}

export function ProductAccordions({
  description,
  material,
  careInstructions,
}: ProductAccordionsProps) {
  return (
    <Accordion className='w-full border-none shadow-none bg-transparent'>
      <AccordionItem value='description' className='border-b border-border/60'>
        <AccordionTrigger className='text-xs font-bold tracking-widest uppercase hover:no-underline hover:text-accent p-0 py-4.5 cursor-pointer'>
          Product Description
        </AccordionTrigger>
        <AccordionContent className='p-0 pb-4 text-sm text-muted-foreground leading-relaxed'>
          <p className='mb-2'>{description}</p>
          <p>
            Made with high attention to detail, maintaining the signature
            premium look of VELOUR wear.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='material' className='border-b border-border/60'>
        <AccordionTrigger className='text-xs font-bold tracking-widest uppercase hover:no-underline hover:text-accent p-0 py-4.5 cursor-pointer'>
          Material & Fabrics
        </AccordionTrigger>
        <AccordionContent className='p-0 pb-4 text-sm text-muted-foreground leading-relaxed'>
          <p className='mb-1.5'>
            <strong className='text-foreground font-semibold'>Material:</strong>{' '}
            {material}
          </p>
          <p>
            Soft-to-skin texture with absolute breathing comfort during all
            seasons.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='care' className='border-b border-border/60'>
        <AccordionTrigger className='text-xs font-bold tracking-widest uppercase hover:no-underline hover:text-accent p-0 py-4.5 cursor-pointer'>
          Care Instructions
        </AccordionTrigger>
        <AccordionContent className='p-0 pb-4 text-sm text-muted-foreground leading-relaxed'>
          <p>{careInstructions}</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='shipping' className='border-b border-border/60'>
        <AccordionTrigger className='text-xs font-bold tracking-widest uppercase hover:no-underline hover:text-accent p-0 py-4.5 cursor-pointer'>
          Shipping & Returns
        </AccordionTrigger>
        <AccordionContent className='p-0 pb-4 text-sm text-muted-foreground leading-relaxed'>
          <p className='mb-2'>
            Free delivery on orders above BDT 5,000 across Bangladesh. Delivery
            time is 2-3 business days within Dhaka, and 3-5 business days
            outside Dhaka.
          </p>
          <p>
            We accept returns of unused items in original packaging within 7
            days of delivery. Discounted items are final sale.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
