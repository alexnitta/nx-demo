import { replacer, reviver } from '.';

export function setInLocalStorage<Data>(
    key: string,
    updater: (prevValue: Data | null) => Data | null,
): { error?: Error; success?: boolean } {
    const prevValue = localStorage.getItem(key);
    let parsedPrevValue = null;

    if (prevValue !== null) {
        try {
            // JSON.parse() will throw if there is a circular reference
            parsedPrevValue = JSON.parse(prevValue, reviver);
        } catch (err) {
            return { error: err as Error };
        }
    }

    const updatedValue = updater(parsedPrevValue);

    try {
        // localStorage.setItem() may throw if storage is full
        localStorage.setItem(key, JSON.stringify(updatedValue, replacer));
    } catch (err) {
        return { error: err as Error };
    }

    return { success: true };
}
