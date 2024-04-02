import styled from "styled-components";
import { defaultTheme } from "@/styles/themes/default"

export const Container = styled.div`
    background-color: ${defaultTheme.colors.neutral.white};
    padding: 0.6rem 1rem;
    border: 2px solid rgb(224, 224, 224, 0.7);
    border-radius: 0.6rem;
    width: 25rem;
    height: 3rem;

    transition: all 300ms linear;
    &:focus-within {
        outline: 0.5px solid green;
        border-color:  ${defaultTheme.colors.components["default-light"]};
    }
`;

export const Input  = styled.input`
    border: none;
    background-color: transparent;
    height: 100%;
    width: 100%;

    &::placeholder {
        font-size: ${defaultTheme.fontSize.paragraph5};

        color: ${defaultTheme.colors.black[300]};
    }
`;

