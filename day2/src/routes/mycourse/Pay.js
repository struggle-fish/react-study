import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import action from '../../store/action';
import CourseItem from './CourseItem';
import { checkLogin } from '../../api/person';
import { Alert }  from 'antd';

class Pay extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLogin: false
    }
  }
  async componentDidMount() {
    // 验证是否登录
    let result = await checkLogin();
    if (parseFloat(result.code) === 0) {
      this.setState({
        isLogin: true
      });
    }
  }
  render() {
    if (this.state.isLogin === false) {
      return <Link to='/person/login'>
        <Alert  type='warning' description='还未登录，请登录' ></Alert>
      </Link>
    }
    let {pay} = this.props.shopCart;
    if (pay.length === 0) {
      return <Alert description='当前没购买任何课程，快去购买吧~' style={{'marginTop': '.2rem'}}></Alert>
    }
    return <ul className='courseItem'>
      {
        this.props.shopCart.pay.map((item, index) => {
          return <CourseItem key={index} item={item}></CourseItem>
        })
      }
    </ul>
  }
}

export default connect(state => ({...state.course}), action.course)(Pay);