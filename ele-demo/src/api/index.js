import HttpUtils from './ajax';

// eslint-disable-next-line
const postion = new AMap.Geolocation({
  enableHighAccuracy: true,//是否使用高精度定位，默认:true
  timeout: 10000,          //超过10秒后停止定位，默认：无穷大
  maximumAge: 0,           //定位结果缓存0毫秒，默认：0
  convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
});

// 获取当前定位
export const getGeolocation = () => {
  return new Promise((resolve, reject) => {
    postion.getCurrentPosition((status, result) => {
      if (status === 'complete') {
        resolve({
          data: {
            latitude: result.position.lat,
            longitude: result.position.lng,
            address: result.formattedAddress
          }
        });
      } else {
        reject({
          err: result.message
        });
      }
    });
  });
}

// 首页浮球
export const getEntry = (params) => {
  return HttpUtils.get('/elm/entry', params);
};