// 负责初始化获取数据，是一个纯函数
import { CHANGE_LIST } from './constants';
const defaultState = {
  newsList: [],
  name: 'homereducer'
};


export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_LIST :
      return {
        ...state,
        newsList: action.list
      }
    default: 
      return state;
  }
};

