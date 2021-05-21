import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {  Form ,Button, Modal } from "react-bootstrap";
import { addShoppingCartItemToFireStore, addShoppingItemToFireStore } from "../../utils/HelperFunctions";

function NewShoppingCartModal({show, onClose ,setUpdateList}) {
    const [cartName,setCartName]         = useState("");

    const clearInputs = ()=>{
        setCartName("");
    }

    const newCartCreated = ()=>{
        addShoppingCartItemToFireStore(cartName);
        clearInputs();
        setUpdateList();
        onClose();
    }


return(<Modal show={show} onHide={onClose} size="lg" >
            <Modal.Header >
                <Modal.Title>New Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formGridFirestName">
                        <Form.Label>Cart Name</Form.Label>
                        <Form.Control  value={cartName} onChange={(e)=>setCartName(e.target.value)} placeholder="Enter cart name" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={newCartCreated}>
                    Create Shopping Item
                </Button>
            </Modal.Footer>

</Modal>)
    
}

export default NewShoppingCartModal;