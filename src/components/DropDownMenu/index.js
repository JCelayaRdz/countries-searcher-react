import { Container, DropdownBtn, DropDownDiv, Icon, RegionBtn } from "./styles";

export const DropDownMenu = ({handleFilter}) => (
    <Container>
        <DropdownBtn>
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