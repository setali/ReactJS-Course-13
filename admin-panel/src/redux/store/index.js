// import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
// import { thunk } from 'redux-thunk'
import reducer from '../reducers'

// const middleware =
//   ({ dispatch, getState }) =>
//   next =>
//   action =>
//     typeof action === 'function' ? action(dispatch, getState) : next(action)

// function middleware ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       if (typeof action === 'function') {
//         action(dispatch)
//       } else {
//         next(action)
//       }
//     }
//   }
// }

const store = configureStore({ reducer })
// const store = createStore(reducer, applyMiddleware(thunk))

export default store
