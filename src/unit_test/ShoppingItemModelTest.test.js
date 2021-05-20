import ShoppingItemModel from "../models/ShoppingItemModel"


test('create shopping item instance' , ()=>{
    const shoppingItem = new ShoppingItemModel("itemName", "itemBrand" , 5 , false );
    expect(shoppingItem).toBeDefined();
    expect(shoppingItem.itemName).toEqual("itemName");
    expect(shoppingItem.itemBrand).toEqual("itemBrand");
    expect(shoppingItem.itemQuantity).toEqual(5);
    expect(shoppingItem.inCart).toEqual(false);
})

test('create shopping item instance when inCart value is a string' , ()=>{
    const shoppingItem = new ShoppingItemModel("itemName", "itemBrand" , 5 , "false" );
    expect(shoppingItem).toBeDefined();
    expect(shoppingItem.itemName).toEqual("itemName");
    expect(shoppingItem.itemBrand).toEqual("itemBrand");
    expect(shoppingItem.itemQuantity).toEqual(5);
    expect(shoppingItem.inCart).toEqual(false);
})

test('create shopping item instance when itemQuantity value is a string' , ()=>{
    const shoppingItem = new ShoppingItemModel("itemName", "itemBrand" , "5" , false );
    expect(shoppingItem).toBeDefined();
    expect(shoppingItem.itemName).toEqual("itemName");
    expect(shoppingItem.itemBrand).toEqual("itemBrand");
    expect(shoppingItem.itemQuantity).toEqual(5);
    expect(shoppingItem.inCart).toEqual(false);
})

test('create shopping item instance when itemQuantity value is a string of numbers' , ()=>{
    const shoppingItem = new ShoppingItemModel("itemName", "itemBrand" , "5" , false );
    expect(shoppingItem).toBeDefined();
    expect(shoppingItem.itemName).toEqual("itemName");
    expect(shoppingItem.itemBrand).toEqual("itemBrand");
    expect(shoppingItem.itemQuantity).toEqual(5);
    expect(shoppingItem.inCart).toEqual(false);
})

test('create shopping item instance when itemQuantity value is a string of combine chars and numbers ' , ()=>{
    const shoppingItem = new ShoppingItemModel("itemName", "itemBrand" , "#e5g5" , false );
    expect(shoppingItem).toBeDefined();
    expect(shoppingItem.itemName).toEqual("itemName");
    expect(shoppingItem.itemBrand).toEqual("itemBrand");
    expect(shoppingItem.itemQuantity).toEqual(-1);
    expect(shoppingItem.inCart).toEqual(false);
})

test('create shopping item instance when itemQuantity value is a string of combine chars and numbers Start with number' , ()=>{
    const shoppingItem = new ShoppingItemModel("itemName", "itemBrand" , '1532#e5g5' , false );
    expect(shoppingItem).toBeDefined();
    expect(shoppingItem.itemName).toEqual("itemName");
    expect(shoppingItem.itemBrand).toEqual("itemBrand");
    expect(shoppingItem.itemQuantity).toEqual(-1);
    expect(shoppingItem.inCart).toEqual(false);
})