import React from 'react';
import { connect } from 'react-redux';
// import actions from '../../store/actions/counter';
class NotFound extends React.Component {
  componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.notFound = true;
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-6">
          页面飞走了
        </div>
      </div>
    )
  }
}

export default NotFound;