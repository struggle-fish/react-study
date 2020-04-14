import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types'
import Swiper from 'swiper/dist/js/swiper.js';
import styles from './index.less';
import { getImageUrl } from '../../utils';
export default class SwiperComponent extends React.Component {
  static defaultProps = {
    direction: 'horizontal', // 滑动方向，可设置水平(horizontal)或垂直(vertical)
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false
    // }, // 自动切换
    autoplay: false,
    loop: false, // 循环切换
    autoplayDisableOnInteraction: false, // 重新启动autoplay,默认为false：启动 
    pagination: { // 分页容器
      el: '.swiper-pagination',
      type: 'bullets'
    },
    list: [], // 数据
    showpage: true, // 显示分页容器
    height: '100px',
    classpage: '' // 分页样式
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.initSwiper();
  }
  componentDidUpdate() {
  }
  initSwiper = () => {
    let { direction, autoplay, loop, pagination } = this.props;
    new Swiper('#appSwiper', {
      passiveListeners : false,
      touchMoveStopPropagation: false,
      direction: direction,
      autoplay: autoplay,
      loop: loop,
      pagination: pagination
    });
  }
  render() {
    let { children } = this.props;
    return (
      <div className={cls("swiper-container", styles['swiper-component'])} id='appSwiper'>
        <div className="swiper-wrapper">
          {children.map((value, index) => (
            <div className="swiper-slide" key={index}>
              <a href="javascript:;">
                <img src={getImageUrl(value.image_hash)} alt=""/>
              </a>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    );
  }
};

SwiperComponent.propTypes = {
  list: PropTypes.array.isRequired,
  direction: PropTypes.string,
  autoplay: PropTypes.bool,
  speed: PropTypes.number, // 滑动速度
  loop: PropTypes.bool, // 循环切换
  autoplayDisableOnInteraction: PropTypes.bool, // 重新启动autoplay,默认为false：启动 
  showpage: PropTypes.bool, // 显示分页容器
  classpage: PropTypes.string, // 分页样式
  height: PropTypes.string,
  paginationType: PropTypes.object
}; 