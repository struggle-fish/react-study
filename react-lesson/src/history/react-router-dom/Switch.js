import React from 'react';
import { Consumer } from './context';
import pathToRegExp from 'path-to-regexp';
// 拿到其中所有的route判断，如果匹配到了就不再匹配了
export default class Switch extends React.Component {

  render () {
    return (
      <Consumer>
        {(value) => {
          let { location: {pathname} } = value;
          let children = this.props.children;
          for (let i = 0; i < children.length; i++) {
            let child = children[i];
            let {path='/', exact = false, component: Component} = child.props;
            let reg = pathToRegExp(path, [], { end: exact });
            if (reg.test(pathname)) {
              return <Component {...value}></Component>
            }
          }
          return null;
        }}
      </Consumer>
    )
  }
}