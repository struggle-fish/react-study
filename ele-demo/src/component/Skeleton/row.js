import React from 'react';
import styles from './index.less';

export default class RowSk extends React.PureComponent {
  render() {
    return (
      <div className={styles.row} style={this.props.style || {}}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div className={styles.desc}></div>
          <div className={styles.desc}></div>
          <div className={styles.desc}></div>
          <div className={styles.desc}></div>
        </div>
      </div>
    )
  }
}