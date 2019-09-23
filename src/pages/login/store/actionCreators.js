import axios from 'axios';
import * as types from './actionTypes';

const setLogin = () => ({
  type: types.LOG_IN,
  status: true
});

export const logout = () => ({
  type: types.LOG_OUT,
  status: false
});

export const login = (username, password) => {
  return dispatch => {
    axios.get(`/api/login.json?username=${username}&password=${password}`).then(res => {
      const result = res.data;
      if (result.success) {
        dispatch(setLogin());
      } else {
        alert('登录失败');
      }
    });
  };
};
