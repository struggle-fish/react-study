import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../static/css/banner.css';

export default class Banner extends Component {
  // 设置属性默认规则
  static defaultProps = {
    data: [],
    interval: 3000,
    step: 1,
    speed: 300
  }
  static propTypes = {
    data: PropTypes.array,
    interval: PropTypes.number,
    step: PropTypes.number,
    speed: PropTypes.number
  }
  constructor(props) {
    super(props);
    let {step, speed} = this.props;
    this.state = {
      step,
      speed
    }
  }
  componentWillMount() {
    let { data } = this.props;
    // 克隆数据
    let cloneData = data.slice(0);
    cloneData.push(data[0]);
    cloneData.unshift(data[data.length - 1]);
    this.cloneData = cloneData; // 挂载到实例上
  }
  componentDidMount() {
    // 控制自动轮播
    this.autoTimer = setInterval(this.autoMove, this.props.interval);
  }
  componentWillUpdate(nextProps, nextState) {
    // 拦截一下 边界判断
    if (nextState.step > this.cloneData.length - 1) { // 回到第一张
      this.setState({
        step: 1,
        speed: 0
      });
      // clearInterval(this.autoTimer);
    }
    // 向左边界判断  如果当前最新修改的索引已经小于0，立即回到倒数第二个(真实最后一张)
    if (nextState.step < 0) {
      this.setState({
        step: this.cloneData.length - 2,
        speed: 0
      });
    }
  }
  componentDidUpdate() {
    // => 只有是克隆的第一张立刻切换到真实第一张才做如下处理 让其第一张运动到第二张
    let {step, speed} = this.state;
    if (step === 1 && speed === 0) {
      // css3 的transition有一个问题（主栈执行的时候，短时间内遇到2次设置transition-duration的代码，以最后一次为准）
      this.delayTimer = setTimeout(() => {
        clearTimeout(this.delayTimer);
        this.setState({
          step: step + 1,
          speed: this.props.speed
        });
      }, 0);
    }
    // 向左边界判断 立即回到第二张后，，应该让其向回在运动一张
    if (step === this.cloneData.length - 2 && speed === 0) {
      this.delayTimer = setTimeout(() => {
        clearTimeout(this.delayTimer);
        this.setState({
          step: step - 1,
          speed: this.props.speed
        });
      }, 0);
    }
    
  }
  render() {
    let { data } = this.props;
    let { cloneData } = this;
    if (data.length === 0) return '';
    // 样式控制
    let {step, speed} = this.state;
    let wrapperSty = {
      // left: -step * 1000 + 'px',
      // transition: `left ${speed}ms linear 0ms`,
      transform: `translateX(${-step * 1000}px)`,
      transition: `transform ${speed}ms`,
      width: `${cloneData.length * 1000}px`
    };
    return <section 
      className='container' 
      onMouseEnter={this.movePause} 
      onMouseLeave={this.movePlay} onClick={this.handleClick}>
      <ul className='wrapper' style={wrapperSty} onTransitionEnd={() => {
        // 动画更新完成在执行下一个动画
        this.isRun = false;
      }}>
        {cloneData.map((item, index) => {
          let { pic, title } = item;
          return <li key={index}>
                  <img src={pic} alt={title} />
                </li>
        })}
      </ul>
      <ul className='focus'>
        {data.map((item, index) => {
          let tempIndex = step - 1;
          if (step === 0) {
            tempIndex = data.length - 1;
          } else if (step === cloneData.length - 1) {
            tempIndex = 0;
          }
          return <li key={index} className={tempIndex === index ? 'active' : ''}></li>
        })}
      </ul>
      <a href="javascript:;" className='arrow arrowLeft'></a>
      <a href="javascript:;" className='arrow arrowRight'></a>
    </section>
  }
  // 自动向右切换
  autoMove = () => {
    this.setState({
      step: this.state.step + 1
    });
  }
  // 清除自动轮播
  movePause = () => {
    clearInterval(this.autoTimer);
  }
  // 再次开启
  movePlay = () => {
    this.autoTimer = setInterval(this.autoMove, this.props.interval);
  }
  handleClick = (ev) => {
    let target = ev.target;
    let tarTag = target.tagName;
    let tarClass = target.className;
    // 点击左右切换
    if (tarTag === 'A' && /(^| +)arrow( +|$)/ .test(tarClass)) {
      // 防止过快点击
      if (this.isRun) return;
      this.isRun = true;
      // 右按钮
      if (tarClass.indexOf('arrowRight') >= 0) {
        this.autoMove();
        return;
      }
      // 往左运动
      this.setState({
        step: this.state.step - 1
      });
      return;
    }
    
  }
}