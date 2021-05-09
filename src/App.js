import { HashRouter,  Route, Switch } from 'react-router-dom';
import './App.css';

import { AuthProvider } from "./utils/Auth";

import LandingPage from "./pages/landing_page/LandingPage";
import LoginPage from './pages/login/LoginPage';
import ShoppingPage from './pages/shopping_list/ShoppingPage'
import SignUpPage from './pages/signup/SignUpPage';
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  return (
    <AuthProvider id="p-app-container">
      <HashRouter>
        <Switch>      
          <PrivateRoute exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/shopping_page" component={ShoppingPage}></Route>
        </Switch>
      </HashRouter>
      
    </AuthProvider>

  );
}

export default App;
