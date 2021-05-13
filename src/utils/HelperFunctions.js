import axios from 'axios';
import { useState } from 'react';
import ShoppingItemModel from '../models/ShoppingItemModel';

import firebase from "../utils/FirebaseConfig";

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
 * Return shopping list from Firestore db
 * @param {*} updateShoppingList 
 */
export const getShoppingList= (updateShoppingList)=>{
    const tempShoppingItems = [];
    fireStoreDb.collection("shopping-list").get().then( 
     (querySnapshot)=>{
            querySnapshot.forEach(doc => {                
                tempShoppingItems.push( new ShoppingItemModel(doc.data().itemName, doc.data().itemBrand , doc.data().itemQuantity , doc.data().inCart ));
            });
            updateShoppingList(tempShoppingItems);
        }).catch( (error)=>{
            console.error("Error getting document: ", error);
    });
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
    fireStoreDb.collection("shopping-list").doc("add_itm").update({
        "inCart" : checkBoxStatus
    })
    .catch((error) => {
        console.error("Error updating document: ", error);
    });
}