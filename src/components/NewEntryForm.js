import { Form } from 'semantic-ui-react'
import { useEntryDetails } from '../hooks/useEntryDetails'
import { ButtonSaveOrCancel } from './ButtonSaveOrCancel'
import { EntryForm } from './EntryForm'

export const NewEntryForm = () => {
    const {
        description,
        value,
        isExpense,
        setDescription,
        setValue,
        setIsExpense,
        addEntry,
        resetEntry,
    } = useEntryDetails()

    return (
        <Form>
            <EntryForm
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />
            <ButtonSaveOrCancel addEntry={addEntry} resetEntry={resetEntry} />
        </Form>
    )
}
