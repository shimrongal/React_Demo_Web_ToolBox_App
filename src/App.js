import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="LoginPage">Login</Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
