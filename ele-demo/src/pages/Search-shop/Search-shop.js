import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../../component/Nav-Bar/Nav-Bar';

import styles from './Search-shop.less';

@connect()
export default class SearchShop extends React.Component {
  render() {
    return (
      <div className={styles.search}>
        <NavBar
        title="搜索"
        leftClick={() => this.props.history.goBack()}
        iconLeft="#back"/>
      </div>
    );
  }
}
