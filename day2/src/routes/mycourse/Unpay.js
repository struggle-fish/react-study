import React from 'react';
import { connect } from 'react-redux';
import action from '../../store/action';
import { Alert, Button } from 'antd';
import CourseItem from './CourseItem';
import { removeShopCar, payShopCart } from '../../api/course';
import { checkLogin } from '../../api/person';
class Unpay extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  handleRemove = () => {
    // 获取所有选中的id
    let selectIDList = [];
    this.props.shopCart.unpay.forEach(item => {
      if (item.check) {
        selectIDList.push(item.id);
      }
    });
    // 如果没有选中的不用往下执行
    if (selectIDList.length === 0) {
      alert('没有要删除的~');
      return;
    }
    // => 根据id发送删除的请求
    selectIDList = selectIDList.map(courseID => {
      return removeShopCar(courseID);
    })
    Promise.all(selectIDList).then(() => {
      this.props.queryUnPay(); // 更新redux中数据信息
    });
  }
  handlePay = async() => {
    // 验证当前是否登录
    let result = await checkLogin();
    if (parseFloat(result.code) !== 0) {
      alert('请先登录');
      return;
    }
    // 获取所有选中的storeID
    let selectIDList = [];
    this.props.shopCart.unpay.forEach(item => {
      if (item.check) {
        selectIDList.push(item.storeID);
      }
    });
    // 如果没有选中的不用往下执行
    if (selectIDList.length === 0) {
      alert('没有要删除的~');
      return;
    }
    // => 根据id发送删除的请求
    selectIDList = selectIDList.map(storeID => {
      return payShopCart(storeID);
    })
    Promise.all(selectIDList).then(() => {
      this.props.queryUnPay(); // 更新redux中数据信息
      this.props.queryPay();
    });

  }
  render() {
    let {unpay} = this.props.shopCart;
    if (unpay.length === 0) {
      return <Alert description='当前还没有购买任何课程~' style={{'marginTop': '.2rem'}}></Alert>
    }
    return <div>
      <div style={{'marginTop': '.2rem'}}>
        <input type='checkbox' checked={this.props.selectAll} onChange={this.props.handleSelect.bind(this, 'all')}/>全选/全不选
        <Button type='dashed' onClick={this.handleRemove}>删除</Button>&nbsp;&nbsp;&nbsp;
        <Button type='dashed' onClick={this.handlePay}>支付</Button>
      </div>
      <ul className='courseItem'>
      {
        this.props.shopCart.unpay.map((item, index) => {
          return <CourseItem key={index} item={item} input={true}></CourseItem>
        })
      }
    </ul>
    </div>
  }
}

export default connect(state => ({...state.course}), action.course)(Unpay);
