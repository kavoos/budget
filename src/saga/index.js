import * as entries from './entries'
import * as entriesAdd from './entriesAdd'
import * as entriesDelete from './entriesDelete'

export const initSagas = (sagaMiddleware) => {
    Object.values(entries).forEach(sagaMiddleware.run.bind(sagaMiddleware))
    Object.values(entriesDelete).forEach(
        sagaMiddleware.run.bind(sagaMiddleware)
    )
    Object.values(entriesAdd).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}
