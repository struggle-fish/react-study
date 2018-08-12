import * as TYPES from '../action-types';

let custom = {
  // 增加用户信息
  // create(payload) {
  //   // => thunk 中间件语法
  //   return dispatch => {
  //     setTimeout(() => {
  //       dispatch({
  //         type: TYPES.CUSTOM_CREATE,
  //         payload
  //       });
  //     }, 3000);
  //   }
  // }
  // promise 中间件
  create(payload) {
    return {
      type: TYPES.CUSTOM_CREATE,
      payload: new Promise(resolve => {
        setTimeout(() => {
          resolve(payload);
        }, 3000)
      })
    }
  }
};

export default custom;