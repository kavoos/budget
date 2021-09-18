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
    const [entries, setEntries] = useState(initialEntries)

    const deleteEntry = (id) => {
        const result = entries.filter((e) => e.id !== id)
        setEntries(result)
    }

    const addEntry = (description, value, isExpense) => {
        const result = entries.concat({
            id: entries.length + 1,
            description,
            value,
            isExpense,
        })
        setEntries(result)
    }

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
            <EntryLines entries={entries} deleteEntry={deleteEntry} />

            <MainHeader title="Add new transaction" type="h3" />
            <NewEntryForm addEntry={addEntry} />
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
