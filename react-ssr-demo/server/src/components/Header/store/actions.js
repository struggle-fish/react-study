import { CHANGE_LOGIN } from './constants';

const changeLogin = (value) => ({
  type: CHANGE_LOGIN,
  value
})

export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/isLogin')
    .then((res) => {
      // console.log(res);
      // console.log(res.data.result.loginState);
      dispatch(changeLogin(res.data.result.loginState));
    });
  }
};


export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/login')
    .then((res) => {
      // console.log(res);
      console.log(res.data.result, 'login---------25');
      dispatch(changeLogin(res.data.result.login));
    });
  }
}

export const logout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/logout')
    .then((res) => {
      // console.log(res);
      console.log(res.data.result, 'login---------25');
      dispatch(changeLogin(res.data.result.logout));
    });
  }
}