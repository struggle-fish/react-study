import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'

const initialState = {
  count: 0
}
const userInitialState = {
  username: '江小鱼'
}

const ADD = 'ADD'
function counReducer (state = initialState, action) {
  console.log(state, action)
  switch (action.type) {
    case ADD:
      return { count: state.count + (action.num || 1) }
    default:
      return state
  }
}


const UPDATE_USERNAME = 'UPDATE_USERNAME'
function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return { ...state, username: action.name }
    default:
      return state
  }
}


const allReducers = combineReducers({
  counter: counReducer,
  user: userReducer
})

// 此时state 也会区分
// {
//   counter: initialState,
//   user: userInitialState
// }


// action creatore
export function add (num) {
  return {
    type: ADD,
    num
  }
}

function addAsync (num) {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(add(num))
    }, 2000)
  }
}




// console.log(store, 'store---23432')

// store.dispatch(add(3))
// store.dispatch({ type: UPDATE_USERNAME, name: '你的名字' })
// console.log(store.getState())


// store.subscribe(() => {
//   console.log(store.getState(), 'subscribe---234')
// })

// store.dispatch(addAsync(5))

export default function initializeStore (state) {
  const store = createStore(
    allReducers,
    Object.assign({},
      {
      counter: initialState,
      user: userInitialState
    }, state),
    composeWithDevTools(applyMiddleware(ReduxThunk))
  )
  return store
}