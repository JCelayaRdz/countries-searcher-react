import { Container, DropdownBtn, DropDownDiv, Icon, RegionBtn } from "./styles";

export const DropDownMenu = () => (
    <Container>
        <DropdownBtn>
            Filter by Region
            <Icon className="fas fa-caret-down"/>
        </DropdownBtn>
        <DropDownDiv>
            <RegionBtn>
                Africa
            </RegionBtn>
            <RegionBtn>
                Americas
            </RegionBtn>
            <RegionBtn>
                Asia
            </RegionBtn>
            <RegionBtn>
                Europe
            </RegionBtn>
            <RegionBtn>
                Oceania
            </RegionBtn>
        </DropDownDiv>
    </Container>
)