import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types'
import Swiper from 'swiper/dist/js/swiper.js';
import styles from './index.less';

export default class SwiperComponent extends React.Component {
  static defaultProps = {
    list: [], // 数据
    direction: 'horizontal', // 滑动方向，可设置水平(horizontal)或垂直(vertical)
    autoplay: 3000, // 自动切换
    speed: 600, // 滑动速度
    loop: true, // 循环切换
    autoplayDisableOnInteraction: false, // 重新启动autoplay,默认为false：启动 
    showpage: true, // 显示分页容器
    classpage: '', // 分页样式
    height: '100px',
    paginationType: 'bullets'
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.initSwiper();
  }
  initSwiper = () => {
    new Swiper('#appSwiper', {
      passiveListeners : false,
      touchMoveStopPropagation: false,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      }
    });
  }
  render() {
    return (
      <div className={cls("swiper-container", styles['swiper-test'])} id='appSwiper'>
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    );
  }
};

SwiperComponent.propTypes = {
  list: PropTypes.array.isRequired,
  direction: PropTypes.string,
  autoplay: PropTypes.number,
  speed: PropTypes.number, // 滑动速度
  loop: PropTypes.bool, // 循环切换
  autoplayDisableOnInteraction: PropTypes.bool, // 重新启动autoplay,默认为false：启动 
  showpage: PropTypes.bool, // 显示分页容器
  classpage: PropTypes.string, // 分页样式
  height: PropTypes.string,
  paginationType: PropTypes.string
}; 