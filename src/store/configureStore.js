import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { entriesReducers } from '../reducers/entries'
import { modalsReducers } from '../reducers/modals'

export const store = createStore(
    combineReducers({
        entries: entriesReducers,
        modals: modalsReducers,
    }),
    composeWithDevTools()
)
