import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'
import { ButtonSaveOrCancel } from './ButtonSaveOrCancel'
import { EntryForm } from './EntryForm'

export const NewEntryForm = ({
    addEntry,
    description,
    value,
    isExpense,
    setDescription,
    setValue,
    setIsExpense,
}) => {
    return (
        <Form unstackable>
            <EntryForm
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />
            <ButtonSaveOrCancel addEntry={addEntry} />
        </Form>
    )
}

NewEntryForm.propTypes = {
    addEntry: PropTypes.func,
    description: PropTypes.string,
    value: PropTypes.number,
    isExpense: PropTypes.bool,
    setDescription: PropTypes.func,
    setValue: PropTypes.func,
    setIsExpense: PropTypes.func,
}
