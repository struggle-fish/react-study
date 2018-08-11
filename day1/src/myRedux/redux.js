/**
 * createStore 创建redux
 * @return
 *  store: {
 *    getState,
 *    dispatch,
 *    subscribe
 * }
 */
function createStore(reducer) {
  // state不用设置初始值，第一次dispatch执行reducer，state没有值，走的是reducer肿赋值的默认信息
  // 我们自己会在创建容器的时候把dispatch执行一次
  let state;
  let listenAry = [];

  // 基于dispatch实现任务派发
  function dispatch (action) {
    // 1、执行reducer修改容器中的信息
    // 接受reducer的返回值，把返回的信息替换原有的state,注意，是把返回值全部替换state,所以要求reducer在修改状态之前，要把原有的状态信息克隆一份，在进行单个属性修改
    state = reducer(state, action);
    // 2、通知事件池中的方法执行
    for (let i = 0; i < listenAry.length; i++) {
      let item = listenAry[i];
      if (typeof item === 'function') {
        item();
      } else {
        // 删除对象
        listenAry.splice(i, 1);
        i--;
      }
    }
  }
  // 创建容器的时候执行一次dispatch ，目的是把reducer中默认的状态信息赋值给redux容器中的状态
  dispatch({type: '$$INIT_DEFAULT_STATE'});
  // GET-STATE 获取容器中的状态信息
  function getState() {
    // 1、我们需要保证返回的状态信息不能和容器中的state是同一个堆内存（否则外面获取状态信息后直接就可以修改容器中的状态了，这不符合dispatch - reducer才能改状态的规范）
    // 深度克隆
    return JSON.parse(JSON.stringify(state));
  }
  // SUBSCRIBE 向事件池中追加方法
  function subscribe(fn) {
    // 验证是否存过
    let isExit = listenAry.includes(fn);
    !isExit ? listenAry.push(fn) : null;
    // 返回一个方法，执行返回的方法会把当前绑定的方法在事件池中移除掉
    return function unsubscribe() {
      let index = listenAry.indexOf(fn);
      // listenAry.splice(index, 1); // 可能会引发数组塌陷
      listenAry[index] = null;
    }
  }
  return {
    dispatch,
    getState,
    subscribe
  }
}

/**
 *  reducer合并的方法
 *  @params
 *  对象，对象中包含每一个板块对象的reducer => {xxx: fn reducer}
 *  @return
 *  返回的一个新的reducer函数（把这个值赋值给create-store）
 * 
 * 特殊处理：合并reducer之后，redux容器中的state也变为以对应对象管理的模式 => {xxx: {}, ...}
*/
function combineReducers(reducers) {
  // reducers 集合
  
  /*
   * {
   *  vote: function reducer(state = {n: 0, m: 0}, action) {...return state}
   *  ....
   * }
   * 
   */
  //  => dispatch 派发执行的时候，执行的是返回的reducer，返回一个最终的state对象替换原有的state，
  //  而且要包含每个模块的状态信息 {vote: xxx, persional: xxx}
  // 合并reudcer其实就是dispatch 派发的时候，把每一个模块的reducer都单独的执行
  return function reducer(state = {}, action) {
    let newState = {};
    for (let key in reducers) {
      if(!reducers.hasOwnProperty(key)) break;
      // 单独模块的reducer
      // state[key]当前模块在redux容器中存储的信息
      newState[key] = reducers[key](state[key], action);
    }
    // 返回值是当前模块最新状态，把他放过在new-state中
    return newState
  }
}