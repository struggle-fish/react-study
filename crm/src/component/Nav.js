import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return <div className='navbar navbar-default'>
      <div className='container-fluid col-md-2'>
        <Link className='navbar-brand' to={{
          pathname: '/',
          search: '?lx=logo'
        }}>CRM-DEMO</Link>
      </div>
      <div className='collapse navbar-collapse col-md-10'>
        <ul className='nav navbar-nav' onClick={this.handleClick}>
          <li>
            <NavLink to='/' exact>首页</NavLink>
          </li>
          <li>
            <NavLink to='/custom'>客户管理</NavLink>
          </li>
          <li>
            <NavLink to='/plan'>计划管理</NavLink>
          </li>
        </ul>
      </div>
    </div>
  }
}

export default withRouter(connect()(Nav));