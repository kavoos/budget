import PropTypes from 'prop-types'
import { Statistic } from 'semantic-ui-react'

export const DisplayBalance = ({
    size = 'tiny',
    color = 'black',
    textAlign,
    label,
    value,
}) => {
    return (
        <Statistic size={size} color={color} style={{ textAlign }}>
            <Statistic.Label>{label}</Statistic.Label>
            <Statistic.Value>€{value.toFixed(2)}</Statistic.Value>
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
