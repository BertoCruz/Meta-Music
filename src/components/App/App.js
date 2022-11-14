// import logo from './logo.svg';
import React, { Component } from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import { HomePage } from '../HomePage/HomePage';
import { NavBar } from '../NavBar/NavBar';
import './App.css';
import { fetchLookUp } from '../../api-calls';


class App extends Component {
  constructor() {
    super();
    this.state = {
      artistID: "",
      favorites: []
      
    }
  }

  handleArtistID = ( mbid ) => {
    // this.setState({artistID: mbid})
    fetchLookUp("artist", mbid)
    .then(data => {
      console.log(data)
    })
  }

  componentDidMount() {
    if (this.state.artistID) {

    }
  }

  render() {
    return (
      <div className='app'>
        <NavBar />
        <main>
          <HomePage handleArtistID={this.handleArtistID}/>

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
