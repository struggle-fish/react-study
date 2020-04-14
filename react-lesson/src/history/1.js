// 导入的React 名字必须是大写
// import React from 'react';
// import { render } from 'react-dom';
// jsx 语法 javascript + html

let React = {
  createElement(type, props, ...children) {
    console.log(type, '0000');
    return {
      type, // 标签
      props, // 属性
      children // 其他
    }
  }
}

let render = (vnode, container) => {
  if (typeof vnode === 'string') {
    return container.appendChild(document.createTextNode(vnode));
  }
  let { type, props, children } = vnode;
  let ele = document.createElement(type);
  for (let key in props) {
    ele.setAttribute(key, props[key]);
  }
  children.forEach((child) => {
    render(child, ele); // 递归调用
  });
  container.appendChild(ele);
}


let Hview = <h1 id="hello">hello word<span className='spanName'>我是span</span></h1> // 会被编译成React.createElement
console.log(Hview, '+++222');
// jsx => React.createElement => vnode(对象，对象可以描述当前元素) => 渲染到页面上(render)
render(<h1>哈哈</h1>, window.root);
