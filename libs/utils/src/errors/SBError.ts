import { errorDetails } from './errorDetails';

/**
 * A custom error class that uses a specific `errorName` as defined in
 * globalTypes/utils/errors.d.ts. This allows us to read `error.errorName` as a way to translate an
 * error into a locale-specific message during internationalization.
 */
class SBError extends Error {
    name: string;

    errorName: string;

    apiError?: Error;

    // eslint-disable-next-line @typescript-eslint/ban-types
    __proto__: Error | undefined;

    constructor(errorName: string, apiError?: Error) {
        const codeMessage = errorDetails?.[errorName] ?? null;
        const message = codeMessage
            ? `${codeMessage} [Error: ${errorName}]`
            : 'Unknown error name';

        super(message);
        this.name = 'SBError';
        this.errorName = errorName;
        this.apiError = apiError;
        // restore prototype chain
        const actualProto = new.target.prototype;

        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(this, actualProto);
        } else {
            // eslint-disable-next-line no-proto
            this.__proto__ = actualProto;
        }
    }
}

export { SBError };
