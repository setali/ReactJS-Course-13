export function people (state = [], { type, payload }) {
  switch (type) {
    case 'PEOPLE':
      return payload

    case 'REMOVE_PERSON':
      return state.filter(p => p.id !== payload)

    default:
      return state
  }
}

export function peopleLoading (state = false, { type, payload }) {
  switch (type) {
    case 'PEOPLE_LOADING':
      return payload

    default:
      return state
  }
}

export function person (state = {}, { type, payload }) {
  switch (type) {
    case 'PERSON':
      return payload

    default:
      return state
  }
}
