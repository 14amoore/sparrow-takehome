import { SpecialtyPizza } from '../types';
import { Button, Typography } from '@mui/material';

interface Props {
  pizzas: SpecialtyPizza[];
}

const PizzaCard = ({ pizzas }: Props) => {
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
        <Button variant="contained" className="mt-4">
          Customize Pizza
        </Button>
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
          <Button variant="contained" className="mt-4">
            Select Pizza
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PizzaCard;
