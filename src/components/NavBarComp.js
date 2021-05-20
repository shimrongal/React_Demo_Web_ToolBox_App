import {  Button, Nav, Navbar } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import  firebaseAuthManager   from "../utils/FirebaseConfig";

/**
 * Created by Gal Shimron on 10/05/2021.
 * 
 * Navbar manger class
 * 
 * @param {*} params
 * 
 */

function NavBarComp() {

  const signOut = async path=>{
    await firebaseAuthManager.auth().signOut().then(()=>{
    }).catch( error =>{
      console.error("Sign out error : " +console.error() ) ;
    });
    return <Redirect to={path} replace/> ;
  }

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