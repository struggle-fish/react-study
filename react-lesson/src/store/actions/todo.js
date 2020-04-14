import * as Types from '../../store/action-type';

export default {
  addTodo(todo) {
    return { type: Types.ADD_TODO, todo }
  }
}