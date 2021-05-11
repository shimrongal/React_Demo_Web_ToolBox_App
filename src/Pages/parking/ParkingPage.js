import { useState } from "react";
import NavBarComp from "../../components/NavBarComp";
import { getCurrentLocation } from "../../utils/LocationManager";


function ParkingPage(params) {

    const [latLng, updateLatLng]= useState();
  
    return(<div>
            <NavBarComp />    
            <button onClick={()=> getCurrentLocation(updateLatLng)}>Save Location</button>
            {latLng ?             <iframe
                width="600"
                height="450"
                style={{border:0}}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&q=${latLng.lat},${latLng.lng}`}
                >
            </iframe> : <div>No Location Found</div>}

        </div> )
    }



export default ParkingPage