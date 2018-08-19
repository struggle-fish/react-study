import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Alert, Button } from 'antd';

class Tip extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return <div>
      <Alert type='warning' 
             message='请登录~'
             description='您还没有登录~请先登录'/>
      <div className='btn-wrap'>
        <Button type='dashed' onClick={ev => {
          this.props.history.push('/person/login');
        }}>立即登录</Button>
        <Button type='dashed' onClick={ev => {
          this.props.history.push('/person/register');
        }}>立即注册</Button>
      </div>
    </div>
  }
}

export default withRouter(connect()(Tip));

