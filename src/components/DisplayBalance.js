import PropTypes from 'prop-types'
import { Statistic } from 'semantic-ui-react'

export const DisplayBalance = (props) => {
    const { size = 'tiny', color = 'black', textAlign, label, value } = props

    return (
        <Statistic size={size} color={color} style={{ textAlign }}>
            <Statistic.Label>{label}</Statistic.Label>
            <Statistic.Value>€{value}</Statistic.Value>
        </Statistic>
    )
}

DisplayBalance.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    textAlign: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.number,
}
