import * as Types from '../action-type';

function counter(state = {number: 0}, action) {

  switch(action.type) {
    case Types.INCREMENT:
      return { number: state.number + action.count }
  }

  return state;
}

export default counter;