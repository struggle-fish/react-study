class Parent {
  constructor(x, y) {
    // => 给实例设置私有属性
    this.x = x;
    this.y = y;
  }
  render() {
    console.log('Parent:', this);
  }
  // 把parent当做一个普通对象，设置的私有属性方法，和实例没有关系
  static ajax() {}
}

Parent.prototype.AA = 12; // ES6创建类的大括号中只能写方法（而且不能是箭头函数） 不能设置属性，属性需要自己额外拿出来设置
Parent.BB = 12; // 把他作为对象设置的私有属性也只能拿到外面设置

// 子类只能继承原型上的属性和方法以及父类实例私有的属性和方法，对于父类作为普通对象设置的私有属性和方法是无法继承的
class Children extends Parent {
  constructor() {
    super(); // 相当于把 Parent 的 constructor执行 Parent.constructor.call(this, 10, 20)
  }
  render() {
    console.log('children:', this);
  }
}


new Parent(10, 20);

new Children();