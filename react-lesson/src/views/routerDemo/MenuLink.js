import React from 'react';
import { Link, Route } from 'react-router-dom';

// children不管路径是否匹配到都可以执行
export default function (prop) {
  console.log(prop, '属性传递');
  return <Route path={prop.to} exact={prop.exact || false} children={(props)=> {
    console.log(props, 'MenuLink.js');
    return <li className={props.match ? 'active': ''}>
      <Link to={prop.to}>
        {prop.children}
      </Link>
    </li>
  }}></Route>
}