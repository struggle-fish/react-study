// 表单校验
// 可以获取dom元素 .value 非受控（没有和状态有关系）组件
// 受控组件 和状态相关的  双向数据绑定


import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Control extends Component {
  state = {
    username: '江小鱼',
    password: '1234'
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.state));
  }
  render() {
    return (
      <div>
        {/* 自带表单校验 */}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
          <input type="text" name="password" value={this.state.password} onChange={this.handleChange}></input>
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<Control></Control>, window.root);