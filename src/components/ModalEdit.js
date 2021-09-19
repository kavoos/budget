import PropTypes from 'prop-types'
import { Button, Form, Modal } from 'semantic-ui-react'
import { EntryForm } from './EntryForm'

export const ModalEdit = ({
    isOpen,
    setIsOpen,
    description,
    value,
    isExpense,
    setDescription,
    setValue,
    setIsExpense,
}) => {
    return (
        <Modal open={isOpen}>
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
                <Button onClick={() => setIsOpen(false)}>Close</Button>
                <Button primary onClick={() => setIsOpen(false)}>
                    Save
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

ModalEdit.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
    description: PropTypes.string,
    value: PropTypes.number,
    isExpense: PropTypes.bool,
    setDescription: PropTypes.func,
    setValue: PropTypes.func,
    setIsExpense: PropTypes.func,
}
