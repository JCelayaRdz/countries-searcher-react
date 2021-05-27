import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin: 3rem auto;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
