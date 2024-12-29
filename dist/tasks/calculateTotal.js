"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotal = calculateTotal;
function calculateTotal(price, quantity, discount = 0) {
    const total = price * quantity;
    const discountedTotal = total - total * discount;
    return discountedTotal;
}
