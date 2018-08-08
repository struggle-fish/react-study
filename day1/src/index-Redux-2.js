import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Vote from './component/Vote-Redux-2/Vote';

import './static/css/bootstrap.css';

// 创建容器 传递 reducer
let reducer = (state = {n: 0, m: 0}, action) => {
  // 用来记录信息（根据行为标识走不同的修改任务） 、 修改状态
  // state 容器中原有的状态信息（如果第一次没有，给默认值）
  // action  dispatch 任务派发的时候传递的行为对象（必须有一个type属性，操作行为标识，reducer根据这个标识来识别如何修改状态信息）
  let {type} = action;
  switch (type) {
    case 'VOTE_SUPPORT':
      state = {...state, n: state.n + 1};
    break;
    case 'VOTE_AGAINST':
      state = {...state, m: state.m + 1};
    break;
  }
  return state; // 只有返回最新的state,原有的才会被修改
}
let store = createStore(reducer);
/**
 *  store 中提供三个方法
 *    dispatch: 派发行为（传递一个对象，对象中有一个type）通知reducer修改状态信息
 *    subscribe: 事件池追加方法
 *    getState: 获取最新状态信息
*/  

ReactDOM.render(<div>
  <Vote title='哈哈哈' count={{n: 90, m: 80}} store={store}></Vote>
</div>,window.root);