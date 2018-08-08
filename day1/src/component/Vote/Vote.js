import React from 'react';
import PropTypes from 'prop-types';
import VoteHead from './VoteHead';
import VoteBody from './VoteBody';
import VoteFotter from './VoteFooter';

export default class Vote extends React.Component {
  static defaultProps = {
    title: '默认标题',
    count: {
      n: 0,
      m: 0
    }
  }
  // 在父组件中 设置规则 上下文中有啥
  static childContextTypes = {
    n: PropTypes.number,
    m: PropTypes.number
  }
  // 获取子组件上下文
  getChildContext() {
    // return 是什么就相当于给子组件上下文设置的是什么
    let {count: {n = 0, m = 0}} = this.props;
    return {
      n,
      m 
    }
  }
  constructor(props) {
    super(props);
    let {count: {n = 0, m = 0}, title} = this.props;
    this.state = {
      n,
      m,
      title
    }
  }
  render () {
    return <section className='panel panel-default'>
      <VoteHead title={this.state.title}></VoteHead>
      <VoteBody count={{n: this.state.n, m: this.state.m}}></VoteBody>
      <VoteFotter callBack={this.handleClick}></VoteFotter>
    </section>
  }
  handleClick = (type) => {
    console.log(type, '类型');
    if (type === 'support') {
      this.setState({
        n: this.state.n + 1
      });
      return;
    }
    this.setState({
      m: this.state.m + 1
    });
  }
}