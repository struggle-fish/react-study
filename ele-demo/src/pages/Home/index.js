import React from 'react';
import { connect } from 'react-redux';

import { getGeolocation } from '../../api';

getGeolocation().then(res => {
  console.log(res);
});

@connect()
export default class Home extends React.Component {
  render() {
    return (<div>我是首页</div>);
  }
}

