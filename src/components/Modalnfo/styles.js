import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 3rem;
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const FlagImg = styled.img`
    height: 300px;
    object-fit: cover;
    
    @media (max-width: 768px) {
        height: auto;
    }
`

export const TextContainer = styled(Container)`
    margin: 0 0 0 3rem;
    flex-direction: column;
    @media (max-width: 768px) {
        margin: 0;
    }
`

export const Paragraph = styled.p`
    font-weight: 600;
    display: inline;
`

export const ListContainer = styled.div`
    display: flex;
    width: 40vw;
    justify-content: space-between;
    @media (max-width: 768px) {
        width: 100vw;
        flex-direction: column;
    }
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    line-height: 30px;
`

export const ButtonContainer = styled.div`
    @media (max-width: 768px) {
        padding-bottom: 10rem;
    }
`

export const Button = styled.button`
    border: none;
    margin: 0 10px 10px 0;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    background: ${props => props.theme.bg};
    color: ${props => props.theme.text};
`

export const P = styled(Paragraph)`
    display: inline;
    @media (max-width: 768px) {
        display: block;
    }
`
