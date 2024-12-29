"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterOrdersByStatus = filterOrdersByStatus;
function filterOrdersByStatus(orders, status) {
    return orders.filter((order) => order.status === status);
}
