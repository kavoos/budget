import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { entryType } from '../actions/entries'

export function* addEntrySaga() {
    yield takeLatest(entryType.ADD, addEntryToDB)
}

function* addEntryToDB({ payload }) {
    yield call(addEntry, payload)
    yield call(addEntryDetail, payload)
    yield put({
        type: entryType.ADD_RESULT,
        payload,
    })
}

async function addEntry({ id, description }) {
    await axios.post('http://localhost:3001/entries/', { id, description })
}

async function addEntryDetail({ id, value, isExpense }) {
    await axios.post('http://localhost:3001/values/', { id, value, isExpense })
}
