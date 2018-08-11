import * as TYPES from '../action-types';

let todo = {
  // 增加任务信息
  add(payload) {
    return {
      type: TYPES.TODO_ADD,
      payload: payload
    }
  },
  // 更新筛选类别
  filter(text) {
    return {
      type: TYPES.TODO_FILTER,
      text: text
    }
  },
  updateState(taskId, newState) {
    return {
      type: TYPES.TODO_UPDATE_STATE,
      taskId,
      newState
    }
  },
  // 删除任务
  remove(taskId) {
    return {
      type: TYPES.TODO_DELETE,
      taskId
    }
  }
};

export default todo;