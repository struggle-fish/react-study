import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Vote from './component/Vote/Vote';

import './static/css/bootstrap.css';

ReactDOM.render(<div>
  <Vote title={'辣鸡'} count={{
    n: 100,
    m: 78
  }}></Vote>
</div>,window.root);