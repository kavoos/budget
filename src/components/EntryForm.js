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
        <>
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
        </>
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
