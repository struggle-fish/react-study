import React from 'react';
import {connect} from 'react-redux';
import action from '../../store/action';

class Head extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    // 筛选未完成数量
    let {data} = this.props;
    let len = data.filter(item => (parseFloat(item['state']) === 0)).length;
    return <div className='panel-heading'>
      <h3 className='panel-title'>
        任务列表【当前未完成任务数 <span className='count'>{len}</span>】
      </h3>
      <input type='text' className='form-control' placeholder='请输入任务' onKeyUp={this.keyUp}/>
    </div>
  }
  // 向redux容器中追加一条新的任务
  keyUp = (ev) => {
    if (ev.keyCode === 13) {
      let value = ev.target.value.trim();
      if (value.length === 0) return;
      this.props.add({
        name: value,
        state: 0
      });
      ev.target.value = '';
    }
  }
}

export default connect(state => ({
  ...state.todo
}), action.todo)(Head);