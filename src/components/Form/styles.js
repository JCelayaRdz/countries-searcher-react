import styled from 'styled-components'

export const StyledForm = styled.form`
    width: 40%;
    background-color: hsl(209, 23%, 22%);
    padding: 15px;
    border-radius: 7px;
    color: hsl(0, 0%, 100%);

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