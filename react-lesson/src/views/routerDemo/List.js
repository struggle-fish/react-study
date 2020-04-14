import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

export default class List extends React.Component {
  state = {
    lists: []
  }
  componentWillMount() {
    let lists = JSON.parse(localStorage.getItem('users')) || [];
    this.setState({
      lists
    });
  }
  render () {
    
    return (
      <ul className="list-group">
        {this.state.lists.map((list, index) =>(
          <li className="list-group-item"  key={index}>
            <Link to={'/user/detail/' + list.id}>
              {list.name}
            </Link>
          </li>
        ))}
        <li className="list-group-item">
          <Link to={{pathname: '/user/detail', search: '?a=2'}}>测试query</Link>
        </li>
      </ul>
    )
  }
}