import { useState } from 'react';
import { HiringFrontendTakeHomePizzaSize } from '../types';
import { Checkbox, Select, MenuItem } from '@mui/material';

interface Props {
  initialToppings: {
    [id: string]: {
      size: HiringFrontendTakeHomePizzaSize | null;
      price: number | null;
      toppings: string[];
    };
  };
  toppings: {
    id: string;
    name: string;
    prices: {
      light: number;
      regular: number;
      extra: number;
    };
  }[];
  onUpdate: (updatedToppings: { [key: string]: string }) => void;
}

const ToppingsModalContent = ({
  initialToppings,
  toppings,
  onUpdate,
}: Props) => {
  const [selectedToppings, setSelectedToppings] = useState<{
    [key: string]: string;
  }>({});

  const [totalPrice, setTotalPrice] = useState<number>(
    initialToppings.price !== null ? initialToppings.price : 0
  );

  const handleToppingChange = (toppingId: string, amount: string) => {
    const topping = toppings.find((topping) => topping.id === toppingId);

    if (!topping) return;

    const previousAmount = selectedToppings[toppingId] || 'none';
    const previousPrice =
      previousAmount !== 'none' ? topping.prices[previousAmount] || 0 : 0;
    const newPrice = amount !== 'none' ? topping.prices[amount] || 0 : 0;

    setTotalPrice((prevPrice) => prevPrice - previousPrice + newPrice);

    const updatedToppings = { ...selectedToppings };
    if (amount === '') {
      delete updatedToppings[toppingId];
    } else {
      updatedToppings[toppingId] = amount;
    }

    setSelectedToppings(updatedToppings);
    onUpdate(updatedToppings);
  };

  return (
    <div className="space-y-4">
      {toppings.map(({ id, name, prices }) => (
        <div key={id} className="flex items-center justify-between space-x-4">
          {/* Checkbox for toggling the topping */}
          <Checkbox
            checked={!!selectedToppings[id]}
            onChange={(e) =>
              handleToppingChange(id, e.target.checked ? 'regular' : '')
            }
          />

          {/* Topping Name */}
          <span className="flex-1">{name}</span>

          {/* Dropdown for selecting amount */}
          {selectedToppings[id] && (
            <Select
              value={selectedToppings[id]}
              onChange={(e) => handleToppingChange(id, e.target.value)}
              className="flex-1"
            >
              <MenuItem value="light">
                Light - ${prices.light.toFixed(2)}
              </MenuItem>
              <MenuItem value="regular">
                Regular - ${prices.regular.toFixed(2)}
              </MenuItem>
              <MenuItem value="extra">
                Extra - ${prices.extra.toFixed(2)}
              </MenuItem>
            </Select>
          )}
        </div>
      ))}
      <div className="text-lg font-semibold">
        Total Price: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default ToppingsModalContent;
