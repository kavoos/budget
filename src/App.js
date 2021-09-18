import { Container, Grid, Icon, Segment } from 'semantic-ui-react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { MainHeader } from './components/MainHeader'
import { NewEntryForm } from './components/NewEntryForm'
import { DisplayBalance } from './components/DisplayBalance'
import { DisplayBalances } from './components/DisplayBalances'

const App = () => {
    return (
        <Container>
            <MainHeader title="Budget" />
            <DisplayBalance
                size="small"
                label="Your balance:"
                value={2300.99}
            />

            <DisplayBalances />

            <MainHeader title="History" type="h3" />

            <Segment color="red">
                <Grid columns={3} textAlign="right">
                    <Grid.Row>
                        <Grid.Column width={10} textAlign="left">
                            Restaurant
                        </Grid.Column>
                        <Grid.Column width={3} textAlign="right">
                            €120.99
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name="edit" />
                            <Icon name="trash" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment color="green">
                <Grid columns={3} textAlign="right">
                    <Grid.Row>
                        <Grid.Column width={10} textAlign="left">
                            Restaurant
                        </Grid.Column>
                        <Grid.Column width={3} textAlign="right">
                            €120.99
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name="edit" />
                            <Icon name="trash" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <MainHeader title="Add new transaction" type="h3" />

            <NewEntryForm />
        </Container>
    )
}

export default App
