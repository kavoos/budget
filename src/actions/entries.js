export const entryType = {
    ADD: 'ADD_ENTRY',
    REMOVE: 'REMOVE_ENTRY',
    UPDATE: 'UPDATE_ENTRY',
    GET_ALL: 'GET_ENTRIES',
    POPULATE: 'POPULATE_ENTIRES',
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
