import styled from 'styled-components'
import { ModalBtn } from '../Modal/styles'

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