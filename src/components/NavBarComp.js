import {  Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
 * Navbar manger class
 * 
 * @param {*} params
 * 
 * 
 *  
 */

function NavBarComp(params) {
    return(
    <Navbar  bg="light" expand="lg">
    <Navbar.Brand href="#home">ToolBox</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/" >Home</Nav.Link>
        <Nav.Link as={Link}  to="/shopping_page">Shopping list</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>)
}


export default NavBarComp;