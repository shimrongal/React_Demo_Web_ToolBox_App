import { useState } from "react";
import NavBarComp from "../../components/NavBarComp";


function ParkingPage(params) {

    const [latLng, updateLat]= useState();
  
    function getUserCurrentLocation() {
         
        function success(position) {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
            updateLat( { lat:latitude, lng:longitude} );
        }
    
        function error() {
            alert('Unable to retrieve your location');
        }
        

        if(!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
            } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    
    }

    const mapSrc = latLng ?  "https://www.google.com/maps/embed/v1/place?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&q=" + latLng.lat + "," + latLng.lng : "";

    return(<div>
            <NavBarComp />    
            <button onClick={()=> getUserCurrentLocation()}>Save Location</button>
            {latLng ?             <iframe
                width="600"
                height="450"
                style={{border:0}}
                loading="lazy"
                allowFullScreen
                src={mapSrc}
                >
            </iframe> : <div>No Location Found</div>}

        </div> )
    }



export default ParkingPage