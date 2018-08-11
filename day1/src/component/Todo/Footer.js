import React from 'react';
import {connect} from 'react-redux';
import action from '../../store/action';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.showData = [
      {
        text: '全部',
        flag: 'all'
      },
      {
        text: '已完成',
        flag: 'complete'
      },
      {
        text: '未完成',
        flag: 'uncomplete'
      }
    ]
  }
  render () {
    let {flag} = this.props;
    return <div className='panel-footer'>
      <ul className='nav nav-pills' onClick={this.updateFilter}>
        {this.showData.map((item, index) => {
          let {text, flag:itemFlag} = item;
          return <li role='presentation'  className={itemFlag === flag ? 'active' : ''} key={index}>
            <a href='javascript:;' flag={itemFlag}>
              {text}
            </a>
          </li>
        })}
      </ul>
    </div>
  }
  updateFilter = ev => {
    let target = ev.target;
    let tarTag = target.tagName;
    if (tarTag === 'LI') {
      target = target.firstElementChild;
      tarTag = target.tagName;
    }
    if (tarTag === 'A') {
      let text = target.getAttribute('flag');
      // let text = 'all';
      // target.innerHTML === '已完成' ? text = 'complete' : null;
      // target.innerHTML === '未完成' ? text = 'uncomplete' : null;
      if (this.props.flag === text) return; // 当前筛选和点击的按钮是一个，不需要更新状态
      this.props.filter(text);
    }
  }

}

export default connect(state => ({
  ...state.todo
}), action.todo)(Footer);