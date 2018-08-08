// 把每个模块单独设定的reducer函数合并成总的reducer
// 为了保证合并reducer过程中，每个模块管理的状态信息不会相互冲突，
// redux 在合并的时候把容器中的状态进行分开管理
/**
 * STATE = {
 *    vote: {
 *      n: 0,
 *      m: 0
 *    },
 *    personal: {
 *      n: 0,
 *      m: 0
 *    }
 * }
 * */ 

import {combineReducers} from 'redux';
import vote from './vote';

let reducer = combineReducers({
  vote
})
export default reducer;

