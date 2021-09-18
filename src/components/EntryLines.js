import PropTypes from 'prop-types'
import { EntryLine } from './EntryLine'

export const EntryLines = ({ entries, deleteEntry }) => {
    return (
        <>
            {entries.map((e) => (
                <EntryLine key={e.id} {...e} deleteEntry={deleteEntry} />
            ))}
        </>
    )
}

EntryLines.propTypes = {
    entries: PropTypes.array,
    deleteEntry: PropTypes.func,
}
