import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    :hover > div,
    :active > div {
        display: ${props => props.showMenu ? "flex" : "none"};
        flex-direction: column;
    }
`

export const DropdownBtn = styled.button`
    padding: 15px;
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.text};
    border: none;
    outline: none;
    border-radius: 7px;
    cursor: pointer;
`

export const Icon = styled.i`
    margin-left: 20px;
`

export const DropDownDiv = styled.div`
    display: none;
    position: absolute;
    z-index: 99;
    top: 100%;
    width: 100%;

    @media (max-width: 768px) {
        margin-top: 0.5rem;
        width: 47%;
    }
`

export const RegionBtn = styled(DropdownBtn)`
    border-radius: 0;

    :first-child {
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
    }

    :last-child {
        border-bottom-right-radius: 7px;
        border-bottom-left-radius: 7px;
    }
`