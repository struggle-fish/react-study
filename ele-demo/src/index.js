import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './pages';

// 引入svg
const requireAll = requireContext => requireContext.keys().map(requireContext);
const reqSvg = require.context('./static/svg', true, /\.svg$/);
requireAll(reqSvg);
ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
</Provider>, window.root);