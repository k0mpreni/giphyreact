import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Error from './Error';
import NoMatch from './UI/NoMatch/NoMatch';
import Home from './UI/Home/Home';
import Header from './Header';
import ResultsGifs from '../container/ResultsGifs';
import SearchGifs from '../container/SearchGifs';

const getValueFromQuerySearchParams = search => {
  const queryParams = new URLSearchParams(search);
  return queryParams.get('q');
};

class App extends Component {
  componentDidMount(event) {
    if (this.props.location.search) {
      const value = getValueFromQuerySearchParams(this.props.location.search);
      this.props.changeValue(value);
      this.props.getGifs(value);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.location.search &&
      nextProps.location.search !== this.props.location.search
    ) {
      const value = getValueFromQuerySearchParams(nextProps.location.search);
      this.props.changeValue(value);
      this.props.getGifs(value);
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchGifs />
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
            path={`/search`}
            render={() => (
              <React.Fragment>
                {/* <ResultsNumber number={this.props.search.results.length} /> */}
                <ResultsGifs
                  resultType="search"
                  searchResults={this.results}
                  onToggleFavorite={this.handleToggleFavorite}
                />
              </React.Fragment>
            )}
          />
          <Route exact path={'/error'} component={Error} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
