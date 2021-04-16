import styled from "styled-components";
import { darken, lighten, transitionAll, unit } from "../../style/utils";

export const buttonVariant = {
    primary: 'primary',
    secondary: 'secondary'
};

export const Button = styled.button`
    padding-top: ${unit(3)};
    padding-bottom: ${unit(3)};
    padding-left: ${unit(3)};
    padding-right: ${unit(3)};

    font-size: ${unit(4)};

    background-color: ${({ variant = buttonVariant.primary, theme }) => `
        ${variant === buttonVariant.primary 
            ? theme.colors.primary 
            : theme.colors.secondary }
    `};
    color: ${({ variant = buttonVariant.primary, theme }) => `
        ${variant === buttonVariant.primary 
            ? theme.colors.primaryText 
            : theme.colors.secondaryText }
    `};
    border: none;
    border-radius: ${({ theme }) => theme.dim.border.radius}px;

    ${transitionAll()}

    :hover {
        background-color: ${({ theme }) => lighten(theme.colors.primary, 0.10)};
    }

    :active {
        background-color: ${({ theme }) => darken(theme.colors.primary, 0.10)};
    }
`;
