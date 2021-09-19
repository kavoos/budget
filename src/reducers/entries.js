import {
    ADD_ENTRY_TYPE,
    UPDATE_ENTRY_TYPE,
    REMOVE_ENTRY_TYPE,
} from '../actions/entries'

export const entriesReducers = (state = initialEntries, action) => {
    switch (action.type) {
        case ADD_ENTRY_TYPE: {
            const newEntries = state.concat({ ...action.payload })
            return newEntries
        }
        case REMOVE_ENTRY_TYPE: {
            const newEntries = state.filter((e) => e.id !== action.payload.id)
            return newEntries
        }
        case UPDATE_ENTRY_TYPE: {
            const newEntries = [...state]
            const i = newEntries.findIndex((e) => e.id === action.payload.id)
            newEntries[i] = { ...action.payload.entry }
            return newEntries
        }
        default:
            return state
    }
}

const initialEntries = [
    {
        id: 1,
        description: 'Work income',
        value: 3100.0,
        isExpense: false,
    },
    {
        id: 2,
        description: 'Water bill',
        value: 81.0,
        isExpense: true,
    },
    {
        id: 3,
        description: 'Rent',
        value: 850.0,
        isExpense: true,
    },
]
