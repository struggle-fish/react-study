import * as TYPES from '../action-types';

export default function custom(state = {
  data: [
    {
      id: 1,
      name: '江小鱼儿~'
    }
  ]
}, action) {
  state = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case TYPES.CUSTOM_CREATE:
      let {payload} = action;
      state.data.push(payload);
    break;
  }
  return state;
}