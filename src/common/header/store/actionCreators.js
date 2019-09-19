import * as types from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = data => ({
  type: types.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
  type: types.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: types.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: types.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: types.MOUSE_LEAVE
});

export const changePage = page => ({
  type: types.CHANGE_PAGE,
  page
});

export const getList = () => {
  return dispatch => {
    axios('/api/headerList.json').then(res => {
      const result = res.data;
      if (result.success) {
        dispatch(changeList(result.data));
      }
    });
  };
};
