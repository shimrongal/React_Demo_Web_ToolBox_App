import { useState } from "react";
import ShoppingItemModel from "../../models/ShoppingItemModel"
import "./ShoppingItemComp.css";
/**
 * Created by Gal Shimron on 10/05/2021.
 * 
 * ShoppingItemComp class 
 */
function ShoppingItemComp({item}) {
    
    console.log("ShoppingItemComp");

   const [isChecked, setChecked] = useState(false);

    return(<div>
        <div className="shopping-item-checkbox-container">
            <input className="shopping-item-checkbox" name="myCheckBox" type="checkbox" value={isChecked} onChange={()=>setChecked(!isChecked)} />  
        </div>
        <label htmlFor="myCheckBox" >item.itemName + " " +item.itemBrand + " " + item.itemQuantity</label>
        
        {/* TODO: create data base of item and corresponding images for better look and feal
        {imgUrl ? <img className="shopping-item-icon" src="" alt=""> </img> : <div></div>} */}

    </div>)
}
 export default ShoppingItemComp;