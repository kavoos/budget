import { call, put, take } from 'redux-saga/effects'
import axios from 'axios'
import { entryType } from '../actions/entries'

export function* getAllEntries() {
    yield take(entryType.GET_ALL)
    const result = yield call(axios.get, 'http://localhost:3001/entries')
    yield put({ type: entryType.POPULATE, payload: result.data })
}
