import { useEffect, useState } from 'react';
import { getAllSpecialtyPizzas } from '../../api/pizzas';
import { getAllToppings } from '../../api/toppings';
import { SpecialtyPizza, HiringFrontendTakeHomePizzaSize } from '../../types';

import Loading from '../../components/Loading';
import PizzaCard from '../../components/PizzaCard';

import { Typography, Container, Box } from '@mui/material';

interface ToppingsType {
  id: string;
  name: string;
  prices: {
    light: number;
    regular: number;
    extra: number;
  };
}

function CustomerHome() {
  const [specialtyPizzas, setSpecialtyPizzas] = useState<SpecialtyPizza[]>([]);
  const [customPizzaPrices, setCustomPizzaPrices] = useState<
    Record<HiringFrontendTakeHomePizzaSize, number>
  >({
    small: 0,
    medium: 0,
    large: 0,
  });
  const [toppings, setToppings] = useState<ToppingsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        setIsLoading(true);
        const { specialtyPizzas } = await getAllSpecialtyPizzas();
        setSpecialtyPizzas(specialtyPizzas);

        const getPriceData = await getAllToppings();

        setToppings(getPriceData.transformedToppings);
        setCustomPizzaPrices(getPriceData.size);
      } catch (error) {
        console.error(error);
        setErrorMessage((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPizzas();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else if (errorMessage) {
    return (
      <Container className="flex items-center justify-center min-h-screen">
        <Box className="text-red-600 text-lg font-semibold">{errorMessage}</Box>
      </Container>
    );
  } else {
    return (
      <Container className="min-h-screen flex flex-col items-center py-8">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          className="text-gray-800 font-bold"
        >
          Welcome to Sparrow Pizza!
        </Typography>
        <Box className="w-full max-w-4xl mt-6">
          <PizzaCard
            specialtyPizzas={specialtyPizzas}
            customPizzaPrices={customPizzaPrices}
            toppings={toppings || []}
          />
        </Box>
      </Container>
    );
  }
}

export default CustomerHome;
