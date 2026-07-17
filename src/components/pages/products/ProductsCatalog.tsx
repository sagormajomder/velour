'use client';

import CategoryFilter, {
  FilterCategory,
} from '@src/components/pages/products/CategoryFilter';
import ProductGrid from '@src/components/pages/products/ProductGrid';
import SearchBar from '@src/components/pages/products/SearchBar';
import ProductCardSkeleton from '@src/components/products/ProductCardSkeleton';
import { getAllProducts } from '@src/data/products';
import { SortOption } from '@src/types';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const CATEGORIES: FilterCategory[] = [
  'All',
  'New Arrivals',
  'Panjabi',
  'Saree',
  'Kurti',
  'Polo Shirt',
];

let isSuspended = true;
let suspendPromise: Promise<void> | null = null;

function useSimulatedInitialSuspense() {
  if (typeof window === 'undefined') return; // Do not suspend on Next.js server-side compilation
  if (!isSuspended) return;
  if (!suspendPromise) {
    suspendPromise = new Promise<void>(resolve => {
      setTimeout(() => {
        isSuspended = false;
        resolve();
      }, 1000);
    });
  }
  throw suspendPromise;
}

export default function ProductsCatalog() {
  useSimulatedInitialSuspense();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const allProducts = getAllProducts();

  const initialSearch = searchParams.get('search') || '';
  const initialCategoryParam = searchParams.get('category');

  let initialCategory: FilterCategory = 'All';
  if (initialCategoryParam) {
    const normalized = initialCategoryParam.toLowerCase();
    if (normalized === 'new') {
      initialCategory = 'New Arrivals';
    } else {
      const match = CATEGORIES.find(
        c => c.toLowerCase() === normalized,
      ) as FilterCategory;
      if (match) {
        initialCategory = match;
      }
    }
  }

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [activeCategory, setActiveCategory] =
    useState<FilterCategory>(initialCategory);
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [isLoading]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setIsLoading(true);
  };

  const handleCategoryChange = (category: FilterCategory) => {
    setActiveCategory(category);
    setIsLoading(true);
  };

  const handleSortChange = (option: SortOption) => {
    setSortBy(option);
    setIsLoading(true);
  };

  useEffect(() => {
    const params = new URLSearchParams();

    if (searchQuery) {
      params.set('search', searchQuery);
    }

    if (activeCategory === 'New Arrivals') {
      params.set('category', 'new');
    } else if (activeCategory !== 'All') {
      params.set('category', activeCategory.toLowerCase());
    }

    const qs = params.toString();
    const newUrl = `${pathname}${qs ? `?${qs}` : ''}`;
    window.history.replaceState(null, '', newUrl);
  }, [searchQuery, activeCategory, pathname]);

  // Perform client-side filter and sorting
  let filteredProducts = [...allProducts];

  // 1. Filter by category
  if (activeCategory === 'New Arrivals') {
    filteredProducts = filteredProducts.filter(p => p.isNew);
  } else if (activeCategory !== 'All') {
    filteredProducts = filteredProducts.filter(
      p => p.category === activeCategory,
    );
  }

  // 2. Filter by search input
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase().trim();
    filteredProducts = filteredProducts.filter(
      p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query),
    );
  }

  // 3. Sort products
  if (sortBy === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name-asc') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'name-desc') {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy === 'rating-desc') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('All');
    setSortBy('default');
    setIsLoading(true);
  };

  return (
    <div className='flex flex-col gap-8 sm:gap-12'>
      {/* Search and Sort Toolbar */}
      <div className='flex flex-col md:flex-row gap-4 items-center justify-between border-b border-border/40 pb-6'>
        <div className='w-full md:w-auto md:flex-1'>
          <SearchBar value={searchQuery} onChange={handleSearchChange} />
        </div>

        {/* Sort Controls */}
        <div className='flex items-center gap-3 shrink-0 w-full md:w-auto justify-center md:justify-end'>
          <label
            htmlFor='sort'
            className='text-xs font-semibold uppercase tracking-widest text-muted-foreground whitespace-nowrap'>
            Sort By
          </label>
          <div className='relative select-none'>
            <select
              id='sort'
              value={sortBy}
              onChange={e => handleSortChange(e.target.value as SortOption)}
              className='appearance-none pl-4 pr-10 py-2.5 text-sm font-medium bg-secondary/30 dark:bg-secondary/10 border border-border/50 hover:border-border rounded-full outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all duration-300 cursor-pointer min-w-44 text-foreground'>
              <option value='default' className='bg-card text-foreground'>
                Featured
              </option>
              <option value='price-asc' className='bg-card text-foreground'>
                Price: Low to High
              </option>
              <option value='price-desc' className='bg-card text-foreground'>
                Price: High to Low
              </option>
              <option value='name-asc' className='bg-card text-foreground'>
                Name: A to Z
              </option>
              <option value='name-desc' className='bg-card text-foreground'>
                Name: Z to A
              </option>
              <option value='rating-desc' className='bg-card text-foreground'>
                Customer Rating
              </option>
            </select>
            {/* SVG Chevron Down Icon */}
            <div className='absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-4 h-4'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills List */}
      <CategoryFilter
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Results Count & Current Filter Indicators */}
      <div className='flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground'>
        <div>
          Showing{' '}
          <span className='font-mono font-bold text-foreground'>
            {filteredProducts.length}
          </span>{' '}
          of{' '}
          <span className='font-mono text-foreground'>
            {allProducts.length}
          </span>{' '}
          items
        </div>

        {/* Clear filters shortcut helper */}
        {(searchQuery || activeCategory !== 'All' || sortBy !== 'default') && (
          <button
            onClick={handleResetFilters}
            className='text-xs font-semibold text-accent hover:text-foreground underline underline-offset-4 cursor-pointer transition-colors'>
            Clear Active Filters
          </button>
        )}
      </div>

      {/* Responsive Animated Grid or Loading Skeletons */}
      {isLoading ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-y-12'>
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <ProductGrid
          products={filteredProducts}
          onResetFilters={handleResetFilters}
        />
      )}
    </div>
  );
}
