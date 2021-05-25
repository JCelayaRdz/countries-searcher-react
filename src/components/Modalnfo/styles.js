import styled from 'styled-components'

export const InfoContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    height: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        font-size: 14px;
    }
`

export const CountryImg = styled.img`
    height: 300px;
    object-fit: contain;

    @media (max-width: 768px) {
        height: 200px;
    }
`
export const CountryInfo = styled.div`
    color: inherit;
    width: 50vw;
    margin-left: 4rem;

    @media (max-width: 768px) {
        margin-left: 0;
        width: 90vw;
    }
`

export const TextInfo = styled.div`
    display: flex;
    width: 40vw;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        height: 80%;
        flex-direction: column;
        align-content: space-between;
    }
`

export const List = styled.ul`
    line-height: 30px;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
        width: 70vw;
    }
`

export const P = styled.p`
    display: inline-block;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media (max-width: 768px) {
        margin-top: 1rem;
        flex-direction: column;
    }
`

export const Button = styled.button`
    background-color: ${props => props.theme.bg};
    padding: 5px;
    width: 10%;
    border: none;
    border-radius: 5px;
    display: inline;
    margin: 0 0.2rem;
    color: inherit;
`