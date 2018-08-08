import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Dialog extends Component {
  // super 相当于 React.Component.call(this) 也就是call继承，把父类私有属性继承过来
  constructor(props) {
    // props jsx中解析出来的props对象信息（可能有children）传递给props => 调取组件传递的属性
    super(props);
    // 如果只写 super() 虽然创建实例的时候把属性传递进来了，但是并没有传递父组件，也就是没有吧属性挂载到实例上，使用this.props获取的结果是undefined
    //  this.props  属性集合
    // this.refs  ref集合
    // this.context  执行上下文
    console.log(props);
    console.log(this.props);
  }
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return <section>
      <h3>系统提示</h3>
    </section>
  }
}


ReactDOM.render(
  <Dialog content="我是属性">
    <span>哈哈</span>
  </Dialog>
, window.root);