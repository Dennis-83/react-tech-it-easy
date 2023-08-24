import {bestSellingTv} from "../constants/inventory.js";

function totalSold(inventory) {
    let total = 0;
    for (let i = 0; i < inventory.length; i++) {
        const tv = inventory[i];
        total += tv.sold;
    }
    total += bestSellingTv.sold;
    // console.log(total);
    return total;
}

export default totalSold;