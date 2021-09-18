import { Container, Grid, Header, Segment, Statistic } from 'semantic-ui-react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'

function App() {
    return (
        <Container>
            <Header as="h1">Budget</Header>
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
        </Container>
    )
}

export default App
