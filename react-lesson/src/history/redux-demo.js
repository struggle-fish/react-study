import React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../components/Counter/Counter';
import Todo from '../components/Todo';


import { Provider } from 'react-redux';
import store from '../store';


ReactDOM.render(<Provider store={store}>
  <>
    <Counter></Counter>
    <Todo></Todo>
  </>
</Provider>, window.root);