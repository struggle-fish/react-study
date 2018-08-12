import React from 'react';
import { connect } from 'react-redux';
import QS from 'qs';

class Detail extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    // 问号传参数
    // let {location: {search}, data} = this.props;
    // let customID = QS.parse(search.substr(1)).id || 0;
    // 基于state传参
    let {location: {state}, data} = this.props;
    let customID = state || 0;
    let item = data.find(item => parseFloat(item.id) === parseFloat(customID));
    if (!item) return '当前用户不存在~';
    return <div>
      <span> 编号：{item.id} <br/>姓名：{item.name}</span>
    </div>
  }
}

export default connect(state => ({...state.custom}))(Detail);