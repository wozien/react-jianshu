import { combineReducers } from 'redux-immutable';
import { reducer as HeaderReducer } from '../component/header/store';

const reducer = combineReducers({
  header: HeaderReducer
});

export default reducer;
