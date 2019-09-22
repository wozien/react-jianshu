import axios from 'axios';
import * as types from './actionTypes';

const setDatail = data => ({
  type: types.SET_DETAIL,
  title: data.title,
  content: data.content
});

export const getDetail = id => {
  return dispatch => {
    axios.get('/api/detail.json?id=' + id).then(res => {
      const result = res.data;
      if (result.success) {
        dispatch(setDatail(result.data));
      }
    });
  };
};
