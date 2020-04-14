import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import { Provider } from '../../history/react-redux';
import Counter from './components/Counter'
window.store = store;


ReactDOM.render(<Provider store={store}>
  <Counter></Counter>
</Provider>, window.root);