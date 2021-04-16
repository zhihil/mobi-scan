import styled, { css } from "styled-components"
import { breakpoints, transitionAll, unit } from "../../../style/utils"

export const Container = styled.div`
    ${breakpoints({
        xs: css`
            padding: ${unit(8)};
            height: ${({ hasFile }) => hasFile ? 70 : 30}%;
            width: 75%;
        `,
       lg: css`
            padding: ${unit(8)};
            height: ${({ hasFile }) => hasFile ? 60 : 20}%;
            width: 50%;
       `,
    })}

    ${transitionAll(theme => theme.animation.timing.gradual)}

    border-radius: ${({ theme }) => theme.dim.border.radius}px;
    box-shadow: 6px 8px 30px rgb(0, 0, 0, 0.2);

    ${({ theme }) => css`
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.primaryText};
    `}
`;
