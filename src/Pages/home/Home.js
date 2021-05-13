import './Home.css';
import  app   from "../../utils/FirebaseConfig";
import { AuthContext } from "../../utils/Auth";
import { Redirect } from 'react-router';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import NavBarComp from '../../components/NavBarComp';

/**
 * Created by Gal Shimron on 9/05/2021.
 * 
 * Home class is the Application Landing page.
 * @param {*} param0 
 */

const Home = ({history}) => {
  const {currentUser} = useContext(AuthContext);

  if (typeof currentUser ==='undefined') {
    return <Redirect to="/shopping_list" />;
  }
  return (
    <div className="navbar-container">
      <NavBarComp />

      <Button onClick={() => app.auth().signOut()}>Sign out</Button>
    </div>
  );
};

export default Home;