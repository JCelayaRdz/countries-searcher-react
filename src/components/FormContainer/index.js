import { Container } from "./styles"
import { Form } from '../Form'
import { DropDownMenu } from "../DropDownMenu"

export const FormContainer = ({handleOnSubmit, handleOnChange, countryToSearch}) => (
    <Container>
        <Form
            handleOnSubmit={handleOnSubmit}
            handleOnChange={handleOnChange}
            countryToSearch={countryToSearch}
        />
        <DropDownMenu />
    </Container>
)