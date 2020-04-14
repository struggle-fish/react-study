import React from 'react'
import ReactDOM from 'react-dom';

// 只要父组件更新了，儿子组件就会更新
// 儿子组件先渲染完成，在渲染父组件
class ChildCounter extends React.Component {
  componentWillMount() {
    console.log('子组件-child-componentWillMount------------------');
  }
  render() {
    console.log('子组件-child-render------------------');
    return(
      <div>
        Child-{this.props.a}
      </div>
    )
  }
  componentDidMount() {
    console.log('子组件-child-componentDidMount------------------');
  }
  componentWillReceiveProps(nextProps) {
    // 组件接收到了新的属性触发（第一次不触发）
    // 接收到新的属性后， 有可能会把接收到的属性放到状态下
    // 建议不用再此处调用 setState 16.3api做了调整 变更为 getDerivedStateFromProps
    console.log('子组件-child-componentWillReceiveProps------------------');
  }
  // static getDerivedStateFromProps(props, state) {
    
  // }
}

class Counter extends React.Component {
  static defaultProps = {
    name: '江小鱼'
  }
  state = {
    count: 1
  }
  constructor(props) {
    super(props);
    console.log(props, 'constructor------------------');
  }
  componentWillMount() {
    console.log('componentWillMount------------------'); // 16.3如果使用新api，此函数已经被去掉
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    console.log('shouldComponentUpdate------------------');
    // 做优化(immutable / PurComponent)
    // 此处返回false，状态也是会更新的，只是没有刷新视图
    return nextState.count % 2 === 0;
  }
  componentWillUpdate() {
    // 16.3 变更为 getSnapshotBeforeUpdate(获取更新前的快照)
    console.log('componentWillUpdate------------------');
  }
  render() {
    console.log('render------------------');
    return (
      <div>
        {this.state.count}
        <ChildCounter a={this.state.count}></ChildCounter>
        <button onClick={() => {
          // 无论数据是否变化，都会重新调用render方法
          this.setState({
            count: this.state.count + 1
          })
        }}>添加</button>
      </div>
    )
  }
  componentDidUpdate() {
    console.log('componentDidUpdate------------------')
  }
  componentDidMount() {
    // ajax  DOM元素
    console.log('componentDidMount------------------');
  }
}

ReactDOM.render(<Counter></Counter>, window.root);