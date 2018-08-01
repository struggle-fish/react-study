
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
  '哈哈'
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