export function posts (state = [], { type, payload }) {
  switch (type) {
    case 'POSTS':
      return payload

    default:
      return state
  }
}

export function post (state = {}, { type, payload }) {
  switch (type) {
    case 'POST':
      return payload

    default:
      return state
  }
}
