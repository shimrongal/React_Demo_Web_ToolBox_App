import './LoginPage.css';
import 'bootstrap/dist/css/bootstrap.css';

import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import  app   from "../../utils/FirebaseConfig";
import {AuthContext} from "../../utils/Auth";
import { Button, Form } from 'react-bootstrap';
/**
 * Login page 
 *   *** This class will use Firebase auth
 * 
 * TODO:
 *  1. Handle forget password
 *  2. Set nice fonts,
 *  3. Design the title 
 **/



const LoginPage = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password , } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div id="p-login">
      <h1>Log in</h1>
      <Form onSubmit={handleLogin}>
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
            <Form.Label>
              Forgot password?
            </Form.Label> 
            <Button variant="primary" onClick={()=> history.push("/signup") } >SignUp</Button>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
     

    </div>
  );
};

export default withRouter(LoginPage);