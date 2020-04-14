import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import BScroll from 'better-scroll';

import styles from './index.less';
import { calendarFormat } from 'moment';

const DIRECTION_H = 'horizontal';
const DIRECTION_V = 'vertical';

/**
 * dataSource 数据源 用于判断 刷新以及加载更多
 * probType
 * click
 * listenScroll 是否监听滚动事件
 * listenBeforeScroll 是否监听开始滚动滚动前事件
 * direction 滚动方向  horizontal、vertical
 * scrollbar BScroll 滚动条参数 Boolean | Object
 * pullDownRefresh 是否开启下拉刷新 Boolean | Object { txt: '', stop: 暂停位置的距离， stopTime: 数据获取完成后停留多少时间 }
 * pullUpLoad 是否开启上拉加载更多 Boolean | Object { txt: { more, nomore } }
 * startY 初始化Y轴位置
 * refreshDelay 数据变动后延迟多少时间后调用 forceUpdate
 * freeScroll 是否开启横向纵向滚动
 * horizontalWidth 开启横向滚动是的maxwidth
 * pullingDown  function -> 下拉回调
 * pullingUp    funciton -> 上拉回调
 * scroll       function -> 滚动回调
 * beforeScrollStart  function -> 滚动开始回调
 * 
*/

export default class Scroll extends React.Component {
  static proptypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    contentClassName: PropTypes.string,
    dataSource: PropTypes.array,
    probeType: PropTypes.oneOf([1, 2, 3]),
    click: PropTypes.bool,
    listenScroll: PropTypes.bool,
    listenBeforeScroll: PropTypes.bool,
    direction: PropTypes.string,
    scrollbar: PropTypes.bool,
    pullDownRefresh: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
    ]),
    pullUpLoad: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
    ]),
    bounce: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
    ]),
    stopPropagation: PropTypes.bool,
    momentum: PropTypes.bool,
    startY: PropTypes.number,
    refreshDelay: PropTypes.number,
    freeScroll: PropTypes.bool,
    horizontalWidth: PropTypes.number,
    pullingDown: PropTypes.func,
    pullingUp: PropTypes.func,
    scroll: PropTypes.func,
    beforeScrollStart: PropTypes.func,
  }
  static defaultProps = {
    dataSorce: [],
    probeType: 1,
    click: true,
    listenScroll: false,
    listenBeforeScroll: false,
    direction: DIRECTION_V,
    scrollbar: false,
    pullDownRefresh: false,
    pullUpLoad: false,
    momentum: true,
    bounce: true,
    startY: 0,
    refreshDelay: 20,
    freeScroll: false,
    horizontalWidth: 0,
    stopPropagation: false,
    pullingDown: () => {},
    pullingUp: () => {},
    scroll: () => {},
    beforeScrollStart: () => {},
  }
  constructor(props) {
    super(props)
    this.pullDownInitTop = -50;
    this.state = {
      beforePullDown: true, // 显示bubble
      isRebounding: false, // 数据获取完毕 是否开始向上回弹
      isPullingDown: false, // 下拉标识
      pulling: false, // 显示loading
      isPullUpLoad: false, // 是否正在加载
      pullUpDirty: true, // 显示footer中pullUpTxt true 显示加载更多 false 没有更多数据
      bubbleY: 0, // bubble Y值
      pullDownStyle: { top: `${this.pullDownInitTop}px` }
    };
  }
  componentDidMount() {
    this.initScroll();
  }
  initScroll = () => {
    if (!this.wrapper) return;
    const {
      probeType,
      click,
      freeScroll,
      direction,
      scrollbar,
      pullDownRefresh,
      pullUpLoad,
      startY,
      horizontalWidth,
      listenScroll,
      scroll,
      listenBeforeScroll,
      beforeScrollStart,
      momentum,
      bounce,
      stopPropagation
    } = this.props;
    // 如果开启了freeScroll 设置宽度
    if (freeScroll || direction === DIRECTION_H) {
      this.scrollContent.style.width = horizontalWidth + 'px';
    }
    // 创建betterScroll
    this.bs = new BScroll(this.wrapper, {
      click,
      startY,
      probeType,
      scrollbar,
      pullUpLoad,
      freeScroll,
      pullDownRefresh,
      momentum,
      bounce,
      stopPropagation,
      scrollX: freeScroll || direction === DIRECTION_H,
      scrollY: freeScroll || direction === DIRECTION_V,
    });
    // 开启滚动监听到调用父组件callback
    if (listenScroll) {
      this.bs.on('scroll', (pos) => {
        scroll(pos);
      });
    }
    // 初始化下拉刷新
    if (pullDownRefresh) {
      this.initPullDownRefresh();
    }
    // 初始化加载更多
    if (pullUpLoad) {
      this.initPullUpLoad();
    }
  }
  initPullUpLoad = () => {
    this.bs.on('pullingUp', () => {
      this.setState({ isPullUpLoad: true });
      this.props.pullingUp();
    });
  }
  render() {
    const { children } = this.props;
    return (
      <div
        className={cls(styles['list-wrapper'])}
        ref = { c => this.wrapper = c }
        style={this.props.style}>
        {/* 列表 */}
        {children}
        {/* 列表 /end */}
        {/* 加载更多 */}
        {

        }
        {/* 加载更多 /end */}
      </div>
    )
  } 
};
