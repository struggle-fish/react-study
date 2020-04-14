import React from 'react';

export default function withStyles(OriginalComponent, styles) {

  class ProxyComponent extends React.Component {
    componentWillMount() {
      if (this.props.staticContext) {
        // _getCss 可以获得处理后的css 
        this.props.staticContext.csses.push(styles._getCss());
      }
    }
    render() {
      return (
        <OriginalComponent {...this.props}/>
      )
    }
  }
  return ProxyComponent;
}