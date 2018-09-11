import React from 'react';
import { connect } from 'react-redux';
import withTabBar from '../../component/Tab-Bar';


@connect()
@withTabBar
export default class Compass extends React.Component {
  render() {
    return (<div>我是发现Compass</div>);
  }
}
