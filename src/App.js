import { Container } from 'semantic-ui-react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { MainHeader } from './components/MainHeader'
import { NewEntryForm } from './components/NewEntryForm'
import { DisplayBalance } from './components/DisplayBalance'
import { DisplayBalances } from './components/DisplayBalances'
import { EntryLine } from './components/EntryLine'

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
            <EntryLine description="Something" value="120.99" isExpense />
            <EntryLine description="Something else" value="13.99" />
            <EntryLine description="Another something" value="20.99" />

            <MainHeader title="Add new transaction" type="h3" />

            <NewEntryForm />
        </Container>
    )
}

export default App
