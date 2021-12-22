interface GetErrorMessageInput {
    /**
     * An error instance; this is expected to be an SBError that has a JSON.stringified object as
     * its .message property
     */
    error: Error;
    /**
     * An {@link SBErrorMap} that maps error names to user-facing messages
     */
    errorMap: SBErrorMap;
    /**
     * An error message to return if the error name cannot be found in the errorMap, or the `error`
     * does not have a `name` property on its parsed message.
     */
    fallback: string;
}

/**
 * @param input - {@link GetErrorMessageInput}
 * @returns error message to display to the user
 */
export const getErrorMessage = ({
    error,
    errorMap,
    fallback,
}: GetErrorMessageInput): string => {
    try {
        const errorMessageObject = JSON.parse(error.message);

        if (typeof errorMessageObject.errorName === 'string') {
            const errorName = errorMessageObject.errorName as SBErrorName;

            return errorMap?.[errorName] ?? fallback;
        }

        return fallback;
    } catch {
        return fallback;
    }
};
