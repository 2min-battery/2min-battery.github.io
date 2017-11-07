/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {
  APP_SET_DESCRIPTION_ID,
} from '../actions/const';

const initialState = {
  descriptionId: 0,
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {
    case APP_SET_DESCRIPTION_ID: {
      return {
        ...state,
        descriptionId: action.descriptionId,
      };
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
