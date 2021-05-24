import styled from 'styled-components'
import { ModalBtn } from '../Modal/styles'

export const InfoContainer = styled.div`
    margin-top: 3rem;
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const CountryImg = styled.img`
    height: 300px;

    @media (max-width: 768px) {
        height: 200px;
    }
`

export const TitleContainer = styled.div`
    color: inherit;
    margin-left: 4rem;

    @media (max-width: 768px) {
        margin-left: 0;
    }
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

    @media (max-width: 768px) {
        width: 90%;
        flex-direction: column;
        justify-content: center;
    }
`
export const BordersContainer = styled(TitleContainer)`
    margin-left: 0;
    justify-content: space-between;
`

export const BorderBtn = styled(ModalBtn)`
    width: auto;
    margin-left: 1rem;
`