import axios from "axios";


export const getCurrentLocation = (updateParkingLatLng , updateShowParkingAddressModal, tempWhatToShow, setMapUrl ,setWhatToShow, parkingLatLng , setMainBtnText)=>{
    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        updateParkingLatLng( { lat:latitude, lng:longitude} );

        
        if (tempWhatToShow === "parkingLocation"){
            setMapUrl(`https://www.google.com/maps/embed/v1/place?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&q=${latitude},${longitude}`);
            setMainBtnText("Get directions");
        }
        else if (tempWhatToShow === "currentLocation"){
            setMapUrl(`https://www.google.com/maps/embed/v1/directions?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&origin=${latitude},${longitude}&destination=${parkingLatLng.lat},${parkingLatLng.lng}&mode=walking`);
        }
        else if (tempWhatToShow === "findParkingLot"){
            // Get address from latitude & longitude.
            axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI`).then((results)=>{
                setMapUrl(`https://www.google.com/maps/embed/v1/search?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&zoom=16&center=${results.data.results[0].geometry.location.lat},${results.data.results[0].geometry.location.lng}&q=parking near ${results.data.results[0].formatted_address}`);
            }).catch((error)=>{
                console.log("error https://maps.googleapis.com/maps/api/geocode/json?address= : "+error);
            });
        }
        document.getElementById("p-loader").className = "";
    }

    function error() {
        alert('Unable to retrieve your location');
        updateShowParkingAddressModal(true);        
        setWhatToShow(tempWhatToShow);
    
    }
    
    if(!navigator.geolocation) {
        alert('Geolocation is not supported by your browser');
        } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}




