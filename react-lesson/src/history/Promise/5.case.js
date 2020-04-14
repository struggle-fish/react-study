let Promise = require('./5.promise.js');

let fs = require('fs');

function Read(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'utf8', function(err, data) {
      if (err) reject(err);
      resolve(data);
    });
  });
}

Read('./name.txt').then((data) => {
  console.log(data);
}).catch(err => {
  console.log(err);
});