function Promise(executor) {
  let self = this;
  self.value = undefined;
  self.reason = undefined;
  self.status = 'pending';
  self.onResolvedCallbacks = [];
  self.onRejectedCallbacks = [];
  function resolve(value) {
    if (self.status === 'pending') {
      self.value = value;
      self.status = 'resolved';
      self.onResolvedCallbacks.forEach(fn => {
        fn();
      });
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.reason = reason;
      self.status = 'rejected';
      self.onRejectedCallbacks.forEach(fn => {
        fn();
      });
    }
  }

  try {
    executor(resolve, reject);
  } catch (e) {
    console.log(e, '报错了');
    reject(e);
  }
  
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('循环引用了'));
  }
  let called;
  if (x !== null (typeof x == 'object' || typeof x === 'function')) {
    try {
      let then = x.then;
      if (typeof then === 'function') {
        // 这个逻辑可能是别人的promise 可能既能调用成功又会调用失败
        then.call(x, function(y) {
          if (!called) { // 不让用户既调用成功又调用失败
            called = true;
          } else {
            return;
          }
          // y 可能还是一个promise 需要递归直到是一个常量位置
          resolvePromise(promise2, y, resolve, reject);
        }, function(r) {
          if (!called) {
            called = true;
          } else {
            return;
          }
          reject(r);
        });
      } else {
        if (!called) {
          called = true;
        } else {
          return;
        }
        resolve(x); // 123
      }
    } catch(e) {
      reject(e);
    }
  } else {
    resolve(x);
  }
}

Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  });
}

Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    resolve(value);
  });
}

// Promsie.all 表示全部成功才会成功，有任意一个失败都会失败
Promise.all = function (promises){
  return new Promise((resolve, reject) => {
    let arr = [];
    let currentIndex = 0; // 计数器
    function processData(index, val) {
      arr[index] = val;
      currentIndex++; // 记录成功的次数
      // 达到执行目标就让all的promise成功
      if (currentIndex === promises.length) {
        resolve(arr);
      }
    }
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(function(data) {
        processData(i, data);
      }, reject);
    }
  });
}
// 赛跑 谁跑的快以谁为准
Promise.race = function(promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject);
    }
  });
}


Promise.prototype.then = function (onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function(data) {
    return data;
  }
  onRejected = typeof onRejected === 'function' ? onRejected : function(err) {
    throw err;
  }
  let self = this;
  let promise2 = new Promise(function(resolve, reject) {
    console.log(self.status);
    if (self.status === 'resolved') {
      setTimeout(()=> { // 保证 promise2 有值 ， promise要求必须异步执行then方法
        try {
          let x = onFulfilled(self.value);
          console.log(self.value, '当前数据');
          resolvePromise(promise2, x, resolve, reject);
        } catch(e) {
          reject(e);
        }
      }, 0);
    }
    if (self.status === 'rejected') {
      setTimeout(()=> {
        try {
          let x = onRejected(self.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch(e) {
          reject(e);
        }
      }, 0)
    }
    if (self.status === 'pending') {
      self.onResolvedCallbacks.push(function () {
        setTimeout(()=> {
          try {
            let x = onFulfilled(self.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch(e) {
            reject(e);
          }
        }, 0)
      });
      self.onRejectedCallbacks.push(function() {
        setTimeout(()=> {
          try {
            let x = onRejected(self.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch(e) {
            reject(e);
          }
        }, 0)
      });
    }
  });
  return promise2;
}

// catch
Promise.prototype.catch = function(errFn) {
  return this.then(null, errFn);
}



Promise.prototype.finally = function(callback) {
  return this.then(function(data) {
    return Promise.resolve(callback()).then(function() {
      return data;
    });
    // callback();
    // return this.then(function() {
    //   return data;
    // });
  }, function(reason) {
    return Promise.resolve(callback()).then(function() {
      throw reason;
    });
  })
}

// 不用了
Promise.defer = Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
}

module.exports = Promise;