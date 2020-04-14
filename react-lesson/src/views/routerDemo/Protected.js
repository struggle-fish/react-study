// 受保护的路由
// 函数组件
import React from 'react'
import { Route, Redirect } from 'react-router-dom';
// 如果登录就渲染这个组件
export default function ({ component: Component, ...rest}) {
  return <Route {...rest} render={(props) => {
    return localStorage.getItem('login') ? <Component {...props}></Component> : <Redirect to="/login"></Redirect>
  }}></Route>
}
