import * as entries from './entries'
import * as entriesAdd from './entriesAdd'
import * as entriesDelete from './entriesDelete'
import * as entriesUpdate from './entriesUpdate'

export const initSagas = (sagaMiddleware) => {
    Object.values(entries).forEach(sagaMiddleware.run.bind(sagaMiddleware))
    Object.values(entriesDelete).forEach(
        sagaMiddleware.run.bind(sagaMiddleware)
    )
    Object.values(entriesAdd).forEach(sagaMiddleware.run.bind(sagaMiddleware))
    Object.values(entriesUpdate).forEach(
        sagaMiddleware.run.bind(sagaMiddleware)
    )
}
