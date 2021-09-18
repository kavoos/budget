import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

export const ButtonSaveOrCancel = ({
    addEntry,
    description,
    value,
    isExpense,
}) => {
    return (
        <Button.Group style={{ marginTop: 20 }}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button
                primary
                onClick={() => addEntry(description, value, isExpense)}
            >
                Save
            </Button>
        </Button.Group>
    )
}

ButtonSaveOrCancel.propTypes = {
    description: PropTypes.string,
    value: PropTypes.number,
    isExpense: PropTypes.bool,
    addEntry: PropTypes.func,
}
