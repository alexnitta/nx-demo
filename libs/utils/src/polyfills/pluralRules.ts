import { shouldPolyfill } from '@formatjs/intl-pluralrules/should-polyfill';

/**
 * If the browser does not already support it, add the polyfill for Intl.PluralRules
 * See docs: {@link https://formatjs.io/docs/polyfills/intl-pluralrules}
 * @param currentLocale - the current locale
 * @returns a Promise that resolves to undefined
 */
export async function pluralRules(
    currentLocale: SupportedLocale,
): Promise<undefined> {
    if (!shouldPolyfill()) {
        return undefined;
    }

    // Load the polyfill before loading data
    await import('@formatjs/intl-pluralrules/polyfill');

    switch (currentLocale) {
        case 'en-US':
            // 'en-US' is not included in locale-data, so we have to use 'en' everywhere we use
            // Intl.PluralRules().
            await import('@formatjs/intl-pluralrules/locale-data/en');
            break;
        case 'es':
            await import('@formatjs/intl-pluralrules/locale-data/es');
            break;
        case 'ja':
            await import('@formatjs/intl-pluralrules/locale-data/ja');
            break;
        default:
            await import('@formatjs/intl-pluralrules/locale-data/en');
            break;
    }

    return undefined;
}
