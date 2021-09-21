import { call, fork, put, take } from 'redux-saga/effects'
import axios from 'axios'
import {
    entryType,
    populateEntriesAction,
    populateEntryDetailsAction,
} from '../actions/entries'

export function* getAllEntries() {
    yield take(entryType.GET_ALL)
    const { data } = yield call(axios, 'http://localhost:3001/entries')
    yield put(populateEntriesAction(data))
}

function* getEntryDetails(id) {
    const { data } = yield call(axios, `http://localhost:3001/values/${id}`)
    yield put(populateEntryDetailsAction(id, data))
}

export function* getAllEntriesDetails() {
    const { payload } = yield take(entryType.POPULATE)
    for (let i = 0; i < payload.length; i++) {
        const e = payload[i]
        yield fork(getEntryDetails, e.id)
    }
}
