export const entryType = {
    ADD: 'ADD_ENTRY',
    REMOVE: 'REMOVE_ENTRY',
    UPDATE: 'UPDATE_ENTRY',
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
