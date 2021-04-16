import styled from "styled-components";
import { flexbox, layout } from "styled-system";

export const ColumnFlex = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: space-around;   // center on vertical (main-axis)
    align-items: center;             // center on horizontal (cross-axis)
    
    height: 100%;
    width: 100%;

    ${flexbox}
    ${layout}
`;

export const RowFlex = styled.div`
    display: flex;
    flex-direction: row;
    
    height: 100%;
    width: 100%;

    ${flexbox}
    ${layout}
`;
