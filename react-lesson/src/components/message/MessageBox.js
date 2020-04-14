import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MessageLeft from './MessageLeft';
import MessageRight from './MessageRight';
import { Provider } from './Context';
// 拦截
axios.interceptors.response.use(function(res) {
  if (res.data.code === 1) {
    return res.data;
  } else {
    return Promise.reject(res);
  }
});

export default class MessageBox extends Component {
  state = {
    lists: [],
    total: 0
  }
  // fetch
  async componentDidMount () {
    let { data } = await axios.get('/list.json');
    this.setState({
      lists: data
    });
  }
  handleClick = (val) => {
    this.setState({
      total: this.state.total + val
    });
  }
  resetClick = () => {
    this.setState({
      total: 0
    });
  }
  render() {
    // 提供的值必须是value
    return (<Provider value={{ r: this.resetClick }}>
      <div className="container">
        <div className="panel panel-danger">
          <div className="panel-heading">
            列表点赞
          </div>
          <div className="panel-body">
            <MessageRight lists={this.state.lists} fn={this.handleClick}></MessageRight>
          </div>
          <div className="panel-footer">
            <MessageLeft total={this.state.total}></MessageLeft>
          </div>
        </div>
      </div>
    </Provider>)
  }
}