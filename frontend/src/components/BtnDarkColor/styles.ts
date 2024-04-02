import { defaultTheme } from "@/styles/themes/default";
import styled from "styled-components";

export const Button = styled.button`
    width: 10rem;
    height: 3rem;
    padding: 9px;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 1px 3px ${defaultTheme.colors.black[300]};
    transition: all 180ms linear;

    background: ${defaultTheme.colors.components["default-dark"]};
    &:hover {
        background: ${defaultTheme.colors.components["hover-dark"]};
    }

    &:active {
        position: relative;
        top: 0.7px;
        box-shadow: none;
        transform: scale(0.98);

        background: ${defaultTheme.colors.components["active-dark"]};
    }

`;