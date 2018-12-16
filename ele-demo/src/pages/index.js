/**
 * 页面路由
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../component/Lazy-Loading';
import { getUserInfo } from '../api';
import { globalUpdate } from '../store/moudules/global';

// 获取用户数据
@connect(() => ({}), dispatch => bindActionCreators({
  globalUpdate
}, dispatch))
class AuthComponent extends React.Component {
  async componentDidMount () {
   try {
    const { data } = await getUserInfo();
    this.props.globalUpdate({
      isLogin: true,
      userInfo: data
    });
   } catch(err) {
    this.props.globalUpdate({
      isLogin: false,
      userInfo: {}
    });
   } 
  }
  render () {
    return null
  }
}


// 页面
const HomeView = Loadable({
  loader: () => import('./Home'),
  loading: Loading
});
// 发现
const CompassView = Loadable({
  loader: () => import('./Compass'),
  loading: Loading
});
// 订单
const OrderView = Loadable({
  loader: () => import('./Order'),
  loading: Loading
});

// 我的
const MyView = Loadable({
  loader: () => import('./My/My'),
  loading: Loading
});
// 登录
const LoginView = Loadable({
  loader: () => import('./Login/Login'),
  loading: Loading
});
// 退出登录
const LogoutView = Loadable({
  loader: () => import('./Logout/Logout'),
  loading: Loading
});

// import Home from './Home';
export default () => (
  <React.Fragment>
    <AuthComponent />
    <Switch>
      <Route exact path='/' render={() => <Redirect to='/home'/>}></Route>
      <Route path='/home' component={HomeView}></Route>
      <Route path='/compass' component={CompassView}></Route>
      <Route path='/order' component={OrderView}></Route>
      <Route path='/my' component={MyView}></Route>
      <Route path='/login' component={LoginView}></Route>
      <Route path='/logout' component={LogoutView}></Route>
      <Redirect to='/?from=404'></Redirect>
    </Switch>
  </React.Fragment>
)