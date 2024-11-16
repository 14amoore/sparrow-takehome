import { GetAllSpecialtyPizzasRequest } from "../types/api";
import { SpecialtyPizza } from "../types";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllSpecialtyPizzas: GetAllSpecialtyPizzasRequest = async () => {
    const response = await fetch(`${BASE_URL}/specialty-pizzas`);
    if (!response.ok) {
        throw new Error("Failed to fetch specialty pizzas");
    }
    const data = await response.json();
    
    return { specialtyPizzas: data.specialtyPizzas as SpecialtyPizza[] }; 
};
