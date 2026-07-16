import Footer from '@src/components/layouts/Footer';
import Header from '@src/components/layouts/Header';
import Main from '@src/components/layouts/Main';
import { ThemeProvider } from '@src/context/ThemeContext';
import { cn } from '@src/lib/utils';
import type { Metadata } from 'next';
import { Geist_Mono, Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: 'VELOUR — Elegance Redefined | South-Asian Fashion Store',
    template: '%s | VELOUR',
  },
  description:
    'Discover timeless South-Asian fashion at VELOUR. Shop premium Panjabis, Sarees, Kurtis, and Polo Shirts crafted with luxurious fabrics and modern design.',
  keywords: [
    'fashion store',
    'South Asian fashion',
    'Panjabi',
    'Saree',
    'Kurti',
    'Polo Shirt',
    'online shopping',
    'VELOUR',
    'ethnic wear',
    'premium clothing',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn(
        playfair.variable,
        inter.variable,
        geistMono.variable,
        'antialiased',
      )}>
      <body className='grid min-h-screen grid-rows-[auto_1fr_auto]'>
        <ThemeProvider>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
