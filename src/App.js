
import { HashRouter,  Route, Switch } from 'react-router-dom';
import './App.css';

import { AuthProvider } from "./utils/Auth";

import Home from "./pages/home/Home";
import LoginPage from './pages/login/LoginPage';
import ShoppingPage from './pages/shopping_list/ShoppingPage'
import SignUpPage from './pages/signup/SignUpPage';
import PrivateRoute from "./utils/PrivateRoute";
import { useState } from 'react';
import ShoppingItemModel from './models/ShoppingItemModel';


/**
 * Created by Gal Shimron on 9/05/2021.
 * 
 * Main application class 
 *   * This class will mange all application Routes and states
 *    
 */


function App() {
  
  const [userList , updateUsersList] = useState([[]]);
  const [shoppingList , updateShoppingList] = useState([new ShoppingItemModel('itemName','brand Name' , 1)]);

  

  return (
    <AuthProvider id="p-app-container">
      <HashRouter>
        <Switch>      
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login"  component={LoginPage}></Route>
          <Route exact path="/signup" >      <SignUpPage userList={userList} updateUsersList={updateUsersList} /> </Route> 
          <Route exact path="/shopping_page"><ShoppingPage shoppingList={shoppingList} updateShoppingList={updateShoppingList}    /> </Route>
        </Switch>
      </HashRouter>
      
    </AuthProvider>

  );
}

export default App;
