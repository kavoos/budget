import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Button, Form, Modal } from 'semantic-ui-react'
import { closeEditModalAction } from '../actions/modals'
import { useEntryDetails } from '../hooks/useEntryDetails'
import { EntryForm } from './EntryForm'

export const ModalEdit = (props) => {
    const dispatch = useDispatch()

    const {
        description,
        value,
        isExpense,
        setDescription,
        setValue,
        setIsExpense,
        updateEntry,
    } = useEntryDetails(props.description, props.value, props.isExpense)

    return (
        <Modal open={props.isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <Form unstackable>
                    <EntryForm
                        description={description}
                        value={value}
                        isExpense={isExpense}
                        setDescription={setDescription}
                        setValue={setValue}
                        setIsExpense={setIsExpense}
                    />
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => dispatch(closeEditModalAction())}>
                    Close
                </Button>
                <Button primary onClick={() => updateEntry(props.id)}>
                    Save
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

ModalEdit.propTypes = {
    isOpen: PropTypes.bool,
    id: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.number,
    isExpense: PropTypes.bool,
}
