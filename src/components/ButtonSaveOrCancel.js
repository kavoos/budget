import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

export const ButtonSaveOrCancel = ({ addEntry, resetEntry }) => {
    return (
        <>
            <Button
                onClick={() => resetEntry()}
                style={{ marginRight: '.75em' }}
            >
                Reset
            </Button>
            <Button primary onClick={() => addEntry()}>
                Save
            </Button>
        </>
    )
}

ButtonSaveOrCancel.propTypes = {
    addEntry: PropTypes.func,
    resetEntry: PropTypes.func,
}
