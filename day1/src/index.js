import React from 'react';
import ReactDOM from 'react-dom';

class RefsDemo extends React.Component {
  constructor() {
      super()
      this.state = {
          myComponent: null
      }
      this.load = this.load.bind(this)
  }

  render() {
      return <div>
          {/* 点击执行 load 方法 */}
          <button onClick={this.load}>点击加载异步组件</button>
          {/* 变量存在时（非空，使用标签作为JSX的标签名（该变量已被赋值异步模块）；否则使用null（即无DOM） */}
          {
              this.state.myComponent ? <this.state.myComponent></this.state.myComponent> : null
          }
      </div>
  }

  load() {
      // 这是一个异步行为，所以需要在回调函数里获取这个模块
      require(['./learner.js'], Component => {
          // 赋值给 state 变量
          this.setState({
              // 加载到的模块存储在 Comment.default 中（因为是通过 export default 导出的）
              myComponent: Component.default
          })
      })
  }
}

ReactDOM.render(<RefsDemo></RefsDemo>, window.root);