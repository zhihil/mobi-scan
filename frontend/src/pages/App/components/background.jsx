import styled, { css }  from "styled-components";

export const Background = styled.div`
    width: 100%;
    height: 100%;

    ${({ theme }) => css`
        background: ${theme.colors.primary};  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, ${theme.colors.primaryGradEnd}, ${theme.colors.primary});  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, ${theme.colors.primaryGradEnd}, ${theme.colors.primary}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    `};
`;