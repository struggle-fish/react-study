// 函数式声明
// 1、函数返回结果是一个新的jsx
// 2、props 存储的是一个对象，包含了调取组件时候传递的属性值(不传递值是一个空对象)
import React from 'react';
export default function Dialog(props) {
  let { con, lx = 0, children } = props;
  let title = lx === 0 ? '系统其实': '系统警告';
  // children是闭合元素传递进来
  return (
    <div>
      {con}
      <h2>{title}</h2>
      {/* 外界传递进来子元素 */}
      {/* {children} */}
      {React.Children.map(children, item => item)}
    </div>
  )
}
