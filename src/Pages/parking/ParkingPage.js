import { useState } from "react";
import ParkingAddressModal from "../../components/modals/ParkingAddressModal";
import NavBarComp from "../../components/NavBarComp";
import { getCurrentLocation  } from "../../utils/LocationManager";


function ParkingPage({cities}) {
    const [parkingLocation,updateParkingLocation]                                = useState();
    const [currentLocation,updateCurrentLocation]                                = useState();

    
    const [parkingLatLng, updateParkingLatLng]                     = useState();
    const [currentLatLng, updateCurrentLatLng]                     = useState();
    const [showParkingAddressModal ,updateShowParkingAddressModal] = useState(false);
    if (showParkingAddressModal){
        if (typeof parkingLocation === 'undefined')
            return <ParkingAddressModal show={showParkingAddressModal} onClose={()=>updateShowParkingAddressModal(false)} updateLocation={updateParkingLocation} cities={cities}/>
        else 
            return <ParkingAddressModal show={showParkingAddressModal} onClose={()=>updateShowParkingAddressModal(false)} updateLocation={updateCurrentLocation} cities={cities}/>
        }

    const setParkingMainButtonText = ()=>{
        if (typeof parkingLatLng === 'undefined' && typeof parkingLocation === 'undefined'){
            return "Save Parking";
        }
        else {
            return "Find My Car";
        }
    }

    const onMainParkingButtonClick = ()=> {
        if (typeof parkingLatLng === 'undefined' && typeof parkingLocation === 'undefined'){
            getCurrentLocation(updateParkingLatLng, updateShowParkingAddressModal)
        }
        else {
            getCurrentLocation(updateCurrentLatLng ,updateShowParkingAddressModal);
        }
        
    }
    if (typeof currentLatLng !== 'undefined'){
        console.log(currentLatLng);
        return(            <iframe
            width="800"
            height="600"
            style={{border:0}}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&origin=${currentLatLng.lat},${currentLatLng.lng}&destination=${parkingLatLng.lat},${parkingLatLng.lng}&mode=walking`}
            ></iframe>)

    }
    else if ( typeof currentLocation !== 'undefined'){
        console.log(currentLocation);
        return(            <iframe
            width="800"
            height="600"
            style={{border:0}}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&origin=${currentLocation}&destination=${parkingLocation}&mode=walking`}
            ></iframe>)
    }

    return(<div>
            <NavBarComp />    
            {parkingLatLng ? <iframe
                width="800"
                height="600"
                style={{border:0}}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&q=${parkingLatLng.lat},${parkingLatLng.lng}`}
                >
            </iframe> : <div>Would you like to park ?</div>}
            {parkingLocation ? <iframe
                width="800"
                height="600"
                style={{border:0}}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&q=${parkingLocation}`}
                >
            </iframe> : <div>Would you like to park ?</div>}    
            <div>
                <button onClick={()=>onMainParkingButtonClick()}>{setParkingMainButtonText()}</button>
            </div>


        </div> )
    }



export default ParkingPage