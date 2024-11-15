import { Chip } from '@mui/material';

interface Props {
  pizzaSelect: (size: string) => void;
  selectedSize: string | null;
}

const SizeChips = ({ pizzaSelect, selectedSize }: Props) => {
  const sizes = ['Small', 'Medium', 'Large'];

  return (
    <div className="flex space-x-2">
      {sizes.map((size) => (
        <Chip
          key={size}
          label={size}
          onClick={() => pizzaSelect(size)}
          color={selectedSize === size ? 'primary' : 'default'}
          className={selectedSize === size ? 'bg-blue-500 text-white' : ''}
        />
      ))}
    </div>
  );
};

export default SizeChips;
