import * as entries from './entries'

export const initSagas = (sagaMiddleware) => {
    Object.values(entries).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}
