import React from 'react';
import { connect } from 'react-redux';
import actions from '../../store/actions/counter';
class Counter extends React.Component {
  render() {
    return (
      <div>
        <p>34345-{this.props.number}</p>
        <button onClick={this.props.increment}>+</button>
      </div>
    )
  }
}

Counter = connect(state => state.counter, actions)(Counter);

export default Counter;