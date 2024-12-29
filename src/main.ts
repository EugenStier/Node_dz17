import { calculateTotal } from "./tasks/calculateTotal";
import { displayId } from "./tasks/displayId";
import { filterOrdersByStatus, Order } from "./tasks/orders";
import { updateStock, Inventory, ProductInfo } from "./tasks/updateStock";

// Пример использования calculateTotal
console.log(calculateTotal(100, 2)); // 200
console.log(calculateTotal(100, 2, 0.1)); // 180

// Пример использования displayId
displayId("abc123"); // "ID: ABC123"
displayId(42); // "ID: 420"

// Пример использования filterOrdersByStatus
const orders: Order[] = [
  { orderId: "1", amount: 100, status: "pending" },
  { orderId: "2", amount: 200, status: "shipped" },
  { orderId: "3", amount: 150, status: "delivered" },
];
console.log(filterOrdersByStatus(orders, "shipped")); // [{ orderId: "2", amount: 200, status: "shipped" }]

// Пример использования updateStock
const inventory: Inventory = { apple: 10, banana: 5 };
const productInfo: ProductInfo = ["apple", 1.5, 3];
console.log(updateStock(inventory, productInfo)); // { "apple": 13, "banana": 5 }
