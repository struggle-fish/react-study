import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';
import clientRequest from '../client/request'
import createServerRequest from '../server/request';


export function getClinentStore() {
  let initState = window.context.state;
  return createStore(reducers, initState, applyMiddleware(thunk.withExtraArgument(clientRequest), logger));
}

export function getServerStore(req) {
  return createStore(reducers, applyMiddleware(thunk.withExtraArgument(createServerRequest(req)), logger));
}