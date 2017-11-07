/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  appSetDescriptionId,
} from '../actions/';
import Main from '../components/App';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    return <Main {...this.props} />;
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.shape({
    appSetDescriptionId: PropTypes.func.isRequired,
  }),
  app: PropTypes.shape({})
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  return {
    descriptionId: state.app.descriptionId,
  };
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    appSetDescriptionId,
  };

  return {
    componentWillMount: () => {
      const descriptionId = Math.floor(Math.random() * 2.0);
      dispatch(appSetDescriptionId(descriptionId));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
