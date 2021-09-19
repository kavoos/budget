import PropTypes from 'prop-types'
import { EntryLine } from './EntryLine'

export const EntryLines = ({ entries }) => {
    return (
        <>
            {entries.map((e) => (
                <EntryLine key={e.id} {...e} />
            ))}
        </>
    )
}

EntryLines.propTypes = {
    entries: PropTypes.array,
}
