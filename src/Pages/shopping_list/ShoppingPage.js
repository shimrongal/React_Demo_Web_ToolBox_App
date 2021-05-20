import React, { useEffect } from 'react';
import NavBarComp from '../../components/NavBarComp';
import ShoppingItemComp from '../../components/shopping_item_comp/ShoppingItemComp';
import { useState } from 'react';
import NewShoppingItemModal from '../../components/modals/NewShoppingItemModal';
import { useLocation } from 'react-router';
import { getShoppingListByName } from '../../utils/HelperFunctions';
import ShoppingItemListHeaderComp from '../../components/shopping_item_comp/ShoppingItemListHeaderComp';

/**
 * Created by Gal Shimron on 9/05/2021.
 * 
 * Shopping page 
 *  This class will handle Shopping list item
 *  
 * 
 */


function ShoppingPage() {
  
  const [showAddNewItemModal , updateAddNewItemModal] = useState(false);
  const [shoppingList , updateShoppingList] = useState();
  const [itemDeleted ,setItemDeleted] = useState(true);
 
  const currentListName = useLocation().data


  useEffect( ()=>{
    if (currentListName !== 'undefined' && itemDeleted){
      getShoppingListByName( currentListName, updateShoppingList);
      setItemDeleted(false);
    }
  },[currentListName , itemDeleted]);

  const getShoppingItems = shoppingList ? shoppingList.map( (item , index)=>{
     return <ShoppingItemComp key={item + index} currentListName={currentListName} item={item} isChecked={item.inCart} setItemDeleted={setItemDeleted} />  }) : "";

  return(<div>          
          <ShoppingItemListHeaderComp />
          {shoppingList ? getShoppingItems : ""}       
          <button onClick={()=>updateAddNewItemModal(true)}>Add new Item</button>
          <NewShoppingItemModal show={showAddNewItemModal} onClose={()=>updateAddNewItemModal(false)} currentListName={currentListName} currentShoppingList={shoppingList} updateShoppingList={updateShoppingList} ></NewShoppingItemModal>
        </div>)
    
}


 export default ShoppingPage;