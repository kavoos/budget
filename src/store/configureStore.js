import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { entriesReducers } from '../reducers/entries'
import { modalsReducers } from '../reducers/modals'
import createSagaMiddleware from '@redux-saga/core'
import { initSagas } from '../saga'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

export const configureStore = () => {
    const store = createStore(
        combineReducers({
            entries: entriesReducers,
            modals: modalsReducers,
        }),
        composeWithDevTools(applyMiddleware(...middlewares))
    )

    initSagas(sagaMiddleware)

    return store
}
