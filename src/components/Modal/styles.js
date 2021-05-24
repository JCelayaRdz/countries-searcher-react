import styled from "styled-components";

export const ModalContainer = styled.div`
    display: ${props => props.showModal ? "block" : "none"};
    width: 90%;
    height: 100vh;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    position: fixed;
    z-index: 1000;
    left: 50%;
    top: 80px;
    transform: translateX(-50%);
`

export const ModalBtn = styled.button`
    background-color: ${props => props.theme.bg};
    color: inherit;
    border: none;
    padding: none;
    margin-top: 60px;
    padding: 10px;
    border-radius: 7px;
    text-align: center;
    width: 7%;
`

export const Icon = styled.i`
    margin-right: 10px;
`