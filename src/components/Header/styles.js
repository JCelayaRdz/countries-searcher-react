import styled from "styled-components";

export const StyledHeader = styled.div`
    width: 100vw;
    position: fixed;
    top: 0;
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.text};
`