// src/api/orders.ts
import { GetAllOrdersRequest } from '../types/api/index'
import { HiringFrontendTakeHomeOrderResponse } from '../types';
const BASE_URL = "https://api.sparrowtest.com/v2/lmd/hiring/frontend/take-home";


export const getAllOrders: GetAllOrdersRequest = async (locationId: string): Promise<{
  orders: HiringFrontendTakeHomeOrderResponse[];
}> => {
  const response = await fetch(`${BASE_URL}/pizzas?locationId=${locationId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch orders");
  }
  return response.json();
};
