import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import OptionComp from "../OptionComp";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI");
// Enable or disable logs. Its optional.
Geocode.enableDebug();

function ParkingAddressModal({show,  onClose,whatToShow, setMapUrl, cities , parkingLocation ,mainBtnText, setMainBtnText  ,updateParkingLocation}) {
    const [streetAddress, setStreetAddress] = useState("");
    const [cityName, setCity]= useState("");
    const [addressFromLatLng, setAddressFromLatLng] =useState("");

    const clearInputs = ()=>{
        setStreetAddress("");
    }

    const saveAddressAndClose= ()=>{
        let address = streetAddress + " " +cityName;
        console.log(address);
        if (whatToShow === "parkingLocation"){
            updateParkingLocation(address);
            setMapUrl(`https://www.google.com/maps/embed/v1/place?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&q=${address}`);
            setMainBtnText("Get directions");
        }
        else if (whatToShow === "currentLocation") {
            setMapUrl(`https://www.google.com/maps/embed/v1/directions?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&origin=${parkingLocation}"&destination=${address}&mode=walking`);
        }
        else if (whatToShow === "findParkingLot"){
                //TODO: center the map by lat lng -> ISSUE - can translate only address in english - hebrew address return wrong coordinates
/*             Geocode.fromAddress("Nakhum Sokolov Street 43, Tel Aviv-Yafo").then(
                (response) => {
                  console.log("a is " +response.results[0].geometry.location.lat);
                setMapUrl(`https://www.google.com/maps/embed/v1/search?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&zoom=16&center=${response.results[0].geometry.location.lat},${response.results[0].geometry.location.lng}&q=parking near ${address}`);

                },
                (error) => {
                  console.error(error);
                }
              ); */
              setMapUrl(`https://www.google.com/maps/embed/v1/search?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&zoom=16&q=parking near ${address}`);
        }
        clearInputs()
        onClose();
    }

    const getOptionsList = cities.map((item, index) => <OptionComp item={item} /> );
    
    return(<Modal show={show} onHide={onClose} size="lg" >
        <Modal.Header closeButton>
             <Modal.Title>Parking Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control value={streetAddress} onChange={(e)=>setStreetAddress(e.target.value)} placeholder="Please insert parking spot street address"></Form.Control>
                </Form.Group>
                <Form.Group>
                
                    <Form.Label>City Name</Form.Label>
                    <Form.Control as="select" defaultValue="בחר עיר" onChange={(e)=>setCity(e.target.value)}>
                        <option>בחר עיר</option> 
                        {getOptionsList}
                    </Form.Control>
                  
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={saveAddressAndClose}>
                    Create New Address
                </Button>
        </Modal.Footer>

    </Modal>);
}

export default ParkingAddressModal;