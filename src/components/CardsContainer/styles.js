import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 0.25fr));
    gap: 50px;
    width: 85%;
    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
`