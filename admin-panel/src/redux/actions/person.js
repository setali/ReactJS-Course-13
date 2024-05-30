export function setPeople (payload) {
  return { type: 'PEOPLE', payload }
}

export function setPeopleLoading (payload) {
  return { type: 'PEOPLE_LOADING', payload }
}

export function setPerson (payload) {
  return { type: 'PERSON', payload }
}

export function removePerson (payload) {
  return { type: 'REMOVE_PERSON', payload }
}
