import { SearchIcon, StyledForm, Input } from "./styles";

export const Form = ({handleOnSubmit, handleOnChange, countryToSearch}) => (
    <StyledForm onSubmit={handleOnSubmit}>
        <SearchIcon className="fas fa-search"/>
        <Input 
            placeholder="Search for a country..."
            value={countryToSearch}
            onChange={handleOnChange}
        />
    </StyledForm>
)