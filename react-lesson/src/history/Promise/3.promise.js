// let p = new Promise(function(resolve, reject) {
//   resolve('有钱');
// });
// p.then(function(value) { // 成功的函数
//   console.log('success', value)
// }, function(reson) { // 失败的函数
//   console.log('fail', reson)
// });




let fs = require('fs');
let school = [];

function Read (url, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, encoding, function(err, data) {
      // promise的成功和失败取决于你的定义
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}
// then 方法执行完会判断返回的结果， 如果是promise 会把这个promise执行， 会取到他的结果
// 每次调用then方法后，会再次返回一个新的promise 并不是this
Read('name.txt', 'utf8').then(function(data) {
  console.log(data, '第一次');
  return Read(data+2, 'utf8');
}, function (err) {
  console.log(err, '第一失败了');
}).then(function(data) {
  console.log(data, '第二次');
}, function(err) {
  console.log(err, '第二失败了');
}).then(function(data) {
  console.log(data, '第三次');
}).then().then() // 值的穿透
.catch(function(err){
  console.log(err, 'catch中的error');
}).then(function(data) {
  // promise返回的是普通值，包括undefined，则会把这个普通值作为成功的结果继续往下传递
  console.log(data, 'catch后面的then');
})