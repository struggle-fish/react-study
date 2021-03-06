import React from 'react';

export default class VoteFooter extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return <div className='panel-footer'>
        <button className='btn btn-success' onClick={() => {
          window.myRedux.updateState((state) => {
            let {n = 0} = state;
            return {
              n: n + 1
            }
          });
        }}>
          支持
        </button>&nbsp;&nbsp;
        <button className='btn btn-danger' onClick={() => {
          window.myRedux.updateState((state) => {
            let {m = 0} = state;
            return {
              m: m + 1
            }
          });
        }}>
          反对
        </button>
    </div>
  }
}