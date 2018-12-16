import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import SvgIcon from '../Icon-Svg';
import Notification from './Notification';
import styles from './Toast.less';

let messageInstance

const getMessageInstance = (props = {}, callBack) => {
  if (messageInstance) {
    messageInstance.destroy();
    messageInstance = null;
  }
  Notification.newInstance(props, (notification) => {
    callBack && callBack(notification);
  })
}

const notice = (content, duration, mask = true, onClose) => {
  getMessageInstance({}, (notification) => {
    console.log(notification, 'notification__')
    messageInstance = notification;
    notification.notice({
      duration,
      mask,
      content,
      onClose: () => {
        if (onClose) {
          onClose();
        }
        notification.destory();
        messageInstance = null;
      }
    })
  })
}

const WithIcon = ({ name, content, isLoading = false }) => (
  <div className={styles.notice}>
    <SvgIcon className={cls([styles.icon, { [styles.loading]: isLoading }])} name={name}></SvgIcon>
    <p className={styles.desc}>{content}</p>
  </div>
)

WithIcon.propTypes = {
  isLoading: PropTypes.bool,
  name: PropTypes.string,
  content: PropTypes.string
}

export default {
  info: (content, duration, mask = true, onClose) => (notice(content, duration, mask, onClose)),
  success: (content, duration, mask = true, onClose) => (notice(<WithIcon content={content} name='#success'/>, duration, mask, onClose)),
  fail: (content, duration, mask = true, onClose) => (notice(<WithIcon content={content} name='#cry'/>, duration, mask, onClose)),
  loading: (content, duration, mask = true, onClose) => (notice(<WithIcon content={content} name='#refresh' isLoading={true}/>, duration, mask, onClose)),
  hide: () => {
    if (messageInstance) {
      messageInstance.destory();
      messageInstance = null;
    }
  }
}






