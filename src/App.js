
import React from 'react';
import { Switch, Redirect, Route, BrowserRouter } from "react-router-dom";

import './assets/styles/base.css';

import Header from './components/Header';
import Footer from './components/Footer';

//route
import Routes from './Routes';
import Login from './components/login/index';
import Password from './components/password/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Routes} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signUp" component={Password} />
            <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
