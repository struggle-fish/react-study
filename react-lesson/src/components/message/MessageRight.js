import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MessageItem from './MessageItem';
export default class MessageRight extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="list-group">
        {this.props.lists.map((list, key) => (
          <MessageItem list={list} key={key} fn={this.props.fn}></MessageItem>
        ))}
      </ul>
    )
  }
}