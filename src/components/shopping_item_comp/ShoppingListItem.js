import {  useState } from "react";
import "../../pages/shopping_list/ShoppingListsPage.css";
import { getShoppingListByName } from "../../utils/HelperFunctions";

function ShoppingListItem({item, setChosenList}) {
    
    const [shoppingList , updateShoppingList] = useState();

    const HandleOnClick =()=>{
        console.log("the chosen id is :" + item);
        getShoppingListByName(item , updateShoppingList );
        setChosenList(item) 
    }

    return(<div id="p-shopping-list-body-container" onClick={()=>HandleOnClick()}>
                <div className="p-shopping-list-body-content dropdown title" >
                    <span className="p-list-item-title">{item}</span>
                    <i id={item} className="fa fa-angle-right" > </i>                         
                </div>
            </div>)
}

export default ShoppingListItem;