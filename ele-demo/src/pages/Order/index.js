import React from 'react';
import { connect } from 'react-redux';
import withTabBar from '../../component/Tab-Bar';


@connect()
@withTabBar
export default class Order extends React.Component {
  render() {
    return (<div>我是订单order</div>);
  }
}
