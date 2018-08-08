import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Vote from './component/Vote-Redux/Vote';

import './static/css/bootstrap.css';

// => 全局下挂载一个容器，实现信心共享
;(function () {
  let stateObj = {};
  let listenAry = [];

  function updateState (callBack) {
    // 回调函数中一定是修改并且返回最新状态信息的, 用返回的状态信息替换原有的信息
    let newObj = callBack(stateObj);
    stateObj = {...stateObj, ...newObj};
    // 通知计划表中的方法执行
    listenAry.forEach(item => {
      if(typeof item === 'function') {
        item();
      }
    })
  }
  function getState() {
    return stateObj;
  }
  function subscribe(fn) {
    for(let i = 0; i < listenAry.length; i++) {
      let item = listenAry[i];
      if (item === fn) {
        return;
      }
    }
    listenAry.push(fn);
  }
  window.myRedux = {
    updateState,
    getState,
    subscribe
  }
})();




ReactDOM.render(<div>
  <Vote title='哈哈哈' count={{n: 90, m: 80}}></Vote>
</div>,window.root);