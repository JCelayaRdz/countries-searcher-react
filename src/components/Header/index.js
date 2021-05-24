import { Navbar } from '../Navbar'
import { StyledHeader } from './styles'

export const Header = ({handleToggleTheme}) => {
    return(
        <StyledHeader>
            <Navbar
                handleToggleTheme={handleToggleTheme}
            />
        </StyledHeader>
    )
}