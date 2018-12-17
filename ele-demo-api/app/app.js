const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const elm = require('./router/eleme');
// console.log(elm);

const app = express();

// 跨域设置参数
app.all('*', function(req, res, next) {
	if (req.path !== '/' && !req.path.includes('.')) {
		res.header('Access-Control-Allow-Credentials', true);
		res.header('Access-Control-Allow-Origin', req.headers['origin'] || '*');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie');
		res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
		res.header('Content-Type', 'application/json;charset=utf-8');
	}
	next();
});

app.use(cookieParser());
app.use(bodyParser.json());
// bodyParser.urlencoded则是用来解析我们通常的form表单提交的数据，
// 也就是请求头中包含这样的信息： Content-Type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/elm', elm);
app.listen('3009', function() {
	console.log('++++++++++++++++++++');
	console.log('app listening on port 3009');
	console.log('++++++++++++++++++++');
});










