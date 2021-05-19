import { Link } from "react-router-dom";
import "../../pages/shopping_list/ShoppingListsPage.css";
import { deleteShoppingList } from "../../utils/HelperFunctions";

function ShoppingListItem({item , setDeletedItem}) {

    const handleClick = async ()=>{
        await deleteShoppingList(item);
        setDeletedItem(true)
    }

    return(<div> <Link to={{
                        pathname: "/shopping_list",
                        data: item // your data array of objects
                      }}
                        > <div id="p-shopping-list-body-container">
                            <div className="p-shopping-list-body-content dropdown title" >
                                <span className="p-list-item-title">{item}</span>
                                <i id={item} className="fa fa-angle-right" > </i>                         
                            </div>
                        </div>
            </Link>
                <button onClick={handleClick}> <i className="fa fa-angle-right"></i> </button>
            </div>)
}

export default ShoppingListItem;