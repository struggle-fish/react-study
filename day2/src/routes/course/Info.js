import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { queryInfo, removeShopCar, addShopCar } from '../../api/course';
import QS from 'qs';
import action from '../../store/action';


class Info extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: null,
      isShop: -1 // 是否加入过购物车 -1 没有加入购物车 0已加入未支付 1 已支付
    }
  }
  async componentDidMount() {
    let {location: {search}} = this.props; 
    let { courseID = 0 } = QS.parse(search.substr(1)) || {};
    this.courseID = courseID; // 挂载到实例上
    let result = await queryInfo(courseID);
    if (parseFloat(result.code) === 0) {
      // 校验当前课程状态
      let {pay, unpay} = this.props.shopCart;
      let isShop = -1;
      // 在redux中筛选是否有当前展示的课程，有的话说明已经加入到购物车，没有说明没加入购物车
      unpay.find(item => parseFloat(item.id) === parseFloat(courseID)) ? isShop = 0 : null;

      pay.find(item => parseFloat(item.id) === parseFloat(courseID)) ? isShop = 1 : null;

      this.setState({
        data: result.data,
        isShop
      });
    }
  }
  render() {
    let { data, isShop } = this.state;
    if (!data) return '';
    let {name, price, dec} = data;
    return <div className='baseInfo'>
      <video 
        src='http://hc.yinyuetai.com/uploads/videos/common/7EAE015ABB5FB8D2BBDCEF22BE7003A7.mp4?sc=5151fe0c8f576a55' 
        poster='//img3.c.yinyuetai.com/video/mv/170311/0/3442cd4bfa7217f17e3b70876e2f9b37_240x135.jpg'
        controls preload='none'/>
      <div className='content'>
        <h3>课程名称: {name}</h3>
        <p>课程描述: {dec}</p>
        <span>课程价格: {price}</span>
        {isShop !== 1 ? (<Button type={isShop === -1 ? 'dashed' : ''} onClick={this.handleShopCart}>{isShop === -1 ? '加入购物车' : '从购物车移除'}</Button>) : ''}
      </div>
    </div>
  }
  handleShopCart = async() => {
    // 判断当前状态
    if (this.state.isShop === -1) {
      let result = await addShopCar(this.courseID);
      if (parseFloat(result.code) === 0){
        this.setState({
          isShop: 0
        });
        // 通知未支付更新
        this.props.queryUnPay();
      }
    } else {
      let result = await removeShopCar(this.courseID);
      if (parseFloat(result.code) === 0) {
        this.setState({
          isShop: -1
        });
        // 通知移除购物车更新
        this.props.queryUnPay();
      }
    }
  }
}

export default connect(state => ({...state.course}), action.course)(Info);
