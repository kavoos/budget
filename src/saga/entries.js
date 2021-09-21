import { call, fork, put, take } from 'redux-saga/effects'
import axios from 'axios'
import { entryType } from '../actions/entries'

export function* getAllEntries() {
    yield take(entryType.GET_ALL)
    const result = yield call(axios.get, 'http://localhost:3001/entries')
    yield put({ type: entryType.POPULATE, payload: result.data })
}

function* getEntryDetails(id) {
    const { data } = yield call(axios.get, `http://localhost:3001/values/${id}`)
    yield put({
        type: entryType.POPULATE_DETAILS,
        payload: { id, entry: data },
    })
}

export function* getAllEntriesDetails() {
    const { payload } = yield take(entryType.POPULATE)
    for (let i = 0; i < payload.length; i++) {
        const e = payload[i]
        yield fork(getEntryDetails, e.id)
    }
}
