import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Swipers from 'swiper/dist/js/swiper.js';
import cls from 'classnames';
import withTabBar from '../../component/Tab-Bar';
import TopBar from './Top-Bar';
import SkeletonScreen from '../../component/Skeleton-Screen';
import Scroll from '../../component/Scroll';
import SwiperComponent from '../../component/Swiper';
import { getImageUrl } from '../../utils'


import { homeInit, homeUpdate } from '../../store/moudules/home';

import styles from './index.less';

const mapStateToProps = ({ home }) => {
  return ({
    init: home.init,
    banner: home.bannerData,
    entry: home.entryData
  });
}

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
    
  }
  componentDidUpdate() {
    new Swipers('#entryWrapper', {
      passiveListeners: false,
      touchMoveStopPropagation: false,
      direction: 'horizontal',
      loop: true,
      pagination: { // 分页容器
        el: '.swiper-pagination',
        type: 'bullets'
      }
    });
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
      this.setState({
        topBarHeight: ReactDOM.findDOMNode(toBar).clientHeight
      });
    }
  }
  render() {
    const { topBarHeight } = this.state;
    const {
      init,
      banner,
      entry
    } = this.props;
    return (
      <div className={styles['home-root']}>
        {/* <TopBar ref={this.getTopBarHeight}/> */}
        {
          init ? (
            <div>
              <SwiperComponent>
                { banner.length ? banner.map((value, index) => (value))  : '' }
              </SwiperComponent>
              {/* 服务球 */}
              <div className={cls("swiper-container", styles['entry-wrapper'])} id='entryWrapper'>
                <div className='swiper-wrapper'>
                  {
                    entry.map((item, index) => (
                      <div className={cls("swiper-slide", styles['entry-slide'])} key={index.toString()}>
                        {
                          item.map(value => (
                            <a href="javascript:;" className={styles.item}  key={value.id.toString()}>
                              <div className={styles.img}>
                                <img src={getImageUrl(value.image_hash)}/>
                              </div>
                              <span className={styles.name}>{value.name}</span>
                            </a> 
                          ))
                        }
                      </div>
                    ))
                  }
                </div>
                <div className="swiper-pagination"></div>
              </div>
              {/* /end 服务球 */}
            </div>
          ) : <SkeletonScreen style={{ paddingTop: topBarHeight }} />
        }
      </div>
    );
  }
}

