import React from 'react';
import { connect } from 'react-redux';
import cls from 'classnames';
import SvgIcon from '../../component/Icon-Svg';
import withTabBar from '../../component/Tab-Bar';
import NavBar from '../../component/Nav-Bar/Nav-Bar';
import { formatPhone, getImageUrl } from '../../utils';
import styles from './My.less';

@connect(({ globalState }) => ({
  isLogin: globalState.isLogin,
  userInfo: globalState.userInfo
}))
@withTabBar
export default class My extends React.Component {
  changePage = (path) => {
    return this.props.history.push(path);
  }
  render() {
    const {
      userInfo,
      isLogin
    } = this.props;
    const {
      username,
      mobile,
      avatar,
      balance,
      brand_member_new,
      gift_amount
    } = userInfo;
    // 头像
    const avatarUrl = getImageUrl(avatar);
    // 根据登录返回不同ui
    const getItemContent = (icon, style, count, unit) => {
      if (isLogin) {
        return (
          <div className={cls(styles.count, style)}>
            <span>{count}</span>
            <span className={styles.unit}>
              {unit}
            </span>
          </div>
        )
      }
      return (
        <div className={styles.icon}>
          <SvgIcon name={icon}></SvgIcon>
        </div>
      )
    } 
    return (
      <div className={styles.my}>
        <NavBar title="我的" iconLeft="#back" leftClick={() => this.props.history.goBack()}/>
        
        <div className={styles['my-infos']} onClick={!isLogin ? () => this.changePage('/login') : () => this.changePage('logout')}>
          <div className={styles.avatar}>
            {
              avatarUrl ? (
                <img src={avatarUrl} className={styles.img}></img>
              ) : <SvgIcon name="#avatar" className={styles.icon} />
            }
          </div>
          <div className={styles.desc}>
            <p className={styles.info}>
              {
                !isLogin ? '登录/注册' : username
              }
            </p>
            <p className={styles.text}>
              <SvgIcon name='#iphone' className={styles.icon}></SvgIcon>
              <span>
                {
                  !isLogin ? '登录后享受更多特权' : formatPhone(mobile)
                }
              </span>
            </p>
          </div>
          <SvgIcon name='#right' className={styles['icon-right']}></SvgIcon>
        </div>

        <div className={styles.column}>
          <div className={styles.item}>
            {
              getItemContent('#purse', styles.blue, balance, '元')
            }
            <p className={styles.desc}>钱包</p>
          </div>
          <div className={styles.item}>
            {
              getItemContent('#red-packet', styles.red, gift_amount, '个')
            }
            <p className={styles.desc}>红包</p>
          </div>
          <div className={styles.item}>
            {
              getItemContent('#gold', styles.green, brand_member_new, '个')
            }
            <p className={styles.desc}>金币</p>
          </div>
        </div>

        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.icon}>
              <SvgIcon name='#address'></SvgIcon>
            </div>
            <p className={styles.desc}>我的地址</p>
            <SvgIcon name='#right' className={styles['icon-right']}></SvgIcon>
          </div>
        </div>

        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.icon}>
              <SvgIcon name='#point'></SvgIcon>
            </div>
            <p className={styles.desc}>金币商城</p>
            <SvgIcon name='#right' className={styles['icon-right']}></SvgIcon>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <SvgIcon name='#commend'></SvgIcon>
            </div>
            <p className={styles.desc}>分享拿10元现金</p>
            <SvgIcon name='#right' className={styles['icon-right']}></SvgIcon>
          </div>
        </div>

        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.icon}>
              <SvgIcon name='#service'></SvgIcon>
            </div>
            <p className={styles.desc}>我的客服</p>
            <SvgIcon name='#right' className={styles['icon-right']}></SvgIcon>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <SvgIcon name='#elem-icon'></SvgIcon>
            </div>
            <p className={styles.desc}>下载饿了么APP</p>
            <SvgIcon name='#right' className={styles['icon-right']}></SvgIcon>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <SvgIcon name='#rule'></SvgIcon>
            </div>
            <p className={styles.desc}>规则中心</p>
            <SvgIcon name='#right' className={styles['icon-right']}></SvgIcon>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.icon}>
              <SvgIcon name='#service'></SvgIcon>
            </div>
            <p className={styles.desc}>我的客服</p>
            <SvgIcon name='#right' className={styles['icon-right']}></SvgIcon>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <SvgIcon name='#elem-icon'></SvgIcon>
            </div>
            <p className={styles.desc}>下载饿了么APP</p>
            <SvgIcon name='#right' className={styles['icon-right']}></SvgIcon>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <SvgIcon name='#rule'></SvgIcon>
            </div>
            <p className={styles.desc}>规则中心</p>
            <SvgIcon name='#right' className={styles['icon-right']}></SvgIcon>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.icon}>
              <SvgIcon name='#service'></SvgIcon>
            </div>
            <p className={styles.desc}>我的客服</p>
            <SvgIcon name='#right' className={styles['icon-right']}></SvgIcon>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <SvgIcon name='#elem-icon'></SvgIcon>
            </div>
            <p className={styles.desc}>下载饿了么APP</p>
            <SvgIcon name='#right' className={styles['icon-right']}></SvgIcon>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <SvgIcon name='#rule'></SvgIcon>
            </div>
            <p className={styles.desc}>规则中心</p>
            <SvgIcon name='#right' className={styles['icon-right']}></SvgIcon>
          </div>
        </div>

      </div>
    );
  }
}
