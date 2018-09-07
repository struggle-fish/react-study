import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  withCredentials: true // 跨域携带证书
});
// 成功状态码
const successCode = 0;
const errorMessage =  '页面溜走了，请稍候重试';

export default class HttpUtil {
  static get(url, params = {}) {
    return new Promise((resolve, reject) => {
      instance.get(url, { params }).then(({ data }) => {
        if (data.code === successCode) {
          const { result } = data;
          resolve({ data: result });
        } else {
          reject({ err: data.errmsg, name: data.name || '' });
        }
      }).catch((err) => {
        reject({ err: JSON.stringify(err), message: errorMessage });
      });
    });
  }
  static post(url, params = {}) {
    return new Promise((resolve, reject) => {
      instance.post(url, { data: params }).then(({ data }) => {
        if (data.code === successCode) {
          const { result } = data;
          resolve({ data: result });
        } else {
          reject({ err: data.message, name: data.name || '' });
        }
      }).catch((err) => {
        reject({ err: JSON.stringify(err), message: errorMessage });
      });
    });
  }
}