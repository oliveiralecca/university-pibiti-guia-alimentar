import styled from "styled-components";

export const Container = styled.div`
    background-color: rgb(255, 255, 255);
    padding: 0.8rem 1rem;
    border: 2px solid rgb(224, 224, 224, 0.7);
    border-radius: 0.6rem;
    width: 30rem;

    transition: 300ms;

    &:focus-within {
        border-color:  rgba(50, 121, 79, 1);
        outline: 1.5px solid green;
    }
`;

export const Input  = styled.input`
    border: none;
    background-color: transparent;
    height: 1.5rem;
    width: 100%;

    &::placeholder {
        font-size: 0.95em;
        color: rgb(224, 224, 224, 1);
    }
`;

