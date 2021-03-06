import React from 'react';
import PropTypes from 'prop-types';


/**
 *  PROVIDER: 当前项目的根组件
 *    1、接收通过属性传递进来的STORE,把STORE挂载到上下文中，这样当前项目中任何一个组件中，想要redux中的store,直接通过上下文获取 
 *    2、在组件的render中，把传递给provider的子元素渲染
 */ 
class Provider extends React.Component {
  // 设置上下文信息类型
  static childContextTypes = {
    store: PropTypes.object
  }
  // 设置上下文信息值
  getChildContext() {
    return {
      store: this.props.store
    }
  }
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return this.props.children;
  }
}


/**
 *  connect 高阶组件（基于高阶函数：柯理化函数）创建的组件就是高阶组件
 *  @PARAMS
 *  mapStateToProps 把redux中的部分状态信息（方法返回内容）挂载到指定组件的属性上
 *  function mapStateToProps (state) {
 *     return {} state 是redux容器中状态属性  return 对象中有啥，就把啥挂载到属性上
 *  }
 *  mapDispatchToProps 回调函数，把一些需要派发到任务方法也挂载到组件属性上
 *  function mapDispatchToProps() {
 *     dispatch: store中的dispatch
 *     return {
 *     }
 *     return 啥就把啥挂载到属性上（返回的方法中有执行dispatch派发任务的操作）
 *  }
 *  @return  connect-hot
 *  返回一个新的函数 
 *    @params
 *      传递进来的是要操作的组件，我们需要把指定的属性和方法挂载到当前组件的属性上
 *    @return
 *    返回一个新的组件proxy(代理组件)，在代理组件中，获取Provider在上下文中存储的store，紧接着获取
 *    store中的state和dispatch，把mapStateToProps，mapDispatchToProps回调函数执行，接收返回的结果
 *    在把这些结果挂载到Component这个要操作的组件的属性上
 * */ 

function connect(mapStateToProps, mapDispatchToProps) {

  return function connectHOT(Component) {
    return class Proxy extends React.Component {
      // => 获取上下文中的store
      static contextTypes = {
        store: PropTypes.object
      }
      // 获取store中的state和dispatch ，把传递的两个回调函数执行，接收返回结果
      constructor(props, context) {
        super(props, context);
        this.state = this.queryMountProps;
        
      }
      // 基于redux中的subscribe向事件池中追加一个方法，当容器中的状态改变，我们需要重新获取最新状态信息，
      // 并且重新把component渲染，把最新的状态信息通过属性传递给component
      componentDidMount() {
        this.context.store.subscribe(() => {
          this.setState(this.queryMountProps());
        })
      }
      // 渲染Component组件，并且把获取到的信息挂载到组件属性上
      render() {
        return <Component {...this.state}/>
      }
      // 从redux中获取最新的信息，基于回调函数筛选，返回的是需要挂载到组件属性上的信息
      queryMountProps = () => {
        let {store} = this.context;
        let state = store.getState();
        let propsState = typeof mapStateToProps === 'function' ? mapStateToProps(state) : {}
        let propsDispatch = typeof mapDispatchToProps === 'function' ? mapDispatchToProps(store.dispatch) : {}
        return {
          ...propsState,
          ...propsDispatch
        }
      }
    }
  }
}


export {
  Provider
}
