import './App.css';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import {createBrowserHistory} from "history";
import Pizza from "./Components/Pizza.jsx";
import Ingredients from "./Components/Ingredients.jsx";
import Calzone from "./Components/Calzone.jsx";
import Title from "./Components/Title.jsx";
import NotFound from './Components/NotFound';
import Order from './Components/Order';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Title}></Route>
          <Route path="/order" component={Order}></Route>
          <Route path="/order/pizza" component={Pizza}></Route>
          <Route path="/order/calzone" component={Calzone}></Route>
          <Route path="/ingredients" component={Ingredients}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
