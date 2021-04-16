import { css } from "styled-components";

export const unit = (units) => css`${({ theme }) => units * theme.spacing.unit}px`;

export const breakpoints = ({
    xs,
    sm,
    md,
    lg,
    xl
}) => css`
    // Extra small devices (portrait phones, less than 576px)
    ${xs}

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) { 
        ${sm}
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
        ${md}
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { 
        ${lg}
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) { 
        ${xl}
    }
`;

const CHANNEL_STRLEN = 2;
const NUM_CHANNELS = 3;
const REGEX_RGB_HEXSTRING = new RegExp(`^#[0-9a-f]{${NUM_CHANNELS * CHANNEL_STRLEN}}$`);
const MAX_RGB_VALUE = 255;

export const lighten = (color, percent) => {
    if (!REGEX_RGB_HEXSTRING.test(color)) {
        throw Error("Invalid hexstring for color");
    }

    const coord = [];
    for (let i = 1; i < NUM_CHANNELS * CHANNEL_STRLEN; i += CHANNEL_STRLEN) {
        coord.push(color.substr(i, CHANNEL_STRLEN));
    }

    return `#${coord.map(hexstr => parseInt(hexstr, 16))
                    .map(chan => Math.floor(chan + percent * (MAX_RGB_VALUE - chan)))
                    .map(chan => Math.max(Math.min(chan, MAX_RGB_VALUE), 0))
                    .map(chan => ("0" + chan.toString(16)).slice(-2))
                    .join("")}`;
}

export const darken = (color, percent) => lighten(color, -percent);

export const transitionAll = (picker) => ({ theme }) => css`
    transition: all ${picker ? picker(theme) : theme.animation.timing.default}s ease;
`;
