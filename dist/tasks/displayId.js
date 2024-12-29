"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayId = displayId;
function displayId(id) {
    if (typeof id === "string") {
        console.log(`ID: ${id.toUpperCase()}`);
    }
    else {
        console.log(`ID: ${id * 10}`);
    }
}
