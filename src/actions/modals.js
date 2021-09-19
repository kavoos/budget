export const OPEN_EDIT_MODAL_TYPE = 'OPEN_EDIT_MODAL'
export const CLOSE_EDIT_MODAL_TYPE = 'CLOSE_EDIT_MODAL'

export const openEditModalAction = (id) => {
    return { type: OPEN_EDIT_MODAL_TYPE, payload: { id } }
}

export const closeEditModalAction = () => {
    return { type: CLOSE_EDIT_MODAL_TYPE }
}
