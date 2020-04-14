let likeArray = {
  0:1,
  1:2,
  2: 3,
  length: 3,
  [Symbol.iterator]: function *(){
    let index = 0;
    while(index !== this.length){
      yield this[index++]
    }
  }
}
let arr = [...likeArray];
console.log(arr);


// function * gen() {
//   yield 1;
//   yield 2;
// }
// let it = gen();
// let r = it.next();
// console.log(r);
// r = it.next();
// console.log(r);
// r = it.next();
// console.log(r);

function *gen() {
  let a = yield 1;
  console.log('a---', a);
  let b = yield 2;
  console.log('b---', b);
  let c = yield 3;
  console.log('c---', c);
}
let it = gen();
it.next('123'); //第一次调用next函数传递的参数是无效的
it.next('456'); // 第二次传参会返回给第一个yield
it.next('789')

let fs = require('fs');
let bluebird = require('bluebird');
let read = bluebird.promisify(fs.readFile);

function *r() {
  let age = yield read('name.txt', 'utf8');
  let address = yield read(age, 'utf8');
  let r = yield read(address, 'utf8');
  return r;
}

let it = r();
let { value, done } = it.next();
value.then((data)=>{
  let { value, done } = it.next(data);
  value.then((data) => {
    console.log(data);
    let { value, done  } = it.next(data);
    value.then((data) =>{
      console.log(data);
    })
  })
});




// let co = require('co');
co(r()).then(data => {
  console.log(data);
});

function co(it) {
  return new Promise((resolve, reject) => {
    function next(data) {
      let { value, done } = it.next(data);
      if (!done) {
        value.then(data => {
          next(data);
        }, reject);
      } else {
        resolve(value);
      }
    }
    next();
  });
}