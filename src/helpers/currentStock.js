import totalStock from "./totalStock.js";
import totalSold from "./totalSold.js";

function currentStock(inventory) {
    let currentStock = 0;

    currentStock = totalStock(inventory) - totalSold(inventory);

    return currentStock;
}

export default currentStock;