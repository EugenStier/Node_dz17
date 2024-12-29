"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStock = updateStock;
function updateStock(inventory, productInfo) {
    const [productName, , stockChange] = productInfo;
    inventory[productName] = (inventory[productName] || 0) + stockChange;
    return inventory;
}
