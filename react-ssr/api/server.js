let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let cors = require('cors');

let app = express();
// app.use(cors({
//   origin: 'http://localhost:3008'
// }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'zfpx'
}));


let users = [
  {
    id: 1,
    name: '将小鱼'
  },
  {
    id: 2,
    name: '江小鱼22'
  }
]
app.get('/api/users', function(req, res) {
  res.json(users);
});
app.post('/api/login', function(req, res) {
  let user = req.body
  req.session.user = user;
  res.json({
    code: 0,
    data: {
      user,
      success: '登录成功'
    }
  });
});

app.get('/api/logout', function(req, res) {
  req.session.user = null;
  res.json({
    code: 0,
    data: {
      success: '退出成功'
    }
  });
});

app.get('/api/user', function(req, res) {
  let user = req.session.user;
  if (user) {
    res.json({
      code: 0,
      data: {
        user,
        success: '获取用户信息成功'
      }
    });
  } else {
    res.json({
      code: 0,
      data: {
        error: '用户未登录'
      }
    });
  }
  
});

app.listen(7777);