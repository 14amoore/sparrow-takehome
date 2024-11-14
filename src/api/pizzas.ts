// src/api/pizzas.ts
import { GetAllSpecialtyPizzasRequest } from "../types/api";
import { SpecialtyPizza } from "../types";

const BASE_URL = "https://api.sparrowtest.com/v2/lmd/hiring/frontend/take-home";

export const getAllSpecialtyPizzas: GetAllSpecialtyPizzasRequest = async () => {
    const response = await fetch(`${BASE_URL}/specialty-pizzas`);
    if (!response.ok) {
        throw new Error("Failed to fetch specialty pizzas");
    }
    const data = await response.json();
    
    // Map the response data to match the expected return type
    return { specialtyPizzas: data.specialtyPizzas as SpecialtyPizza[] }; // Adjust the key to match `specialtyPizzas`
};
