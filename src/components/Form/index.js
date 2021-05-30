import { SearchIcon, StyledForm, Input } from './styles'
import PropTypes from 'prop-types'

const Form = ({ handleOnSubmit, handleOnChange, countryToSearch }) => (
    <StyledForm onSubmit={handleOnSubmit}>
        <SearchIcon className="fas fa-search"/>
        <Input
            placeholder="Search for a country..."
            value={countryToSearch}
            onChange={handleOnChange}
        />
    </StyledForm>
)

Form.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  countryToSearch: PropTypes.string.isRequired
}

export { Form }
