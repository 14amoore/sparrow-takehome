import { SpecialtyPizza } from '../types';

import { Button, Card, CardActions, CardContent, Grid2 } from '@mui/material';

interface Props {
  pizzas: SpecialtyPizza[];
}

const PizzaCard = ({ pizzas }: Props) => {
  return (
    <Grid2 container spacing={2} justifyContent="center">
      {pizzas.map(({ id, name, description }) => (
        <Grid2 key={id}>
          <Card>
            <CardContent>{name}</CardContent>
            <CardContent>{description}</CardContent>
            <CardActions>
              <Button>Select Pizza</Button>
            </CardActions>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default PizzaCard;
