import * as types from '../action-types';
import axios from 'axios';
export default {
  getHomeList () {
    return (dispatch, getState, request) => {
      // 如果是服务端读取数据，则直接访问api服务器 7777
      // 如果是客户端，则要访问3008的node服务器，让node服务器，转发到api服务器
      return request.get('/api/users').then((result)=> {
        let list = result.data;
        dispatch({
          type: types.SET_HOME_LIST,
          payload: list
        });
      })
    }
  }
}