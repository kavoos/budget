import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { entryType } from '../actions/entries'

export function* updateEntrySaga() {
    yield takeLatest(entryType.UPDATE, updateEntryInDB)
}

function* updateEntryInDB({ payload }) {
    yield call(updateEntry, payload)
    yield call(updateEntryDetail, payload)
    yield put({
        type: entryType.UPDATE_RESULT,
        payload,
    })
}

async function updateEntry({ id, entry: { description } }) {
    await axios.put(`http://localhost:3001/entries/${id}`, { description })
}

async function updateEntryDetail({ id, entry: { value, isExpense } }) {
    await axios.put(`http://localhost:3001/values/${id}`, {
        value,
        isExpense,
    })
}
