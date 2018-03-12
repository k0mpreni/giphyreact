import { connect } from "react-redux";
import { toggleFavs } from "../actions";
import Results from "../components/Results";

const mapStateToProps = state => {
  return {
    favorites: state.favorites
  };
};

const mapDispatchToProps = { toggleFavorites: toggleFavs };

const ResultsGifs = connect(mapStateToProps, mapDispatchToProps)(Results);

export default ResultsGifs;
