import {bestSellingTv} from "../constants/inventory.js";

function totalStock(inventory) {
    let total = 0;
    for (let i = 0; i < inventory.length; i++) {
        total += inventory[i].originalStock;
    }
    total += bestSellingTv.originalStock;
    // console.log(total);
    return total;
}

export default totalStock;