"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateTotal_1 = require("./tasks/calculateTotal");
const displayId_1 = require("./tasks/displayId");
const orders_1 = require("./tasks/orders");
const updateStock_1 = require("./tasks/updateStock");
// Пример использования calculateTotal
console.log((0, calculateTotal_1.calculateTotal)(100, 2)); // 200
console.log((0, calculateTotal_1.calculateTotal)(100, 2, 0.1)); // 180
// Пример использования displayId
(0, displayId_1.displayId)("abc123"); // "ID: ABC123"
(0, displayId_1.displayId)(42); // "ID: 420"
// Пример использования filterOrdersByStatus
const orders = [
    { orderId: "1", amount: 100, status: "pending" },
    { orderId: "2", amount: 200, status: "shipped" },
    { orderId: "3", amount: 150, status: "delivered" },
];
console.log((0, orders_1.filterOrdersByStatus)(orders, "shipped")); // [{ orderId: "2", amount: 200, status: "shipped" }]
// Пример использования updateStock
const inventory = { apple: 10, banana: 5 };
const productInfo = ["apple", 1.5, 3];
console.log((0, updateStock_1.updateStock)(inventory, productInfo)); // { "apple": 13, "banana": 5 }
