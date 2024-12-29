export function calculateTotal(
  price: number,
  quantity: number,
  discount: number = 0
): number {
  const total = price * quantity;
  const discountedTotal = total - total * discount;
  return discountedTotal;
}
