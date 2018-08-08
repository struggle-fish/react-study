/**
 * vote 的 reducer
 * state 原始redux 管理的状态
 * action dispatch 派发的时候传递的对象
 * 
 */
import * as TYPES from '../action-types';
export default function vote(state = { n: 0, m: 0 }, action) {
  switch(action.type) {
    case TYPES.VOTE_SUPPORT: 
      state = {...state, n: state.n + 1};
      break;
    case TYPES.VOTE_AGAINST:
      state = {...state, m: state.m + 1}
  }
  return state;
}