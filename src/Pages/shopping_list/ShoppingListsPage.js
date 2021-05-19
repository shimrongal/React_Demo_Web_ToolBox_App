import { useContext, useEffect, useState } from "react";
import { getShoppingLists } from "../../utils/HelperFunctions";
import 'font-awesome/css/font-awesome.min.css';
import "./ShoppingListsPage.css";import ShoppingListItem from "../../components/shopping_item_comp/ShoppingListItem";
import { AuthContext } from "../../utils/Auth";
import { Redirect } from "react-router";

function ShoppingListsPage() {
    
    const [shoppingLists , updateShoppingLists] = useState();

    const [isItemDeleted , setDeletedItem] = useState(true);
    const getLists = shoppingLists ? shoppingLists.map((item,index)=>{
        return <ShoppingListItem key={item+ "_" + index} item={item} setDeletedItem={setDeletedItem} />} ) : "";
    
    const {currentUser} = useContext(AuthContext);

    useEffect(()=>{
        if (isItemDeleted){
            getShoppingLists(updateShoppingLists);
            setDeletedItem(false);
        }

    },[isItemDeleted]);

    if (typeof currentUser ==='undefined' || currentUser ===null) {
      return <Redirect to="/login" />;
    }

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