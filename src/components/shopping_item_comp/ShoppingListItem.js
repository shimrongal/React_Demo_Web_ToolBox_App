import {  useState } from "react";
import { Link } from "react-router-dom";
import "../../pages/shopping_list/ShoppingListsPage.css";

function ShoppingListItem({item}) {
    
    return(<Link to={{
                        pathname: "/shopping_list",
                        data: item // your data array of objects
                      }}
                        > <div id="p-shopping-list-body-container">
                            <div className="p-shopping-list-body-content dropdown title" >
                                <span className="p-list-item-title">{item}</span>
                                <i id={item} className="fa fa-angle-right" > </i>                         
                            </div>
                        </div>
            </Link>)
}

export default ShoppingListItem;