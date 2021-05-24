import styled from 'styled-components'

export const StyledForm = styled.form`
    width: 40%;
    background-color: ${props => props.theme.bg};
    padding: 15px;
    border-radius: 7px;
    color: ${props => props.theme.text};

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 2rem;
    }
`

export const SearchIcon = styled.i`
    margin-left: 1rem;
    color: inherit;
`

export const Input = styled.input`
    width: 70%;
    margin-left: 20px;
    background-color: inherit;
    outline: none;
    color: inherit;
    border: none;

    ::placeholder {
        color: inherit;
    }
`