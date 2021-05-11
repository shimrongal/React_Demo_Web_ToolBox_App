

export const getCurrentLocation = (updateLatLng , updateShowParkingAddressModal)=>{
    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        updateLatLng( { lat:latitude, lng:longitude} );
    }

    function error() {
        alert('Unable to retrieve your location');
        updateShowParkingAddressModal(true);
    }
    
    if(!navigator.geolocation) {
        alert('Geolocation is not supported by your browser');
        } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }


}