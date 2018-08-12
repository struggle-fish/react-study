import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import store from './store';

import Nav from './component/Nav';
import Home from './routes/Home';
import Custom from './routes/Custom';
import Plan from './routes/Plan';

import './static/css/bootstrap.css';
import './static/css/common.css';

ReactDOM.render(<Provider store={store}>
  <HashRouter>
    <div>
      {/* 头部 */}
      <Nav></Nav>
      {/* 根据hashrouter展示不同页面 */}
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/custom' component={Custom}></Route>
        <Route path='/plan' component={Plan}></Route>
        <Redirect to='/?lx=unsafe'></Redirect>
      </Switch>
    </div>
  </HashRouter>
</Provider>, window.root);
