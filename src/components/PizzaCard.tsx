import { useState } from 'react';
import {
  SpecialtyPizza,
  HiringFrontendTakeHomePizzaSize,
  HiringFrontendTakeHomePizzaToppings,
} from '../types';
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import SizeChips from './SizeChips';
import ToppingsModalContent from './ToppingsModalContent';

interface Props {
  specialtyPizzas: SpecialtyPizza[];
  customPizzaPrices: Record<HiringFrontendTakeHomePizzaSize, number>;
  toppings: {
    id: string;
    name: string;
    prices: {
      light: number;
      regular: number;
      extra: number;
    };
  }[];
}

const PizzaCard = ({ specialtyPizzas, customPizzaPrices, toppings }: Props) => {
  const [selectedPizzas, setSelectedPizzas] = useState<{
    [id: string]: {
      size: HiringFrontendTakeHomePizzaSize | null;
      price: number | null;
      toppings: string[];
    };
  }>({});
  const [activePizzaId, setActivePizzaId] = useState<string | null>(null);

  const handlePizzaSelect = (
    id: string,
    size: HiringFrontendTakeHomePizzaSize,
    price: number,
    toppings: HiringFrontendTakeHomePizzaToppings = [] as unknown as HiringFrontendTakeHomePizzaToppings
  ) => {
    setSelectedPizzas((prev) => {
      if (prev[id]?.size === size) {
        const { [id]: _, ...rest } = prev;
        setActivePizzaId(null);
        return rest;
      }

      const updatedState = {
        ...prev,
        [id]: {
          size,
          price,
          toppings: [...toppings],
        },
      };
      setActivePizzaId(id);
      return updatedState;
    });
  };

  const handleModalClose = () => {
    setSelectedPizzas((prev) => {
      if (activePizzaId) {
        const { [activePizzaId]: _, ...rest } = prev;
        return rest;
      }
      return prev;
    });
    setActivePizzaId(null);
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
          pizzaSelect={(size) =>
            handlePizzaSelect('custom', size, customPizzaPrices[size])
          }
          selectedSize={selectedPizzas['custom']?.size || null}
          prices={customPizzaPrices}
        />
      </div>

      {/* Specialty Pizza Options */}
      {specialtyPizzas.map(({ id, name, description, price, toppings }) => (
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
            pizzaSelect={(size) =>
              handlePizzaSelect(id, size, price[size], toppings)
            }
            selectedSize={selectedPizzas[id]?.size || null}
            prices={price}
          />
        </div>
      ))}

      {/* Toppings Modal */}
      {activePizzaId && (
        <Dialog open={!!activePizzaId} onClose={handleModalClose} fullWidth>
          <DialogTitle>Customize Your Pizza</DialogTitle>
          <DialogContent>
            <ToppingsModalContent
              initialToppings={selectedPizzas[activePizzaId]}
              toppings={toppings}
              onUpdate={(updatedToppings) =>
                setSelectedPizzas(
                  (prev) => prev && { ...prev, toppings: updatedToppings }
                )
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleModalClose}>Cancel</Button>
            <Button onClick={handleModalClose} variant="contained">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default PizzaCard;
