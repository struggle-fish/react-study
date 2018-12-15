import React from 'react';
import { connect } from 'react-redux';
import SvgIcon from '../../component/Icon-Svg';
import withTabBar from '../../component/Tab-Bar';
import styles from './My.less';
import NavBar from '../../component/Nav-Bar/Nav-Bar';


@connect()
@withTabBar
export default class My extends React.Component {
  render() {
    return (
      <div className={styles.my}>
        <NavBar title="我的" iconLeft="#back" leftClick={() => this.props.histroy.goBack()}/>
        
        <div className={styles['my-infos']}>
          <div className={styles.avatar}>
            <SvgIcon name="#avatar" className={styles.icon} />
          </div>
          <div className={styles.desc}>
            <p className={styles.info}>
              登录/注册
            </p>
            <p className={styles.text}>
              <SvgIcon name='#iphone' className={styles.icon}></SvgIcon>
              <span>登录后享受更多特权</span>
            </p>
          </div>
          <SvgIcon name='#right' className={styles['icon-right']}></SvgIcon>
        </div>

        <div className={styles.column}>
          <div className={styles.item}>
            <div className={styles.icon}>
              <SvgIcon name='#purse'></SvgIcon>
            </div>
            <p className={styles.desc}>钱包</p>
          </div>
          <div className={styles.item}>
          <div className={styles.icon}>
              <SvgIcon name='#red-packet'></SvgIcon>
            </div>
            <p className={styles.desc}>红包</p>
          </div>
          <div className={styles.item}>
          <div className={styles.icon}>
              <SvgIcon name='#gold'></SvgIcon>
            </div>
            <p className={styles.desc}>金币</p>
          </div>
        </div>

        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.icon}>
              <SvgIcon name='#carrot'></SvgIcon>
            </div>
            <p className={styles.desc}>我的地址</p>
            <SvgIcon name='#right' className={styles['icon-right']}></SvgIcon>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <SvgIcon name='#elem-icon'></SvgIcon>
            </div>
            <p className={styles.desc}>下载饿了么APP</p>
            <SvgIcon name='#right' className={styles['icon-right']}></SvgIcon>
          </div>
        </div>

      </div>
    );
  }
}
