import React, { useEffect } from 'react';
import NavBarComp from '../../components/NavBarComp';
import ShoppingItemComp from '../../components/shopping_item_comp/ShoppingItemComp';
import { useState } from 'react';
import NewShoppingItemModal from '../../components/modals/NewShoppingItemModal';
import ShoppingItemListHeaderComp from '../../components/ShoppingItemListHeaderComp';
import { getShoppingList } from '../../utils/HelperFunctions';

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

function ShoppingPage() {
  const [showAddNewItemModal , updateAddNewItemModal] = useState(false);
  const [shoppingList , updateShoppingList] = useState([]);


  useEffect(()=>{
    getShoppingList(updateShoppingList);
  },[]);


  const getShoppingItems = shoppingList.map(item=>{
     return <ShoppingItemComp item={item} isChecked={item.inCart}/>
  })
  let text = "test use Effect";
  return(<div>
          <NavBarComp />
          <ShoppingItemListHeaderComp />
          {getShoppingItems}
          <button onClick={()=>updateAddNewItemModal(true)}>Add new Item</button>
          <NewShoppingItemModal show={showAddNewItemModal} onClose={()=>updateAddNewItemModal(false)} currentShoppingList={shoppingList} updateShoppingList={updateShoppingList} ></NewShoppingItemModal>
        </div>)
    
}


 export default ShoppingPage;