import styled from "styled-components";

export const ModalContainer = styled.div`
    display: ${props => props.showModal ? "block" : "none"};
    width: 90%;
    height: 100vh;
    background-color: hsl(207, 26%, 17%);
    color: hsl(0, 0%, 100%);
    position: fixed;
    z-index: 1000;
    left: 50%;
    top: 80px;
    transform: translateX(-50%);
`

export const ModalBtn = styled.button`
    background-color: hsl(209, 23%, 22%);
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

export const InfoContainer = styled.div`
    margin-top: 3rem;
    display: flex;
`

export const CountryImg = styled.img`
    height: 300px;
`

export const TitleContainer = styled.div`
    color: inherit;
    margin-left: 4rem;
`

export const Title = styled.h2`
    margin: 0;
`

export const CountryInfo = styled(TitleContainer)`
    display: flex;
    width: 30vw;
    font-size: 14px;
    justify-content: space-between;
    margin-left: 0;
`
export const BordersContainer = styled(TitleContainer)`
    margin-left: 0;
    justify-content: space-between;
`

export const BorderBtn = styled(ModalBtn)`
    width: auto;
    margin-left: 1rem;
`