import React from 'react';
import NavBarComp from '../../components/NavBarComp';
import ShoppingItemComp from '../../components/ShoppingItemComp';
import { withRouter } from "react-router";

/**
 * Created by Gal Shimron on 9/05/2021.
 * 
 * Shopping page
 * 
 * @param {*} params 
 * 
 * 
 * TODO:
 *  
 */

function ShoppingPage({history, shoppingList ,updateShoppingList}) {

  let x =history;

  const getShoppingItems = shoppingList.map(item=>{
     return <ShoppingItemComp item={item}/>
  })
  return(<div>
          <NavBarComp />
          <h1>Your current Shopping list</h1>
          {getShoppingItems}
        </div>)
    
}


 export default ShoppingPage;