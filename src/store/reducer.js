import { CHANGE_INPUT_VALUE, ADD_LIST, DELETE_LIST, INIT_LIST } from './action-types';

const defaultState = {
  inputValue: '',
  list: []
};

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      newState.inputValue = action.value;
      break;
    case ADD_LIST:
      newState.list.push(newState.inputValue);
      newState.inputValue = '';
      break;
    case DELETE_LIST:
      newState.list.splice(action.index, 1);
      break;
    case INIT_LIST:
      newState.list = action.list;
      break;
    default:
      break;
  }

  return newState;
};
