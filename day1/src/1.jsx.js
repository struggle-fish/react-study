function createElement(type, props, children) {
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
  obj = {...obj, type, props: { ...props, children }};
  // => 提取 ref key
  'key' in obj.props ? (obj.key = obj.props.key, obj.props.key = undefined) : null;
  'ref' in obj.props ? (obj.ref = obj.props.ref, obj.props.ref = undefined) : null;


  return obj;
} 

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
    "children": "哈哈"
  },
  "_owner": null,
  "_store": {}
}
*/

let domObj = createElement('div',
  { className: 'title', style: {'color': 'red'}, ref: 'refName', key: 0 },
  '哈哈');


function render (obj, container, callback) {
  let { type, props} = obj || {};
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
      // 字符串
      if (typeof value === 'string') {
        let text = document.createTextNode(value);
        newElement.appendChild(text);
      }
      continue;
    }
    // html 结构上设置属性
    newElement.setAttribute(attr, value);

  }
  container.appendChild(newElement);
  callback && callback();
}

render(domObj, window.root);