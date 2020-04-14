import * as types from '../action-types';
import _ from 'lodash';
import { groupArr } from '../../utils';
import Toast from '../../component/Toast/Toast'
import { getGeolocation, getEntry, getBanner, getShopList } from '../../api';

// 定义初始化数据，通过action更改state 然后返回一个新的state
const initState = {
  init: false,
  topBarShrink: false,
  locationInfo: {}, // 定位信息
  entryData: [], // 浮球数据
  bannerData: [], // banner数据
  shoplist: [], // 商家列表
  rank_id: undefined
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
      entryData: groupArr(entry.data[0].entries, 10),
      bannerData: banner.data,
      init: true
    }));
  }
}
// https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=39.97100069999999&longitude=116.3221563&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&order_by=5&rank_id=&terminal=h5
// list
export const homeList = (callback) => {
  return async (dispatch, getState) => {
    let { rank_id, locationInfo, shoplist } = getState().home;
    // TODO: 此处有问题，locationInfo 没有数据的时候怎么等到获取到数据在往下走， 目前处理的是在次调用接口
    if (!locationInfo.latitude && !locationInfo.longitude) {
      const getInfo = await getGeolocation();
      locationInfo = getInfo.data;
    }
    const location = {..._.omit(locationInfo, ['address'])};
    try {
      // 调取接口
      const list = await getShopList({
        ...location,
        rank_id: rank_id,
        terminal: 'h5',
        offset: shoplist.length,
        limit: 8,
        extra_filters: 'home',
        extras: ['activities', 'tags']
      });
      // 更改state值
      dispatch(homeUpdate({
        shoplist: [...shoplist, ...list.data.items],
        rank_id: list.data.meta.rank_id
      }));
      callback && callback();
    } catch({ err }) {
      Toast.info(err, 3, false);
    }
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