import * as TYPES from '../action-types';
export default function personal (state = {
  title: '我是personal'
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
