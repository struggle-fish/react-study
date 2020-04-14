import express from 'express';
import proxy from 'express-http-proxy';
import { render } from './utils';
import { getStore } from  '../store';
import routes from '../Routes';
import { matchRoutes } from 'react-router-config';
const app = express();

app.use(express.static('public')); // 静态文件访问
// 配置中间层代理
// http://10.168.99.77
// http://rap2api.taobao.org/app/mock/167389/
app.use('/api', proxy('rap2api.taobao.org', {
  proxyReqPathResolver: function(req) {
    // console.log(req.url, '请求的接口===========');
    return `/app/mock/167389/api${req.url}`;
  }
}));
app.get('*', function (req, res) {
  const store = getStore(req);
  // 在这里如果能拿到异步数据并填充到store中
  // store中填充什么，需要结合当前用户请求地址和路由做判断
  const matchedRoutes = matchRoutes(routes, req.path);
  // 让matchRoutes里面所有的组件，对应的loadData方法执行一次
  const promises = [];
  // 一个页面要加载 A B C D四个组件， 这个四个组件都需要服务端渲染加载数据
  //  假设A组件加载数据错误 promises 永远会执行成功
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve);
      });
      promises.push(promise);
    }
  });
  // console.log(promises, 'promises======');
  // 当所有数据准备好后执行
  Promise.all(promises).then(() => {
    const context = {
      css: []
    };
    const html = render(store, routes, req, context);
    console.log(context, 'context');
    if (context.action === 'REPLACE') {
      res.redirect(301, context.url);
    } else {
      if (context.NOT_FOUND) {
        res.status(404);
      } else {
      }
      res.send(html);
    }
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});