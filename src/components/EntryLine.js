import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Segment, Grid, Icon } from 'semantic-ui-react'
import { removeEntryAction } from '../actions/entries'
import { openEditModalAction } from '../actions/modals'

export const EntryLine = ({ id, description, value, isExpense = false }) => {
    const dispatch = useDispatch()

    return (
        <Segment color={isExpense ? 'red' : 'green'}>
            <Grid columns={3} textAlign="right">
                <Grid.Row>
                    <Grid.Column width={8} textAlign="left">
                        {description}
                    </Grid.Column>
                    <Grid.Column width={4} textAlign="right">
                        €{isNaN(value) ? 0 : value.toFixed(2)}
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Icon
                            name="edit"
                            onClick={() => dispatch(openEditModalAction(id))}
                            style={{ cursor: 'pointer' }}
                        />
                        <Icon
                            name="trash"
                            onClick={() => dispatch(removeEntryAction(id))}
                            style={{ cursor: 'pointer' }}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

EntryLine.propTypes = {
    id: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.number,
    isExpense: PropTypes.bool,
}
