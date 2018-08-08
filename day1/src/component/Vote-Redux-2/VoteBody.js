import React from 'react';
import PropTypes from 'prop-types';

export default class VoteBody extends React.Component {

  constructor(props,context) {
    super(props);
    // 获取最新信息
    let {store: {getState}} = this.props;
    let {n, m} = getState();
    this.state = {
      n,
      m
    }
  }
  componentDidMount() {
    let {store: {getState, subscribe}} = this.props;
    // 更新
    let unsubscribe = subscribe(() => {
      let {n, m} = getState();
      this.setState({
        n,
        m
      });
    });
    // unsubscribe(); 把当前追加的方法，解绑
  }
  render () {
    let {n = 0, m = 0} = this.state;
    let rate = (n / (n + m)) * 100;
    isNaN(rate) ? rate = 0 : null;
    return <div className='panel-body'>
        支持人数： <span>{n}</span><br/>
        反对人数： <span>{m}</span><br/>
        支持率 <span>{rate.toFixed(2) + '%'}</span>
    </div>
  }
}