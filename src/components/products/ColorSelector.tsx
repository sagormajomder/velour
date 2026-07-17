'use client';

import { COLOR_HEX_MAP } from '@src/lib/constants';
import { ProductColor } from '@src/types';

interface ColorSelectorProps {
  colors: ProductColor[];
  selectedColor: ProductColor;
  onColorChange: (color: ProductColor) => void;
}

export function ColorSelector({
  colors,
  selectedColor,
  onColorChange,
}: ColorSelectorProps) {
  if (colors.length === 0) return null;

  return (
    <div className='flex flex-col gap-2.5'>
      <span className='text-xs font-bold tracking-widest uppercase text-foreground font-sans flex items-center gap-1.5'>
        Color:{' '}
        <span className='text-zinc-500 font-medium normal-case font-body text-sm'>
          {selectedColor}
        </span>
      </span>
      <div
        className='flex items-center gap-3.5 flex-wrap'
        role='radiogroup'
        aria-label='Select color'>
        {colors.map(color => {
          const hexColor = COLOR_HEX_MAP[color] || '#cccccc';
          const isSelected = selectedColor === color;
          return (
            <button
              key={color}
              role='radio'
              aria-checked={isSelected}
              onClick={() => onColorChange(color)}
              style={{ backgroundColor: hexColor }}
              className={`size-8 rounded-full border cursor-pointer transition-all duration-300 flex items-center justify-center relative shadow-xs ${
                isSelected
                  ? 'border-accent scale-110 ring-2 ring-accent/30 ring-offset-2'
                  : 'border-zinc-300 dark:border-zinc-700 hover:scale-105'
              } ${color === 'White' ? 'border-zinc-300' : ''}`}
              title={color}>
              {isSelected && (
                <span
                  className={`size-2.5 rounded-full ${
                    color === 'White' || color === 'Cream' || color === 'Beige'
                      ? 'bg-zinc-800'
                      : 'bg-white'
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
