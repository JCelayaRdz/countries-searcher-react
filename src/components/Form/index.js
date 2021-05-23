import { SearchIcon, StyledForm, Input } from "./styles";

export const Form = () => (
    <StyledForm>
        <SearchIcon className="fas fa-search"/>
        <Input 
            placeholder="Search for a country..."
        />
    </StyledForm>
)