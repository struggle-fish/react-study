import React from 'react';
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route, matchPath } from 'react-router-dom';
import routes from '../routes'
import { Provider } from 'react-redux';
import { getServerStore } from '../store'
import { renderRoutes, matchRoutes } from 'react-router-config';
export default function(req, res){
  let context = {
    name: '江小鱼',
    csses: []
  };
  let store = getServerStore(req);
  // 获取要渲染的组件
  let matchedRoutes = matchRoutes(routes, req.path); //处理嵌套路由
  let promises = [];
  // 不管每个的成功和失败，都变成成功就行
  matchedRoutes.forEach((item => {
    if (item.route.loadData) {
      promises.push(new Promise(function(resolve, reject) {
        return item.route.loadData(store).then(resolve, resolve);
      }));
    }
  }));
  
  Promise.all(promises).then(function() {
    
    // console.log(store.getState(), '+++++#######');
    // 创建仓库的时候，已经有了默认值
    let html = renderToString(<Provider store={store}>
      <StaticRouter context={context} location={req.path}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>); // 编译成字符串
    let cssStr = context.csses.join('\n')
    // console.log(html);
    if (context.action == 'REPLACE') {
      res.redirect(302, context.url);
    } else if (context.notFound) {
      res.statusCode = 404;
    }
    res.send(`
      <html>
        <head>
          <title>react ssr</title>
          <style>${cssStr}</style>
          <link href="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.css" rel="stylesheet">
        </head>
        <body>
          <div id="app">${html}</div>
          <script>
              window.context = {
                state: ${JSON.stringify(store.getState())}
              }
          </script>
          <script src="/client.js"></script>
        </body>
      </html>
    `);
  });
}