import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './pages';



ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
</Provider>, window.root);