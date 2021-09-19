import { combineReducers, createStore } from 'redux'
import { entriesReducers } from '../reducers/entries'

export const configureStore = () => {
    return createStore(
        combineReducers({
            entries: entriesReducers,
        })
    )
}
