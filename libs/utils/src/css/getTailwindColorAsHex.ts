import { getTailwindColor, hslToHex } from '.';

/**
 * Based on a color string like 'tertiary-400', looks up the color code from `baseTailwindConfig.js`
 * and returns it as a hex code.
 *
 * This is useful in contexts where you need direct access to a CSS color that is defined in the
 * Tailwind base config file, but you can't use a regular color style class like
 * `text-tertiary-400`, and you also need the color to be in hexadecimal format.
 */
export const getTailwindColorAsHex = (color: string): string | null => {
    const hsl = getTailwindColor(color);

    return hslToHex(hsl);
};
