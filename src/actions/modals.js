export const modalType = {
    OPEN: 'OPEN_EDIT_MODAL',
    CLOSE: 'CLOSE_EDIT_MODAL',
}

export const openEditModalAction = (id) => {
    return { type: modalType.OPEN, payload: { id } }
}

export const closeEditModalAction = () => {
    return { type: modalType.CLOSE }
}
