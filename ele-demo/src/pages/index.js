/**
 * 页面路由
 */
import React, { Component, Fragment } from 'react';
import Loadable from 'react-loadable';
import { Switch, Route, Redirect } from 'react-router-dom';

import Loading from '../component/Lazy-Loading';

// 页面
const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading
});

// import Home from './Home';

export default () => (
  <Fragment>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/home' component={Home}></Route>
      <Redirect to='/?from=404'></Redirect>
    </Switch>
  </Fragment>
)