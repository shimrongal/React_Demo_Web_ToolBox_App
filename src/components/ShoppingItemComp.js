import ShoppingItemModel from "../models/ShoppingItemModel"

/**
 * Created by Gal Shimron on 10/05/2021.
 * 
 * ShoppingItemComp class 
 */
function ShoppingItemComp({item}) {
    
    return(<div>
        <p>{item.itemName + " " +item.itemBrand + " " + item.itemQuantity}</p>
    </div>)
}

 export default ShoppingItemComp;