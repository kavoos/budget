import { OPEN_EDIT_MODAL_TYPE, CLOSE_EDIT_MODAL_TYPE } from '../actions/modals'

export const modalsReducers = (state = { isOpen: false }, action) => {
    switch (action.type) {
        case OPEN_EDIT_MODAL_TYPE: {
            return { ...state, isOpen: true, id: action.payload.id }
        }
        case CLOSE_EDIT_MODAL_TYPE: {
            return { ...state, isOpen: false, id: null }
        }
        default:
            return state
    }
}
