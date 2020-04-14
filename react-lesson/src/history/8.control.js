
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Control extends Component {
  password = React.createRef();
  handleChange = (e) => {

  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.username.value);
    console.log(this.password.currnent.value);
  }
  render() {
    return (
      <div>
        {/* 自带表单校验 */}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" ref={(dom) => this.username = dom}></input>
          <input type="text" name="password" ref={this.password}></input>
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<Control></Control>, window.root);