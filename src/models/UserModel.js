
/**
 * Created by Gal Shimron on 10/05/2021.
 * 
 * User model class 
 */
class UserModel{

    constructor(firstName, lastName,email ,address ){
        this.firstName = firstName;
        this.lastName  = lastName;
        this.email     = email;
        this.address   = address;
    }
}

export default UserModel;