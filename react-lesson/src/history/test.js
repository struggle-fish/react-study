// export default 'hello';
// export let a = 1;
// export let b = 2;

let url = '/user/:id/:name'
let str = '/user/1/3'
let pathToRegExp = require('path-to-regexp');
let keys = [];
let reg = pathToRegExp(url, keys, { end: false });
keys = keys.map(k => k.name);
console.log(keys);
let [,...args] = (str.match(reg));
console.log(args);
let r = keys.reduce((memo, key, index) => (memo[key] = args[index], memo), {});

console.log(r);
