/**
 * When passed to the yup `.transform()` method, this function will coerce a form value to `null`
 * if it is not a Date instance.
 * @param value - the current field value
 * @returns the value if it is a Date instance, or null if it is not
 */
export const allowNullDate = (
    current: unknown,
    original: unknown,
): Maybe<Date> => {
    if (original === '') {
        return null;
    }

    return current instanceof Date && !Number.isNaN(current) ? current : null;
};
