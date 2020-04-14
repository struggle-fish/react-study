import React from 'react';
import ReactDOM from 'react-dom';

// jsx 是可以包含js语法的，与html的写法还是有一些区别的
// 1）如果渲染两个相邻的jsx元素，需要被外面的一个标签包裹<></>
// 2) 行内样式的写法,jsx为了识别是html还是js需要 < { 来区分
// 3）{}表示的是写js 三元表达式，取值，（只要内容有返回值就可以显示）
// 4) 属性名有变化， htmlFor  className
// 5) v-html 
// 6) 列表对渲染 map 有返回值 数组可以直接渲染到页面上

let fn = function () {
  return (
    <span>你好</span>
  )
}
let imgStr = `<img src='http://img4.imgtn.bdimg.com/it/u=3062529017,2248824777&fm=26&gp=0.jpg'>`
let arr = ['吃饭', '喝水'];
let newArr = arr.map((item, key) => <li key={key}>{item}</li>);
let ele = (
  <>
    <h1>标题</h1>
    <p style={{ color: 'red' }}>内容</p>
    {fn()}<br/>
    {/* 对象 */}
    {JSON.stringify({name: '江小鱼'})}
    <label htmlFor='username' className='label'>用户名</label>
    <input type='text' id='username'></input>
    <div dangerouslySetInnerHTML={{__html: imgStr}}></div>
    {newArr}
  </>
)

ReactDOM.render(ele, window.root);