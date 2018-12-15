import React from 'react';
import cls from 'classnames';
import SvgIcon from 'components/Icon-Svg';
import styles from './index.less';
export default (Component) => {
  return class TabBar extends React.Component {
    // 点击跳转
    handleClick = (path) => {
      let { pathname } = this.props.location;
      if (path === pathname) return;
      this.props.history.push(path);
    }
    // 添加高亮状态
    addActive = (name) => {
      let { pathname } = this.props.location; // 获取路由地址
      return cls({
        [styles.item]: true,
        [styles.active]: pathname === name
      });
    }
    render() {
      return (
        <div className={styles['view-root']}>
          <Component {...this.props}/>
          <div className={styles['tab-wrapper']}>
            <a href="javascript:;" className={this.addActive('/home')} onClick={() => this.handleClick('/home')}>
              <SvgIcon className={cls(styles.icon, styles.scale)} name="#elem" />
              <span className={styles.text}>首页</span>
            </a>
            <a href="javascript:;" className={this.addActive('/compass')} onClick={() => this.handleClick('/compass')}>
              <SvgIcon className={cls(styles.icon)} name="#compass" />
              <span className={styles.text}>发现</span>
            </a>
            <a href="javascript:;" className={this.addActive('/order')} onClick={() => this.handleClick('/order')}>
              <SvgIcon className={cls(styles.icon)} name="#form" />
              <span className={styles.text}>订单</span>
            </a>
            <a href="javascript:;" className={this.addActive('/my')} onClick={() => this.handleClick('/my')}>
              <SvgIcon className={cls(styles.icon)} name="#people" />
              <span className={styles.text}>我的</span>
            </a>
          </div>
        </div>
      )
    }
  }
};