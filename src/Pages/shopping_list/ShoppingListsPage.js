import { useContext, useEffect, useState } from "react";
import { getShoppingLists } from "../../utils/HelperFunctions";
import 'font-awesome/css/font-awesome.min.css';
import "./ShoppingListsPage.css";
import NavBarComp from "../../components/NavBarComp";
import ShoppingListItem from "../../components/shopping_item_comp/ShoppingListItem";
import { AuthContext } from "../../utils/Auth";
import { Redirect } from "react-router";

function ShoppingListsPage() {
    
    const [shoppingLists , updateShoppingLists] = useState();
    const [chosenList ,setChosenList] = useState();


    const getLists = shoppingLists ? shoppingLists.map((item)=>{
        return <ShoppingListItem item={item} setChosenList={setChosenList}  />}) : "";
   
   
    useEffect(()=>{
    getShoppingLists(updateShoppingLists);
    },[]);

    const {currentUser} = useContext(AuthContext);

    if (typeof currentUser ==='undefined' || currentUser ===null) {
      return <Redirect to="/login" />;
    }

    return(<div className="p-container">
        <NavBarComp />
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