import React, { useEffect } from 'react';
import ShoppingItemComp from '../../components/shopping_item_comp/ShoppingItemComp';
import { useState } from 'react';
import NewShoppingItemModal from '../../components/modals/NewShoppingItemModal';
import ShoppingItemListHeaderComp from '../../components/ShoppingItemListHeaderComp';
import { getShoppingList } from '../../utils/HelperFunctions';
import { AuthContext } from '../../utils/Auth';
import { useContext } from 'react';
import { Redirect } from 'react-router';


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
  
  const getShoppingItems = shoppingList.map(item=>{
     return <ShoppingItemComp item={item} isChecked={item.inCart}/>
  })

  const {currentUser} = useContext(AuthContext);


  if (typeof currentUser ==='undefined' || currentUser ===null) {
    alert("Please Log in or Sign up first");
    return <Redirect to="/login" />;
  }

  return(<div>
          <ShoppingItemListHeaderComp />
          {getShoppingItems}       
          <button onClick={()=>updateAddNewItemModal(true)}>Add new Item</button>
          <NewShoppingItemModal show={showAddNewItemModal} onClose={()=>updateAddNewItemModal(false)} currentShoppingList={shoppingList} updateShoppingList={updateShoppingList} ></NewShoppingItemModal>
        </div>)
    
}


 export default ShoppingPage;