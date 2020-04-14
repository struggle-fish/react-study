import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect, Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Home from '../views/routerDemo/Home';
import User from '../views/routerDemo/User';
import Profile from '../views/routerDemo/Profile';
import Login from '../views/routerDemo/Login';
import Protected from '../views/routerDemo/Protected';
import MenuLink from '../views/routerDemo/MenuLink';
class App extends React.Component {

  render () {
    return (
      <Router>
        <div>
          <div className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand">管理中心</a>
              </div>
              <ul className="navbar-nav nav">
                {/* <li>
                  <NavLink to="/" exact={true}>首页</NavLink>
                </li>
                <li>
                  <NavLink to="/profile">个人中心</NavLink>
                </li>
                <li>
                  <NavLink to="/user">我的</NavLink>
                </li> */}
                <MenuLink to="/" exact={true}>首页</MenuLink>
                <MenuLink to="/profile" exact={true}>个人中心</MenuLink>
                <MenuLink to="/user" exact={true}>我的</MenuLink>
                <MenuLink to="/login" exact={true}>登录</MenuLink>
              </ul>
            </div>
          </div>
          <div className="container">
            {/* switch组件匹配到一个后就不会再匹配了 */}
            <Switch>
              <Route path="/" exact={true} component={Home}></Route>
              <Protected path="/profile" exact={true} component={Profile}></Protected>
              {/* 默认需要先匹配到一级才能匹配二级  */}
              <Route path="/user" component={User}></Route>
              <Route path="/login" component={Login}></Route>
              <Redirect to="/" ></Redirect>
            </Switch>

          </div>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App></App>, window.root);