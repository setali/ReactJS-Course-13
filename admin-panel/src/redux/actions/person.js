import { createAction } from '@reduxjs/toolkit'
import request from '@/tools/request'

export const setPeople = createAction('PEOPLE')
export const setPeopleLoading = createAction('PEOPLE_LOADING')
export const setPerson = createAction('PERSON')
export const setPersonLoading = createAction('PERSON_LOADING')
export const removePerson = createAction('REMOVE_PERSON')

export function getPeople () {
  return dispatch => {
    dispatch(setPeopleLoading(true))
    request('/users')
      .then(({ data }) => dispatch(setPeople(data)))
      .finally(() => dispatch(setPeopleLoading(false)))
  }
}

export const getPerson = id => dispatch => {
  dispatch(setPersonLoading(true))
  request(`/users/${id}`)
    .then(({ data }) => dispatch(setPerson(data)))
    .finally(() => dispatch(setPersonLoading(false)))
}
