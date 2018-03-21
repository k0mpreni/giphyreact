import { connect } from "react-redux";
import { toggleFavs } from "../actions";
import { withRouter } from 'react-router-dom';
import Results from "../components/Results";

const mapStateToProps = state => {
  return {
    favorites: state.favorites,
    searchResults: state.search.results
  };
};

const mapDispatchToProps = { toggleFavorites: toggleFavs };

const ResultsGifs = withRouter(connect(mapStateToProps, mapDispatchToProps)(Results));

export default ResultsGifs;
