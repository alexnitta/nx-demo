import { ValidationError } from 'yup';

interface GetYupValidationErrorsResult {
    /**
     * An object with a single key / value pair for each field that has an error. The key is the
     * field name; the value is the error message, which is either the default set by Yup or the
     * one passed into the validator. If there is more than one validator for a field, only the
     * first validator that has an error will set a value in this object.
     */
    validationErrors: Record<string, string>;
    /**
     * An object with a list of errors for each field that has an error. The key is the
     * field name; the value is the array of error messages, each of which is either the default set
     * by Yup or the one passed into the validator. This is useful when you want to get all the
     * errors for a single field and render them individually, such as for a password when using
     * the MultiValidator component.
     */
    validationErrorLists: Record<string, string[]>;
}

export const getYupValidationErrors = (
    error: Error | ValidationError,
): GetYupValidationErrorsResult | null => {
    if (!(error instanceof ValidationError)) {
        return null;
    }

    const validationErrors: Record<string, string> = {};
    const validationErrorLists: Record<string, string[]> = {};

    error.inner.forEach((innerError: ValidationError): void => {
        const path = innerError?.path ?? null;

        if (path !== null) {
            if (validationErrorLists[path] === undefined) {
                validationErrorLists[path] = [innerError.message];
            } else {
                validationErrorLists[path].push(innerError.message);
            }

            validationErrors[path] = innerError.message;
        }
    });

    return {
        validationErrors,
        validationErrorLists,
    };
};
