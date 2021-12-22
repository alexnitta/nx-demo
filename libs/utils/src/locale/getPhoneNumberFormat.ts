import { phoneNumberFormats } from '../formats';

/**
 * @param country - an ISO 3166-1 alpha-2 country code, like 'US'
 * @returns a number format that can be used with {@link MaskedInput}
 */
export const getPhoneNumberFormat = (country: string): string | undefined => {
    switch (country) {
        case 'US':
            return phoneNumberFormats.US;
        case 'MX':
            return phoneNumberFormats.MX;
        case 'JA':
            return phoneNumberFormats.JA;
        default:
            return undefined;
    }
};
