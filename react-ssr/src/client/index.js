import React from 'react';
import ReactDOM from 'react-dom';
import routes from '../routes'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Header';
import { Provider } from 'react-redux';
import { getClinentStore } from '../store'
// renderRoutes 渲染多级路由
import { renderRoutes, matchRoutes } from 'react-router-config';
ReactDOM.hydrate(
  <Provider store={getClinentStore()}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>, document.getElementById('app'));
