import { combineReducers } from 'redux'
import { people, peopleLoading, person } from './person'
import { post, posts } from './post'

export default combineReducers({
  people,
  peopleLoading,
  person,
  posts,
  post
})

// export default function reducer (state = DEFAULT_STATE, { type, payload }) {
//   switch (type) {
//     case 'PEOPLE':
//       return { ...state, people: payload }

//     case 'POSTS':
//       return { ...state, posts: payload }

//     default:
//       return state
//   }
// }
