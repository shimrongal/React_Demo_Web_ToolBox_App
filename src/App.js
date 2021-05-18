
import { BrowserRouter, HashRouter,  Redirect,  Route, Switch } from 'react-router-dom';
import './App.css';
import {  getCityList } from "./utils/HelperFunctions";
import { AuthProvider } from "./utils/Auth";
import HomePage from "./pages/home/HomePage";
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signup/SignUpPage';
import PrivateRoute from "./utils/PrivateRoute";
import { useEffect, useState } from 'react';
import ParkingPage from './pages/parking/ParkingPage';
import {  getMOCKCurrentWeatherByCityName } from './utils/WeatherManager';
import NavBarComp from './components/NavBarComp';
import ShoppingListsPage from './pages/shopping_list/ShoppingListsPage';


/**
 * Created by Gal Shimron on 9/05/2021.
 * 
 * Main application class 
 *   * This class will mange all application Routes and states
 *    
 *   *** To prevent OpenWeather API calls on testing the function that make the call is in comment " //getCurrentWeatherByCityName(setCurrentWeatherObject); " 
 *           For Weather widget to work just uncomment it.
 */

function App() {
 
  const [userList , updateUsersList] = useState([[]]);
  const [cityNameArr ,setCityNameArr] = useState();
  const [currentWeatherObject , setCurrentWeatherObject] = useState();

  useEffect(()=>{
    getCityList(setCityNameArr); 
    getMOCKCurrentWeatherByCityName(setCurrentWeatherObject);

  },[]);

  return (
    <AuthProvider id="p-app-container">
      <BrowserRouter>
        <NavBarComp /> 
        <Switch>      
          <PrivateRoute exact path="/" >      <HomePage weatherObject= {currentWeatherObject}  /> </PrivateRoute>
          <Route exact path="/login"   >      <LoginPage /> </Route>
          <Route exact path="/signup"  >      <SignUpPage userList={userList} updateUsersList={updateUsersList} /> </Route> 
          <Route exact path="/shopping_lists"><ShoppingListsPage    /> </Route>
          <Route exact path="/parking"   >    <ParkingPage cities={cityNameArr}/> </Route>
          
        </Switch>
      </BrowserRouter>
      
    </AuthProvider>

  );
}

export default App;
