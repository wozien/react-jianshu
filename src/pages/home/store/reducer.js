import { fromJS } from 'immutable';
import * as types from './actionTypes';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  showTop: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
      });
    case types.ADD_ARTICLE_LSIT:
      const newList = state.get('articleList').concat(fromJS(action.list));
      return state.set('articleList', newList);
    case types.SCROLL_TOP:
      return state.set('showTop', action.show);
    default:
      return state;
  }
};
