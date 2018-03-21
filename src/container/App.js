import { connect } from 'react-redux';
import App from '../components/App';
import { withRouter } from 'react-router-dom';
import { getGifs, changeValue } from '../actions';

const mapStateToProps = state => {
  return {
      value: state.search.value
  };
};

const mapDispatchToProps = { getGifs, changeValue };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));