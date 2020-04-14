import React from 'react';
import { Provider } from './context'

// 在hashRouter中需要提供 history location macth 属性
export default class HashRouter extends React.Component {
  state = {
    location: {
      pathname: window.location.hash ? window.location.hash.slice(1) : '/'
    }
  }
  componentDidMount () {
    // 默认情况下应该记录一个属性，专门用来存放当前路径的
    window.location.hash = window.location.hash ? window.location.hash.slice(1) : '/';
    // hash发生变化，重新设置路径
    window.addEventListener('hashchange', () => {
      this.setState({
        location: {
          ...this.state.location,
          pathname:  window.location.hash ? window.location.hash.slice(1) : '/'
        }
      });
    });
  }
  render () {
    let value = {
      ...this.state,
      history: {
        push(to) {
          if (typeof to === 'object') {
            window.location.hash = to.pathname;
          } else {
            window.location.hash = to;
          }
        }
      }
    }
    return <Provider value={value}>
      {this.props.children}
    </Provider>
  }
}