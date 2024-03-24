import styled from "styled-components";

export const Button = styled.button`
    width: 10rem;
    height: 3rem;
    border-radius: 8.06px;
    border: 0.81px solid #32794F;
    background-color: rgba(50, 121, 79, 0.2);
    transition: 300ms;

    &:hover {
        background-color: #DDF7E3;
        
    }

    &:active {
        background-color: #BEEBC2;
    }
`;
