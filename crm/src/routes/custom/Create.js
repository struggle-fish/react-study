import React from 'react';
import { connect } from 'react-redux';
import action from '../../store/action';


class Create extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return <div>
      用户编号：<input type='text' ref='USER_ID'/>
      <br/><br/>
      用户姓名：<input type='text' ref='USER_NAME'/>
      <br/><br/>
      <button className='btn btn-success' onClick={this.submit}>增加用户</button>
    </div>
  }
  submit = () => {
    let { USER_ID, USER_NAME } = this.refs;
    let { create, history } = this.props;
    create({
      id: USER_ID.value,
      name: USER_NAME.value
    });
    USER_ID.value = USER_NAME.value = '';
    history.push('/custom/list');
  }
}

export default connect(state => ({...state.custom}), action.custom)(Create);