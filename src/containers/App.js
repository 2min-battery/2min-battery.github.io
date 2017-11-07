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
import ReactGA from 'react-ga';
import {
  appSetDescriptionId,
} from '../actions/';
import Main from '../components/App';

const generateUuid = () => {
  // https://github.com/GoogleChrome/chrome-platform-analytics/blob/master/src/internal/identifier.js
  // const FORMAT: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
  for (let i = 0, len = chars.length; i < len; i++) {
      switch (chars[i]) {
          case "x":
              chars[i] = Math.floor(Math.random() * 16).toString(16);
              break;
          case "y":
              chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
              break;
      }
  }
  return chars.join("");
}


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

      const cookie = document.cookie;
      const keyValues = cookie.split(';').map(str => str.split('='));
      const userIdObj = keyValues.find(kvp => kvp[0] == 'userId');
      const userId = userIdObj || generateUuid();
      document.cookie = `userId=${userId}`;

      console.log(`[componentWillMount] userId: ${userId}`);

      ReactGA.set({
        userId
      });
    },
    onViewInScreen: (viewName) => {
      console.log(`[onViewInScreen] ${viewName}`);
      ReactGA.pageview(viewName);
    },
    onNextClicked: (buttonName) => {
      console.log(`[onNextClicked] ${buttonName}`);
      ReactGA.event({
        category: 'User',
        action: 'Clicked Next Button',
        label: buttonName,
      });
    },
    onSnsClicked: (snsName) => {
      console.log(`[onSnsClicked] ${snsName}`);
      ReactGA.event({
        category: 'Social',
        action: 'Clicked Link to SNS',
        label: snsName,
      });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
