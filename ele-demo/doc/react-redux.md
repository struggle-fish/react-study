### redux基本用法

```
const reducer = (state = {count: 0}, action) => {
  switch (action.type){
    case 'INCREASE': return {count: state.count + 1};
    case 'DECREASE': return {count: state.count - 1};
    default: return state;
  }
}

const actions = {
  increase: () => ({type: 'INCREASE'}),
  decrease: () => ({type: 'DECREASE'})
}

const store = createStore(reducer);

store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(actions.increase()) // {count: 1}
store.dispatch(actions.increase()) // {count: 2}
store.dispatch(actions.increase()) // {count: 3}


```
通过 reducer 创建一个 store，每当我们在 store 上 dispatch 一个 action，store 内的数据就会相应地发生变化。

### react-redux
首先在最外层容器中，把所有内容包裹在 Provider 组件中，将之前创建的 store 作为 prop 传给 Provider。

```
ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
</Provider>, window.root);

```

Provider 内的任何一个组件（比如这里的 App），如果需要使用 state 中的数据，就必须是被 connect 过的组件。