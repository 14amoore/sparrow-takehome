import { GetPizzaPricingResponse } from "../types/api";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllToppings = async():  Promise<
GetPizzaPricingResponse & {
  transformedToppings: {
    id: string;
    name: string;
    prices: {
      light: number;
      regular: number;
      extra: number;
    };
  }[];
}
> => {
    const response = await fetch(`${BASE_URL}/pizza-pricing`);
    if(!response.ok) {
        throw new Error("Failed to fetch toppings");
    }
    const data: GetPizzaPricingResponse = await response.json();

    const transformedToppings = Object.entries(data.toppingPrices).map(
        ([key, value]: [string, { light: number; regular: number; extra: number }]) => ({
          id: key,
          name: key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
          prices: value,
        })
      );
    
      return {
        ...data,
        transformedToppings
      };
}