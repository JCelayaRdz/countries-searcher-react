import styled from "styled-components";

export const StyledNavbar = styled.div`
    height: 80px;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: inherit;
    background-color: inherit;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const Title = styled.h1`
    color: inherit;
    font-size: 28px;
    margin-left: 5rem;

    @media (max-width: 768px) {
        margin-left: 1rem;
        font-size: 14px;
    }
`

export const ThemeBtn = styled.button`
    background-color: transparent;
    margin-left: 0.25rem;
    margin-right: 5rem;
    outline: none;
    border: none;
    color: inherit;
    font-size: 14px;

    @media (max-width: 768px) {
        font-size: 12px;
        margin-right: 1rem;
    }
`