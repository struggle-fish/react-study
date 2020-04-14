import * as Types from '../action-types'
export default {
  add (value) {
    return {type: Types.INCREMENT, v: value}
  },
  // redux-thunk 方式 会判断， 让返回的函数执行，并且把dispatch的权限给用户
  // add (value) {
  //   return (dispatch, getState) => {
  //     setTimeout(() => {
  //       dispatch({type: Types.INCREMENT, v: value});
  //     }, 1000);
  //   }
  // },
  // minus (value) {
  //   return {type: Types.DECREMENT, v: value}
  // }
  // redux-promise 方式
  minus (value) {
    return {
      type: Types.DECREMENT,
      payload: new Promise((resolve, reject)=>{
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve(100);
          } else {
            reject(200);
          }
        }, 1000);
      })
    }
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({type: Types.DECREMENT, v: value});
    //   }, 2000);
    // });
  }
}