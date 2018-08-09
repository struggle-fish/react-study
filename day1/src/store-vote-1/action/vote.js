import * as TYPES from '../action-types';

let vote = {
  support () {
    // dispatch 派发的时候需要传递啥就返回啥
    return {
      type: TYPES.VOTE_SUPPORT
    }
  },
  against() {
    return {
      type: TYPES.VOTE_AGAINST
    }
  }
};

export default vote;