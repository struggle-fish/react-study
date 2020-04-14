import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './index.css';
import withStyles from '../../withStyles';
console.log(styles, 'sdafdsafdsafd')
class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navber-header">
            <a href="" className="navber-brand">
              ssr
            </a>
          </div>
          <div className="">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">首页</Link>
              </li>
              {this.props.user && (<>
                <li>
                  <Link to="/logout">退出</Link>
                </li>
                <li>
                  <Link to="/profile">个人中心</Link>
                </li>
              </>)}
              {
                !this.props.user && (
                  <>
                  <li>
                    <Link to="/login">登录</Link>
                  </li>
                  </>
                )
              }
            </ul>
            {
              this.props.user && (
                <ul className="nav navbar-nav navbar-right">
                  <li><span className={styles.user}>{this.props.user.username}</span></li>
                </ul>
              )
            }
          </div>
        </div>
      </nav>
    )
  }
}

Header = connect(state => state.session)(Header);
export default withStyles(Header, styles);