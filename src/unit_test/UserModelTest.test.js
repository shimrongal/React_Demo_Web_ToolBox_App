import "../models/UserModel"
import UserModel from "../models/UserModel"


test('create user model instance' , ()=>{
    const userModel = new UserModel("first name","last name" , "email@gmail.com", "address");
    expect(userModel).toBeDefined();
    expect(userModel.firstName).toEqual("first name");
    expect(userModel.lastName).toEqual("last name");
    expect(userModel.email).toEqual("email@gmail.com");
    expect(userModel.address).toEqual("address");
});