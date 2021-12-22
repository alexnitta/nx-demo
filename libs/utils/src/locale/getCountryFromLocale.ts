/**
 * @param locale - a locale, like 'en-US'
 * @returns an ISO 3166-1 alpha-2 country code, like 'US'
 */
export const getCountryFromLocale = (locale?: string): string => {
    switch (locale) {
        case 'en-US':
            return 'US';
        case 'ja':
            return 'JP';
        case 'es':
            return 'MX';
        default:
            return 'US';
    }
};
