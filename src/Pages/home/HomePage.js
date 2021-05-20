import './HomePage.css';
import { AuthContext } from "../../utils/Auth";
import { Redirect } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import OrefWarningMessagesComp from '../../components/oref_warning_msg_comp/OrefWarningMessagesComp';
import { orefWarningMessagesManager } from '../../utils/OrefWarningMessagesManager';
import WeatherComp from '../../components/weather_comp/WeatherComp';


/**
 * Created by Gal Shimron on 9/05/2021.
 * 
 * Home class is the Application Landing page.
 * @param {*} param0 
 */

const HomePage = ({weatherObject}) => {
  const [currentOrefAlerts , updateOrefAlerts] = useState();
  useEffect(()=>{
    orefWarningMessagesManager(updateOrefAlerts) ;
    const orefAlertsInterval = setInterval(()=>{
      orefWarningMessagesManager(updateOrefAlerts) } , 5000) ;
      return ()=>{
          clearInterval(orefAlertsInterval);
      }

  },[]);

  const {currentUser} = useContext(AuthContext);
  if (typeof currentUser ==='undefined' || currentUser === null) {
    return <Redirect to="/login" />;
  }
  return (
    <div >
      {typeof weatherObject !== 'undefined' ? <WeatherComp weatherObject={weatherObject}   /> : <div>No Weather Data yet </div> }
      {typeof currentOrefAlerts    !== 'undefined' ? <OrefWarningMessagesComp alerts={currentOrefAlerts} /> : <div>No Alerts</div> }
    </div>
  );
};

export default HomePage;