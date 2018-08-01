import { create } from "domain";

// 结构
/* 
<div className="title" style={styleObj}>
  <span className="subname">我是sapn</span>
  <span className="subname2">我是sapn2 <i>内勤</i></span>
  哈哈
</div> 
*/
// 调用
/* 
var styleObj = {
  color: 'red',
  fontSize: '50px'
};
React.createElement(
  'div', {
    className: 'title',
    style: styleObj
  },
  React.createElement(
    'span', {
      className: 'subname'
    },
    '\u6211\u662Fsapn'
  ),
  React.createElement(
    'span', {
      className: 'subname2'
    },
    '\u6211\u662Fsapn2 ',
    React.createElement(
      'i',
      null,
      '\u5185\u52E4'
    )
  ),
  '\u54C8\u54C8'
);
*/
// 最终输出虚拟dom对象
/* 
{
  "type": "div",
  "key": null,
  "ref": null,
  "props": {
    "className": "title",
    "style": {
      "color": "red",
      "fontSize": "50px"
    },
    "children": 
    [
      {
        "type": "span",
        "key": null,
        "ref": null,
        "props": {
          "className": "subname",
          "children": "我是sapn"
        },
        "_owner": null,
        "_store": {}
      },
      {
        "type": "span",
        "key": null,
        "ref": null,
        "props": {
          "className": "subname2",
          "children": 
          [
            "我是sapn2 ",
            {
              "type": "i",
              "key": null,
              "ref": null,
              "props": {
                "children": "内勤"
              },
              "_owner": null,
              "_store": {}
            }
          ]
        },
        "_owner": null,
        "_store": {}
      }, 
      "哈哈"
    ]
  },
  "_owner": null,
  "_store": {}
}
*/

function createElement(type, props, ...childrens) {
  // ...childrens 剩余运算符如果不传参数则是一个空数组
  let obj = {
    type: null,
    props: {
      children: ''
    },
    ref: null,
    key: null
  };
  // 用传递的值覆盖默认值
  // obj = {...obj, type, props};
  obj = {
    ...obj,
    type,
    props: {
      ...props,
      // childrens 为数组
      children: childrens.length <= 1 ? (childrens[0] || '') : childrens
    }
  };
  // => 提取 ref key
  'key' in obj.props ? (obj.key = obj.props.key, obj.props.key = undefined) : null;
  'ref' in obj.props ? (obj.ref = obj.props.ref, obj.props.ref = undefined) : null;


  return obj;
}

let domObj = createElement(
  'div', 
  {
    className: 'title',
    style: {
      'color': 'red'
    },
    ref: 'refName',
    key: 0
  },
  '哈哈',
  createElement(
    'span', 
    {
      className: 'subname'
    },
    '我是span'
  ),
  createElement(
    'span',
    {
      className: 'subname2'
    },
    '我是span2',
    createElement(
      'i',
      null,
      '内勤'
    )
  )
);

console.log(domObj);

function render(obj, container, callback) {
  let {
    type,
    props
  } = obj || {};
  let newElement = document.createElement(type);
  for (let attr in props) {
    if (!props.hasOwnProperty(attr)) break; // => 不是私有直接结束遍历
    if (!props[attr]) continue; // 如果当前属性没有值，不处理
    let value = props[attr];
    // className 处理
    if (attr === 'className') {
      newElement.setAttribute('class', value);
      continue;
    }
    // style 处理 style 必须是对象
    if (attr === 'style') {
      if (value === '') continue
      for (let styKey in value) {
        if (value.hasOwnProperty(styKey)) {
          newElement['style'][styKey] = value[styKey]
        }
      }
      continue;
    }
    // 处理 children
    if (attr === 'children') {
      // 一个值： 可能是字符串，一个jsx对象，一个数组（每一项是字符串，或者jsx对象）
      // 字符串  创建文本节点
      // if (typeof value === 'string') {
      //   let text = document.createTextNode(value);
      //   newElement.appendChild(text);
      // }
      // 转成数组 统一操作数据
      if (!(value instanceof Array)) {
        value = [value]; 
      }
      value.forEach((item, index) => {
        // 字符串  jsx对象
        // item 是字符串则创建文本节点，如果是对象，递归调用render方法，把创建的元素放到最开始创建的大盒子里
        if (typeof item === 'string') {
          let text = document.createTextNode(item);
          newElement.appendChild(text);
        } else {
          render(item, newElement);
        }
      });

      continue;
    }
    // html 结构上设置属性
    newElement.setAttribute(attr, value);

  }
  container.appendChild(newElement);
  callback && callback();
}

render(domObj, window.root);