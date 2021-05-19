import axios from 'axios';
import ShoppingItemModel from '../models/ShoppingItemModel';

import firebase from "../utils/FirebaseConfig";

const firebaseBaseCollectionName = "shopping-lists";

let fireStoreDb = firebase.firestore();


/**
 * Return List of israeli cities from json file - this is mostly for demonstrate reading from json file 
 * @param {*} setCityNameArr 
 */
export const getCityList =(setCityNameArr)=>{
    axios.get('israel_city_list.json').then(response=>{
        setCityNameArr(response.data.map((item)=>{
            return item.hebrew_name;
        }));
    })
}

/**
 *  Return shopping list from Firestore db by list name
 * 
 * @param {*} currentListId 
 * @param {*} updateShoppingList 
 */
export const getShoppingListByName= (currentListId, updateShoppingList)=>{
    const tempShoppingItems = [];
    fireStoreDb.collection(firebaseBaseCollectionName).doc(currentListId).collection(currentListId +"-data").get().then((querySnapshot)=>{
            querySnapshot.forEach(doc => {                
                tempShoppingItems.push( new ShoppingItemModel(doc.data().itemName, doc.data().itemBrand , doc.data().itemQuantity , doc.data().inCart ));
            });     
            updateShoppingList(tempShoppingItems);
        }).catch( (error)=>{
            console.error("Error getting document: ", error);
    });
}


/**
 * Get List of shopping lists
 * @param {*} updateShoppingLists 
 */


export const getShoppingLists = updateShoppingLists =>{
    fireStoreDb.collection("shopping-lists").get().then( querySnapshot=>{
        const tempShoppingListArr = [];
        querySnapshot.forEach((currentList)=>{
            tempShoppingListArr.push(currentList.id);
            });
    
        updateShoppingLists(tempShoppingListArr) });
}

/**
 * Will create entry in Firestore db with ID
 *  The ID Scheme is : name + brand-name 
 * @param {*} shoppingItem 
 */
export const addShoppingItemToFireStore = (currentListName ,  shoppingItem)=>{
    fireStoreDb.collection(firebaseBaseCollectionName).doc(currentListName).collection(currentListName+"-data").doc(shoppingItem.itemName+"_"+shoppingItem.itemBrand).set({
        itemName: shoppingItem.itemName,
        itemBrand: shoppingItem.itemBrand,
        itemQuantity: shoppingItem.itemQuantity,
        inCart:false
    }).catch((error)=>{
        console.log("addShoppingItemToFireStore error : " + error);
    });
}

export const saveCheckBoxState= (currentListName, item,   checkBoxStatus)=>{
    fireStoreDb.collection(firebaseBaseCollectionName).doc(currentListName).collection(currentListName+"-data").doc(item.itemName+"_"+item.itemBrand).update({
        "inCart" : checkBoxStatus
    }).catch((error) => {
        console.error("Error updating document: ", error);
    });
}