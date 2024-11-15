import { useEffect, useState } from 'react';
import { getAllSpecialtyPizzas } from '../../api/pizzas';
import { SpecialtyPizza } from '../../types';

function MenuView() {
  const [specialtyPizzas, setSpecialtyPizzas] = useState<SpecialtyPizza[]>([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const { specialtyPizzas } = await getAllSpecialtyPizzas();
        setSpecialtyPizzas(specialtyPizzas);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPizzas();
  }, []);

  return (
    <div>
      {specialtyPizzas.length > 0 ? (
        <ul>
          {specialtyPizzas.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      ) : (
        <p>No specialty pizzas available.</p>
      )}
    </div>
  );
}

export default MenuView;
