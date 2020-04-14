import React from 'react';
import Context from './context'

// Provider主要是提供store

export default class Provider extends React.Component {

  render () {
    return (
      <Context.Provider value={{ store: this.props.store }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}