export const ADD_ENTRY_TYPE = 'ADD_ENTRY'
export const REMOVE_ENTRY_TYPE = 'REMOVE_ENTRY'

export const addEntryAction = (payload) => {
    return { type: ADD_ENTRY_TYPE, payload }
}

export const removeEntryAction = (id) => {
    return { type: REMOVE_ENTRY_TYPE, payload: { id } }
}
