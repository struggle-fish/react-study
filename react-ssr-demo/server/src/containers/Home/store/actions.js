import { CHANGE_LIST } from './constants';

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = (server) => {
  // http://10.168.99.77/api/car/review/friend/sign/list

  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/newsList2')
    .then((res) => {
      const list = res.data.result.lists;
      dispatch(changeList(list));
    });
  }
};
