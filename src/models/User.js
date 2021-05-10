
/**
 * Created by Gal Shimron on 10/05/2021.
 * 
 * User model class 
 */
class UserModel{

    constructor(newUser){
        this.firstName = newUser.firstName;
        this.lastName  = newUser.lastName;
        this.email     = newUser.email;
        this.address   = newUser.address;
        this.age       = newUser.age; 
    }

}

export default UserModel;