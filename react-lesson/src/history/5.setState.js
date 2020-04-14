import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';


// 把属性变成组件的状态，
class Counter extends Component {
  state = {
    count: this.props.count // 把属性变成组件的状态，才能直接操作
  }
  handleClick = () => {
    // this.props.count++; // 属性传入到组件中不能更改
    // this.setState({
    //   count: ++this.state.count
    // });

    // setTimeout(() => {
    //   this.setState({
    //     count: this.state.count + 1
    //   });
    //   this.setState({
    //     count: this.state.count + 3
    //   });
    //   this.setState({
    //     count: this.state.count + 2
    //   });
    // }, 0);
    // 跟上面的setTimeout等价 setState可以写成函数形式或者回调函数形式
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 3 }));
    this.setState((prevState) => ({ count: prevState.count + 2 }));
  }
  render() {
    return (<div>
      {this.state.count}
      <button onClick={this.handleClick}>添加</button>
    </div>)
  }
}
render(<Counter count={1}/>, document.getElementById('root'));


// 默认是批量更新
// let isBatchingUpdate = true; // 默认是批量更新
// let transcation = (component) => {
//   component.state = component.pendingState;
//   component.render();
//   isBatchingUpdate = false;
// };
// class My {
//   constructor() {
//     this.state = {
//       number: 0
//     }
//     this.pendingState = {...this.state};
//   }
//   setState(obj) {
//     if (isBatchingUpdate) {
//       this.pendingState = {...this.pendingState, ...obj};
//     } else {
//       this.pendingState = {...this.pendingState, ...obj};
//       transcation(this);
//     }
//   }
//   update() {
//     setTimeout(() => {
//       this.setState({ number: this.state.number + 1 });
//       this.setState({ number: this.state.number + 3 });
//       this.setState({ number: this.state.number + 2 });
//     }, 0);
//     transcation(this);
//   }
//   render () {
//     console.log(this.state.number);
//   }
// }

// let my = new My();
// // 内部先调用
// my.update();