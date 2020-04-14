let fs = require('fs');

// 异步回调嵌套问题，会导致代码难以维护，而且不方便处理错误
// fs.readFile('./name.txt', 'utf8', function(err, data) {
//   fs.readFile(data, 'utf8', function(err, data) {
//     console.log(data);
//     //  ....
//   });
// });

// 多个异步同时执行，在某一个时刻拿到最终结果
// let school = {};
// function after(times, callback) {
//   return function() {
//     if (--times === 0) {
//       callback(school);
//     }
//   }
// }
// let out = after(2, function (data){
//   console.log(data);
// });
// fs.readFile('./name.txt', 'utf8', function(err, data) {
//   school.name = data;
//   out();
// });

// fs.readFile('./age.txt', 'utf8', function(err, data) {
//   school.age = data;
//   out();
// });


// 发布订阅模式

let school = {};
let Dep = {
  arr: [],
  on(fn) { // 绑定
    this.arr.push(fn);
  },
  emit() {
    if(Object.keys(school).length === 2) {
      this.arr.forEach(function(fn) {
        fn();
      })
    }
  }
};
Dep.on(function() {
  console.log(school);
});
Dep.on(function() {
  console.log('代码结束了');
});
fs.readFile('./name.txt', 'utf8', function(err, data) {
  school.name = data;
  Dep.emit(); // 每次读完发射一下
});

fs.readFile('./age.txt', 'utf8', function(err, data) {
  school.age = data;
  Dep.emit();
});
