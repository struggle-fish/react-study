import React from 'react';
import { withRouter } from '../../history/react-router-dom';
class Logo extends React.Component {
  handleClick = () => {
    console.log(this.props, 'logo');
    this.props.history.push('/');
  }
  render () {
    return (
      <a className="navbar-brand" onClick={this.handleClick}>管理中心</a>
    )
  }
}

export default withRouter(Logo);