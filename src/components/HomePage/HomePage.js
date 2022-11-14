import React, { Component } from "react";
import { countryCodes } from "../../Data/CountryCodes";
import "./HomePage.css";
import { fetchSearch } from "../../api-calls";
import { artistData } from "../../Data/mockArtistDataset";

export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      artist: "",
      country: "",
      searchResult: [],
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitSearch = (event) => {
    event.preventDefault();
    const convertToQuery = this.state.artist.split(" ").join("+");

    fetchSearch(this.state.artist, this.state.country).then((data) => {
      if (data.artists.length > 1) {
        this.setState({ searchResult: data.artists });
      } else {
        this.props.handleArtistID(data.artists[0].id);
      }
      this.clearInputs();
    });
  };

  clearInputs = () => {
    this.setState({ artist: "", country: "" });
  };

  createArtistsList = () => {
    const listedArtists = this.state.searchResult.map((artist, index) => {
      if (artist.score >= 70 && artist["life-span"].begin) {
        return (
          <li key={index} onClick={() => this.props.handleArtistID(artist.id)}>
            {artist.name}: from {artist["life-span"].begin} -{" "}
            {artist["life-span"].end ? artist["life-span"].end : "present"}
          </li>
        );
      }
    });
    console.log(this.state.searchResult);
    return listedArtists;
  };

  render() {
    const countryOptions = countryCodes.map((country, index) => {
      return (
        <option value={country.Code} key={index}>
          {country.Name}
        </option>
      );
    });

    // console.log(artistData)

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
            <button onClick={(event) => this.submitSearch(event)}>Submit</button>
            {this.state.searchResult.length > 0 && (
              <div className="suggestion-container">
                <p>Which one?</p>
                <div className="artists-suggestions">
                  {this.createArtistsList()}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
}
