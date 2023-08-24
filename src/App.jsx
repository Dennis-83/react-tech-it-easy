import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import currentStock from "./helpers/currentStock.js";
import totalStock from "./helpers/totalStock.js";
import totalSold from "./helpers/totalSold.js";


function App() {

    currentStock(inventory);
    totalStock(inventory);
    totalSold(inventory);

    return (
        <>

            <h1>Tech IT easy dashboard</h1>
            <h2 className="total-sold">{totalSold(inventory)}</h2>
            <h2 className="total-stock">{totalStock(inventory)}</h2>
            <h2 className="current-stock">{currentStock(inventory)}</h2>

        </>
    )
}

export default App
