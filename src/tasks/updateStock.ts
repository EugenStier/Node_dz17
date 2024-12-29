export type ProductInfo = [string, number, number]; // [name, price, stock]
export interface Inventory {
  [productName: string]: number;
}

export function updateStock(
  inventory: Inventory,
  productInfo: ProductInfo
): Inventory {
  const [productName, , stockChange] = productInfo;
  inventory[productName] = (inventory[productName] || 0) + stockChange;
  return inventory;
}
