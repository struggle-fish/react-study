/**
 *  封装方法，都是需要dispatch任务，修改状态之后执行的方法，方法返回的是当前派发任务时候传递的action
 * */ 
import * as TYPES from '../action-types';
let vote = {
  support() {
    return {
      type: TYPES.VOTE_SUPPORT
    }
  },
  against() {
    return {
      type: TYPES.VOTE_AGAINST
    }
  },
  init(initData = {} ) {
    return {
      type: TYPES.VOTE_INIT,
      ...initData
    }
  }
};

export default vote;

