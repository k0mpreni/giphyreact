import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import "./App.css";

import Search from "./components/Search";
//import Results from "./components/Results";
import ResultsNumber from "./components/Results/ResultsNumber";
import Error from "./components/Error";
import NoMatch from "./components/UI/NoMatch/NoMatch";
import Home from "./components/UI/Home/Home";
//import favoritesUtils from "./Utilities/favoritesUtils";
import Header from "./components/Header";
import ResultsGifs from "./container/ResultsGifs";

const giphUrl = `http://api.giphy.com/v1/gifs/search?q`;
const apiKey = `vw4usscjAkDQiPbUvnGdRJfpEUWqZsuY`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      gifs: [],
      error: false,
      loading: false
      /* favorites: [] */
    };
  }
  componentDidMount(event) {
    /* this.setState({
      favorites: favoritesUtils.loadFavorites()
    }); */
    /* if (this.props.history.location.pathname === "/favorited") {
      this.handleFavorited();
    } */
    if (this.props.location.search) {
      this.handleSearchSubmit(this.props.location.search);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.location.search &&
      nextProps.location.search !== this.props.location.search
    ) {
      this.handleSearchSubmit(nextProps.location.search);
    }
  }

  handleSearchSubmit(search) {
    const queryParams = new URLSearchParams(search);
    const searchedText = queryParams.get("q");
    this.setState({ value: searchedText });
    this.handleSubmit(null, searchedText);
  }

  handleSubmit = (event, value) => {
    if (event) {
      event.preventDefault();
    }
    fetch(`${giphUrl}=${value}&api_key=${apiKey}`)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject({ status: response.status });
      })
      .then(data => {
        const recievedData = data.data;
        this.setState({ gifs: recievedData });
      })
      .catch(error => {
        this.setState({ error: true });
        this.props.history.push("/error");
      });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  /* handleFavorited = () => {
    const gifStored = JSON.parse(localStorage.getItem("gifs"));
    if (gifStored !== null) {
      this.setState({ gifs: gifStored });
    }
  }; */

  /* handleToggleFavorite = favorite => {
    const { favorites } = this.state;
    const isFavorite = favorites.find(fav => fav.id === favorite.id);
    let nextFavorites;
    if (isFavorite) {
      // remove favorite
      nextFavorites = favorites.filter(fav => fav.id !== favorite.id);
    } else {
      // add favorite
      nextFavorites = [...favorites, favorite];
    }
    favoritesUtils.saveFavorites(nextFavorites);
    this.setState({ favorites: nextFavorites });
  }; */

  render() {
    //const { favorites } = this.state;
    return (
      <div className="App">
        <Header favClicked={this.handleFavorited} />
        <Search
          value={this.state.value}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/favorited"
            render={() => (
              <ResultsGifs
                resultType="favorites"
                onToggleFavorite={this.handleToggleFavorite}
              />
            )}
          />
          <Route
            exact
            path={`/search/`}
            render={() => (
              <React.Fragment>
                <ResultsNumber number={this.state.gifs.length} />
                <ResultsGifs
                  resultType="search"
                  searchResults={this.state.gifs}
                  onToggleFavorite={this.handleToggleFavorite}
                />
              </React.Fragment>
            )}
          />
          <Route exact path={"/error"} component={Error} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
