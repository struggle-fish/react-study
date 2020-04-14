import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import actions from '../../store/actions/counter';
class Profile extends React.Component {
  render() {
    return (
      this.props.user ? <div className="row">
      <div className="col-md-6 col-md-offset-6">
        个人中心
      </div>
    </div> : <Redirect to="/login"></Redirect>
    )
  }
}

Profile = connect(state => state.session)(Profile);

export default Profile;