import * as types from './actionTypes';
import axios from 'axios';

const changeHomeData = data => ({
  type: types.CHANGE_HOME_DATA,
  topicList: data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList,
  writerList: data.writerList
});

const addList = list => ({
  type: types.ADD_ARTICLE_LSIT,
  list
});

// 记载首页数据的action
export const getHomeData = () => {
  return dispatch => {
    axios('/api/home.json').then(res => {
      const result = res.data;
      if (result.success) {
        dispatch(changeHomeData(result.data));
      }
    });
  };
};

export const getMoreList = () => {
  return dispatch => {
    axios('/api/homeList.json').then(res => {
      const result = res.data;
      if (result.success) {
        dispatch(addList(result.data));
      }
    });
  };
};

export const changeShowTop = show => ({
  type: types.SCROLL_TOP,
  show
});
