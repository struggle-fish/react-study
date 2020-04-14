import render from './render';
let express = require('express');
import proxy from 'express-http-proxy';
let app = express();

app.use(express.static('public'));
// 访问的/api 则交给代理服务器处理 代理到api服务器
app.use('/api', proxy('http://127.0.0.1:7777', {
  proxyReqPathResolver(req) {
    return `/api${req.url}`;
  }
}));

app.get('*', function(req, res){
  render(req, res);
});

app.listen(3008, function() {
  console.log('服务启动了---prot: 3008');
});