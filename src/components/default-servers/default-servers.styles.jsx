import styled from "styled-components";

export const DefaultServersStyles = styled.div`
    margin-top: 2.1rem;
`;

export const GridBoxStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;