import PropTypes from 'prop-types'
import { useState } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'
import { ButtonSaveOrCancel } from './ButtonSaveOrCancel'

export const NewEntryForm = ({ addEntry }) => {
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)
    const [isExpense, setIsExpense] = useState(true)

    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input
                    icon="tag"
                    width={12}
                    label="Description"
                    placeholder="New item"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Form.Input
                    icon="euro"
                    iconPosition="left"
                    width={4}
                    label="Value"
                    placeholder="100"
                    value={value}
                    onChange={(e) => setValue(+e.target.value)}
                />
            </Form.Group>
            <Segment compact>
                <Checkbox
                    label="Is expense"
                    checked={isExpense}
                    toggle
                    onChange={() => setIsExpense((oldState) => !oldState)}
                />
            </Segment>
            <ButtonSaveOrCancel
                addEntry={addEntry}
                description={description}
                value={value}
                isExpense={isExpense}
            />
        </Form>
    )
}

NewEntryForm.propTypes = {
    addEntry: PropTypes.func,
}
