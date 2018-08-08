import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './static/css/bootstrap.css';

class Temp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '江小鱼'
    }
  }
  componentDidMount() {
    // 数据影响视图~
    setTimeout(() => {
      this.setState({
        text: '鱼儿~'
      });
    }, 1000);
  }
  render () {
    let { text } = this.state;
    return <section className="panel panel-default">
            <div className="panel-heading">
              <input type="text" className="form-control" value={text} onChange={(ev) => {
                // => 在文本框中修改状态，实现视图改变数据
                this.setState({
                  text: ev.target.value
                });
              }}/>
            </div>
            <div className="panel-body">
              {text}
            </div>
          </section>
  }
}

ReactDOM.render(<Temp></Temp>, window.root);