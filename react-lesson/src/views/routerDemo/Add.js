import React from 'react';

export default class Add extends React.Component {
  input = React.createRef()
  handleClick = () => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ id: Math.random() + 1, name: this.input.current.value });
    localStorage.setItem('users', JSON.stringify(users));
    this.props.history.push('/user/list');
  }
  render () {
    // 通过Route 组件渲染出来的页面有3个属性  history location, match
    return (
      <div>
        <input type="text" className="form-control" ref={this.input}></input>
        <button className="btn btn-primary" onClick={this.handleClick}>添加</button>
      </div>
    )
  }
}