import React from 'react';

export default class VoteFooter extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return <div className='panel-footer'>
        <button className='btn btn-success' onClick={() => {
          this.props.callBack('support')
        }}>
          支持
        </button>&nbsp;&nbsp;
        <button className='btn btn-danger' onClick={() => {
          this.props.callBack('against');
        }}>
          反对
        </button>
    </div>
  }
}