import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import A from './component/Router-demo/A';
import B from './component/Router-demo/B';
import C from './component/Router-demo/C';

ReactDOM.render(<HashRouter>
  <Switch>
    <Route path='/'  exact component={A}></Route>
    <Route path='/user' component={B}></Route>
    <Route path='/pay' render={() => {
      // 一般在render中处理权限校验
      let flag = localStorage.getItem('FLAG');
      if (flag && flag === 'SAFE') {
        return <C></C>;
      }
      return '对不起~';
    }}></Route>
    {/* 上述都匹配完成后，以上都不符合情况 */}
    {/* <Route render={() => {
      return <div>404~</div>
    }}></Route> */}
    {/* 重定向 */}
    {/* <Redirect to='/'></Redirect> */}
    <Redirect to={{
      pathname: '/',
      search: '?lx=404'
    }}></Redirect>
  </Switch>
</HashRouter>, window.root);
