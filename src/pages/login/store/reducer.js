import { fromJS } from 'immutable';
import * as types from './actionTypes';

const defaultState = fromJS({
  loginStatus: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return state.set('loginStatus', true);
    case types.LOG_OUT:
      return state.set('loginStatus', false);
    default:
      return state;
  }
};
