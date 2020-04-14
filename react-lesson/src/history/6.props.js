// 人的组件
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// 校验实例上的属性

class Person extends React.Component {
  // 默认属性，属于类上的属性 es7
  static defaultProps = {
    
  }
  // 只是属性校验，不会阻止页面渲染
  static propTypes = { // 专门校验类型
    age: PropTypes.number.isRequired,
    gender: PropTypes.oneOf(['男', '女']),
    position: {
      x: PropTypes.number,
      y: PropTypes.number
    },
    hobby: PropTypes.arrayOf(PropTypes.string)
  }
  render() {
    return (<div>
      哈哈
    </div>)
  }
}


let obj = {
  name: '江小鱼',
  age: 19,
  gender: '男',
  position: {
    x: 100,
    y: 200
  },
  hobby: ['写代码']
};


ReactDOM.render(<Person {...obj}></Person>, window.root);