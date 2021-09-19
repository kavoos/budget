import PropTypes from 'prop-types'
import { Segment, Grid, Icon } from 'semantic-ui-react'

export const EntryLine = ({
    id,
    description,
    value,
    isExpense = false,
    deleteEntry,
    editEntry,
}) => {
    return (
        <Segment color={isExpense ? 'red' : 'green'}>
            <Grid columns={3} textAlign="right">
                <Grid.Row>
                    <Grid.Column width={10} textAlign="left">
                        {description}
                    </Grid.Column>
                    <Grid.Column width={3} textAlign="right">
                        €{value}
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Icon
                            name="edit"
                            onClick={() => editEntry(id)}
                            style={{ cursor: 'pointer' }}
                        />
                        <Icon
                            name="trash"
                            onClick={() => deleteEntry(id)}
                            style={{ cursor: 'pointer' }}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

EntryLine.propTypes = {
    id: PropTypes.number,
    description: PropTypes.string,
    value: PropTypes.number,
    isExpense: PropTypes.bool,
    deleteEntry: PropTypes.func,
    editEntry: PropTypes.func,
}
