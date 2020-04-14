import React from 'react';
import actions from '../../store/actions/counter';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// 在使用redux数据的组件上使用connect
class Counter extends React.Component {
  handleClick = () => {
    this.props.add(3);
  }
  render() {
    return (
      <>
        <p>{this.props.number}</p>
        <button onClick={this.handleClick}>点击增加</button>
      </>
    ) 
  }
}
// let mapStateToProps = (state) => {
//   // 类似于store.getState
//   return {
//     number: state.counter.number
//   }
// }

// let mapDispatchToProps = (dispatch) => {
//   // store.dispatch('action', payload)
//   return {
//     add: (n) => {
//       dispatch(actions.add(n));
//     }
//   }
// }
// connect方法执行两次后，返回的是一个组件
// connect 方法最后一个函数的参数是原来的组件，作用：会把redux中的状态映射到组件上
// mapStateToProps mapDispatchToProps 都是函数
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)


// export default connect((state)=>({...state.counter}), (dispatch)=>bindActionCreators(actions, dispatch))(Counter)
// 如果connect 第一次执行的函数，如果第二个参数是对象类型，会自动调用bindActionCreators来实现
export default connect((state)=>({...state.counter}), actions)(Counter)


// let bindActionCreators = (actions, dispatch) => {
//   let obj = {};
//   for (let key in actions) {
//     obj[key] = (...args)=> dispatch(actions[key](...args))
//   }
//   return obj;
// }








// state = {
//   number: store.getState().counter.number
// }
// handleClick = () => {
//   store.dispatch(actions.add(3))
// }
// componentWillMount() {
//   this.unsub = store.subscribe(() => {
//     this.setState({
//       number: store.getState().counter.number
//     });
//   });
// }
// componentWillUnmount() {
//   this.unsub();
// }