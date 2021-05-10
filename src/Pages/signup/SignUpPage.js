import "./SignUpPage.css"
import React, { useCallback } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { withRouter } from "react-router";
import  app   from "../../utils/FirebaseConfig";


/**
 * Created by Gal Shimron on 9/05/2021.
 * 
 * SignUp page 
 *   *** This class will sign in new user to Firebase auth server
 * 
 * TODO:
 *  1. Create a User class
 *  2. Set nice fonts,
 *  3. Design the title 
 **/



const SignUpPage = ({ history }) => {
  
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    //To do create a new user 
    const { email, password , address , address2 } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div id="p-sign-in">
      <h1>Sign up</h1>
      <Form onSubmit={handleSignUp}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control name="address" placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control name="address2" placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default withRouter(SignUpPage);