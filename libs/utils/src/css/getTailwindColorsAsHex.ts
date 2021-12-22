import { baseTailwindConfig } from '@storybox/styles';
import { hslToHex } from './hslToHex';

/**
 * Based on a color string like 'tertiary-400', looks up the color code from `baseTailwindConfig.js`
 * and returns it.
 *
 * This is useful in contexts where you need direct access to a CSS color that is defined in the
 * Tailwind base config file, but you can't use a regular color style class like
 * `text-tertiary-400`. A good example use case is working with SVGs where you need to assign the
 * `fill` property directly to a color code.
 */
export const getTailwindColorsAsHex = (): Record<
    string,
    string | Record<number, string>
> => {
    const colorsRaw = baseTailwindConfig.theme.colors;

    const result: Record<string, string | Record<number, string>> = {};

    Object.entries(colorsRaw).forEach(([key, value]): void => {
        if (typeof value === 'string') {
            const hexValue = hslToHex(value);

            if (hexValue !== null) {
                result[key] = hexValue;
            } else {
                result[key] = value;
            }
        } else if (typeof value === 'object' && value !== null) {
            Object.entries(value).forEach(([innerKey, innerValue]): void => {
                if (result[key] === undefined) {
                    result[key] = {} as Record<number, string>;
                }

                const innerHexValue = hslToHex(innerValue);

                if (innerHexValue !== null) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    result[key][innerKey] = innerHexValue;
                } else {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    result[key][innerKey] = innerValue;
                }
            });
        }
    });

    return result;
};
