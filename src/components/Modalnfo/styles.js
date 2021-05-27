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
        width: 70vw;
    }
`

export const TextInfo = styled.div`
    display: flex;
    width: 40vw;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        height: 50%;
        width: 90vw;
        flex-direction: row;
    }
`

export const List = styled.ul`
    line-height: 30px;
    list-style: none;
    margin: 0;
    padding: 0;
`

export const P = styled.p`
    display: inline;
    font-weight: 600;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding-bottom: 10rem;
    }
`

export const Button = styled.button`
    background-color: ${props => props.theme.bg};
    cursor: pointer;
    text-align: center;
    display: inline-block;
    padding: 5px;
    width: auto;
    border: none;
    border-radius: 5px;
    display: inline;
    margin: 0 0.2rem;
    color: inherit;

    @media (max-width: 768px) {
        margin: 0.5rem 0;
    }
`
