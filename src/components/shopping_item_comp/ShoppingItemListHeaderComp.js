import "../../pages/shopping_list/ShoppingPage.css"

function  ShoppingItemListHeaderComp() {
    return(<ul className="display-flex-row list-border-style-shopping-header"> 
                <li className="shopping-item-col">
                    <h4>Name</h4>
                 </li>
                <li className="shopping-item-col">
                    <h4>Brand name</h4>
                </li>
                <li className="shopping-item-col">
                    <h4>Quantity</h4>
                </li>
                <li className="shopping-item-col">
                    <h4>InCart</h4>
                </li>
                <li className="shopping-item-col">
                    
                </li>
    </ul>)
}

export default ShoppingItemListHeaderComp;