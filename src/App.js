import { Container, Grid, Icon, Segment, Statistic } from 'semantic-ui-react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { MainHeader } from './components/MainHeader'
import { NewEntryForm } from './components/NewEntryForm'

const App = () => {
    return (
        <Container>
            <MainHeader title="Budget" />
            <Statistic size="small">
                <Statistic.Label>Your balance:</Statistic.Label>
                <Statistic.Value>2,500.53</Statistic.Value>
            </Statistic>

            <Segment textAlign="center">
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <Statistic size="tiny" color="green">
                                <Statistic.Label style={{ textAlign: 'left' }}>
                                    Incoming:
                                </Statistic.Label>
                                <Statistic.Value>1,500.54</Statistic.Value>
                            </Statistic>
                        </Grid.Column>
                        <Grid.Column>
                            <Statistic size="tiny" color="red">
                                <Statistic.Label style={{ textAlign: 'left' }}>
                                    Expenses:
                                </Statistic.Label>
                                <Statistic.Value>892.54</Statistic.Value>
                            </Statistic>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

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
