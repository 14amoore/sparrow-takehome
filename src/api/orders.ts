import { GetAllOrdersRequest } from '../types/api/index'
import { HiringFrontendTakeHomeOrderResponse } from '../types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllOrders: GetAllOrdersRequest = async (locationId: string): Promise<{
  orders: HiringFrontendTakeHomeOrderResponse[];
}> => {
  const response = await fetch(`${BASE_URL}/pizzas?locationId=${locationId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch orders");
  }
  return response.json();
};
