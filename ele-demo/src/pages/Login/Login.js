import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SvgIcon from '../../component/Icon-Svg';
import Toast from '../../component/Toast/Toast';
import styles from './Login.less';
import { checkMobile } from '../../utils';
import { globalUpdate } from '../../store/moudules/global';
import { mobileSendCode, mobileCaptchas, loginByMobile, getUserInfo } from '../../api';


@connect(()=>({}), dispatch => bindActionCreators({
  globalUpdate
}, dispatch))
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      phone: '',
      code: '',
      time: 0,
      validate_token: '',
      captchaVisible: false,
      captcha_hash: '',
      captcha_value: '',
      captcha_img: ''
    }
  }
  componentDidMount() {
  }
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  handleLogin = async() => {
    const { phone, code, validate_token } = this.state;
    if (!phone) {
      return Toast.info('请填写手机号');
    }
    if (!code) {
      return Toast.info('请填写验证码');
    }
    try {
      Toast.loading('登录中....', 0);
      const login = await loginByMobile({
        'mobile': phone,
        'validate_code': code,
        'validate_token': validate_token
      });
      const { data } = await getUserInfo();
      console.log(data, 'getUserInfo-ajax');
      Toast.hide();
      if (data) {
        this.props.globalUpdate({
          isLogin: true,
          userInfo: data
        });
        this.props.history.goBack();
      }
    } catch({ err }) {
      this.props.globalUpdate({
        isLogin: false,
        userInfo: {}
      });
      Toast.info(err);
    }
  }
  // 更新状态
  changeState = (v, key) => {
    this.setState({
      [key]: v.target.value
    });
  }
  // 获取验证码
  getCode = async (captcha = false) => {
    const {
      phone,
      time,
      captcha_hash,
      captcha_value
    } = this.state;
    if (time > 0 && !captcha) {
      return;
    }
    if (!phone) {
      return Toast.info('请填写手机号');
    }
    if (!checkMobile(this.state.phone)) {
      return Toast.info('请填写正确的手机号');
    }
    // 获取验证码
    try {
      const { data } = await mobileSendCode({
        mobile: phone,
        captcha_hash,
        captcha_value
      });
      let count = 60;
      this.setState({
        time: count,
        validate_token: data['validate_token'],
        captchaVisible: false,
        captcha_hash: '',
        captcha_value: '',
        captcha_img: ''
      });
      this.timer = setInterval(() => {
        if (count > 0) {
          count--;
          this.setState({
            time: count
          });
        } else {
          clearInterval(this.timer);
          this.timer = null;
        }
      }, 1000);
    } catch({ err, name }) {
      console.log(err, name, '验证码');
      if (name === 'NEED_CAPTCHA' || name === 'CAPTCHA_CODE_ERROR') {
        if (name === 'CAPTCHA_CODE_ERROR') {
          Toast.info(err);
        }
        this.getCaptchas();
      } else {
        Toast.info(err);
      }
    }
  }
  // 图形验证码
  getCaptchas = () => {
    console.log('哈哈错了验证码');
    // try {
    //   const { data } = await mobileCaptchas
    // } catch({ err }) {
    //   Toast.info(err);
    // }
  }
  render() {
    const {
      phone,
      code,
      time,
      captchaVisible,
      captcha_value,
      captcha_img
    } = this.state;
    return (
      <div className={styles['login-wrapper']}>

        <div className={styles.logo}>
          <SvgIcon name='#logo'></SvgIcon>
        </div>
        <div className={styles.form}>
          <div className={styles.item}>
            <input type='tel' maxLength={11} value={phone} placeholder='手机号' onChange={v => this.changeState(v, 'phone')}></input>
            <button className={styles['code-btn']} onClick={this.getCode}>
              { time > 0 ? `${time}秒后获取` : '获取验证码'}
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