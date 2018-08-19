import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Modal } from 'antd';
import md5 from 'blueimp-md5';
import { login } from '../../api/person';

import action from '../../store/action';

const FormItem = Form.Item;

function loginFail() {
  const modal = Modal.error({
    title: '登录失败~',
    content: '请稍后重试'
  });
  setTimeout(() => modal.destroy(), 1000);
}

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.form.validateFields( async(err, values) => {
      if (!err) {
        let { userName, passWord } = values;
        passWord = md5(passWord);
        let result = await login({
          name: userName,
          password: passWord
        });
        if(parseFloat(result.code) === 0) {
          this.props.queryBaseInfo();
          // 登录成功后需要重新获取购买课程信息
          this.props.queryPay();
          this.props.history.go(-1);
          return;
        } else {
          loginFail();
        }
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login-wrap'>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名!' }]
            })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('passWord', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />)}
          </FormItem>
          <FormItem>
            <div className='submit-wrap'>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              <Button type="danger"   className="login-form-button">
                <Link to='/person/register'>注册</Link>
              </Button>
            </div>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(connect(null, {...action.person, ...action.course})(Login));