import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store';
import './static/css/bootstrap.css';
import './static/less/todo.less';


import Head from './component/Todo/Head'
import Body from './component/Todo/Body'
import Footer from './component/Todo/Footer'


ReactDOM.render(<Provider store={store}>
  <div className='panel panel-default'>
    <Head></Head>
    <Body></Body>
    <Footer></Footer>
  </div>
</Provider>,window.root);