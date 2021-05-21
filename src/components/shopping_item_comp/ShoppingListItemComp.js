import { Link } from "react-router-dom";
import "../../pages/shopping_list/ShoppingListsPage.css";
import { deleteShoppingList } from "../../utils/HelperFunctions";

import { MdRemoveShoppingCart } from "react-icons/md";


function ShoppingListItemComp({item , setDeletedItem}) {

    const handleClick = async ()=>{
        await deleteShoppingList(item);
        setDeletedItem(true)
    }

    return(<div className="p-shopping-list-body-container"> 
                <Link  to={{ pathname: "/shopping_list",  data: item }} >
                    <div className="p-list-item-div p-list-item-title">{item}</div>
                </Link>
                <div className="icon-container" onClick={handleClick}> <MdRemoveShoppingCart className="icon-remove-cart"/> </div>
        </div>)
}

export default ShoppingListItemComp;