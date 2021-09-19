import PropTypes from 'prop-types'
import { Segment, Grid } from 'semantic-ui-react'
import { DisplayBalance } from './DisplayBalance'

export const DisplayBalances = ({ totalIncomes, totalExpenses }) => {
    return (
        <Segment textAlign="center">
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance
                            color="green"
                            textAlign="left"
                            label="Incomes"
                            value={totalIncomes}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance
                            color="red"
                            textAlign="left"
                            label="Expenses"
                            value={totalExpenses}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

DisplayBalances.propTypes = {
    totalIncomes: PropTypes.number,
    totalExpenses: PropTypes.number,
}
