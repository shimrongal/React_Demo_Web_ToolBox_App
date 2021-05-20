import "../models/UserModel"
import UserModel from "../models/UserModel"

/**
 *  Created by Gal Shimron  20/5/2021
 *  This class will handle tests for User model model
 */

test('create user model instance' , ()=>{
    const userModel = new UserModel("first name","last name" , "email@gmail.com", "address");
    expect(userModel).toBeDefined();
    expect(userModel.firstName).toEqual("first name");
    expect(userModel.lastName).toEqual("last name");
    expect(userModel.email).toEqual("email@gmail.com");
    expect(userModel.address).toEqual("address");
});