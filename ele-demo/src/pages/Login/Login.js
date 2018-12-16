import React from 'react';
import SvgIcon from '../../component/Icon-Svg';
import Toast from '../../component/Toast/Toast';
import styles from './Login.less';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      phone: '',
      code: ''
    }
  }
  componentDidMount() {
  }
  handleLogin = () => {
    const { phone, code } = this.state;
    Toast.info('成功了');
    if (!phone || !code) {
      return;
    }
  }
  changeState = (v, key) => {
    this.setState({
      [key]: v.target.value
    });
  }
  render() {
    const {
      phone,
      code
    } = this.state;
    return (
      <div className={styles['login-wrapper']}>

        <div className={styles.logo}>
          <SvgIcon name='#logo'></SvgIcon>
        </div>
        <div className={styles.form}>
          <div className={styles.item}>
            <input type='tel' maxLength={11} value={phone} placeholder='手机号' onChange={v => this.changeState(v, 'phone')}></input>
            <button className={styles['code-btn']}>
              获取验证码
            </button>
          </div>
          <div className={styles.item}>
            <input type='tel' maxLength={8}  value={code} placeholder='验证码' onChange={v => this.changeState(v, 'code')}></input>
          </div>
        </div>
        <p className={styles.desc}>
          新用户登录即自动注册，并表示已同意<span>《用户服务协议》</span>
        </p>
        <button className={styles['login-btn']} onClick={this.handleLogin}>
          登录
        </button>

        {/* 图形验证码 */}

      </div>
    )
  }
}