
import axios from "axios";

/**
 *  Created by Gal Shimron  20/5/2021
 *  This class will manage OpenWeather API functions
 */


export const getCurrentWeatherByCityName = (setCurrentWeatherObject)=>{
    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=586508fb2989d9e659ae350d284cee51`).then((res)=>{
        setCurrentWeatherObject(res.data);
        }).catch((error)=>{
            console.error("Error getCurrentWeatherByCityName : " + error);
        });

    }

    function error() {
        console.error("Error getting location")
    }
    navigator.geolocation.getCurrentPosition(success, error);    
}


export const getMOCKCurrentWeatherByCityName = (setCurrentWeatherObject)=>{
    axios.get('mock_open_weather_api.json').then( res =>{
        setCurrentWeatherObject(res.data);

    }).catch( error =>{
        console.error("getMOCKCurrentWeatherByCityName : " + error);
    });

}