
function createStore(reducer) {
  let state;
  let listeners = [];
  // 将状态抽离出去，不能直接更改
  let getState = () => JSON.parse(JSON.stringify(state));
  let dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(fn => fn());
  }
  
  // 订阅发布
  let subscribe = (fn) => {
    listeners.push(fn);
    return () => {
      // 解绑
      listeners = listeners.filter(l => fn !== l);
    }
  }
  dispatch({ type: '@INIT' }); // 内部先调用下disptach 传递action
  return {
    getState,
    dispatch,
    subscribe
  }
}


let initState = {
  title: { content: '你好', color: 'red' },
  content: { content: '哈哈', color: 'green' }
};


function reducer(state = initState, action) { // 参数有两个，用户派发的动作，第二就是当前组件的状态
  switch(action.type) {
    case 'CHANGE_TITLE_COLOR':
      return {...state, title: {...state.title, color: action.color}}
    case 'CHANGE_CONTENT_CONTENT':
      return {...state, content: {...state.content, content: action.content}}
  }
  return state;
}
let store = createStore(reducer);
store.subscribe(renderApp);
let unsub = store.subscribe(() => console.log('更新了///////'));
setTimeout(() => {
  store.dispatch({ type: 'CHANGE_TITLE_COLOR' , color: 'pink'});
}, 1000);
setTimeout(() => {
  unsub();
  store.dispatch({ type: 'CHANGE_CONTENT_CONTENT' , content: '新的内容'});
}, 2000);

function renderTitle() { 
  let title = document.getElementById('title');
  title.innerHTML = store.getState().title.content;
  title.style.background = store.getState().title.color;
}
function renderContent() {
  let content = document.getElementById('content');
  content.innerHTML = store.getState().content.content;
  content.style.background = store.getState().content.color;
}

function renderApp() { 
  renderTitle();
  renderContent();
}
renderApp()