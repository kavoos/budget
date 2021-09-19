import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { addEntryAction, updateEntryAction } from '../actions/entries'
import { closeEditModalAction } from '../actions/modals'

export const useEntryDetails = (desc = '', val = 0, isExp = true) => {
    const [description, setDescription] = useState(desc)
    const [value, setValue] = useState(val)
    const [isExpense, setIsExpense] = useState(isExp)

    const dispatch = useDispatch()

    useEffect(() => {
        setDescription(desc)
        setValue(val)
        setIsExpense(isExp)
    }, [desc, val, isExp])

    const updateEntry = (id) => {
        dispatch(updateEntryAction(id, { id, description, value, isExpense }))
        dispatch(closeEditModalAction())
        resetEntry()
    }

    const addEntry = () => {
        dispatch(
            addEntryAction({
                id: uuid(),
                description,
                value,
                isExpense,
            })
        )

        resetEntry()
    }

    const resetEntry = () => {
        setDescription('')
        setValue(0)
        setIsExpense(true)
    }

    return {
        description,
        value,
        isExpense,
        setDescription,
        setValue,
        setIsExpense,
        addEntry,
        updateEntry,
    }
}
