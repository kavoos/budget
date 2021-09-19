import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

export const ButtonSaveOrCancel = ({ addEntry }) => {
    return (
        <>
            <Button style={{ marginRight: '.75em' }}>Cancel</Button>
            <Button primary onClick={() => addEntry()}>
                Save
            </Button>
        </>
    )
}

ButtonSaveOrCancel.propTypes = {
    addEntry: PropTypes.func,
}
