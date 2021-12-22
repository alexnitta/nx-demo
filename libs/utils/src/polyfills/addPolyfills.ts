import allSettled from '@ungap/promise-all-settled';

import {
    dateTimeFormat,
    getCanonicalLocales,
    locale,
    numberFormat,
    pluralRules,
} from '.';

/**
 * Add polyfills when browser APIs are not available in the current browser.
 *
 * @remarks
 * The usual way to do this is by adding more features to the `<script>` tag that loads data from
 * polyfill.io; however, I ran into issues there where some of the locale-dependent polyfills
 * supported the 'en-US' locale and some did not. This was rather bothersome to debug. To ease the
 * pain if we ever add support for more locales, I put the locale-specific functions in here. This
 * should make it very clear which locales are supported and which ones are not. The polyfills that
 * are not locale-dependent are loaded in the usual way from polyfill.io; see the `<script>` tag in
 * packages/web/public/index.html for details.
 *
 * Note: any polyfills added here should also be added to the root .eslintrc.js under
 * `settings.polyfills` to silence eslint warnings about using polyfilled APIs.
 *
 * @param currentLocale - the current locale
 * @returns a Promise that resolves to undefined
 */
export const addPolyfills = async (
    locales: SupportedLocale[], // When adding more locales, you must add support for each one in the
    // imported functions that accept a `currentLocale` argument.
): Promise<undefined> => {
    if (!Promise.allSettled) {
        Promise.allSettled = allSettled;
    }

    await getCanonicalLocales();
    await locale();

    locales.forEach(async (currentLocale: SupportedLocale) => {
        await pluralRules(currentLocale);
        await numberFormat(currentLocale);
        await dateTimeFormat(currentLocale);
    });

    return undefined;
};
