import * as types from '../action-types';
export default {
  login (user) {
    return (dispatch, getState, request) => {
      return request.post('/api/login', user).then((result)=> {
        let data = result.data;
        dispatch({
          type: types.SET_SESSION,
          payload: data.data
        });
      })
    }
  },
  logout (user) {
    return (dispatch, getState, request) => {
      return request.get('/api/logout', user).then((result)=> {
        let data = result.data;
        dispatch({
          type: types.SET_SESSION,
          payload: data.data
        });
      })
    }
  },
  getUsers (user) {
    return (dispatch, getState, request) => {
      return request.get('/api/user', user).then((result)=> {
        let data = result.data;
        dispatch({
          type: types.SET_SESSION,
          payload: data.data
        });
      })
    }
  }
}