import { SpecialtyPizza } from '../types';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid2,
  Typography,
} from '@mui/material';

interface Props {
  pizzas: SpecialtyPizza[];
}

const PizzaCard = ({ pizzas }: Props) => {
  return (
    <Grid2 container spacing={2} justifyContent="center">
      {pizzas.map(({ id, name, description }) => (
        <Grid2 key={id}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2">{description}</Typography>
            </CardContent>
            <CardActions>
              <Button>
                <Typography variant="button" gutterBottom>
                  Select Pizza
                </Typography>
              </Button>
            </CardActions>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default PizzaCard;
