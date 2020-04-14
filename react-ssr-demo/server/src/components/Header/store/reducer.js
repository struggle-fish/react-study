import { CHANGE_LOGIN } from './constants';
// 纯函数
const defaultState = {
  login: false
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_LOGIN :
      return {
        ...state,
        // login: false
        login: action.value
      };
    default:
      return state;
  }
}