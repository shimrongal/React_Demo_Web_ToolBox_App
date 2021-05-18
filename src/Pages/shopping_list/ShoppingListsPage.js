import { useEffect, useState } from "react";
import { getShoppingLists } from "../../utils/HelperFunctions";
import 'font-awesome/css/font-awesome.min.css';
import "./ShoppingListsPage.css";
import NavBarComp from "../../components/NavBarComp";
import ShoppingListItem from "../../components/shopping_item_comp/ShoppingListItem";

function ShoppingListsPage() {
    
    const [shoppingLists , updateShoppingLists] = useState();
    const [chosenList ,setChosenList] = useState();


    const getLists = shoppingLists ? shoppingLists.map((item)=>{
        return <ShoppingListItem item={item} setChosenList={setChosenList}  />}) : "";
   
   
    useEffect(()=>{
    getShoppingLists(updateShoppingLists);
    },[]);


    return(<div className="p-container">
        <div id="p-shopping-lists-container">
            <div id="p-shopping-list-header-container">
                <p>Current Shopping Lists</p>
                <hr></hr>
            </div>
            {getLists}
        </div>
        
    </div>)

}



export default ShoppingListsPage