import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI");
// Enable or disable logs. Its optional.
Geocode.enableDebug();


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
            Geocode.fromLatLng(latitude, longitude).then(
            (response) => {
                const address = response.results[0].formatted_address.replace(",","");
                setMapUrl(`https://www.google.com/maps/embed/v1/search?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&zoom=16&center=${latitude},${longitude}&q=parking near ${address}`);
            },
            (error) => {
                console.error(error);
            }
            );




        }
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




