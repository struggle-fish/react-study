import React from 'react'
import { bindActionCreators } from 'redux';
import Context from './context';

let connect = (mapStateToProps, mapDispatchToProps) => (Component)=> {
  return () => {
    class Proxy extends React.Component {
      state = mapStateToProps(this.props.store.getState())
      componentDidMount() {
        this.unsub = this.props.store.subscribe(() => {
          this.setState(mapStateToProps(this.props.store.getState()));
        })
      }
      componentWillUnmount () {
        this.unsub();
      }
      render () { 
        let mapDispatch = ''
        // mapDispatchToProps 传递的是一个对象，把对象直接进行包装
        if (typeof mapDispatchToProps === 'object') {
          mapDispatch = bindActionCreators(mapDispatchToProps, this.props.store.dispatch);
        } else {
          mapDispatch =  mapDispatchToProps(this.props.store.dispatch);
        }
        
        return <Component {...this.state} {...mapDispatch}></Component>;
      }
    }
    return <Context.Consumer>
      {
        ({store}) => {
          // console.log(store, '234234');
          return <Proxy store={store}></Proxy>
        }
      }
    </Context.Consumer> 
  }
}

export default connect;