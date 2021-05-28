import styled from 'styled-components'

export const StyledForm = styled.form`
    width: 40%;
    padding: 15px;
    border-radius: 7px;
    background-color: ${props => props.theme.bg};
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
    border: none;
    outline: none;
    margin-left: 20px;
    background-color: inherit;
    color: inherit;

    ::placeholder {
        color: inherit;
    }
`
