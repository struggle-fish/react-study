import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store';
import { reducer as headerReducer } from '../components/Header/store';
import { reducer as translationReducer } from '../containers/Translation/store';
import clientAxios from '../client/request';
import serverAxios from '../server/request';
// const reducer = (state = {name: 'dell'}, action) => {
//   return state;
// }

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  translation: translationReducer
});

export const getStore = (req) => {
  // 服务器端 改变服务端store的内容，那么就一定要使用serverAxios
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))));
};

export const getClientStore = () => {
  const defaultState = window.context.state;
  // 改变客户端store 那么一定要使用clientAxios
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
}

// 此处是单例的store
// const store = createStore(reducer, applyMiddleware(thunk));
