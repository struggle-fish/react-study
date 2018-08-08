import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';

import './static/css/swipe-index.css';

let IMG_DATA = [];
// 导入图片资源
for (let i = 1; i <= 5; i++) {
  IMG_DATA.push({
    id: 3,
    title: '',
    pic: require(`./static/images/${i}.jpg`)
  });
}
ReactDOM.render(<ReactSwipe className={'container'} swipeOptions={{
  auto: 2000
}}>
  {IMG_DATA.map((item, index) => {
    let {pic, title} = item;
    return <div key={index}>
      <img src={pic} alt={title} />
    </div>
  })}
</ReactSwipe>,window.root);