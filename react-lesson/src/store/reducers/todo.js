import * as Types from '../action-type';
function todo (state = [], action) {
  switch(action.type) {
    case Types.ADD_TODO :
      return [...state, action.todo]
  }
  return state;
}

export default todo;