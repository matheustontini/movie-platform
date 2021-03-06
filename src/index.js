import React from "react";
import ReactDOM from "react-dom";
import Section from "./components/Section/Section.jsx";
import Description from "./components/Description/Description.jsx";
import Player from "./components/Player/Player.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Search from "./components/Search/Search.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";
import "./index.html";

class App extends React.Component {
  state = {
    movies: [],
    series: [],
    family: [],
    documentary: [],
    search: [],
    textSearch: "",
    key: "4b913b0b00e4cfdbd1de24b4bb793642",
    page: "list",
    lastPage: "",
    movieDetails: [],
    image_player: "",
    title_player: "",
    current_type: "",
    current_id: ""
  };

  componentDidMount() {
    // Request the data from TMDB API (movies, series, family and documentary)
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        this.state.key
      }&language=en-US&page=1`
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          movies: json.results
        });
      });
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${
        this.state.key
      }&language=en-US&page=1`
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          series: json.results
        });
      });
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        this.state.key
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=10751`
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          family: json.results
        });
      });
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        this.state.key
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=99`
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          documentary: json.results
        });
      });
  }

  showDescription = (id, type) => {
    // Show the movie/serie description
    // Check if is movie or TV to request the correct URL API
    fetch(
      `https://api.themoviedb.org/3/${type ? type : this.state.current_type}/${
        id ? id : this.state.current_id
      }?api_key=${this.state.key}`
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          movieDetails: json,
          lastPage: this.state.page,
          page: "description",
          current_id: id,
          current_type: type
        });
      });
  };

  showList = () => {
    // Show the homepage list (standart)
    this.setState({
      page: "list"
    });
  };

  showPlayer = (img, title) => {
    // Show the video player with the image and the title
    this.setState({
      page: "player",
      image_player: img,
      title_player: title
    });
  };

  showSearch = e => {
    // Search when the user press ENTER
    const search = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;

    if (keyCode === ENTER) {
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${
          this.state.key
        }&language=en-US&query=${search}&page=1&include_adult=false`
      )
        .then(resp => resp.json())
        .then(json => {
          this.setState({
            search: json.results,
            page: "search",
            textSearch: search
          });
        });
    }
  };

  handleBack = () => {
    //Check if the last page was the player, if it was the player, the back button go to the list (homepage)
    this.setState({
      page: this.state.lastPage === "player" ? "list" : this.state.lastPage
    });
  };

  render() {
    if (this.state.page === "list") {
      return (
        <>
          <Navbar showSearch={this.showSearch} showList={this.showList} />
          <Section
            title="Popular movies"
            data={this.state.movies}
            showDescription={this.showDescription}
            type="movie"
          />
          <Section
            title="Popular TV series"
            data={this.state.series}
            showDescription={this.showDescription}
            type="tv"
          />
          <Section
            title="Family"
            data={this.state.family}
            showDescription={this.showDescription}
            type="movie"
          />
          <Section
            title="Documentary"
            data={this.state.documentary}
            showDescription={this.showDescription}
            type="movie"
          />
        </>
      );
    } else if (this.state.page === "description") {
      return (
        <>
          <Navbar showSearch={this.showSearch} showList={this.showList} />
          <Description
            data={this.state.movieDetails}
            handleBack={this.handleBack}
            showPlayer={this.showPlayer}
          />
        </>
      );
    } else if (this.state.page === "player") {
      return (
        <Player
          title={this.state.title_player}
          image={this.state.image_player}
          showDescription={this.showDescription}
        />
      );
    } else {
      return (
        <>
          <Navbar showSearch={this.showSearch} showList={this.showList} />
          <Search
            data={this.state.search}
            showDescription={this.showDescription}
            text={this.state.textSearch}
          />
        </>
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
