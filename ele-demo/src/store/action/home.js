import _ from 'lodash';
import * as types from '../action-types';
import { getGeolocation, getEntry } from '../../api';
let home = {
  // 初始化首页
  homeInit() {
    return async (dispatch, getState) => {
      const { init } = getState().homeReducer;
      let { locationInfo } = getState().homeReducer;
      console.log(locationInfo, '---');
      // 获取经纬度
      if (!locationInfo.latitude && !locationInfo.longitude) {
        const getInfo = await getGeolocation();
        dispatch({
          type: types.HOME_UPDATE,
          payload: { locationInfo: getInfo.data }
        });
        locationInfo = getInfo.data;
      }
      // 过滤掉 address
      const location = { ..._.omit(locationInfo, ['address']) };
      const [ entry ] = await Promise.all([ getEntry(location) ]);
      dispatch({
        type: types.HOME_UPDATE,
        payload: {
          entryData: entry.data
        }
      });

    }
  }
};

export default home;

// action 里面发起异步请求，发给reducer => 修改state
