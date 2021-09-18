import { Segment, Grid } from 'semantic-ui-react'
import { DisplayBalance } from './DisplayBalance'

export const DisplayBalances = () => {
    return (
        <Segment textAlign="center">
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance
                            color="green"
                            textAlign="left"
                            label="Income:"
                            value={1500.99}
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance
                            color="red"
                            textAlign="left"
                            label="Expenses:"
                            value={982.99}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}
