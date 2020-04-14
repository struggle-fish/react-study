import React from 'react';
import { Route } from 'react-router-dom';
import App from './containers/App';
import Home from './containers/Home';
import Counter from './containers/Counter';
import Login from './containers/Login';
import Logout from './containers/Logout';
import Profile from './containers/Profile';
import NotFound from './containers/NotFound';

// export default (
//   <>
//     <Route path="/" exact component={Home}></Route>
//     <Route path="/counter"  component={Counter}></Route>
//   </>
// )

// 要渲染多级路由 react-router-config
export default [
  {
    path: '/',
    component: App,
    loadData: App.loadData,
    // 子路由
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        key: '/',
        loadData: Home.loadData // 加载数据，如果此配置项有这个数据，意味着加载异步数据
      },
      {
        path: '/counter',
        component: Counter,
        key: '/counter'
      },
      {
        path: '/login',
        component: Login,
        key: '/login'
      },
      {
        path: '/logout',
        component: Logout,
        key: '/logout'
      },
      {
        path: '/profile',
        component: Profile,
        key: '/profile'
      }, 
      {
        component: NotFound
      }
    ]
  }
]