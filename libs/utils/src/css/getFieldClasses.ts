import cx from 'classnames';

const baseFieldClasses = 'border rounded border-gray-300';

interface GetFieldClassesInput {
    /**
     * Whether to add padding
     * @defaultValue true
     */
    addPadding?: boolean;
    /**
     * Whether the input is disabled
     */
    disabled?: boolean;
    /**
     * A form validation error message, if any exists
     */
    error?: string;
}

/**
 * Get the standard styling for a form field, based upon whether it has any errors and/or is
 * disabled.
 * @param input - {@link GetFieldClassesInput}
 * @returns a string to pass as a `className` prop
 */
export const getFieldClasses = ({
    addPadding = true,
    disabled,
    error,
}: GetFieldClassesInput): string =>
    cx(baseFieldClasses, {
        'p-2': addPadding,
        'focus:ring-2 focus:ring-secondary-300': !error,
        'ring-2 ring-danger-300': error,
        'text-gray-400': disabled,
        'bg-gray-100': disabled,
    });
