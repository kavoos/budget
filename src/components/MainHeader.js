import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

export const MainHeader = ({ title, type = 'h1' }) => {
    return <Header as={type}>{title}</Header>
}

MainHeader.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
}
