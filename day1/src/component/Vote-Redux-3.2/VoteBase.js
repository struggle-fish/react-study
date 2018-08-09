import React from 'react';
import action from '../../store/action';
import {connect} from 'react-redux';

class VoteBase extends React.Component {
  // constructor(props) {
  //   super(props);
  //   /**
  //    * 真实项目中会把redux容器中的状态信息获取到，赋值给组件的状态或者属性，当redux中状态改变，可以修改组件内部的状态，从而达到重新渲染组件的目的
  //    * */ 
  //   // 初始化
  //   let reduxState = this.props.store.getState().vote;
  //   this.state = {
  //     ...reduxState
  //   }
  // }
  // componentWillMount() {
  //   // 修改数据
  //   // 在第一次加载执行，通过行为派发把redux中的信息赋值给初始值，然后更新组件
  //   this.props.store.dispatch(action.vote.init({
  //     title: '我是小鱼儿',
  //     n: 10,
  //     m: 0
  //   }));
  //   // 更改数据
  //   let reduxState = this.props.store.getState().vote;
  //   this.setState({
  //     ...reduxState
  //   });
  // }
  // componentDidMount() {
  //   // 向发布订阅事件池追加一个方法
  //   this.props.store.subscribe(() => {
  //     let reduxState = this.props.store.getState().vote;
  //     this.setState({...reduxState});
  //   });
  // }
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  componentWillMount() {
    this.props.init({
      title: '小鱼儿~',
      n: 100,
      m: 10
    });
  }
  render() {
    let {title, n, m} = this.props;
    return <div>
        <div className='panel-heading'>
          <h3 className='panel-title'>
            标题: {title}
          </h3>
          <div className='panel-body'>
            支持人数： <span>{n}</span><br/>
            反对人数： <span>{m}</span>
          </div>
      </div>
    </div>
  }
}
// // 把redux容器中状态信息遍历
// let mapStateToProps = (state) => {
//   // 返回的是什么就把他挂载到当前组件属性上
//   return {
//     ...state.vote
//   };
// }
// // 把redux中的dispatch遍历
// let mapDispatchToProps = (dispatch) => {
//   // store中存储的dispatch
//   return {
//     init(initData) {
//       dispatch(action.vote.init(initData))
//     }
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(VoteBase)

export default connect(state => ({...state.vote}), action.vote)(VoteBase);