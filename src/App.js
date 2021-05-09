import { HashRouter,  Route, Switch } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/login/LoginPage';
import ShoppingPage from './pages/shopping_list/ShoppingPage'


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={LoginPage}></Route>
          <Route exact path="/shopping_page" component={ShoppingPage}></Route>

        </Switch>
      </HashRouter>
      
    </div>

  );
}

export default App;
