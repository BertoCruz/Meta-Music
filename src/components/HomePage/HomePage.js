import React, { Component } from "react";
import { countryCodes } from "../../Data/CountryCodes";
import "./HomePage.css";
import { fetchSearch } from "../../api-calls";

export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      artist: "",
      // album: "",
      // track: "",
      // label: "",
      country: "",
      searchResult: []
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitSearch = (event) => {
    event.preventDefault();
    const convertToQuery = this.state.artist.split(" ").join("+")

    fetchSearch(this.state.artist, this.state.country)
    .then(data => {
      if (data.artists.length > 1) {
        this.setState({searchResult: data.artists})
      } else { 
        this.props.handleArtistID(data.artists[0].id)
      }
      this.clearInputs();
    })
  };

  clearInputs = () => {
    this.setState({ artist: "", country: "" });
  };

  render() {
    const countryOptions = countryCodes.map((country, index) => {
      return ( <option value={country.Code} key={index}>{country.Name}</option>)
    })

    return (
      <div className="home-container">
        <div className="description-search-container">
          <section className="meta-music-description">
            <h2>Meta Music</h2>
            <p>
              catered to the music and music metadata enthusiast, this site offers a deep dive into
              the music you listen to everyday. Using the MusicBrainz encyclopedia, search any
              artist, album, track, or label, and you will get a readable copy and paste set of
              metadata information. A single search of any of these fields, or all will populate
              your music search, enjoy!
            </p>
          </section>
          <form className="meta-search">
            <input
              type="text"
              placeholder="Artist, band or group"
              name="artist"
              value={this.state.artist}
              onChange={(event) => this.handleChange(event)}
            />
            <select
              className="selector"
              name="country"
              value={this.state.country}
              onChange={(event) => this.handleChange(event)}
            >
              <option value="">Country of origin</option>
              {countryOptions}
            </select>
            {/* <input
              type="text"
              placeholder="Album"
              name="album"
              value={this.state.album}
              onChange={(event) => this.handleChange(event)}
            />
            <input
              type="text"
              placeholder="Track"
              name="track"
              value={this.state.track}
              onChange={(event) => this.handleChange(event)}
            />
            <input
              type="text"
              placeholder="Label"
              name="label"
              value={this.state.label}
              onChange={(event) => this.handleChange(event)}
            /> */}
            <button onClick={(event) => this.submitSearch(event)}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
