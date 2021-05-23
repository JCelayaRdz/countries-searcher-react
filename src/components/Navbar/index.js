import { StyledNavbar, Title, ThemeBtn } from './styles'

export const Navbar = () => (
    <StyledNavbar>
        <Title>Where in the world?</Title>
        <div>
            <i className="fas fa-moon"></i>
            <ThemeBtn>
                Dark Mode
            </ThemeBtn>
        </div>
    </StyledNavbar>
)