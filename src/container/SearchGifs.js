import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeValue, getGifs } from '../actions';
import Search from '../components/Search';

const mapStateToProps = state => {
  return {
    search: state.search,
    value: state.search.value,
    results: state.search.results
  };
};
const mapDispatchToProps = { getGifs, changeValue };

const SearchGifs = withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));

export default SearchGifs;
