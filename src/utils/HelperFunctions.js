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
 *  Return shopping list from Firestore db by list name
 * 
 * @param {*} currentListId 
 * @param {*} updateShoppingList 
 */

export const getShoppingListByName= (currentListId, updateShoppingList)=>{
    const tempShoppingItems = [];
    fireStoreDb.collection(firebaseBaseCollectionName).doc(currentListId).collection(currentListId +"-data").get().then((querySnapshot)=>{
            querySnapshot.forEach(doc => {  
                if (!doc.data().deleted){              
                    tempShoppingItems.push( new ShoppingItemModel(doc.data().itemName, doc.data().itemBrand , doc.data().itemQuantity , doc.data().inCart ));
                }
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
    fireStoreDb.collection(firebaseBaseCollectionName).get().then( querySnapshot=>{
        const tempShoppingListArr = [];
        querySnapshot.forEach((currentList)=>{
            //Do not show lists with deleted status 
            if (!currentList.data().deleted )
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
        inCart:false,
        deleted:false

    }).catch((error)=>{
        console.error("addShoppingItemToFireStore error : " + error);
    });
}

export const saveCheckBoxState= (currentListName, item,   checkBoxStatus)=>{
    fireStoreDb.collection(firebaseBaseCollectionName).doc(currentListName).collection(currentListName+"-data").doc(item.itemName+"_"+item.itemBrand).update({
        "inCart" : checkBoxStatus
    }).catch((error) => {
        console.error("Error updating document: ", error);
    });
}


/**
 * This function will update the delete attribute/flag on firestore. 
 * @param {*} listItem 
 */
export const deleteShoppingList = async (listItem)=>{
    await fireStoreDb.collection(firebaseBaseCollectionName).doc(listItem).update({
        "deleted": true
    }).then(()=>{
        console.log( `deleteShoppingList deleted: true`);
    }).catch((error)=>{
        console.error("deleteShoppingList error : " + error);
    })
}

export const deleteShoppingItem = async (listName ,item)=>{
    await fireStoreDb.collection(firebaseBaseCollectionName).doc(listName).collection(listName+"-data").doc(item.itemName+"_"+item.itemBrand).update({
        "deleted": true
    }).then(()=>{
        console.log( `deleteShoppingItem deleted: true`);
    }).catch((error)=>{
        console.error("deleteShoppingItem error : " + error);
    })
}

/**
 * Automated testing and mocks for firestore
 * 
 * THIS IS ONLY FOR TESTING DO NOT USE IT ON WORKING DB 
 * 
 */

/**
 * Reset Shopping lists delete attribute
 */
 export const resetDeletedListsMOCK= ()=>{

    const tempShoppingListArr = [];
    fireStoreDb.collection(firebaseBaseCollectionName).get().then( querySnapshot=>{
        querySnapshot.forEach((currentList)=>{
            tempShoppingListArr.push(currentList.id);
        });
        tempShoppingListArr.forEach(item=>{
            fireStoreDb.collection("shopping-lists").doc(item).update({
                "deleted": false
            });
        });
    });

 }

 export const resetDeletedListItemsMOCK= async()=>{
    const tempShoppingListArr = [];
    
    await fireStoreDb.collection(firebaseBaseCollectionName).get().then( querySnapshot=>{
        querySnapshot.forEach((currentList)=>{
            tempShoppingListArr.push(currentList.id);
        });
    });
    tempShoppingListArr.forEach(listItem=>{
        fireStoreDb.collection(firebaseBaseCollectionName).doc(listItem).collection(listItem+"-data").get().then(  res =>{
                res.docs.forEach( item=>{
                    fireStoreDb.collection(firebaseBaseCollectionName).doc(listItem).collection(listItem+"-data").doc(item.data().itemName+"_"+item.data().itemBrand).update({
                        "deleted": false
                    }).catch(error=>{
                        console.error("resetDeletedListItemsMOCK error : " + error);
                    });
            });
        });
    });

 }