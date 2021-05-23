import { Container } from "./styles"
import { Form } from '../Form'
import { DropDownMenu } from "../DropDownMenu"

export const FormContainer = ({handleOnSubmit, handleOnChange, handleFilter, countryToSearch}) => (
    <Container>
        <Form
            handleOnSubmit={handleOnSubmit}
            handleOnChange={handleOnChange}
            countryToSearch={countryToSearch}
        />
        <DropDownMenu
            handleFilter={handleFilter}
        />
    </Container>
)