import axios from 'axios';
import config from '../config';
const createInstance = (req) => axios.create({
  // baseURL: 'http://10.168.99.77'
  baseURL: 'http://rap2api.taobao.org/app/mock/167389',
  headers: {
    cookie: req.get('cookie') || ''
  },
  params: {
    secret: config.secret
  }
});

export default createInstance;