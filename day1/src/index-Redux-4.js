import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './static/css/bootstrap.css';
import VoteBase from './component/Vote-Redux-3.2/VoteBase';
import VoteHandle from './component/Vote-Redux-3.2/VoteHandle';

import store from './store';

ReactDOM.render(<Provider store={store}>
    <div className='panel panel-default'>
      <VoteBase ></VoteBase>
      <VoteHandle></VoteHandle>
    </div>
</Provider>,window.root);