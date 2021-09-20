import { modalType } from '../actions/modals'

export const modalsReducers = (state = { isOpen: false }, action) => {
    switch (action.type) {
        case modalType.OPEN: {
            return { ...state, isOpen: true, id: action.payload.id }
        }
        case modalType.CLOSE: {
            return { ...state, isOpen: false, id: null }
        }
        default:
            return state
    }
}
