import React from 'react';
import {connect} from 'react-redux';
import action from '../../store/action';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let {data, flag} = this.props;
    data = data.filter(item => {
      let {state} = item;
      if (flag === 'complete') {
        return state === 1;
      }
      console.log(flag);
      if (flag === 'uncomplete') {
        return state === 0;
      } else {
        return true;
      }
    });
    return <div className='panel-body'>
      <ul className='list-group'>
        {data.map((item, index) => {
          let {id, state, name} = item;
          state = parseFloat(state);
           return <li className='list-group-item' key={id}>
              <input type='checkbox' name='todo' checked={!!state} onChange={(ev) => {
                // 更新当前状态
                let newState = ev.target.checked ? 1 : 0;
                this.props.updateState(id, newState);
              }}/>
              <span className={state === 1 ? 'complete' : ''}>{name}</span>
              <a href='javascript:;' className='btn btn-danger' onClick={ev => {
                let isOk = window.confirm('确定删除么');
                if (isOk) {
                  this.props.remove(id);
                }
              }}>删</a>
            </li>
        })}
      </ul>
    </div>
  }

}
export default connect(state => ({
  ...state.todo
}), action.todo)(Body);