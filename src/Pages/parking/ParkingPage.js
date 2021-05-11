import { useState } from "react";
import ParkingAddressModal from "../../components/modals/ParkingAddressModal";
import NavBarComp from "../../components/NavBarComp";
import { getCurrentLocation } from "../../utils/LocationManager";


function ParkingPage({cities}) {

    const [latLng, updateLatLng]                                   = useState();
    const [showParkingAddressModal ,updateShowParkingAddressModal] = useState(false);
    const [location,updateLocation]                                = useState();
    
    if (showParkingAddressModal){
        return <ParkingAddressModal show={showParkingAddressModal} onClose={()=>updateShowParkingAddressModal(false)} updateLocation={updateLocation} cities={cities}/>
    }
    console.log(location);
    return(<div>
            <NavBarComp />    
            {latLng ? <iframe
                width="800"
                height="650"
                style={{border:0}}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&q=${latLng.lat},${latLng.lng}`}
                >
            </iframe> : <div>Would you like to park ?</div>}
            {location ? <iframe
                width="800"
                height="650"
                style={{border:0}}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&q=${location}`}
                >
            </iframe> : <div>Would you like to park ?</div>}    

            <button onClick={()=> getCurrentLocation(updateLatLng, updateShowParkingAddressModal)}>Save Location</button>


        </div> )
    }



export default ParkingPage