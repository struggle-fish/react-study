import React from 'react';
import store from '../../store';
import * as Types from '../../store/action-type';
import actions from '../../store/actions/todo'

export default class Todo extends React.Component {
  input = React.createRef();
  state = {
    todos: store.getState().todo
  }
  handleClick = () => {
    store.dispatch(actions.addTodo(this.input.current.value))
  }
  componentWillMount() {
    let unsub = store.subscribe(() => {
      this.setState({
        todos: store.getState().todo
      });
    })
  }
  componentWillUnmount() {
    this.unsub();
  }
  
  
  // store.getState()并不是响应式的
  render() {
    return (
      <div>
        <input ref={this.input} type="text"></input>
        <button  onClick={this.handleClick}>添加</button>
        <ul>
          {
            this.state.todos.map((item, key) => (
              <li key={key}>{item}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}
