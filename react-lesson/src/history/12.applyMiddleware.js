import { createStore, applyMiddleware } from 'redux/src/index';



function M1(store) {
  return function(next) { // =====> MC1
    console.log(next, 'MC1----next'); // next: 2-2
    return function(action) {
      console.log('A middleware1 开始');
      next(action)
      console.log('B middleware1 结束');
    };
  };
}

function M2(store) {
  return function(next) { // =====> MC2
    console.log(next, 'MC2----next'); // next: 3-2
    return function(action) { // 2-2
      console.log('C middleware2 开始');
      next(action)
      console.log('D middleware2 结束');
    };
  };
}

function M3(store) {
  return function (next) { // =====> MC3
    console.log(next, 'MC3----next'); // next: store.dispatch
    return function (action) { // 3-2
      console.log('E middleware3 开始');
      next(action)
      console.log('F middleware3 结束');
    };
  };
}







function reducer(state, action) {
  if (action.type === 'MIDDLEWARE_TEST') {
    console.log('======= G =======');  
  }
  return {};
}
var store = createStore(
  reducer,
  applyMiddleware(
    M1,
    M2,
    M3
  )
);

store.dispatch({ type: 'MIDDLEWARE_TEST' });



// function eea() {
//   console.log(1);
// }
// function eeb() {
//   console.log(2);
// }
// function eec() {
//   console.log(3);
// }

// function test (...a) {
//   console.log(a, '9999999');
//   a.map(e => {
//     console.log(e);
//   })
// }
// test(eea, eeb, eec);



// // 绑定 dispatch、getState
// chain = middlewares.map(middleware => middleware(middlewareAPI))
// // 绑定 next
// dispatch = compose(...chain)(store.dispatch) 







// function applyMiddleware(...middlewares) {
//   // middlewares 中间件函数
//   return (createStore) => (...args) => {
//     // 改造dispatch并返回
//     return {
//       ...store,
//       dispatch
//     }
//   }
// }



// function applyMiddleware (...middlewares) {
//   return function (createStore) { // a-1
//     return function (...args) { // a-2
//       // ... 改造dispatch
//       return {
//         ...store,
//         dispatch
//       }
//     }
//   }
// }

// function (createStore) { // a-1
//   return function (...args) { // a-2
//     return {
//       ...store,
//       dispatch
//     }
//   }
// }