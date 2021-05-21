import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import OptionComp from "../OptionComp";
import axios from "axios";

function ParkingAddressModal({show,  onClose,whatToShow, setMapUrl, cities , parkingLocation ,mainBtnText, setMainBtnText  ,updateParkingLocation}) {
    const [streetAddress, setStreetAddress] = useState("");
    const [cityName, setCity]= useState("");
    const [addressFromLatLng, setAddressFromLatLng] =useState("");

    const clearInputs = ()=>{
        setStreetAddress("");
    }

    const saveAddressAndClose= ()=>{
        let address = streetAddress + " " +cityName;
        if (whatToShow === "parkingLocation"){
            updateParkingLocation(address);
            setMapUrl(`https://www.google.com/maps/embed/v1/place?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&q=${address}`);
            setMainBtnText("Get directions");
        }
        else if (whatToShow === "currentLocation") {
            setMapUrl(`https://www.google.com/maps/embed/v1/directions?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&origin=${parkingLocation}"&destination=${address}&mode=walking`);
        }
        else if (whatToShow === "findParkingLot"){
            axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI`).then((results)=>{
                setMapUrl(`https://www.google.com/maps/embed/v1/search?key=AIzaSyCNKfsXeTiMfS66RSVSMuYv5BEQVw5ohbI&zoom=16&center=${results.data.results[0].geometry.location.lat},${results.data.results[0].geometry.location.lng}&q=parking near ${results.data.results[0].formatted_address}`);
            }).catch((error)=>{
                console.error("error https://maps.googleapis.com/maps/api/geocode/json?address= : "+error);
            });
        }
        clearInputs()
        onClose();
    }

    const getOptionsList = cities.map((item, index) => <OptionComp item={item} /> );
    
    return(<Modal show={show} onHide={onClose} size="lg" >
        <Modal.Header >
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