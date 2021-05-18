import "./WeatherComp.css";

const openWeatherIconsBaseUrl = "http://openweathermap.org/img/wn/" 


function WeatherComp({weatherObject}) {
    if (typeof weatherObject=== 'undefined'){
        return <div>WeatherObject is not ready yet </div>
    }
    else {
        return(<div >
        <div id="c-weather-widget-container">
                <div className="row c-weather-widget-main-content-container" >
                    <h1 >{weatherObject.name}</h1>
                    <div className="weather-icon-container">
                        <img src={ openWeatherIconsBaseUrl + weatherObject.weather[0].icon + ".png"} />
                    </div>
                    <div className="current-conditions">
                        <div>{Math.round( weatherObject.main.temp )}</div>
                        <div>{weatherObject.weather[0].description}</div>
                    </div>
                </div>
        </div>
         <div className="c-weather-widget-more-info-container" >
            <div>
                <ul className="row">
                    <li>{`Humidity: ${weatherObject.main.humidity}%`}</li>
                    <li>{`Wind: ${Math.round(weatherObject.wind.speed)} m/s`}</li>
                    <li>{`Cloud cover: ${weatherObject.clouds.all}%`}</li>
                </ul>
            </div>
        </div>
    </div> )
    }



}


export default WeatherComp;

