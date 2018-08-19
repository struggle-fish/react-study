import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { checkLogin } from '../api/person';

import Info from './person/Info';
import Login from './person/Login';
import Tip from './person/Tip';
import Register from './person/Register';

import '../static/css/person.less';

class Person extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLogin: false
    };
  }
  // 验证是否登录
  async componentWillMount() {
    let result = await checkLogin();
    let isLogin = parseFloat(result.code) === 0 ? true : false;
    this.setState({
      isLogin
    });
  }
  async componentWillReceiveProps() {
    let result = await checkLogin();
    let isLogin = parseFloat(result.code) === 0 ? true : false;
    this.setState({
      isLogin
    });
  }
  render() {
    return <section>
      <Switch>
        {/* <Route path='/person/info' render = { async() => {
          // 权限校验
          let result = await checkLogin();
          if (parseFloat(result.code) === 0) {
            return <Info></Info>
          } else {
            return <Tip></Tip>
          }
        }}/> */}
        <Route path='/person/info' render = { () => {
          // 权限校验
          if (this.state.isLogin) {
            return <Info></Info>
          } else {
            return <Tip></Tip>
          }
        }}/>
        <Route path='/person/login' component={Login}/>
        <Route path='/person/register' component={Register} />
        <Redirect from='/person' to='/person/info'></Redirect>
      </Switch>
    </section>
  }
}

export default connect()(Person);
