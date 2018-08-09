import React from 'react';
import action from '../../store/action';
import {connect} from 'react-redux';

class VoteHandle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {support, against} = this.props;
    return <div className='panel-footer'>
        <button className='btn btn-success' onClick={() => {
          support()
        }}>支持</button>&nbsp;&nbsp;
        <button className='btn btn-danger' onClick={() => {
          against()
        }}>反对</button>
    </div>
  }
}

export default connect(state => ({...state.vote}), action.vote)(VoteHandle)