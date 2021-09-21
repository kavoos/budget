import PropTypes from 'prop-types'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

export const EntryForm = ({
    description,
    value,
    isExpense,
    setDescription,
    setValue,
    setIsExpense,
}) => {
    return (
        <Segment.Group>
            <Segment>
                <Form.Group>
                    <Form.Input
                        icon="tag"
                        width={12}
                        mobile={16}
                        label="Description"
                        placeholder="New item"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Form.Input
                        icon="euro"
                        iconPosition="left"
                        type="number"
                        width={4}
                        mobile={16}
                        label="Value"
                        placeholder="0"
                        value={value}
                        onChange={(e) => setValue(+e.target.value)}
                    />
                </Form.Group>
            </Segment>
            <Segment>
                <Checkbox
                    label="Is expense"
                    checked={isExpense}
                    toggle
                    onChange={() => setIsExpense((oldState) => !oldState)}
                />
            </Segment>
        </Segment.Group>
    )
}

EntryForm.propTypes = {
    description: PropTypes.string,
    value: PropTypes.number,
    isExpense: PropTypes.bool,
    setDescription: PropTypes.func,
    setValue: PropTypes.func,
    setIsExpense: PropTypes.func,
}
