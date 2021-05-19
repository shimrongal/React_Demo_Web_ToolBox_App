
import { HashRouter,  Route, Switch } from 'react-router-dom';
import './App.css';
import {  getCityList, resetDeletedListItemsMOCK, resetDeletedListsMOCK } from "./utils/HelperFunctions";

import { AuthProvider } from "./utils/Auth";

import Home from "./pages/home/Home";
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signup/SignUpPage';
import PrivateRoute from "./utils/PrivateRoute";
import { useEffect, useState } from 'react';
import ParkingPage from './pages/parking/ParkingPage';
import ShoppingListsPage from './pages/shopping_list/ShoppingListsPage';
import ShoppingPage from './pages/shopping_list/ShoppingPage';


/**
 * Created by Gal Shimron on 9/05/2021.
 * 
 * Main application class 
 *   * This class will mange all application Routes and states
 *    
 */


function App() {
  
  const [userList , updateUsersList] = useState([[]]);
  const [cityNameArr ,setCityNameArr] = useState();

  /**
   *   use this to reset db
   *     
   *   console.log("App");
   * resetDeletedListsMOCK();
   * resetDeletedListItemsMOCK();
   */

  useEffect(()=>{
    getCityList(setCityNameArr); 
  },[]);

  return (
    <AuthProvider id="p-app-container">
      <HashRouter>
        <Switch>      
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login"  component={LoginPage}></Route>
          <Route exact path="/signup" >      <SignUpPage userList={userList} updateUsersList={updateUsersList} /> </Route> 
          <Route exact path="/shopping_lists"><ShoppingListsPage    /> </Route>
          <Route exact path="/shopping_list" >   <ShoppingPage /> </Route>
          <Route exact path="/parking"      ><ParkingPage cities={cityNameArr}/> </Route>
        </Switch>
      </HashRouter>
      
    </AuthProvider>

  );
}

export default App;
