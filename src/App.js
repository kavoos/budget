import { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import { MainHeader } from './components/MainHeader'
import { NewEntryForm } from './components/NewEntryForm'
import { DisplayBalance } from './components/DisplayBalance'
import { DisplayBalances } from './components/DisplayBalances'
import { EntryLines } from './components/EntryLines'
import { ModalEdit } from './components/ModalEdit'
import './App.css'
import 'semantic-ui-css/semantic.min.css'

const App = () => {
    const [entries, setEntries] = useState(initialEntries)
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)
    const [isExpense, setIsExpense] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [entryId, setEntryId] = useState()
    const [totalIncomes, setTotalIncomes] = useState(0)
    const [totalExpenses, setTotalExpenses] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if (!isOpen && entryId) {
            const i = entries.findIndex((e) => e.id === entryId)
            const newEntries = [...entries]

            newEntries[i].description = description
            newEntries[i].value = value
            newEntries[i].isExpense = isExpense

            setEntries(newEntries)
            resetEntry()
        }
    }, [isOpen])

    useEffect(() => {
        let tIncomes = 0
        let tExpenses = 0

        entries.map((e) => {
            if (e.isExpense) return (tExpenses += e.value)
            return (tIncomes += e.value)
        })

        setTotal(tIncomes - tExpenses)
        setTotalIncomes(tIncomes)
        setTotalExpenses(tExpenses)
    }, [entries])

    const deleteEntry = (id) => {
        const result = entries.filter((e) => e.id !== id)
        setEntries(result)
    }

    const editEntry = (id) => {
        const i = entries.findIndex((e) => e.id === id)
        const entry = entries[i]

        setEntryId(id)
        setDescription(entry.description)
        setValue(entry.value)
        setIsExpense(entry.isExpense)

        if (id) setIsOpen(true)
    }

    const addEntry = () => {
        const result = entries.concat({
            id: entries.length + 1,
            description,
            value,
            isExpense,
        })
        setEntries(result)
    }

    const resetEntry = () => {
        setDescription('')
        setValue(0)
        setIsExpense(true)
    }

    return (
        <Container>
            <MainHeader title="Budget" />
            <DisplayBalance size="small" label="Your balance:" value={total} />
            <DisplayBalances
                totalIncomes={totalIncomes}
                totalExpenses={totalExpenses}
            />

            <MainHeader title="History" type="h3" />
            <EntryLines
                entries={entries}
                deleteEntry={deleteEntry}
                editEntry={editEntry}
            />

            <MainHeader title="Add new transaction" type="h3" />
            <NewEntryForm
                addEntry={addEntry}
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />

            <ModalEdit
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                addEntry={addEntry}
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />
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
