import React from 'react';
import { connect } from 'react-redux';
import withTabBar from '../../component/Tab-Bar';
import NavBar from '../../component/Nav-Bar/Nav-Bar';

import styles from './index.less';

@connect()
@withTabBar
export default class Order extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <NavBar
          title="订单"
          iconLeft="#back"
          leftClick={() => history.goBack()} />
      </div>
    );
  }
}
