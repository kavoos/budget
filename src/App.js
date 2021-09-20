import { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import { MainHeader } from './components/MainHeader'
import { NewEntryForm } from './components/NewEntryForm'
import { DisplayBalance } from './components/DisplayBalance'
import { DisplayBalances } from './components/DisplayBalances'
import { EntryLines } from './components/EntryLines'
import { ModalEdit } from './components/ModalEdit'
import { useDispatch, useSelector } from 'react-redux'
import { getAllEntriesAction } from './actions/entries'
import './App.css'
import 'semantic-ui-css/semantic.min.css'

const App = () => {
    const [entry, setEntry] = useState()
    const [totalIncomes, setTotalIncomes] = useState(0)
    const [totalExpenses, setTotalExpenses] = useState(0)
    const [total, setTotal] = useState(0)

    const { isOpen, id } = useSelector((state) => state.modals)
    const entries = useSelector((state) => state.entries)

    useEffect(() => {
        const i = entries.findIndex((e) => e.id === id)
        setEntry(entries[i])
    }, [isOpen, id, entries])

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

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllEntriesAction())
    }, [])

    return (
        <Container style={{ marginTop: 16 }}>
            <MainHeader title="Budget" />
            <DisplayBalance size="small" label="Your balance:" value={total} />
            <DisplayBalances
                totalIncomes={totalIncomes}
                totalExpenses={totalExpenses}
            />

            <MainHeader title="History" type="h3" />
            <EntryLines entries={entries} />

            <MainHeader title="Add new transaction" type="h3" />
            <NewEntryForm />

            <ModalEdit isOpen={isOpen} {...entry} />
        </Container>
    )
}

export default App
