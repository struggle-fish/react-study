import React from 'react';

export default class VoteBody extends React.Component {

  constructor(props,context) {
    super(props);
    // 获取最新信息
    let {n, m} = this.props.store.getState().vote;
    this.state = {
      n,
      m
    }
  }
  componentDidMount() {
    // 更新
    let unsubscribe = this.props.store.subscribe(() => {
      let {n, m} = this.props.store.getState().vote;
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