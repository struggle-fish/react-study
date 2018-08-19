import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Icon } from 'antd';
import action from '../store/action';

/*TRANSITION*/ 
import Transition from 'react-transition-group/Transition';
const duration = 300;
const defaultStyle = {
  transition: `opacity ${duration}ms `,
  opacity: 0
};
const transitionStyles = {
  entering: {
    opacity: 0
  },
  entered: {
    opacity: 1
  }
}

class NavTop extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      in: false
    }
    // 每一次页面刷新，redux中存储的购物车信息都会消失，所以需要在页面刷新的时候执行一个dispatch
    // 把服务器中存储的购物车信息存放到redux中（nav是公用组件）
    this.props.queryUnPay();
    this.props.queryPay();

  }
  handleClick = (ev) => {
    let { queryList } = this.props;
    let target = ev.target;
    let targetName = target.tagName;
    if (targetName === 'LI') {
      queryList({
        page: 1,
        type: target.getAttribute('type'),
        flag: 'replace'
      });
    }
    this.setState({
      in: false
    });
  }
  render() {
    return <header className='headerNavBox'>
      {/* 首页导航 */}
      <div className='homeBox'>
        <div className='baseBox'>
          <h1 className='logo'>小鱼儿</h1>
          <Icon className='icon' onClick={(ev) => {
            this.setState({
              in: !this.state.in
            });
          }} type='bars' style={{fontSize: '.8rem'}}></Icon>
        </div>
        <Transition in={this.state.in} timeout={0}>
          {(state) => {
            return <ul className='filterBox' style={{
              ...defaultStyle,
              ...transitionStyles[state],
              display: this.state.in ? 'block' : 'none'
            }} onClick={this.handleClick}>
              <li type='all'>全部课程</li>
              <li type='react'>React</li>
              <li type='vue'>Vue</li>
              <li type='node'>Node</li>
            </ul>
          }}
        </Transition>
        
      </div>
    </header>
  }
}

export default withRouter(connect(null, action.course)(NavTop));
