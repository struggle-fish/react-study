import axios from 'axios';
// 创建一个axios的实例，配置baseURL的基准路径
export default (req) => axios.create({
  baseURL: 'http://localhost:7777',
  headers: {
    cookie: req.get('cookie') || ''
  }
})
