import { useState } from 'react';
import { SpecialtyPizza, HiringFrontendTakeHomePizzaSize } from '../types';

import { Typography } from '@mui/material';
import SizeChips from './SizeChips';

interface Props {
  pizzas: SpecialtyPizza[];
}

const PizzaCard = ({ pizzas }: Props) => {
  const [selectedSizes, setSelectedSizes] = useState<{
    [id: string]: HiringFrontendTakeHomePizzaSize | null;
  }>({});

  const handlePizzaSelect = (
    id: string,
    size: HiringFrontendTakeHomePizzaSize
  ) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [id]: prev[id] === size ? null : size,
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      {/* Custom Pizza Option */}
      <div className="w-72 h-48 flex flex-col justify-between border border-gray-200 rounded-lg shadow-lg p-4">
        <div>
          <Typography gutterBottom variant="h5" component="div">
            Custom Pizza
          </Typography>
          <Typography variant="body2">
            Build your own pizza with your favorite toppings!
          </Typography>
        </div>
        <SizeChips
          pizzaSelect={(size) => handlePizzaSelect('custom', size)}
          selectedSize={selectedSizes['custom']}
        />
      </div>

      {/* Specialty Pizza Options */}
      {pizzas.map(({ id, name, description }) => (
        <div
          key={id}
          className="w-72 h-48 flex flex-col justify-between border border-gray-200 rounded-lg shadow-lg p-4"
        >
          <div>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </div>
          <SizeChips
            pizzaSelect={(size) => handlePizzaSelect(id, size)}
            selectedSize={selectedSizes[id]}
          />
        </div>
      ))}
    </div>
  );
};

export default PizzaCard;
