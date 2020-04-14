import React from 'react';
import { connect } from 'react-redux';
import actions from '../../store/actions/session';
class Login extends React.Component {
  state = {
    username: ''
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login({username: this.state.username});
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-6">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">用户名</label>
              <input type="text" className="from-control" 
              value={this.state.username} onChange={event => this.setState({
                username: event.target.value
              })}/>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">登录</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

Login = connect(state => state.session, actions)(Login);

export default Login;