import React from 'react';
import  app   from "../../utils/FirebaseConfig";
import { AuthContext } from "../../utils/Auth";
import { Redirect } from 'react-router';
import { useContext } from 'react';

const LandingPage = ({history}) => {
  
  const {currentUser} = useContext(AuthContext);
  alert(currentUser.toString());
  if (currentUser) {
    return <Redirect to="/shopping_page" />;
  }


  return (
    <>
      <h1>Welcome to Toolbox app</h1>
      <h3>you can chosse </h3>
      <button >Will go to shopping_page</button>

      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </>
  );
};

export default LandingPage;