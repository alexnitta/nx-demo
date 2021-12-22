import { ParsedUrlQuery } from 'querystring';

export const getNextQueryParam = (
    query: ParsedUrlQuery,
    paramName: string,
): string | null => {
    let param = query?.[paramName];

    // Checking for arrays gives us type safety
    if (Array.isArray(param)) {
        param = param.join('');
    }

    return param ?? null;
};
