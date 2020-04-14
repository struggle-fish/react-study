import App from './App';
import Home from './containers/Home';
import Translation from './containers/Translation';
import NotFound from './containers/NotFound';
// export default (
//   <div>
//     <Route path="/" exact component={Home}></Route>
//     <Route path="/login" exact component={Login}></Route>
//   </div>
// )


export default [
  {
    path: '/',
    component: App,
    loadData: App.loadData,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        key: 'home',
        loadData: Home.loadData // 服务端提前异步获取数据
      },
      {
        path: '/translation',
        component: Translation,
        exact: true,
        key: 'translation',
        loadData: Translation.loadData // 服务端提前异步获取数据
      },
      {
        component: NotFound
      }
    ]
  }
];
