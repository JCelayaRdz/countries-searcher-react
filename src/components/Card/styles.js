import styled from "styled-components";

export const CardContainer = styled.article`
    box-sizing: border-box;
    background-color: ${props => props.theme.bg};
    border-radius: 7px;
    overflow: hidden;
    color: ${props => props.theme.text};
    cursor: pointer;
`

export const Img = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`

export const Info = styled.div`
    width: 100%;
    padding: 20px;
`

export const Title = styled.h2`
    color: inherit;
    font-size: 17px;
    margin-bottom: 10px;
`

export const Div = styled.div`
    display: flex;
`

export const Span = styled.span`
    font-weight: 400;
`
    
export const P = styled.p`
    font-weight: 600;
`