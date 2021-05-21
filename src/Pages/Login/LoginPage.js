import './LoginPage.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import  app   from "../../utils/FirebaseConfig";
import {AuthContext} from "../../utils/Auth";
import {  Form } from 'react-bootstrap';
/**
 * Created by Gal Shimron on 9/05/2021.
 * 
 * Login page 
 *   *** This class will use Firebase auth
 * 
 * TODO:
 *  1. Handle forget password
 *  2. Set nice fonts,
 *  3. Design the title 
 **/



const LoginPage = () => {

  const [shouldSignUp, setSignUpStatus] = useState(false);

    const handleLogin = useCallback(
      async event => {
        event.preventDefault();
        const { email, password , } = event.target.elements;
        try {
          await app
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
        } catch (error) {
          alert(error);
        }
      }
    );
  

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
  else if (shouldSignUp){
    return <Redirect to="/signup" />
  }
  else {

  return (<div id="p-login-container">
      <div className="p-col-info">        
          <h1>Welcome to ToolBox App</h1>
          <p> This app should be your best friend your security and your BOSS ;) </p>
           <p>App Main Features are:</p>
            <p>Current weather (by open weather api).</p>
            <p>Alerts from Pikod Aoref.</p>
            <p>Save your spot and give you direction to get back to it.</p>
            <p>Show all near Parking Lots.</p>
            <p>Shared shopping list.</p>  
          <h6>Developed by GS-Dev </h6>
      </div>

      <div id="p-login">
        <h1>Log in</h1>
        <Form id="p-login-form" onSubmit={handleLogin}>
          <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
          </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password"  type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="flex-group" controlId="formBasicCheckbox">
              <Form.Label style={{visibility:'hidden'}}>
                Forgot password?
              </Form.Label> 
              <button variant="primary" onClick={()=> setSignUpStatus(true)} >SignUp</button>
            </Form.Group>
            <button variant="primary" type="submit">
              Submit
            </button>
        </Form>
      
        </div>
    </div>
  );
  }
};

export default withRouter(LoginPage);