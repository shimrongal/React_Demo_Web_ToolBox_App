import { Link } from "react-router-dom";
import "../../pages/shopping_list/ShoppingListsPage.css";
import { deleteShoppingList } from "../../utils/HelperFunctions";

import { MdRemoveShoppingCart } from "react-icons/md";


function ShoppingListItemComp({item , setDeletedItem}) {

    const handleClick = async ()=>{
        await deleteShoppingList(item);
        setDeletedItem(true)
    }

    return(<div id="p-shopping-list-body-container"> 
            <div >
                <Link  to={{ pathname: "/shopping_list",  data: item }} >
                    <span className="p-list-item-title">{item}</span>
                </Link>
                <span onClick={handleClick}> <MdRemoveShoppingCart className="icon-remove-cart"/> </span>
            </div>
        </div>)
}

export default ShoppingListItemComp;