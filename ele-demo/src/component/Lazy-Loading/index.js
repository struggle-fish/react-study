import React from 'react';
import science from 'static/img/science.svg';
import styles from './index.less';

export default () => (
  <div className={styles.loading}>
    <div className={styles.icon}>
      <img src={science}/>
    </div>
  </div>
)

