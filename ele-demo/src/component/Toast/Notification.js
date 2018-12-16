import React from 'react'
import ReactDOM from 'react-dom'
import Notice from './Notices'
import styles from './Toast.less'

const prefixCls = 'notification'
let noticeNumber = 0
const getUuid = () => `notification-${+new Date()}-${noticeNumber++}`

export default class Notification extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notices: [], // 存放notices
      hasMask: true // 是否显示遮罩层
    }
  }
  // 创建noticeDom
  getNoticeDOM = () => {
    const { notices } = this.state;
    return notices.map((notice) => {
      return <Notice key={notice.key} {...notice}></Notice>
    })
  }
  // 创建mask
  getMaskDOM = () => {
    const { notices, hasMask } = this.state;
    // notices 不为空 && 始终只显示一个mask
    if (notices.length && hasMask) {
      return <div className={styles.mask}></div>
    }
  }
  // 添加notice方法
  add = (notice) =>{
    const key = notice.key || getUuid();
    const mask = notice.mask || false;
    // 排除重复因素后在添加
    this.setState((preState) => {
      const { notices } = preState;
      if (!notices.find(v => v.key === key)) {
        return {
          notices: [...notices, { ...notice, key }],
          hasMask: mask
        };
      }
    })
  }
  // 移除notice
  remove = (key) => {
    this.setState((preState) => {
      return {
        notices: preState.notices.filter(v => v.key === key)
      }
    });
  }
  render () {
    const noticeDOM = this.getNoticeDOM();
    const maskDOM = this.getMaskDOM()
    return (
      <div className={styles[`${prefixCls}-container`]}>
        {maskDOM}
        <div className={styles[`${prefixCls}-box`]}>
          {noticeDOM}
        </div>
      </div>
    )
  }
};
/**
 * Notification 静态类方法，用于创建Notification组件
 * properties 需要传递给Notification的props
 * callback 回调函数
 * */ 
Notification.newInstance = (properties, callback) => {
  const { ...props } = properties || {};
  const div = document.createElement('div');
  document.body.appendChild(div);
  let called = false;
  function ref(notification) {
    if (called) {
      return;
    }
    called = true;
    callback({
      notice(noticeProps) {
        notification.add(noticeProps);
      },
      removeNotice(key) {
        notification.remove(key);
      },
      destory() {
        ReactDOM.unmountComponentAtNode(div);
        div && div.parentNode.removeChild(div)
      }
    })
  }
  ReactDOM.render(<Notification {...props} ref={ref}/>, div);
};

