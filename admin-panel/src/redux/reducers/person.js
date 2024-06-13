import { createReducer } from '@reduxjs/toolkit'
import {
  setPeople,
  setPeopleLoading,
  setPerson,
  setPersonLoading,
  removePerson
} from '@/redux/actions/person'

export const people = createReducer([], builder => {
  builder
    .addCase(setPeople, (state, { payload }) => payload)
    .addCase(removePerson, (state, { payload }) =>
      state.filter(p => p.id !== payload)
    )
})

export const peopleLoading = createReducer(false, builder => {
  builder.addCase(setPeopleLoading, (state, { payload }) => payload)
})

export const person = createReducer({}, builder => {
  builder.addCase(setPerson, (state, { payload }) => payload)
})

export const personLoading = createReducer(false, builder => {
  builder.addCase(setPersonLoading, (state, { payload }) => payload)
})
