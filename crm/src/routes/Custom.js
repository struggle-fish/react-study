import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Switch, Redirect, Link, NavLink } from 'react-router-dom';

import List from './custom/List';
import Create from './custom/Create';
import Detail from './custom/Detail';

class Custom extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return <section>
      {/* 左侧导航 */}
      <ul className='nav nav-pills nav-stacked col-md-2'>
        <li className='presentation'>
          <NavLink to='/custom/list'>
            客户列表
          </NavLink>
        </li>
        <li className='presentation'>
          <NavLink to='/custom/create'>
            增加客户
          </NavLink>
        </li>
      </ul>
      {/* 右侧部分 基于路由管理（二级路由）*/}
      <div className='col-md-10'>
        <Switch>
          <Route path='/custom/list' component={List}></Route>
          <Route path='/custom/create' component={Create}></Route>
          <Route path='/custom/detail' component={Detail}></Route>
          {/* 进入到客户管理页默认显示list */}
          <Redirect from='/custom' to='/custom/list'></Redirect>
        </Switch>
      </div>
    </section>
  }
}

export default connect()(Custom);