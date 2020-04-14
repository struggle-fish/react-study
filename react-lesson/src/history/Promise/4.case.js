let Promise = require('./4.case-promise');
let p = new Promise(function(resolve, reject) {
  //throw Error('失败了');
  setTimeout(() => {
    resolve('9090');
  }, 1000);
});

let p1 = p.then(function (value) {
  console.log('val', value);
  // return 1000;
  // return new Promise();
  // return Promise.resolve(1000);
  // return p1
  return new Promise((resolve, reject) => {
    resolve('888');
  });
}, function(reason) {
  console.log('rea', reason);
}).then(function(data){
  console.log(data, '第二个then');
},function(error){
  console.log(error, '第二个then---error');
})


// Promise.reject().then(null, (reason)=>{
//   return 100;
// }).then((data)=> {
//   console.log(data, 'data');
// }, err => {
//   console.log(err, 'err');
// });