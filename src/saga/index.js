import * as entries from './entries'
import * as entriesDeletion from './entriesDeletion'

export const initSagas = (sagaMiddleware) => {
    Object.values(entries).forEach(sagaMiddleware.run.bind(sagaMiddleware))
    Object.values(entriesDeletion).forEach(
        sagaMiddleware.run.bind(sagaMiddleware)
    )
}
