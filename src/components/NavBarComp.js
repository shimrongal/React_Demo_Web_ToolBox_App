import {  Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
 * Created by Gal Shimron on 10/05/2021.
 * 
 * Navbar manger class
 * 
 * @param {*} params
 * 
 */

function NavBarComp() {

    return(

    <Navbar  bg="light" expand="lg">
    <Navbar.Brand as={Link}  to="/">ToolBox</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link}  to="/shopping_lists">Shopping list</Nav.Link>
        <Nav.Link as={Link}  to="/parking">Parking</Nav.Link>
      </Nav>
      <Button onClick={()=>signOut("/login")}>Sign out</Button>
    </Navbar.Collapse>
  </Navbar>)
}

export default NavBarComp;