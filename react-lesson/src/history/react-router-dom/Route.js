import React from 'react';
import { Consumer } from './context';
import pathToRegExp from 'path-to-regexp';
export default class Route extends React.Component {
  render () {
    return (
      <Consumer>
        {
          (value) => {
            let {location: {pathname}} = value;
            let props = {...value, match: null};
            let {path = '/', component: Component, exact = false, render, children} = this.props;
            console.log(children, '234234children');
            let keys = [];
            let reg = pathToRegExp(path, keys, { end:  exact});
            if (reg.test(pathname)) {
              // 如果匹配到 需要看看有没有路径参数
              let [, ...args] = pathname.match(reg);
              keys = keys.map(k => k.name);
              let params = keys.reduce((memo, key, index) => (memo[key]=args[index], memo), {});
              props.match = {params};
              if (Component) {
                return <Component {...props}></Component>
              } else if (render) {
                return render(props);
              } else if (children) {
                return children(props);
              }
              
            } else {
              console.log(children, 'childrenchildren');
              if (children) {
                return children(props);
              }
              return null;
            }
          }
        }
      </Consumer>
    )
  }
}