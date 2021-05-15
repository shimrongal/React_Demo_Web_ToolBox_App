import './HomePage.css';
import { AuthContext } from "../../utils/Auth";
import { Redirect } from 'react-router';
import { useContext } from 'react';
import WeatherComp from '../../components/WeatherComp';

/**
 * Created by Gal Shimron on 9/05/2021.
 * 
 * Home class is the Application Landing page.
 * @param {*} param0 
 */

const HomePage = ({weatherObject}) => {
  
  const {currentUser} = useContext(AuthContext);

  if (typeof currentUser ==='undefined' || currentUser === null) {
    alert("Please Log in or Sign up first");
    return <Redirect to="/login" />;
  }
  return (
    <div >
      {typeof weatherObject !== 'undefined' ? <WeatherComp weatherObject={weatherObject} /> : <div>No Weather Data yet </div> }
    </div>
  );
};

export default HomePage;