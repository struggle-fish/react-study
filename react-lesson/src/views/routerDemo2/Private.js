import React from 'react';
import { Route } from '../../history/react-router-dom'
export default function({ component: Component, ...rest }) {
  return <Route {...rest} render={(props) => {
    return localStorage.getItem('login') ? <Component {...props}></Component> : <div>没有登录</div>
  }}></Route>
}
