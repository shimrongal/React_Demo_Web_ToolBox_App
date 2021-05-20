

import { useContext } from "react";
import NavBarComp from "../../components/NavBarComp";
import { AuthContext } from "../../utils/Auth";


/**
 *  Created by Gal Shimron  19/5/20
 *  This class will handle All 404 Error code
 *  
 */

function  NotFoundPage() {

    const {currentUser} = useContext(AuthContext);
    
    return(<div>{currentUser ? <NavBarComp /> : ""}
    <div id="p-not-found-container">
            <h1>Ooops!!! </h1>  
            <h1>Page not found</h1>      
    
            <img src="./panda_404.png"  alt="404"/>
            <h2>The page does not exist or unavailable</h2>
    </div>
    </div>)
}

export default NotFoundPage;