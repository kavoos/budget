export const entryType = {
    ADD: 'ADD_ENTRY',
    ADD_RESULT: 'ADD_ENTRY_RESULT',
    REMOVE: 'REMOVE_ENTRY',
    REMOVE_RESULT: 'REMOVE_ENTRY_RESULT',
    UPDATE: 'UPDATE_ENTRY',
    UPDATE_RESULT: 'UPDATE_ENTRY_RESULT',
    GET_ALL: 'GET_ENTRIES',
    POPULATE: 'POPULATE_ENTRIES',
    POPULATE_DETAILS: 'POPULATE_ENTRY_DETAIL',
}

export const addEntryAction = (payload) => {
    return { type: entryType.ADD, payload }
}

export const removeEntryAction = (id) => {
    return { type: entryType.REMOVE, payload: { id } }
}

export const updateEntryAction = (id, entry) => {
    return { type: entryType.UPDATE, payload: { id, entry } }
}

export const getAllEntriesAction = () => {
    return { type: entryType.GET_ALL }
}

export const populateEntriesAction = (entries) => {
    return { type: entryType.POPULATE, payload: entries }
}

export const populateEntryDetailsAction = (id, entry) => {
    return { type: entryType.POPULATE_DETAILS, payload: { id, entry } }
}
