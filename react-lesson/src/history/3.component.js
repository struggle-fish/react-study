// 组件的特点和好处
// 方便复用，方便维护 和管理
// react中函数就是一个组件（组件名必须大写）和jsx元素，react元素来进行区分
// 大写是组件，小写就是jsx元素
import React from 'react';
import ReactDOM from 'react-dom';

// 组件的分类

// 没有状态，所以只能不停的刷
function Clock (props) {
  console.log(props, '++=');
  return (
    <h1>当前时间: {props.date.toLocaleString()}</h1>
  )
}

setInterval(() => {
  ReactDOM.render(<Clock date={new Date()}></Clock>, document.getElementById('root'));
}, 1000);
