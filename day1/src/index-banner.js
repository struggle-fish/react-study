import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Banner from './component/Banner';

import './static/css/reset.min.css';

let IMG_DATA = [];
// 导入图片资源
for (let i = 1; i <= 5; i++) {
  IMG_DATA.push({
    id: 3,
    title: '',
    pic: require(`./static/images/${i}.jpg`)
  });
}

/** 
 * data 数据
 * interval 自动轮播间隔
 * step 默认索引
 * speed 每一张切换所需要的时间
 */
ReactDOM.render(<Banner 
  data={IMG_DATA} 
  interval={3000} 
  step={1} 
  speed={300}></Banner>,window.root);