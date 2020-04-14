
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch, Redirect } from './react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../views/routerDemo2/Home';
import Profile from '../views/routerDemo2/Profile';
import User from '../views/routerDemo2/User';
import Logo from '../views/routerDemo2/Logo';
import MenuLink from '../views/routerDemo2/MenuLink'
import Private from '../views/routerDemo2/Private';


class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div className="nav-bar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Logo></Logo>
            </div>
            <ul className="navbar-nav nav">
              <MenuLink to="/" exact={true}>首页</MenuLink>
              <MenuLink to="/profile">个人中心</MenuLink>
              <MenuLink to="/user">我的</MenuLink>

              {/* <li><Link to="/">首页</Link></li>
              <li><Link to={{ pathname: '/profile' }}>个人中心</Link></li>
              <li><Link to="/user">我的</Link></li> */}
            </ul>
          </div>
        </div>
        <div className="container">
          <Switch>
            <Route path="/" exact={true} component={Home}>首页</Route>
            <Private path="/profile" component={Profile}>个人中心</Private>
            <Route path="/user" component={User}>我的</Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}


ReactDOM.render(<App></App>, window.root);

