import { useEffect, useState } from 'react';
import { getAllSpecialtyPizzas } from '../../api/pizzas';
import { SpecialtyPizza } from '../../types';

import Loading from '../../components/Loading';
import PizzaCard from '../../components/PizzaCard';

import { Typography, Container, Box } from '@mui/material';

function CustomerHome() {
  const [specialtyPizzas, setSpecialtyPizzas] = useState<SpecialtyPizza[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        setIsLoading(true);
        const { specialtyPizzas } = await getAllSpecialtyPizzas();
        setSpecialtyPizzas(specialtyPizzas);
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
      <Container>
        <Box>{errorMessage}</Box>
      </Container>
    );
  } else {
    return (
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to Sparrow Pizza!
        </Typography>
        <PizzaCard pizzas={specialtyPizzas} />
      </Container>
    );
  }
}

export default CustomerHome;
