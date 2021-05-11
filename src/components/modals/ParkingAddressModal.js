import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import OptionComp from "../OptionComp";

function ParkingAddressModal({show,  onClose, cities  , updateLocation}) {
    const [streetAddress, setStreetAddress] = useState("");
    const [cityName, setCity]= useState("");

    const clearInputs = ()=>{
        setStreetAddress("");
    }

    const saveAddressAndClose= ()=>{
        updateLocation(streetAddress +" "+cityName);
        clearInputs()
        onClose();
    }

    const getOptionsList = cities.map((item, index) => <OptionComp item={item} /> );
    

    return(<Modal show={show} onHide={onClose} size="lg">
        <Modal.Header>
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