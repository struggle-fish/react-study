import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Swipers from 'swiper/dist/js/swiper.js';
import cls from 'classnames';
import withTabBar from '../../component/Tab-Bar'; // 底部tab
import TopBar from './Top-Bar'; // 顶部搜索
import SkeletonScreen from '../../component/Skeleton-Screen';
import TitleBar from '../../component/Title-bar/Title-bar';
import ListShop from '../../component/List-shop/List-shop';
import Scroll from '../../component/Scroll';
import SwiperComponent from '../../component/Swiper';
import { getImageUrl } from '../../utils'


import { homeInit, homeUpdate, homeList } from '../../store/moudules/home';

import styles from './index.less';

const mapStateToProps = ({ home }) => ({
  init: home.init,
  banner: home.bannerData,
  entry: home.entryData
})

const mapActionsToProps = dispatch => bindActionCreators({
  homeUpdate,
  homeInit,
  homeList
}, dispatch);

@connect(mapStateToProps, mapActionsToProps)
@withTabBar
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topBarHeight: 0,
      pagination: { // 分页容器
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function(swiper, current, total) {
          let strHtml = ``;
          for (let i = 0; i < total; i++) {
            if (i === (current - 1)) {
              strHtml += `<span class="${cls(styles['swiper-pagination-customs'], styles['active'])}"></span>`
            } else {
              strHtml += `<span class="${cls(styles['swiper-pagination-customs'])}"></span>`
            }
          }
          return strHtml;
        }
      }
    };
  }
  componentDidMount() {
    // 初始化首页接口
    this.props.homeInit();
    // TODO:
    this.props.homeList();
  }
  // 首页浮球tab
  entrySwipersRender = () => {
    new Swipers('#entrySwiper', {
      passiveListeners: false,
      touchMoveStopPropagation: false,
      direction: 'horizontal',
      loop: true,
      pagination: { // 分页容器
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function(swiper, current, total) {
          let strHtml = ``;
          for (let i = 0; i < total; i++) {
            if (i === (current - 1)) {
              strHtml += `<span class="${cls(styles['swiper-pagination-customs'], styles['active'])}"></span>`
            } else {
              strHtml += `<span class="${cls(styles['swiper-pagination-customs'])}"></span>`
            }
          }
          return strHtml;
        }
      }
    });
  }
  componentDidUpdate() {
    this.entrySwipersRender();
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
  handlePullUp = () => {
  }
  render() {
    const { topBarHeight } = this.state;
    const {
      init,
      banner,
      entry
    } = this.props;
    const scrollProps = {
      style: { top: topBarHeight },
      pullingUp: this.handlePullUp
    };
    return (
      <div className={styles['home-root']}>
        <TopBar ref={this.getTopBarHeight}/>
        {
          init ? (
            <Scroll {...scrollProps}>
              {/* 服务球 */}
              <div className={cls("swiper-container", styles['entry-swiper'])} id='entrySwiper'>
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
              <div className={styles['activitys-cells']}>
                {/* 品质套餐 */}
                <section className={styles['activity-cell']}>
                  <div className={styles['hd']}>
                    <h3>品质套餐</h3>
                    <p>搭配齐全吃得好</p>
                    <a href="javascript:;">立即抢购 ></a>
                  </div>
                  <div className={styles['bd']}>
                    <img src="http://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/" alt=""/>
                  </div>
                </section>
                {/* 品质套餐 */}
                {/* banner */}
                <SwiperComponent pagination={this.state.pagination}  speed={300} loop={true}>
                  { banner.length ? banner.map((value, index) => (value))  : '' }
                </SwiperComponent>
                {/* /end banner */}
                <TitleBar title="推荐商家"></TitleBar>
                <ListShop></ListShop>
              </div>
            </Scroll>
          ) : <SkeletonScreen style={{ paddingTop: topBarHeight }} />
        }
      </div>
    );
  }
}

