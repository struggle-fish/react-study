import * as types from '../action-types';

// 初始状态
const initState = {
  isLogin: false,
  userInfo: {}
};

export const globalState = (state = initState, action) => {
  switch(action.type) {
    case types.UPDATE:
      return {
        ...state,
        ...action.payload
      }
    default: 
      return state
  }
};

export const globalUpdate = (params) => {
  return {
    payload: params,
    type: types.UPDATE
  }
};

