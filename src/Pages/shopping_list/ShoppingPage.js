import React from 'react';
import NavBarComp from '../../components/NavBarComp';
import ShoppingItemComp from '../../components/shopping_item_comp/ShoppingItemComp';
import { useState } from 'react';
import NewShoppingItemModal from '../../components/modals/NewShoppingItemModal';

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

function ShoppingPage({ shoppingList ,updateShoppingList}) {
  const [showAddNewItemModal , updateAddNewItemModal] = useState(false);


  const getShoppingItems = shoppingList.map(item=>{
     return <ShoppingItemComp item={item}/>
  })
  return(<div>
          <NavBarComp />
          <h1>Your current Shopping list</h1>
          {getShoppingItems}
          <button onClick={()=>updateAddNewItemModal(true)}>Add new Item</button>
          <NewShoppingItemModal show={showAddNewItemModal} onClose={()=>updateAddNewItemModal(false)} currentShoppingList={shoppingList} updateShoppingList={updateShoppingList} ></NewShoppingItemModal>
        </div>)
    
}


 export default ShoppingPage;