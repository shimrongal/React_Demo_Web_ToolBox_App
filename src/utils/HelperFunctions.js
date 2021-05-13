import axios from 'axios';
import { useState } from 'react';
import ShoppingItemModel from '../models/ShoppingItemModel';

import firebase from "../utils/FirebaseConfig";

let fireStoreDb = firebase.firestore();



export const getCityList =(setCityNameArr)=>{
    axios.get('israel_city_list.json').then(response=>{
        setCityNameArr(response.data.map((item)=>{
            return item.hebrew_name;
        }));
    })
}

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

export const saveShoppingItem= (shoppingItem)=>{
    fireStoreDb.collection("shopping-list").add({
        itemName: "Chips",
        itemBrand: "Pringels",
        itemQuantity: 5,
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