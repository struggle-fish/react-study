import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './static/css/bootstrap.css';

class Vote extends Component {
  static defaultProps = {
  };
  // 设置默认规则
  static propTypes = {
    title: PropTypes.string.isRequired
  };
  constructor (props) {
    super(props);
    // 初始化默认状态
    this.state = {
      n: 0, // 支持
      m: 0 // 反对
    }
  }
  support = () => {
    this.setState({
      n: this.state.n + 1
    });
  }
  against = () => {
    this.setState({
      m: this.state.m + 1
    });
  }
  render () {
    let {n , m} = this.state;
    let rate = (n + m ) === 0 ? '0%' : ((n / (n+m) * 100 ).toFixed(2) + '%');
    return <section className="panel panel-default" style={{width: '60%', margin: '20px auto'}}>
      <div className="panel-heading">
        <h3 className="panel-title">{this.props.title}</h3>
      </div>
      <div className="panel-body">
        支持人数：{n}
        <br/>
        反对人数： {m}
        <br/>
        支持率：{ rate }
      </div>
      <div className="panel-footer">
        <button className="btn btn-success" onClick={this.support}>支持</button>
        <button className="btn btn-danger" onClick={this.against}>反对</button>
      </div>
    </section>
  }
}

ReactDOM.render(<Vote title="世界杯小组赛法国vs秘鲁，法国必胜！"></Vote>, window.root);