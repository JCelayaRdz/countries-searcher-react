import { StyledHeader, Navbar, Title, ThemeBtn } from './styles'
import PropTypes from 'prop-types'

const Header = ({ handleToggleTheme }) => {
  return (
        <StyledHeader>
            <Navbar>
                <Title>Where in the world?</Title>
                <div>
                     <i className="fas fa-moon"></i>
                    <ThemeBtn onClick={handleToggleTheme}>
                     Dark Mode
                    </ThemeBtn>
                </div>
            </Navbar>
        </StyledHeader>
  )
}

Header.propTypes = {
  handleToggleTheme: PropTypes.func.isRequired
}

export { Header }
