import { Container } from './styles'
import { Form } from '../Form'
import { DropDownMenu } from '../DropDownMenu'
import PropTypes from 'prop-types'

const FormContainer = ({ handleOnSubmit, handleOnChange, handleFilter, countryToSearch, showMenu, handleShowMenu }) => (
    <Container>
        <Form
            handleOnSubmit={handleOnSubmit}
            handleOnChange={handleOnChange}
            countryToSearch={countryToSearch}
        />
        <DropDownMenu
            handleFilter={handleFilter}
            showMenu={showMenu}
            handleShowMenu={handleShowMenu}
        />
    </Container>
)

FormContainer.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  countryToSearch: PropTypes.string.isRequired,
  showMenu: PropTypes.bool.isRequired,
  handleShowMenu: PropTypes.func.isRequired
}

export { FormContainer }
