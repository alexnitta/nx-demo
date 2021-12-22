import { shouldPolyfill } from '@formatjs/intl-datetimeformat/should-polyfill';

/**
 * If the browser does not already support it, add the polyfill for Intl.DateTimeFormat
 * See docs: {@link https://formatjs.io/docs/polyfills/intl-datetimeformat}
 * @param currentLocale - the current locale
 * @returns a Promise that resolves to undefined
 */
export async function dateTimeFormat(
    currentLocale: SupportedLocale,
): Promise<undefined> {
    if (!shouldPolyfill()) {
        return undefined;
    }

    // Load the polyfill before loading data
    await import('@formatjs/intl-datetimeformat/polyfill');

    // Parallelize CLDR data loading
    const dataPolyfills = [import('@formatjs/intl-datetimeformat/add-all-tz')];

    switch (currentLocale) {
        case 'en-US':
            // 'en-US' is not included in locale-data, so we have to use 'en' everywhere we use
            // Intl.DateTimeFormat().
            dataPolyfills.push(
                import('@formatjs/intl-datetimeformat/locale-data/en'),
            );
            break;
        case 'es':
            dataPolyfills.push(
                import('@formatjs/intl-datetimeformat/locale-data/es'),
            );
            break;
        case 'ja':
            dataPolyfills.push(
                import('@formatjs/intl-datetimeformat/locale-data/ja'),
            );
            break;
        default:
            dataPolyfills.push(
                import('@formatjs/intl-datetimeformat/locale-data/en'),
            );
            break;
    }

    await Promise.all(dataPolyfills);

    return undefined;
}
