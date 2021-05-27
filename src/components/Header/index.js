import { StyledHeader, Navbar, Title, ThemeBtn } from './styles'

export const Header = ({ handleToggleTheme }) => {
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
