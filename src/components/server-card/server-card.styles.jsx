import styled from "styled-components";

export const CardStyles = styled.a`
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #161b22;
    padding: 0;
    border-radius: 1rem;
    text-align: center;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.4rem;

    &:hover {
        border: 0.2rem solid aqua;
    }

    img {
        margin-top: 1rem;
        width: 70%;
        height: 70%;
        border-radius: 1rem;
    }
`;

export const UsernameStyles = styled.span`
    margin-top: 1rem;
    font-size: 1.8rem;
`;

export const StatusStyles = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
`;