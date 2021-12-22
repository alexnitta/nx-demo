const hslRegExp = /^hsl\((\d|.+), (\d|.+)%, (\d|.+)%\)$/;

/**
 * @param hsl - an HSL color string like 'hsl(25, 25%, 99%)'
 * @returns the hex color equivalent
 */
export const hslToHex = (hsl: string): string | null => {
    const match = hsl.match(hslRegExp);

    if (match === null) {
        return null;
    }

    let h = parseInt(match[1], 10);
    let s = parseInt(match[2], 10);
    let l = parseInt(match[3], 10);

    if (h >= 360) h %= 360;

    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;

    if (h >= 0 && h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (h >= 60 && h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (h >= 120 && h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (h >= 180 && h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (h >= 240 && h < 300) {
        r = x;
        g = 0;
        b = c;
    } else if (h >= 300 && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    // Having obtained RGB, convert channels to hex
    let rString = Math.round((r + m) * 255).toString(16);
    let gString = Math.round((g + m) * 255).toString(16);
    let bString = Math.round((b + m) * 255).toString(16);

    // Prepend 0s, if necessary
    if (rString.length === 1) rString = `0${rString}`;
    if (gString.length === 1) gString = `0${gString}`;
    if (bString.length === 1) bString = `0${bString}`;

    return `#${rString}${gString}${bString}`;
};
