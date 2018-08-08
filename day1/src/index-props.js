import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Dialog extends Component {
  // this.props是只读的，无法修改
  // 可以给其设置默认值或者一些规则例如： 设置是否是必须传递以及传递值类型
  static defaultProps = {
    // con: '我是默认'
  }
  // 给属性设置一些规则， 不会影响页面渲染但是会在控制台报警告错误
  static propTypes = {
    con: PropTypes.string.isRequired
  }
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return <section>
      <h3>{this.props.con}</h3>
      {this.props.lx}
    </section>
  }
}


ReactDOM.render(
  <Dialog con={3} lx={2}>
    <span>哈哈</span>
  </Dialog>
, window.root);