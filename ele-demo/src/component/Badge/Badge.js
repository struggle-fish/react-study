import React from 'react';
import cls from 'classnames';
import styles from './Badge.less';


export default ({ text, className, style }) => (
  <span className={cls(styles.badge, className)} style={style} >{text}</span>
)