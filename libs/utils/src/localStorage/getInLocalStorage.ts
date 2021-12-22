import { reviver } from '.';

export function getInLocalStorage<Data>(key: string): Data | null {
    const rawItem = localStorage.getItem(key);

    if (rawItem === null) {
        return rawItem;
    }

    try {
        // JSON.parse() will throw if there is a circular reference
        const parsedItem = JSON.parse(rawItem, reviver);

        return parsedItem;
    } catch (err) {
        return null;
    }
}
