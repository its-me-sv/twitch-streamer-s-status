import styled from "styled-components";

export const FieldStyles = styled.div`
    margin-top: 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FieldLabelStyles = styled.span`
    text-align: center;
    font-size: 1.4rem;
    font-weight: normal;
`;

export const InputFieldStyles = styled.input`
    margin-top: 0.7rem;
    margin-left: 0.6rem;
    padding: 0.4rem;
    background-color: #161b22;
    border-radius: 1rem;
    font-size: 1.2rem;
    color: white;
    border: 0.2rem solid rgba(55, 106, 176, 0.5);
    outline: none;
    width: auto;

    &:focus {
        border: 0.2rem solid rgb(28, 144, 221);
        border-radius: 1rem;
    }
`;