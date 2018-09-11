import * as types from '../action-types';

// 定义初始化数据，通过action更改state 然后返回一个新的state
const initState = {
  init: false,
  locationInfo: {}, // 定位信息
  entryData: [] // 浮球数据
};

export default function (state = initState, action) {
  switch(action.type) {
    case types.HOME_UPDATE :
      return {
        ...state,
        ...action.payload
      };
    default:
      return state; // 返回新的 state
  }
};