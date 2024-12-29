type OrderStatus = "pending" | "shipped" | "delivered";

export interface Order {
  orderId: string;
  amount: number;
  status: OrderStatus;
}

export function filterOrdersByStatus(
  orders: Order[],
  status: OrderStatus
): Order[] {
  return orders.filter((order) => order.status === status);
}
