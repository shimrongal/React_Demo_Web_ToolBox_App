

/**
 * Created by Gal Shimron on 10/05/2021.
 * 
 * ShoppingItemModel class 
 * Item Id schema is :  itemId = itemName + "_" + itemBrand
 */

class ShoppingItemModel{

    constructor(itemName, itemBrand, itemQuantity ,inCart=false){
        this.itemId = itemName+"_"+itemBrand;
        this.itemName = itemName;
        this.itemBrand = itemBrand;
        this.itemQuantity = itemQuantity;
        this.inCart = inCart;
    }

}

export default ShoppingItemModel;