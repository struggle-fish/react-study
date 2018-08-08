import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import './static/css/bootstrap.css';



/**
 * 
 *
 */
class Head  extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="panel-heading">
      <h3 className="panel-title">
        {/* 子组件通过属性获取父传递 */}
        点击次数：{this.props.count}
      </h3>
    </div>
  }
}

class Body extends Component {
  constructor() {
    super();
  }
  render() {
    return <div className="panel-body">
      <button className="btn btn-success" onClick={this.props.callBack}>点我啊！</button>
    </div>
  }
}

class Panel extends Component {
  constructor() {
    super();
    this.state = {
      n: 0
    }
  }
  fn = () => {
    this.setState({
      n: this.state.n + 1
    });
  }
  render() {
    return <section className="panel panel-default">
      {/* 父传子属性传递 */}
      <Head count={this.state.n}></Head>
      {/* 父组件把自己的方法基于属性传递给子组件，目的是在子组件中执行这个方法 */}
      <Body callBack={this.fn}></Body>
    </section>
  }
}

ReactDOM.render(<Panel></Panel>, window.root);