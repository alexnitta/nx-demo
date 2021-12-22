export const dateRegExps: Record<SupportedLocale, RegExp> = {
    'en-US': /^(\d{2})\/(\d{2})\/(\d{4})$/,
    ja: /^(\d{4})\/(\d{2})\/(\d{2})$/,
    es: /^(\d{2})\/(\d{2})\/(\d{4})$/,
};

export const localeFormats: LocaleFormats = {
    'en-US': {
        date: {
            placeholder: 'MM/DD/YYYY',
            format: '##/##/####',
            mask: ['M', 'M', 'D', 'D', 'Y', 'Y', 'Y', 'Y'],
            regExp: dateRegExps['en-US'],
            toDate: value => {
                try {
                    const dateParts = value.match(dateRegExps['en-US']);

                    if (dateParts) {
                        const month = dateParts[1];
                        const day = dateParts[2];
                        const year = dateParts[3];

                        return new Date(`${year}-${month}-${day}`);
                    }
                } catch {
                    return null;
                }

                return null;
            },
        },
    },
    ja: {
        date: {
            placeholder: 'YYYY/MM/DD',
            format: '####/##/##',
            mask: ['Y', 'Y', 'Y', 'Y', 'M', 'M', 'D', 'D'],
            regExp: dateRegExps.ja,
            toDate: value => {
                try {
                    const dateParts = value.match(dateRegExps.ja);

                    if (dateParts) {
                        const year = dateParts[1];
                        const month = dateParts[2];
                        const day = dateParts[3];

                        return new Date(`${year}-${month}-${day}`);
                    }
                } catch {
                    return null;
                }

                return null;
            },
        },
    },
    es: {
        date: {
            placeholder: 'DD/MM/YYYY',
            format: '##/##/####',
            mask: ['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y'],
            regExp: dateRegExps.es,
            toDate: value => {
                try {
                    const dateParts = value.match(dateRegExps.es);

                    if (dateParts) {
                        const day = dateParts[1];
                        const month = dateParts[2];
                        const year = dateParts[3];

                        return new Date(`${year}-${month}-${day}`);
                    }
                } catch {
                    return null;
                }

                return null;
            },
        },
    },
};

export const phoneNumberFormats: PhoneNumberFormats = {
    US: '(###) ###-####',
    MX: '(###) ###-####',
    JA: '(###) ###-####',
};
