import React from 'react';
import { Consumer } from './context';
// 这个写的有问题，暂时没有找到那里的问题，一直报错
export default class Redirect extends React.Component {

  render () {
    return (
      <Consumer>
        {(value) => {
          console.log(value, '匹配不到00000000');
          let { history: {push} } = value;
          push(this.props.to);
          return null
        }}
      </Consumer>
    )
  }
}