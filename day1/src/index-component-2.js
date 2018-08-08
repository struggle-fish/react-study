import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * 函数组件是静态组件，和普通函数一样，调取一次组件，就吧组件中的内容获取到，插入到页面中，如果不重新调取组件，显示的内容是不发生任何变化的
 */
// function Clock() {
//   return <section>
//     <h3>北京时间：</h3>
//     <div style={{ 'color': 'red', 'fontSize': '30px' }}>{new Date().toLocaleString()}</div>
//   </section>
// }

// setInterval(() => {
//   ReactDOM.render(<Clock></Clock>, document.getElementById('root'));  
// }, 1000);

/**
 *  
 * */ 

 class Clock extends Component {
  constructor() {
    super();
    // 初始化组件状态
    this.state = {
      time: new Date().toLocaleString()
    }
  }
  componentDidMount() {
    // 第一次组件渲染完成后触发
    setInterval(() => {
      // setState是异步操作
      this.setState({
        time: new Date().toLocaleString()
      }, () => {
        // => 当通知react把需要重新渲染的jsx元素渲染完成后，执行的回调函数（类似于componentDidUpdate）
      });
    }, 1000);
  }
  render () {
    return <section>
      <h3>北京时间：</h3>
      <div style={{ 'color': 'red', 'fontSize': '30px' }}>{this.state.time}</div>
    </section>
  } 
 }
 ReactDOM.render(<Clock></Clock>, window.root);