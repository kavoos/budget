import axios from 'axios'
import { call, put, take } from 'redux-saga/effects'
import { entryType } from '../actions/entries'

export function* deleteEntrySaga() {
    while (true) {
        const { payload } = yield take(entryType.REMOVE)
        yield call(deleteEntryFromDB, payload.id)
        yield put({
            type: entryType.REMOVE_RESULT,
            payload: { id: payload.id },
        })
    }
}

async function deleteEntryFromDB(id) {
    await axios.delete(`http://localhost:3001/entries/${id}`)
    await axios.delete(`http://localhost:3001/values/${id}`)
}
