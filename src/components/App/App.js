// import logo from './logo.svg';
import React, { Component } from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import { HomePage } from '../HomePage/HomePage';
import { NavBar } from '../NavBar/NavBar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mbcid: "",
      favorites: []
    }
  }



  render() {
    return (
      <div className='app'>
        <NavBar />
        <main>
          <HomePage />

          {/* <Switch>
            <Route>
              <MetaDescription /> 
            </Route>
          </Switch> */}
        </main>
      </div>
    );
  }
}

export default App;
