import React from 'react';
import PropTypes from 'prop-types';
import VoteHead from './VoteHead';
import VoteBody from './VoteBody';
import VoteFotter from './VoteFooter';

export default class Vote extends React.Component {
  constructor(props) {
    super(props);
    // 先初始化更新状态
    let {count: {n, m}} = this.props;
    window.myRedux.updateState(state => {
      return {
        ...state,
        n,
        m
      }
    });
  }
  render () {
    return <section className='panel panel-default'>
      <VoteHead title={this.props.title}></VoteHead>
      <VoteBody></VoteBody>
      <VoteFotter ></VoteFotter>
    </section>
  }
}