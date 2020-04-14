import React from 'react';
import { renderRoutes, matchRoutes } from 'react-router-config';
import Header from '../components/Header';
import actions from '../store/actions/session';
import styles from './App.css';
import withStyles from '../withStyles';
class App extends React.Component {
  render () {
    return (
      <>
        <Header staticContext={this.props.staticContext}></Header>
        <div className="container" className={styles.app}>
          {renderRoutes(this.props.route.routes)}
        </div>
      </>
    )
  }
}

App.loadData = function(store) {
  return store.dispatch(actions.getUsers());
}

export default withStyles(App, styles)