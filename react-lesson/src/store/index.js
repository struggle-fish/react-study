import { createStore } from '../history/11.redux-2';
// import { createStore } from 'redux';
import reducers from './reducers';

console.log(reducers, 'reducers');

let store = createStore(reducers);
window.store = store;
export default store;
