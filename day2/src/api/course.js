import axios from './index';

// banner
export function queryBanner() {
  return axios.get('/course/banner');
}

// 获取课程列表
export function queryList(payload) {
  return axios.get('/course/list', {
    params: payload
  });
}

// 获取课程详情
export function queryInfo(courseID) {
  return axios.get('/course/info', {
    params: {
      courseID
    }
  });
}

// 加入购物车
export function addShopCar(courseID) {
  return axios.post('/store/add', {
    courseID
  });
}
// 从购物车移除
export function removeShopCar(courseID) {
  return axios.post('/store/remove', {
    courseID
  });
}
// 获取最新购物车信息 (已支付、未支付)
export function queryShopCar(state = 0) {
  return axios.get('/store/info', {
    params: {
      state
    }
  });
}

// 支付
export function payShopCart(storeID) {
  return axios.post('/store/pay', {
    storeID
  });
}