import axios from 'axios';
import ShoppingItemModel from '../models/ShoppingItemModel';

import firebase from "../utils/FirebaseConfig";

const firebaseBaseCollectionName = "shopping-lists";

let fireStoreDb = firebase.firestore();


/**
 * Return List of israeli cities from json file - this is mostly for demonstrate reading from json file 
 * @param {*} setCityNameArr 
 */
export const getCityList =async setCityNameArr=>{
    await axios.get('israel_city_list.json').then(response=>{
        setCityNameArr(response.data.map((item)=>{
            return item.hebrew_name;
        }));
    })
}

/**
 *  Return shopping list from Firestore db
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
 * Return shopping list from Firestore db
 * @param {*} updateShoppingList 
 */
export const getAllShoppingListsData=  updateShoppingLists =>{
    fireStoreDb.collection("shopping-lists").get().then( querySnapshot=>{
        querySnapshot.forEach((currentList)=>{
            console.log("querySnapshot.forEach((currentList)" + currentList);

            fireStoreDb.collection("shopping-lists").doc(currentList.id).collection(currentList.id +"-data").get()
            .then(querySnapshot => {
                const tmpShoppingListsArr =[];
                querySnapshot.forEach(doc => {
                    console.log(doc.id, " => ", doc.data());
                    tmpShoppingListsArr.push(doc.data() );
                });
                updateShoppingLists(tmpShoppingListsArr);
    });
    });
});
}



export const getShoppingLists = updateShoppingLists =>{
    fireStoreDb.collection("shopping-lists").get().then( querySnapshot=>{
        const tempShoppingListArr = [];
        querySnapshot.forEach((currentList)=>{
            console.log("(currentList)" + currentList.id);
            tempShoppingListArr.push(currentList.id);
            });
    
        updateShoppingLists(tempShoppingListArr) });
}



/**
 * Will create entry in Firestore db with ID
 *  The ID Scheme is : name + brand-name 
 * @param {*} shoppingItem 
 */
export const addShoppingItemToFireStore = (shoppingItem)=>{
    fireStoreDb.collection("shopping-list").doc(shoppingItem.itemName + "_" + shoppingItem.itemBrand).set({
        itemName: shoppingItem.itemName,
        itemBrand: shoppingItem.itemBrand,
        itemQuantity: shoppingItem.itemQuantity,
        inCart:false
    });
}


/**
 * Will create entry in Firestore db with random id
 * @param {*} shoppingItem 
 */
export const saveShoppingItem= (shoppingItem)=>{
    fireStoreDb.collection("shopping-list").add({
        itemName: shoppingItem.itemName,
        itemBrand: shoppingItem.itemBrand,
        itemQuantity: shoppingItem.itemQuantity,
        inCart:false
    })
    .then((docRef) => {
        //TODO: implement
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

export const saveCheckBoxState= ( name , brand,   checkBoxStatus)=>{
    fireStoreDb.collection("shopping-list").doc(name + "_" + brand).update({
        "inCart" : checkBoxStatus
    })
    .catch((error) => {
        console.error("Error updating document: ", error);
    });
}