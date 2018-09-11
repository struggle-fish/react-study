import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withTabBar from '../../component/Tab-Bar';
import TopBar from './Top-Bar';
import SkeletonScreen from '../../component/Skeleton-Screen';

import action from '../../store/action';

// import { getGeolocation } from '../../api';
import styles from './index.less';

let { homeAction: { homeInit } } = action;
// 获取经纬度
// getGeolocation().then(res => {
//   console.log(res, '定位');
// });

const mapStateToProps = ({ home }) => ({
  // init: home.init
});

const mapActionsToProps = dispatch => bindActionCreators({
  homeInit
}, dispatch);

@connect(mapStateToProps, mapActionsToProps)
@withTabBar
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topBarHeight: 0
    };
  }
  componentDidMount() {
    // 初始化首页接口
    this.props.homeInit();
  }
  render() {
    return (
      <div className={styles['home-root']}>
        <TopBar />
        我是首页
        <SkeletonScreen style={{ paddingTop: '100px' }} />
      </div>
    );
  }
}

