import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    margin-top: 3rem;
    width: 100%;

    @media (max-width: 768px){
        margin-top: 1rem;
        flex-direction: column;
    }
`
export const FlagImg = styled.img`
    height: 300px;

    @media (max-width: 768px){
        object-fit: contain;
    }
`
export const TextContainer = styled.div`
    margin-left: 4rem;

    @media (max-width: 768px){
        margin-left: 0;
    }
`
export const Paragraph = styled.p`
    display: inline;
    font-weight: 600;
`
export const ListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px){
        flex-direction: column;
    }
`
export const List = styled.ul`
    list-style: none;
    padding: 0;
`
export const ButtonContainer = styled.div`
    padding-bottom: 10rem;
`
export const Button = styled.button`
    border: none;
    outline: none;
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.text};
    margin: 0.2rem;
    padding: 10px;
    border-radius: 7px;
`
export const P = styled.p`
    display: inline;
    font-weight: 600;
    @media (max-width: 768px) {
        display: block;
    }
`
