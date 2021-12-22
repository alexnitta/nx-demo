import _get from 'lodash/get';

import { baseTailwindConfig } from '@storybox/styles';

/**
 * Based on a color string like 'tertiary-400', looks up the color code from `baseTailwindConfig.js`
 * and returns it.
 *
 * This is useful in contexts where you need direct access to a CSS color that is defined in the
 * Tailwind base config file, but you can't use a regular color style class like
 * `text-tertiary-400`. A good example use case is working with SVGs where you need to assign the
 * `fill` property directly to a color code.
 */
export const getTailwindColor = (color: string): string => {
    const keys = color.split('-');

    return _get(baseTailwindConfig, ['theme', 'colors', ...keys], '#000000');
};
