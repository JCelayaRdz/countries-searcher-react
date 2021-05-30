import { Container, DropdownBtn, DropDownDiv, Icon, RegionBtn } from './styles'
import PropTypes from 'prop-types'

const DropDownMenu = ({ handleFilter, showMenu, handleShowMenu }) => (
    <Container showMenu={showMenu}>
        <DropdownBtn onClick={handleShowMenu}>
            Filter by Region
            <Icon className="fas fa-caret-down"/>
        </DropdownBtn>
        <DropDownDiv>
            <RegionBtn onClick={handleFilter}>
                Africa
            </RegionBtn>
            <RegionBtn onClick={handleFilter}>
                Americas
            </RegionBtn>
            <RegionBtn onClick={handleFilter}>
                Asia
            </RegionBtn>
            <RegionBtn onClick={handleFilter}>
                Europe
            </RegionBtn>
            <RegionBtn onClick={handleFilter}>
                Oceania
            </RegionBtn>
        </DropDownDiv>
    </Container>
)

DropDownMenu.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired,
  handleShowMenu: PropTypes.func.isRequired
}

export { DropDownMenu }
