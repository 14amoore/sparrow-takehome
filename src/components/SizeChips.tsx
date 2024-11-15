import { useState } from 'react';
import { Chip } from '@mui/material';
import { HiringFrontendTakeHomePizzaSize } from '../types';

interface Props {
  pizzaSelect: (size: HiringFrontendTakeHomePizzaSize) => void;
  selectedSize: HiringFrontendTakeHomePizzaSize | null;
  prices?: Record<HiringFrontendTakeHomePizzaSize, number>;
}

const SizeChips = ({ pizzaSelect, selectedSize, prices }: Props) => {
  const [hoveredSize, setHoveredSize] =
    useState<HiringFrontendTakeHomePizzaSize | null>(null);

  const sizes: HiringFrontendTakeHomePizzaSize[] = Object.values(
    HiringFrontendTakeHomePizzaSize
  ) as HiringFrontendTakeHomePizzaSize[];

  const getLabel = (size: HiringFrontendTakeHomePizzaSize): string => {
    if (prices) {
      if (hoveredSize === size || selectedSize === size) {
        return `$${prices[size].toFixed(2)}`; // Show price
      }
      return size.charAt(0).toUpperCase() + size.slice(1); // Capitalized size
    }
    return size.charAt(0).toUpperCase() + size.slice(1); // Capitalized size (fallback)
  };

  return (
    <div className="flex space-x-2">
      {sizes.map((size) => (
        <Chip
          key={size}
          label={getLabel(size)}
          onClick={() => pizzaSelect(size)}
          onMouseEnter={() => setHoveredSize(size)}
          onMouseLeave={() => setHoveredSize(null)}
          color={selectedSize === size ? 'primary' : 'default'}
          className={selectedSize === size ? 'bg-blue-500 text-white' : ''}
        />
      ))}
    </div>
  );
};

export default SizeChips;
