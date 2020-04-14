import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from './store/index';
import styles from './style.css';
import withStyle  from '../../WithStyle';

class Header extends Component{
  render() {
    const { login, handleLogin, handleLogout } = this.props;
    // console.log(login, 'login----------');
    return (
      <div className={styles.header}>
        <Link to="/">首页</Link> <br/>
        {
          login ? 
            <>
              <div onClick={handleLogout}>退出</div><br/>
              <Link to="/translation">翻译列表</Link>
            </> : <><div onClick={handleLogin}>登录</div><br/></>
        }
      </div>
    )
  }
}

const mapState = (state) => ({
  // login: state.header.login
  login: false
});

const mapDispatch = (dispatch) => ({
  handleLogin () {
    // console.log('点击登录');
    dispatch(actions.login());
  },
  handleLogout() {
    dispatch(actions.logout())
  }
});

export default connect(mapState, mapDispatch)(withStyle(Header, styles));