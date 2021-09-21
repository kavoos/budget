import { entryType } from '../actions/entries'

export const entriesReducers = (state = initialEntries, action) => {
    switch (action.type) {
        case entryType.POPULATE: {
            return action.payload
        }
        case entryType.ADD_RESULT: {
            const newEntries = state.concat({ ...action.payload })
            return newEntries
        }
        case entryType.REMOVE_RESULT: {
            const newEntries = state.filter((e) => e.id !== action.payload.id)
            return newEntries
        }
        case entryType.POPULATE_DETAILS:
        case entryType.UPDATE: {
            const newEntries = [...state]
            const i = newEntries.findIndex((e) => e.id === action.payload.id)
            newEntries[i] = { ...newEntries[i], ...action.payload.entry }
            return newEntries
        }
        default:
            return state
    }
}

const initialEntries = []
