import React from 'react';
import Header from './components/Header/index';
import { renderRoutes } from 'react-router-config';
import { actions } from './components/Header/store/index';
const App = (props) => {
  return (
    <>
      <Header staticContext={props.staticContext}></Header>
      {renderRoutes(props.route.routes)}
    </>
  )
}

App.loadData = (store) => {
  return store.dispatch(actions.getHeaderInfo())
}

export default App;