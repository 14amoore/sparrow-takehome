/**
 * Pizza API Documentation
 * Base URL: https://api.sparrowtest.com/v2/lmd/hiring/frontend/take-home
 */

import {
  // HiringFrontendTakeHomeOrderRequest,
  HiringFrontendTakeHomeOrderResponse,
  // HiringFrontendTakeHomeOrderStatus,
  HiringFrontendTakeHomePizzaSize,
  HiringFrontendTakeHomePizzaToppings,
  HiringFrontendTakeHomeToppingQuantity,
  PizzaTopping,
  SpecialtyPizza,
} from "..";

/**
 * Response type for pizza pricing endpoint
 */
export interface GetPizzaPricingResponse {
  size: Record<HiringFrontendTakeHomePizzaSize, number>;
  toppingPrices: Record<
    HiringFrontendTakeHomePizzaToppings,
    Record<HiringFrontendTakeHomeToppingQuantity, number>
  >;
  toppings?: PizzaTopping[];
}

/**
 * API Endpoint Types
 */

/**
 * GET /specialty-pizzas
 * Retrieves the list of specialty pizzas
 */
export type GetAllSpecialtyPizzasRequest = () => Promise<{
  specialtyPizzas: SpecialtyPizza[];
}>;

/**
 * GET /pizza-pricing
 * Retrieves pizza pricing information
 */
export type GetPizzaPricingRequest = () => Promise<GetPizzaPricingResponse>;

/**
 * POST /pizza
 * Creates a new order in the Checkout view
 */
// type CreatePizzaOrderRequest = (
//   order: HiringFrontendTakeHomeOrderRequest
// ) => Promise<{
//   order: HiringFrontendTakeHomeOrderRequest;
// }>;

/**
 * GET /pizzas
 * Retrieves all orders for a specific location in the Pizza Orders Table view
 */
export type GetAllOrdersRequest = (locationId: string) => Promise<{
  orders: HiringFrontendTakeHomeOrderResponse[];
}>;

/**
 * GET /pizza
 * Retrieves customer's order details by orderId for the Check on your order view
 */
// type GetPizzaOrderByIdRequest = (orderId: string) => Promise<{
//   order: HiringFrontendTakeHomeOrderRequest;
// }>;

/**
 * PUT /pizza/status
 * Updates the order status by the restaurant
 */
// type UpdatePizzaOrderStatusRequest = (
//   orderId: string,
//   status: HiringFrontendTakeHomeOrderStatus
// ) => Promise<{
//   order: HiringFrontendTakeHomeOrderResponse;
// }>;

/**
 * POST /pizza/cancel
 * Cancels an order by the customer
 * Note: Only orders with status "pending" can be cancelled
 */
// type CancelPizzaOrderRequest = (orderId: string) => Promise<{
//   order: HiringFrontendTakeHomeOrderResponse;
// }>;
