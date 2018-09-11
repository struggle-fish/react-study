import React from 'react';
import { connect } from 'react-redux';
import withTabBar from '../../component/Tab-Bar';


@connect()
@withTabBar
export default class Profile extends React.Component {
  render() {
    return (<div>我是我的Profile</div>);
  }
}
