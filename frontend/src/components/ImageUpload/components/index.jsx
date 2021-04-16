import styled from "styled-components";
import { transitionAll } from "../../../style/utils";

export const Image = styled.img`
    ${transitionAll(theme => theme.animation.timing.gradual)}

    border-radius: ${({ theme }) => theme.dim.border.radius}px;
`;