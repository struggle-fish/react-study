// 实现一个类

import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';


class Clock extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }
  state = { // es7
    b: 1,
    date: new Date().toLocaleString()
  }
  // 当前组件挂载完成，可以获取dom 
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date().toLocaleString()
      });
    }, 1000);
  }
  handleClick() { // 此方法
    console.log(this, 222);
    // this => undefined
  }
  handleClick2 = (params) => { // es7语法
    console.log(this);
    console.log(params, '传参数');
  }
  handleClick3 = () => {
    ReactDOM.unmountComponentAtNode(window.root);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  
  render() {
    // console.log(this.state);
    return (<h1>
      时间是：{this.state.date}---{this.state.b}<br></br>
      {/* 删除1 处，通过外界调用了类中的方法，不合法，this => undefined */}
      <button onClick={this.handleClick}>删除1</button><br></br>
      {/* 每次绑定都会出一个函数 */}
      <button onClick={this.handleClick.bind(this)}>删除2</button><br></br>
      {/* es7语法 */}
      <button onClick={this.handleClick2}>删除3</button><br></br>
      {/* 传惨 */}
      <button onClick={() => {
        this.handleClick2('333')
      }}>删除4</button><br></br>
      <button onClick={this.handleClick3}>删除5</button><br></br>
    </h1>)
  }
}

render(<Clock a="1"></Clock>, window.root);


class A {
  fn () {
    console.log(this); // undefined 
    // 不用通过外界绑定来调用类中的函数，这是不合法的
  }
}
let a = new A();
let fn = a.fn;
fn();