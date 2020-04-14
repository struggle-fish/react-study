import { createStore } from 'redux';
import reducer from './reducer';
// import reduxThunk from 'redux-thunk';
// import reduxLogger from 'redux-logger';
// import reduxPromise from 'redux-promise';
// import { applyMiddleware } from 'redux';

// let store = createStore(reducer);


// 1） 最后返回的是真正的dispatch方法
let reduxLogger = (store) => (dispatch) => (action) => {
  console.log(store.getState());
  dispatch(action);
  console.log(store.getState());
}

// 2）redux-thunk 实现异步
let reduxThunk = (store) => (dispatch) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, store.getState);
  }
  return dispatch(action);
}
// 3) redux-promise
let reduxPromise = (store) => (dispatch) => (action) => {
  if (action.then && typeof action.then === 'function') {
    // let dispatch = (action) => {
    //   state = reducer(state, action);
    // }
    // 如果返回的是promise 不会处理失败逻辑
    return action.then(dispatch);
  }
  if (action.payload && action.payload.then && typeof action.payload === 'function') {
    action.payload.then(function (data) {
      action.payload = data;
      dispatch(action);
    }, function(err){
      action.payload = err;
      dispatch(action);
      return Promise.reject(err);
    });
  }
  return dispatch(action);
}

// applyMiddleware 会自动执行reduxLogger的前两个函数，把最终的函数替换掉原有的dispatch方法
let applyMiddleware = (middleware) => (createStroe) => (reducer) => {
  let store = createStroe(reducer);
  let middle = middleware(store);
  let dispatch = middle(store.dispatch);
  return {
    ...store,
    dispatch
  }
}


// let store = applyMiddleware(reduxLogger)(createStore)(reducer);
// let store = applyMiddleware(reduxThunk)(createStore)(reducer);
let store = applyMiddleware(reduxPromise)(createStore)(reducer);

// // 添加日志
// let oldDispatch = store.dispatch;
// // 中间件的作用，就是在dispatch中间更改内容
// store.dispatch = function (action) {
//   console.log(store.getState())
//   oldDispatch(action);
//   console.log(store.getState());
// }

// 把多个中间件进行组合 - 洋葱模型


export default store;