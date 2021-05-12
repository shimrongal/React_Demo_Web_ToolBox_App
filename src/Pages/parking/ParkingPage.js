import './ParkingPage.css';
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

    const [showFindParking , setShowFindParking] = useState();

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

    const onFindParkingButtonClick =() =>{
        whatToShow=`https://www.google.com/maps/embed/v1/search?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&zoom=16&q=parking in הרצל 10 תל אביב`;
        setShowFindParking(whatToShow);
    }

    let whatToShow= "";
    if (typeof currentLatLng !== 'undefined'){
        console.log(currentLatLng);
        whatToShow = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&origin=${currentLatLng.lat},${currentLatLng.lng}&destination=${parkingLatLng.lat},${parkingLatLng.lng}&mode=walking`;
    }
    else if ( typeof currentLocation !== 'undefined'){
        console.log(currentLocation);
        whatToShow = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&origin=${currentLocation}&destination=${parkingLocation}&mode=walking`
    }
    else if (typeof parkingLatLng !=='undefined' ){
        whatToShow =`https://www.google.com/maps/embed/v1/place?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&q=${parkingLatLng.lat},${parkingLatLng.lng}`;
    }
    else if(typeof parkingLocation !=='undefined'){
        whatToShow=`https://www.google.com/maps/embed/v1/place?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&q=${parkingLocation}`;
    }

    if (typeof showFindParking !=='undefined'){
        whatToShow = showFindParking;
    }

    return(<div>
            <NavBarComp /> 
            {whatToShow !== "" ? 
             <iframe
                width="800"
                height="600"
                style={{border:0}}
                loading="lazy"
                allowFullScreen
                src={whatToShow}>
            </iframe>
            :
            <div>Would you like to park ?</div>}
            <div className="p-parking-page-button-container">
                <button onClick={()=>onMainParkingButtonClick()}>{setParkingMainButtonText()}</button>
                <button onClick={()=>onFindParkingButtonClick()}>Find parking lot</button>
            </div>

        </div> )
    }


export default ParkingPage