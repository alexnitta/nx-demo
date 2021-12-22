import { shouldPolyfill } from '@formatjs/intl-locale/should-polyfill';

/**
 * If the browser does not already support it, add the polyfill for Intl.Locale
 * See docs: {@link https://formatjs.io/docs/polyfills/intl-locale}
 * @returns a Promise that resolves to undefined
 */
export async function locale(): Promise<undefined> {
    if (shouldPolyfill()) {
        await import('@formatjs/intl-locale/polyfill');
    }

    return undefined;
}
