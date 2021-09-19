import PropTypes from 'prop-types'
import { EntryLine } from './EntryLine'

export const EntryLines = ({ entries, deleteEntry, editEntry }) => {
    return (
        <>
            {entries.map((e) => (
                <EntryLine
                    key={e.id}
                    {...e}
                    deleteEntry={deleteEntry}
                    editEntry={editEntry}
                />
            ))}
        </>
    )
}

EntryLines.propTypes = {
    entries: PropTypes.array,
    deleteEntry: PropTypes.func,
    editEntry: PropTypes.func,
}
