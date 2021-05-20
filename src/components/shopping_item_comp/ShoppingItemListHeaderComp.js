import "../../pages/shopping_list/ShoppingPage.css"

function  ShoppingItemListHeaderComp() {
    
    return(<dl id="shopping-item-header" className="shopping-item-row">
                <dd className="shopping-item-col">
                    <h4>Name</h4>
                 </dd>
                <dd className="shopping-item-col">
                    <h4>Brand name</h4>
                </dd>
                <dd className="shopping-item-col">
                    <h4>Quantity</h4>
                </dd>
                <dd className="shopping-item-col">
                    <h4>InCart</h4>
                </dd>

    </dl>)
}

export default ShoppingItemListHeaderComp;