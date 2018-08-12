import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

// antd
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

// redux-store
import store from './store';

// css
import './static/css/reset.min.css';
import './static/css/common.less';

// 组件
import NavTop from './component/NavTop';
import NavBottom from './component/NavBottom';
import Home from './routes/Home';
import Mycourse from './routes/Mycourse';
import Person from './routes/Person';


ReactDOM.render(<Provider store={store}>
  <HashRouter>
    <LocaleProvider locale={zh_CN}>
      <div>
        <NavTop></NavTop>
        <div className='container'>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/course' exact component={Home}></Route>
            <Route path='/mycourse' component={Mycourse}></Route>
            <Route path='/person' component={Person}></Route>
            <Redirect to='/?from=404'></Redirect>
          </Switch>
        </div>
        <NavBottom></NavBottom>
      </div>
    </LocaleProvider>
  </HashRouter>
</Provider>, window.root);
