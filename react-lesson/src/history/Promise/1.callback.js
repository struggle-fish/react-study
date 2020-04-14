// 有一个函数可以接收一个函数，可以根据条件执行这个函数

function after (times, callback) {
  return function (){
    if (--times === 0) {
      callback();
    }
  }
}

let fn = after(3, function() {
  console.log('fn被调用了3次');
});

fn();
fn();
fn();

// 文件读取
let fs = require('fs');
// readFile 第一个参数是路径（注意 run code 目录指向的都是当前运行的根目录），编码，回调（err, 所有的异步方法都需要捕获错误 但是不能try catch）
fs.readFile('package.json', 'utf8', function(err, data) {
  console.log(err);
  console.log(data);
});