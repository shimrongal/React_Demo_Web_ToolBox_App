

/**
 * Created by Gal Shimron on 10/05/2021.
 * 
 * ShoppingItemModel class 
 * Item Id schema is :  itemId = itemName + "_" + itemBrand
 */

class ShoppingItemModel{

    constructor(itemName, itemBrand, itemQuantity ,inCart=false){
        if (inCart === "false" ){
            this.inCart =false;
        }
        else if (inCart === "true" ){
            this.inCart =true;
        }
        else {
            this.inCart = inCart;
        }
        if (typeof itemQuantity === 'string'){
            let currentQuantity = parseInt(itemQuantity);
            if (isNaN(currentQuantity) || currentQuantity.toString().length !== itemQuantity.length) { 
                this.itemQuantity = -1;
                //TODO: Handle this Case;
                console.error("Bed input for itemQuantity");
            }
            else {
                this.itemQuantity = currentQuantity
            }
        }
        else {            
            this.itemQuantity = itemQuantity;
        }
      
        this.itemId = itemName+"_"+itemBrand;
        this.itemName = itemName;
        this.itemBrand = itemBrand;
    }

}

export default ShoppingItemModel;