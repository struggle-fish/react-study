function Promise(executor) {
  let self = this;
  // 成功的值、失败的原因
  self.value = undefined;
  self.reason = undefined;
  // 专门存储成功的回调
  self.onResolvedCallbacks = [];
  self.onRejectedCallbacks = [];
  // 保存下 promise当前的状态
  self.status = 'pending';

  function resolve(value) {
    if (self.status === 'pending') {
      self.value = value;
      self.status = 'resolved';
      // 执行数组中的函数
      self.onResolvedCallbacks.forEach(function(fn) {
        fn();
      });
    }
  }
  function reject(reason) {
    if (self.status === 'pending') {
      self.reason = reason;
      self.status = 'rejected';
      self.onRejectedCallbacks.forEach(function(fn) {
        fn();
      });
    }
  }

  try {
    executor(resolve, reject); // 立即执行
  } catch(e) {
    // 如果执行器发生异常
    reject(e);
  }
  
}

// 解析链式调用，还要和其他promise结合
function resolvePromise(x, promise2, resolve, reject) {
  if (x === promise2) { // 自己不能等待自己完成
    return reject(new TypeError('循环引用'));
  }
  // 如果x是一个函数，或者x是一个对象，就有可能x是一个promise
  if (x !== null && (typeof x === 'function' || typeof x === 'object')) {
    try {
      let then = x.then;
      if (typeof then == 'function') {
        then.call(x, function(y) {
          resolve(y);
        }, function(r) {
          reject(r);
        });
      } else {
        resolve(x);
      }
    } catch(e) { // 如果 x取then的时候可能会发生异常，如果有异常报错
      reject(e);
    }
  } else {
    // 普通值的情况直接成功即可
    resolve(x);
  }
}

// then方法中需要传递两个参数，成功回调，失败回调
Promise.prototype.then = function (onFufilled, onRejected) {
  let self = this;
  // 调用then后返回一个新的promise  1-1
  let promise2
  promise2 = new Promise(function(resolve, reject) {
    if (self.status === 'resolved') {
      // 我们现在需要做的事情就是把then中成功或者失败后函数执行的结果获取到，
      // 看一看是不是promise, 如果是promise，就让promise执行，取到最终这个promise的执行结果， 让返回的promise（1-1处）成功或者失败
      // 如果x是普通值，就让这个返回的promise变成成功态
      let x = onFufilled(self.value);
      resolvePromise(x, promise2, resolve, reject);
    }
    if (self.status === 'rejected') {
      let x = onRejected(self.reason);
      resolvePromise(x, promise2, resolve, reject);
    }
    // excecutor中有异步操作
    if (self.status === 'pending') {
      self.onResolvedCallbacks.push(function() {
        let x = onFufilled(self.value);
        resolvePromise(x, promise2, resolve, reject);
      });
      self.onRejectedCallbacks.push(function() {
        let x = onRejected(self.reason);
        resolvePromise(x, promise2, resolve, reject);
      });
    }
  });
  return promise2;
}


module.exports = Promise;