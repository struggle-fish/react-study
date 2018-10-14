import * as types from '../action-types';
import _ from 'lodash';
import { getGeolocation, getEntry, getBanner } from '../../api';

// 定义初始化数据，通过action更改state 然后返回一个新的state
const initState = {
  init: false,
  locationInfo: {}, // 定位信息
  entryData: [], // 浮球数据
  bannerData: [] // banner数据
};

// action
// 初始化首页
export const homeInit = () => {
  return async (dispatch, getState) => {
    const { init } = getState().home;
    let { locationInfo } = getState().home;
    if (init) return;
    // 获取经纬度
    if (!locationInfo.latitude && !locationInfo.longitude) {
      const getInfo = await getGeolocation();
      dispatch(homeUpdate({
        locationInfo: getInfo.data
      }));
      locationInfo = getInfo.data;
    }
    // 过滤掉 address
    const location = { ..._.omit(locationInfo, ['address']) };
    const [ entry, banner ] = await Promise.all([ getEntry(location), getBanner(location) ]);

    // 派发数据 类似vue commit
    dispatch(homeUpdate({
      entryData: entry.data,
      bannerData: banner.data,
      init: true
    }));
  }
}

export const homeUpdate = (params) => {
  return {
    type: types.HOME_UPDATE,
    payload: params
  }
};



// 更新 state 类似 vue中mutation
export const home = (state = initState, action) => {
  switch(action.type) {
    case types.HOME_UPDATE :
      return {
        ...state,
        ...action.payload
      };
    default:
      return state; // 返回新的 state
  }
};