import { useEffect, useState } from "react";
import { saveCheckBoxState } from "../../utils/HelperFunctions";
import "./ShoppingItemComp.css";
/**
 * Created by Gal Shimron on 10/05/2021.
 * 
 * ShoppingItemComp class 
 */

function ShoppingItemComp({item , isChecked}) {

    //TODO: Figure out best practice 
    const [isCheckedItem , updateCheckItem] = useState(isChecked);

    const handleCheckBoxChange =()=>{
            saveCheckBoxState(item.itemName , item.itemBrand, !isCheckedItem)
            updateCheckItem(!isCheckedItem)   
        }

    return(<ul className="shopping-item-row">
                <li className="shopping-item-col">
                    <h5>{item.itemName}</h5>
                 </li>
                <li className="shopping-item-col">
                    <h5>{item.itemBrand} </h5>
                </li>
                <li className="shopping-item-col">
                    <h5>{item.itemQuantity}</h5>
                </li>
                <li className="shopping-item-checkbox-container">
                    <input className="shopping-item-checkbox"  type="checkbox" checked={isCheckedItem} onChange={()=>handleCheckBoxChange()} />  
                </li> 
        
        {/* TODO: create data base of item and corresponding images for better look and feal
        {imgUrl ? <img className="shopping-item-icon" src="" alt=""> </img> : <div></div>} */}

    </ul>)
}
 export default ShoppingItemComp;