import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './static/css/bootstrap.css';

class A extends Component {
  static defaultProps = {
    // 第一个执行，给属性设置默认值才向下执行
  };
  constructor() {
    super();
    console.log('1=constructor');
    this.state = {
      n: 1
    };
  }
  componentWillMount() {
    console.log('2=will-mount第一次渲染之前, ref:', this.refs.hh); // undefined
  }
  componentDidMount() {
    console.log('4=did-mount第一次渲染之后, ref:', this.refs.hh); // div
    /** 
     * 真实项目中；
     * 1、控制状态信息更改的操作
     * 2、从服务器获取数据，然后修改状态信息，完成数据绑定
     * 3、在willMount中直接修改数据会被状态信息改变后才会render 和 didMount,但是如果setState是放在一个异步操作中完成（定时器，服务器获取）
     * 也是先执行 render 和 didMount ，然后在执行这个异步操作修改状态，紧接着走修改的流程（这样和放在didMount中没啥区别），所以一般把数据请求放在didMount中处理
     * 4、真是项目中的数据绑定，一般第一次组件渲染，都是绑定默认数据，第二次才是绑定服务器获取的数据（有些需求需要根据数据是否存在判断显示）
     */
    setInterval(() => {
      this.setState({
        n: this.state.n + 1
      });
    }, 5000);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('5=是否允许更新, 函数返回true允许，返回false不允许');
    // 在这个钩子函数中我们获取的state不是最新修改的，而是上一次state值
    // nextProps 最新修改的属性
    // nextState 最新修改的状态
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    // this.state.n 此时也是更新之前的
    console.log('6=组件更新之前');
  }
  componentDidUpdate() {
    // this.state.n 此时是更新之后的
    console.log('8=组件更新之后');
  }
  componentWillReceiveProps(nextProps, nextState) {
    console.log('组件属性改变');
  }
  render () {
    console.log('render');
    return <div ref="hh">
      {this.state.n}
    </div>
  }

}

ReactDOM.render(<A></A>, window.root);