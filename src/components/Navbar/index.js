import { StyledNavbar, Title, ThemeBtn } from './styles'

export const Navbar = ({handleToggleTheme}) => (
    <StyledNavbar>
        <Title>Where in the world?</Title>
        <div>
            <i className="fas fa-moon"></i>
            <ThemeBtn onClick={handleToggleTheme}>
                Dark Mode
            </ThemeBtn>
        </div>
    </StyledNavbar>
)