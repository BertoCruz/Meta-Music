// import logo from './logo.svg';
import React, { Component } from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import { NavBar } from '../NavBar/NavBar';
import './App.css';

class App extends Component {

render() {
  return (
    <main>
      <NavBar></NavBar>
      <Switch>
        <Route>
          <MetaDescription />
        </Route>
      </Switch>
    </main>
  );
}
}

export default App;
