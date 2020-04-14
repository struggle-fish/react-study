import React from 'react';

export default class Detail extends React.Component {

  render () {
    return (
      <div>
        Detail-{this.props.match.params.id}
      </div>
    )
  }
}