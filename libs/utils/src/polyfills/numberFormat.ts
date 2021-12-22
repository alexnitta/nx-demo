import { shouldPolyfill } from '@formatjs/intl-numberformat/should-polyfill';

/**
 * If the browser does not already support it, add the polyfill for Intl.NumberFormat
 * See docs: {@link https://formatjs.io/docs/polyfills/intl-numberformat}
 * @param currentLocale - the current locale
 * @returns a Promise that resolves to undefined
 */
export async function numberFormat(
    currentLocale: SupportedLocale,
): Promise<undefined> {
    if (!shouldPolyfill()) {
        return undefined;
    }

    // Load the polyfill before loading data
    await import('@formatjs/intl-numberformat/polyfill');

    switch (currentLocale) {
        case 'en-US':
            // 'en-US' is not included in locale-data, so we have to use 'en' everywhere we use
            // Intl.NumberFormat().
            await import('@formatjs/intl-numberformat/locale-data/en');
            break;
        case 'es':
            await import('@formatjs/intl-numberformat/locale-data/es');
            break;
        case 'ja':
            await import('@formatjs/intl-numberformat/locale-data/ja');
            break;
        default:
            await import('@formatjs/intl-numberformat/locale-data/en');
            break;
    }

    return undefined;
}
