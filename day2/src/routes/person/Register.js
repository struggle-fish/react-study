import React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Button, Input, Row, Col, Modal } from 'antd';
import md5 from 'blueimp-md5';
import { register } from '../../api/person'
import action from '../../store/action';
const FormItem = Form.Item;

function loginFail() {
  const modal = Modal.error({
    title: '注册失败~',
    content: '请稍后重试'
  });
  setTimeout(() => modal.destroy(), 1000);
}

class Register extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll( async(err, values) => {
      if (!err) {
        values.password =  md5(values.password);
        let result = await register(values);
        if (parseFloat(result.code) === 0) {
          this.props.history.push('/person');
          this.props.queryBaseInfo();
          return;
        } else {
          loginFail();
        }
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      }
    };
    return <section className='personLoginBox'>
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label='用户名'>
          { getFieldDecorator('name', {
            rules: [{
              required: true, message: '请填写用户名~',
            }]
          })(<Input/>) }
        </FormItem>
        <FormItem {...formItemLayout} label='邮箱'>
          { getFieldDecorator('email', {
            rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              },{
                required: true, message: '请填写邮箱~',
            }]
          })(<Input/>) }
        </FormItem>
        <FormItem {...formItemLayout} label='手机'>
          { getFieldDecorator('phone', {
            rules: [{
              required: true, message: '请输入手机号~',
            }]
          })(<Input/>) }
        </FormItem>
        <FormItem {...formItemLayout} label='密码'>
          { getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入密码~',
            }]
          })(<Input type='password'/>) }
        </FormItem>
        <FormItem >
          <Button type='primary' htmlType="submit">立即注册</Button>
        </FormItem>
      </Form>
    </section>
  }
}

// export default connect()(Register)
export default Form.create(null, action.person)(connect()(Register));
