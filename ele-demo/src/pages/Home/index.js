import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withTabBar from '../../component/Tab-Bar';
import TopBar from './Top-Bar';
import SkeletonScreen from '../../component/Skeleton-Screen';

import { homeInit, homeUpdate } from '../../store/moudules/home';

import styles from './index.less';


const mapStateToProps = ({ home }) => ({
  init: home.init
});

const mapActionsToProps = dispatch => bindActionCreators({
  homeUpdate,
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
    console.log('哈哈');
  }
  // 卸载组件
  componentWillUnmount() {
    this.props.homeUpdate({
      topBarShrink: false
    });
  }
  // 获取搜索顶部高度
  getTopBarHeight = (toBar) => {
    if (toBar) {
      console.log(ReactDOM.findDOMNode(toBar).clientHeight, '+++');
      this.setState({
        topBarHeight: ReactDOM.findDOMNode(toBar).clientHeight
      });
    }
  }
  render() {
    const { topBarHeight } = this.state;
    const {
      init
    } = this.props;
    return (
      <div className={styles['home-root']}>
        <TopBar ref={this.getTopBarHeight}/>
        {
          init ? (<div style={{ paddingTop: topBarHeight }}>哈哈</div>) : <SkeletonScreen style={{ paddingTop: topBarHeight }} />
        }
      </div>
    );
  }
}

