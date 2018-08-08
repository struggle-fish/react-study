import React from 'react';
import PropTypes from 'prop-types';

export default class VoteBody extends React.Component {
  // 子组件中设置上下文类型
  static contextTypes = {
    n: PropTypes.number,
    m: PropTypes.number
  }
  constructor(props,context) {
    super(props);
  }
  render () {
    let {m, n} = this.props.count;
    console.log(this.props.count);
    let rate = ((n/(n+m)) * 100).toFixed(2) + '%';
    return <div className='panel-body'>
        支持人数： <span>{n}</span><br/>
        反对人数： <span>{m}</span><br/>
        支持率 <span>{rate}</span>
    </div>
  }
}