import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import axios from 'axios'


const userInitialState = {}
// actions
const LOGOUT = 'LOGOUT'



function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case LOGOUT: {
      return {}
    }
    default:
      return state
  }
}

/**
 * {
 *  user: {}
 * }
*/
const allReducers = combineReducers({
  user: userReducer
})



export function logout() {
  return dispatch => {
    axios.post('/logout').then(resp => {
      if (resp.status === 200) {
        dispatch({
          type: LOGOUT
        })
      } else {
        console.log('errorLogout---', resp)
      }
    }).catch(err => {
      console.log('errorLogout---catch', err)
    })
  }
}



export default function initializeStore (state) {
  const store = createStore(
    allReducers,
    Object.assign({},
    {
      user: userInitialState
    },
    state),
    composeWithDevTools(applyMiddleware(ReduxThunk))
  )
  return store
}