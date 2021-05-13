import { useState } from "react";
import "./ShoppingItemComp.css";
/**
 * Created by Gal Shimron on 10/05/2021.
 * 
 * ShoppingItemComp class 
 */

function ShoppingItemComp({item}) {

   const [isChecked, setChecked] = useState(false);

    return(<div className="shopping-item-row">
                <div className="shopping-item-col">
                    <h3>{item.itemName}</h3>
                 </div>
                <div className="shopping-item-col">
                    <h3>{item.itemBrand} </h3>
                </div>
                <div className="shopping-item-col">
                    <h3>{item.itemQuantity}</h3>
                </div>
                <div className="shopping-item-col">
                    <div className="shopping-item-checkbox-container">
                        <input className="shopping-item-checkbox"  type="checkbox" value={isChecked} onChange={()=>setChecked(!isChecked)} />  
                    </div> 
                </div>
        
        {/* TODO: create data base of item and corresponding images for better look and feal
        {imgUrl ? <img className="shopping-item-icon" src="" alt=""> </img> : <div></div>} */}

    </div>)
}
 export default ShoppingItemComp;