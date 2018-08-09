/**
 *  如果redux中原有值不存在，设置默认值
 * */ 
import * as TYPES from '../action-types';
export default function vote (state = {
  title: '我是标题',
  n: 0,
  m: 0
}, action) {
  switch(action.type) {
    case TYPES.VOTE_SUPPORT: 
      state = {...state, n: state.n + 1};
    break;
    case TYPES.VOTE_AGAINST:
      state = {...state, m: state.m + 1};
    break;
    case TYPES.VOTE_INIT :
      delete action.type;
      state = {...state, ...action}
    //  for (let attr in action) {
    //    if (action.hasOwnProperty(attr)) {
    //      if (attr === 'type') continue;
    //      state[attr] = action[attr]
    //    }
    //  }
    break;
  }
  return state;
}
