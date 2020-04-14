import React from 'react';
import ReactDOM from 'react-dom';
import actions from '../store/action/counter'
import { connect } from '../../../history/react-redux';

class Counter extends React.Component {
  render () {
    return (
      <div>
        {this.props.number}
        <button onClick={() => {
          this.props.add(2);
        }}>+</button>
        <button onClick={() => {
          this.props.minus(3);
        }}>-</button>
      </div>
    )
  }
}

// let mapStateToProps = (state) => {
//   return {
//     ...state
//   }
// }
// let mapDispatchToProps = (dispatch) => {
//   return {
//     add: (v) => dispatch(actions.add(v)),
//     minus: (v) => dispatch(actions.minus(v))
//   }
// }

export default connect((state)=> ({...state}), actions)(Counter);
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);