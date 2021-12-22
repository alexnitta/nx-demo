import { shouldPolyfill } from '@formatjs/intl-getcanonicallocales/should-polyfill';

/**
 * If the browser does not already support it, add the polyfill for Intl.getCanonicalLocales
 * See docs: {@link https://formatjs.io/docs/polyfills/intl-getcanonicallocales}
 * @returns a Promise that resolves to undefined
 */
export async function getCanonicalLocales(): Promise<undefined> {
    if (shouldPolyfill()) {
        await import('@formatjs/intl-getcanonicallocales/polyfill');
    }

    return undefined;
}
