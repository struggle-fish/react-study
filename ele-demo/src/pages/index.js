/**
 * 页面路由
 */
import React from 'react';
import Loadable from 'react-loadable';
import { Switch, Route, Redirect } from 'react-router-dom';

import Loading from '../component/Lazy-Loading';

// 页面
const HomeView = Loadable({
  loader: () => import('./Home'),
  loading: Loading
});
// 发现
const CompassView = Loadable({
  loader: () => import('./Compass'),
  loading: Loading
});
// 订单
const OrderView = Loadable({
  loader: () => import('./Order'),
  loading: Loading
});

// 我的
const ProfileView = Loadable({
  loader: () => import('./Profile'),
  loading: Loading
});


// import Home from './Home';
export default () => (
  <React.Fragment>
    <Switch>
      <Route exact path='/' render={() => <Redirect to='/home'/>}></Route>
      <Route path='/home' component={HomeView}></Route>
      <Route path='/compass' component={CompassView}></Route>
      <Route path='/order' component={OrderView}></Route>
      <Route path='/profile' component={ProfileView}></Route>
      <Redirect to='/?from=404'></Redirect>
    </Switch>
  </React.Fragment>
)