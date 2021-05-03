import { css } from "styled-components";

/**
 * Returns `css` containing the size in terms of the number of global styling `units`. 
 * @param {number} units 
 * @returns {css} `css` - The quantity in pixels
 */
export const unit = (units) => css`${({ theme }) => units * theme.spacing.unit}px`;

/**
 * Returns `css` containing responsive breakpoints, which apply the styles specified
 * in `xs`, `sm`, `md`, `lg`, and `xl`
 * @param {object} param0 - The breakpoint styles
 * @returns {css} `css` - The responsive breakpoints styling
 */
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

// Constants for RGB hexstrings
const CHANNEL_STRLEN = 2;
const NUM_CHANNELS = 3;
const REGEX_RGB_HEXSTRING = new RegExp(`^#[0-9a-f]{${NUM_CHANNELS * CHANNEL_STRLEN}}$`);
const MAX_RGB_VALUE = 255;

/**
 * Lightens the given `color` by the given `percent`
 * @param {string} color - The hexstring of the color to lighten
 * @param {number} percent - The amount by which to lighten
 * @returns {string} - A hexstring encoding the `color` lightened by `percent`
 */
export const lighten = (color, percent) => {
    if (!REGEX_RGB_HEXSTRING.test(color)) {
        throw Error("Invalid hexstring for color");
    }

    const coord = [];
    for (let i = 1; i < NUM_CHANNELS * CHANNEL_STRLEN; i += CHANNEL_STRLEN) {
        coord.push(color.substr(i, CHANNEL_STRLEN));
    }

    return `#${coord.map(hexstr => parseInt(hexstr, 16))                                // parse 
                    .map(chan => Math.floor(chan + percent * (MAX_RGB_VALUE - chan)))   // perform the translation of (r,g,b) to (255, 255, 255) in 3D space
                    .map(chan => Math.max(Math.min(chan, MAX_RGB_VALUE), 0))            // ensure channel hexval is in [0, 255]
                    .map(chan => ("0" + chan.toString(16)).slice(-2))                   // padding single hexdigit vals with 0s
                    .join("")}`;
}

/**
 * Equivalent to `lighten(color, -percent)`. See `lighten` documentation.
 */
export const darken = (color, percent) => lighten(color, -percent);

/**
 * Returns a `css` representing an animation transition styling.
 * @param {function | undefined} picker - Used to select a new animation timing
 * @returns `css` - A transition styling
 */
export const transitionAll = (picker) => ({ theme }) => css`
    transition: all ${picker ? picker(theme) : theme.animation.timing.default}s ease;
`;
