import React from 'react';
import EntrySk from '../Skeleton/entry';
import RowSk from '../Skeleton/row';

export default class SkeletonScreen extends React.PureComponent {
  render() {
    return (
      <div style={this.props.style}>
        <EntrySk/>
        <div style={{ marginTop: 10 }}>
          <RowSk/>
          <RowSk/>
          <RowSk/>
          <RowSk/>
          <RowSk/>
          <RowSk/>
        </div>
      </div>
    )
  }
}