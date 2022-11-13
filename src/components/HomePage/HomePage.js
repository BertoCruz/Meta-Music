import React, { Component } from "react";
import "./HomePage.css";

export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      bandArtist: "",
      album: "",
      track: "",
      label: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitSearch = (event) => {
    event.preventDefault();
    console.log(this.state)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({bandArtist: "", album: "", track: "", label: ""})
  }

  render() {
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
              name="bandArtist"
              value={this.state.bandArtist}
              onChange={(event) => this.handleChange(event)}
            />
            <input
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
            />
            <button onClick={(event) => this.submitSearch(event)}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
