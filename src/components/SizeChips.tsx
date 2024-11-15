import { Chip } from '@mui/material';
import { HiringFrontendTakeHomePizzaSize } from '../types';

interface Props {
  pizzaSelect: (size: HiringFrontendTakeHomePizzaSize) => void;
  selectedSize: HiringFrontendTakeHomePizzaSize | null;
}

const SizeChips = ({ pizzaSelect, selectedSize }: Props) => {
  return (
    <div className="flex space-x-2">
      {Object.entries(HiringFrontendTakeHomePizzaSize).map(([key, value]) => (
        <Chip
          key={value}
          label={key}
          onClick={() => pizzaSelect(value as HiringFrontendTakeHomePizzaSize)}
          color={selectedSize === value ? 'primary' : 'default'}
          className={selectedSize === value ? 'bg-blue-500 text-white' : ''}
        />
      ))}
    </div>
  );
};

export default SizeChips;
