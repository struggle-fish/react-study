import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Vote from './component/Vote-Redux-3/Vote';
import store from './store';

import './static/css/bootstrap.css';
 

ReactDOM.render(<div>
  <Vote title='哈哈哈' count={{n: 90, m: 80}} store={store}></Vote>
</div>,window.root);