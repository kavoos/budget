import { useState } from 'react'
import { Container } from 'semantic-ui-react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { MainHeader } from './components/MainHeader'
import { NewEntryForm } from './components/NewEntryForm'
import { DisplayBalance } from './components/DisplayBalance'
import { DisplayBalances } from './components/DisplayBalances'
import { EntryLines } from './components/EntryLines'

const App = () => {
    // eslint-disable-next-line no-unused-vars
    const [entries, setEntries] = useState(initialEntries)

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
            <EntryLines entries={entries} />

            <MainHeader title="Add new transaction" type="h3" />

            <NewEntryForm />
        </Container>
    )
}

export default App

const initialEntries = [
    {
        id: 1,
        description: 'Work income',
        value: 3100.0,
        isExpense: false,
    },
    {
        id: 2,
        description: 'Water bill',
        value: 81.0,
        isExpense: true,
    },
    {
        id: 3,
        description: 'Rent',
        value: 850.0,
        isExpense: true,
    },
]
