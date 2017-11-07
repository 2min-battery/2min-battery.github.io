import { APP_SET_DESCRIPTION_ID } from './const';

function action(descriptionId) {
  return { type: APP_SET_DESCRIPTION_ID, descriptionId };
}

module.exports = action;
