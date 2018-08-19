import axios from 'axios';
import QS from 'qs';

// axios.defaults.baseURL = 'http://localhost:8009'; // 同意前缀提取
axios.defaults.withCredentials = true; // 允许跨域，并且允许携带cookie
axios.defaults.transformRequest = (data = {}) => QS.stringify(data); // 所有post 请求主体传递给服务器的内容统一处理为 x-www-url-endoced格式
axios.interceptors.response.use(result => result.data); // 只返回响应主体

export default axios;
