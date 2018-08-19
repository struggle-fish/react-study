import * as TYPES from '../action-types';
import { queryBanner, queryList, queryShopCar } from '../../api/course';
// action 里面发起异步请求，发给reducer => 修改state
let course = {
  queryBanner() {
    // 传给reducer的对象
    return {
      type: TYPES.COURSE_QUERY_BANNER,
      payload: queryBanner()
    }
  },
  queryList(payload = {}) {
    let { limit = 10, page = 1, type = 'all', flag = 'push' } = payload;
    return async dispatch => {
      let result = await queryList({
        limit,
        page,
        type
      });
      dispatch({
        type: TYPES.COURSE_QUERY_LIST,
        result,
        courseType: type,
        flag
      });
    }
  },
  queryUnPay() {
    return async dispatch => {
      let result = await queryShopCar(0);
      dispatch({
        type: TYPES.COURSE_UNPAY,
        result
      });
    }
  },
  queryPay() {
    return async dispatch => {
      let result = await queryShopCar(1);
      dispatch({
        type: TYPES.COURSE_PAY,
        result
      });
    }
  },
  handleSelect(mode) {
    // mode: all => 全选或全不选
    return {
      type: TYPES.COURSE_HANDLE,
      mode
    }
  }
};

export default course;