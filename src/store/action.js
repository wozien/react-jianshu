import { CHANGE_INPUT_VALUE, ADD_LIST, DELETE_LIST, INIT_LIST } from './action-types';
import axios from 'axios';

export function changInputAction(value) {
  return {
    type: CHANGE_INPUT_VALUE,
    value
  };
}

export function addListAction() {
  return { type: ADD_LIST };
}

export function deleteListAction(index) {
  return { type: DELETE_LIST, index };
}

export function initListAction(list) {
  return { type: INIT_LIST, list };
}

export function getListData() {
  return dispatch => {
    axios.get('/list.json').then(res => {
      const action = initListAction(res.data);
      dispatch(action);
    });
  };
}
