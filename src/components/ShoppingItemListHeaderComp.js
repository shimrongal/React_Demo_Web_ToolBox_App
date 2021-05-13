import "../pages/shopping_list/ShoppingPage.css"

function  ShoppingItemListHeaderComp() {
    
    return(<div id="shopping-item-header" className="shopping-item-row">
                <div className="shopping-item-col">
                    <h1>Name</h1>
                 </div>
                <div className="shopping-item-col">
                    <h1>Brand name</h1>
                </div>
                <div className="shopping-item-col">
                    <h1>Quantity</h1>
                </div>
                <div className="shopping-item-col">
                    <h1>InCart</h1>
                </div>

    </div>)
}

export default ShoppingItemListHeaderComp;