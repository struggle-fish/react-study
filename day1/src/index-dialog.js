import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './Dialog';

// 导入css  一般把公共样式放在index中导入，这样其他组件中也可以使用
import './static/css/bootstrap.css';
import './static/css/reset.min.css';


ReactDOM.render(<div>
  <Dialog content="江小鱼"/>
  <Dialog content="江小鱼" type={1}/>
  <Dialog content={
    (<div>
      <input type="text" className="form-control" placeholder="请输入用户名"/><br/>
      <input type="text" className="form-control" placeholder="请输入密码"/>
    </div>)
  } type="请登录">
    <button className="btn btn-success">登录</button>
    <button className="btn btn-danger">取消</button>
  </Dialog>  
</div>, document.getElementById('root'));
