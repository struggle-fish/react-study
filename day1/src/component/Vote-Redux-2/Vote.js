import React from 'react';
import PropTypes from 'prop-types';
import VoteHead from './VoteHead';
import VoteBody from './VoteBody';
import VoteFotter from './VoteFooter';

export default class Vote extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let {store} = this.props;
    return <section className='panel panel-default'>
      <VoteHead title={this.props.title}></VoteHead>
      <VoteBody store={store}></VoteBody>
      <VoteFotter store={store}></VoteFotter>
    </section>
  }
}